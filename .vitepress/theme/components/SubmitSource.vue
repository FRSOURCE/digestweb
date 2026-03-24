<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { withBase } from 'vitepress';
import Button from './Button.vue';
import TagsInput from './TagsInput.vue';
import type { SourceCategory } from '../../../tools/sources.ts';
import BackButton from './BackButton.vue';
import Input from './Input.vue';
import Label from './Label.vue';
import ArrowIcon from './ArrowIcon.vue';

type State = 'idle' | 'loading' | 'success' | 'error';

const ERROR_MESSAGES: Record<string, string> = {
  name_required: 'Source name is required.',
  category_required: 'Category is required.',
  homeUrl_required: 'Home URL is required.',
  feed_required: 'Feed URL is required.',
  email_required: 'Email is required.',
  homeUrl_syntax_error: 'Home URL is not a valid URL.',
  feed_syntax_error: 'Feed URL is not a valid URL.',
  email_syntax_error: 'Email address is not valid.',
};

const SERVER_ERROR =
  'Server error, please try again later or contact the administration at digestweb@frsource.org.';

const categories: { value: SourceCategory; label: string }[] = [
  { value: 'framework', label: 'Framework / Library' },
  { value: 'build-tool', label: 'Build Tool' },
  { value: 'language-runtime', label: 'Language / Runtime' },
  { value: 'css-styling', label: 'CSS / Styling' },
  { value: 'testing', label: 'Testing' },
  { value: 'web-platform', label: 'Web Platform' },
  { value: 'person-blog', label: 'Person Blog' },
  { value: 'general', label: 'General' },
  { value: 'ai', label: 'AI' },
];

const name = ref('');
const category = ref<SourceCategory | ''>('');
const homeUrl = ref('');
const feed = ref('');
const authorName = ref('');
const tags = ref<string[]>([]);
const reason = ref('');
const email = ref('');
const honeypot = ref('');

if (import.meta.env.VITE_SUBMIT_TEST === '1') {
  name.value = 'Test Source';
  category.value = 'general';
  homeUrl.value = 'https://example.com';
  feed.value = 'https://example.com/feed.xml';
  authorName.value = 'Test Author';
  reason.value = 'This is a test source';
  email.value = 'test@example.com';
}

const state = ref<State>('idle');
const errorMessages = ref<string[]>([]);
const submitted = ref(false);

const isPersonBlog = computed(() => category.value === 'person-blog');

function isValidUrl(val: string) {
  try {
    const u = new URL(val);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidEmail(val: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

const errors = computed(() => ({
  name: !name.value.trim() ? 'Source name is required.' : '',
  category: !category.value ? 'Please select a category.' : '',
  homeUrl: !homeUrl.value.trim()
    ? 'Home URL is required.'
    : !isValidUrl(homeUrl.value.trim())
      ? 'Enter a valid URL (https://…).'
      : '',
  feed: !feed.value.trim()
    ? 'Feed URL is required.'
    : !isValidUrl(feed.value.trim())
      ? 'Enter a valid URL (https://…).'
      : '',
  email:
    email.value.trim() && !isValidEmail(email.value.trim())
      ? 'Enter a valid email address.'
      : '',
}));

const isValid = computed(() => Object.values(errors.value).every((e) => !e));

const turnstileSitekey = import.meta.env.VITE_TURNSTILE_SITEKEY as
  | string
  | undefined;

async function sendFormData(form: HTMLFormElement, attempt: number = 0) {
  try {
    const payload = {
      type: '',
      name: name.value.trim(),
      category: category.value as SourceCategory,
      homeUrl: homeUrl.value.trim(),
      feed: feed.value.trim() || null,
      authorName: authorName.value.trim() || undefined,
      tags: tags.value,
      reason: reason.value.trim() || undefined,
      email: email.value.trim() || undefined,
      token: (
        form.elements.namedItem(
          'cf-turnstile-response',
        ) as HTMLInputElement | null
      )?.value,
    };

    const urlParams = Object.entries(payload)
      .map(([key, value]) => {
        const encodedValue = value
          ? Array.isArray(value)
            ? value.join(',')
            : value
          : '';
        return `${encodeURIComponent(key)}=${encodeURIComponent(encodedValue)}`;
      })
      .join('&');
    const res = await fetch(
      `https://script.google.com/macros/s/AKfycbz1a2dDKZFsoP4ixrW-oCQaJsbAGJOohp3m5-hGknCZzBCNV9II1rNTTczMmSNp5zeyJw/exec?${urlParams}`,
      {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
    const resData = (await res.json()) as { result: string; error?: string[] };
    if (resData.result === 'success') {
      state.value = 'success';
    } else {
      throw resData;
    }
  } catch (e) {
    if (++attempt < 3) return sendFormData(form, attempt);
    else throw e;
  }
}

async function handleSubmit(e: SubmitEvent) {
  if (honeypot.value) return;
  if (state.value === 'loading') return;

  const form = e.target as HTMLFormElement;

  submitted.value = true;
  if (!isValid.value) return;

  state.value = 'loading';
  errorMessages.value = [];

  try {
    await sendFormData(form);
  } catch (err) {
    state.value = 'error';
    if (
      err &&
      typeof err === 'object' &&
      'error' in err &&
      Array.isArray((err as { error: unknown }).error)
    ) {
      const codes = (err as { error: string[] }).error;
      errorMessages.value = codes.map(
        (code) => ERROR_MESSAGES[code] ?? SERVER_ERROR,
      );
    } else {
      errorMessages.value = [SERVER_ERROR];
    }
  }
}
</script>

<template>
  <div>
    <BackButton size="md lg:sm"> Back to Daily Feed </BackButton>

    <h1
      class="mt-6 text-[1.9rem] font-extrabold tracking-tight text-dw-text leading-tight mb-2"
    >
      Submit a Source
    </h1>
    <p class="text-dw-muted mb-8 text-[.95rem]">
      Propose a new RSS source to be included in the digestweb.dev feed.
    </p>

    <!-- Success state -->
    <div
      v-if="state === 'success'"
      class="raised-5 rounded-2xl p-8 text-center"
    >
      <div
        class="w-14 h-14 rounded-full bg-dw-primary flex items-center justify-center mx-auto mb-4"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 class="text-[1.2rem] font-bold text-dw-text mb-2">
        Source submitted!
      </h2>
      <p class="text-dw-muted text-sm">
        Thanks for the suggestion. We'll review it shortly!
      </p>
      <Button :href="withBase('/')" size="md" class="mt-6">
        Back to Daily Feed
      </Button>
    </div>

    <!-- Form -->
    <form
      v-else
      class="raised-5 focus-within:raised-1 transition-all rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
      @submit.prevent="handleSubmit"
    >
      <!-- Honeypot -->
      <input
        v-model="honeypot"
        type="text"
        name="website"
        autocomplete="off"
        tabindex="-1"
        aria-hidden="true"
        class="hidden"
      />

      <Input
        id="ss-name"
        label="Source Name"
        placeholder="e.g. Vue.js Blog"
        required
        :error-label="errors.name"
        :submitted="submitted"
        v-model="name"
      />

      <!-- Category -->
      <div class="relative">
        <Label required for="ss-category">Category</Label>
        <select
          id="ss-category"
          v-model="category"
          required
          :aria-invalid="submitted && !!errors.category"
          :aria-describedby="errors.category ? 'ss-category-err' : undefined"
          class="w-full -raised-1 rounded-xl px-4 py-2.5 text-sm text-dw-muted/50 bg-dw-bg outline-none focus:-raised-3 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-dw-primary border-none appearance-none cursor-pointer"
          :class="{
            'outline outline-2 outline-red-400': submitted && errors.category,
            'text-dw-text': category,
          }"
        >
          <option value="" disabled class="text-dw-muted">
            Select a category…
          </option>
          <option v-for="cat in categories" :key="cat.value" :value="cat.value">
            {{ cat.label }}
          </option>
        </select>
        <ArrowIcon
          class="-rotate-90 size-4 absolute right-4 top-10 pointer-events-none"
        />

        <p
          v-if="submitted && errors.category"
          id="ss-category-err"
          class="mt-1.5 text-xs text-red-500"
          role="alert"
        >
          {{ errors.category }}
        </p>
      </div>

      <Input
        id="ss-home-url"
        label="Home URL"
        placeholder="https://example.com/blog"
        required
        :error-label="errors.homeUrl"
        :submitted="submitted"
        v-model="homeUrl"
        type="url"
      />
      <Input
        id="ss-feed-url"
        label="Feed URL"
        hint="Address of the feed (RSS, Atom, JSON Feed, etc.). This is the best way for us to get the latest articles and will speed up the review process."
        placeholder="https://example.com/feed.xml"
        :error-label="errors.feed"
        :submitted="submitted"
        v-model="feed"
        type="url"
      />
      <Transition name="field-reveal">
        <Input
          v-if="isPersonBlog"
          id="ss-author-name"
          label="Author Name"
          placeholder="e.g. Jane Doe"
          :submitted="submitted"
          v-model="authorName"
        />
      </Transition>

      <!-- Tags -->
      <div>
        <Label for="ss-tags">Tags</Label>
        <TagsInput v-model="tags" id="ss-tags" />
      </div>

      <Input
        id="ss-reason"
        label="Why should this source be added?"
        placeholder="e.g. Covers niche topics not found elsewhere, consistently high-quality articles…"
        :submitted="submitted"
        v-model="reason"
        type="textarea"
        inputClass="min-h-20"
      />

      <Input
        id="ss-email"
        label="Your email"
        placeholder="you@example.com"
        :submitted="submitted"
        v-model="email"
        type="email"
      />

      <div>
        <Label tag="div" required>Bot protection</Label>
        <div class="cf-turnstile" :data-sitekey="turnstileSitekey"></div>
      </div>

      <div
        v-if="state === 'error'"
        class="bg-red-500/70 text-white raised-0 rounded-xl px-4 py-3"
        role="alert"
      >
        <h3
          class="block text-[.8rem] font-bold uppercase tracking-[.06em] mb-1.5"
        >
          Form was submitted with errors, please correct them and try again.
        </h3>
        <ul
          v-if="errorMessages.length > 1"
          class="list-inside space-y-1 text-xs"
        >
          <li v-for="msg in errorMessages" :key="msg">{{ msg }}</li>
        </ul>
        <p v-else>{{ errorMessages[0] ?? SERVER_ERROR }}</p>
      </div>

      <Button
        type="submit"
        size="lg md:md"
        :disabled="state === 'loading'"
        class="w-full justify-center mt-8 mr-auto px-10 md:w-auto"
      >
        <svg
          v-if="state === 'loading'"
          class="animate-spin w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          aria-hidden="true"
        >
          <path
            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          />
        </svg>
        {{ state === 'loading' ? 'Submitting…' : 'Submit Source' }}
      </Button>
    </form>
  </div>
</template>

<style scoped>
.field-reveal-enter-active,
.field-reveal-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    max-height 0.25s ease;
  max-height: 80px;
  overflow: hidden;
}
.field-reveal-enter-from,
.field-reveal-leave-to {
  opacity: 0;
  transform: translateY(-6px);
  max-height: 0;
}
</style>
