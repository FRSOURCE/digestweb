<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from './Button.vue';

let copyTimer: ReturnType<typeof setTimeout>;
const copyText = async (
  text: string,
  {
    onSuccess,
    onSuccessCooldown,
  }: { onSuccess: () => void; onSuccessCooldown: () => void },
) => {
  if (typeof navigator === 'undefined') return;
  await navigator.clipboard.writeText(text);
  clearTimeout(copyTimer);
  onSuccess();
  copyTimer = setTimeout(() => {
    onSuccessCooldown();
  }, 3000);
};

const props = defineProps<{
  url: string;
  title: string;
}>();

const tweetUrl = computed(
  () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.title)}&url=${encodeURIComponent(props.url)}`,
);
const linkedinUrl = computed(
  () =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`,
);

const copied = ref(false);

async function copyLink() {
  if (typeof window === 'undefined') return;
  await copyText(props.url, {
    onSuccess: () => (copied.value = true),
    onSuccessCooldown: () => (copied.value = false),
  });
}

const showToast = ref(false);

async function share() {
  if (typeof window === 'undefined') return;

  if (navigator.share) {
    try {
      await navigator.share({ title: props.title, url: props.url });
    } catch {
      /* cancelled */
    }
    return;
  }

  await copyText(props.url, {
    onSuccess: () => (showToast.value = true),
    onSuccessCooldown: () => (showToast.value = false),
  });
}
</script>

<template>
  <div class="flex gap-4 items-center">
    <span
      class="hidden pointer-fine:inline-flex text-[.85rem] text-dw-muted font-medium mr-1"
      >Share this article:</span
    >

    <Button
      :href="tweetUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="hidden! pointer-fine:inline-flex! p-3! lg:p-2!"
      size="md"
      title="Share on X"
    >
      <svg
        class="size-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
      </svg>
    </Button>

    <Button
      :href="linkedinUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="hidden! pointer-fine:inline-flex! p-3! lg:p-2!"
      size="md"
      title="Share on LinkedIn"
    >
      <svg
        class="size-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </Button>

    <Button
      @click="copyLink"
      class="hidden! pointer-fine:pointer-fine:inline-flex! p-3! lg:p-2!"
      :title="copied ? 'Copied!' : 'Copy link'"
      size="md"
      :disabled="copied"
    >
      <svg
        v-if="!copied"
        class="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg
        v-else
        class="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </Button>
    <Button
      @click="share"
      :aria-label="`Share: ${title ?? 'this article'}`"
      size="sm md:md"
      class="pointer-fine:hidden"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        />
      </svg>
      Share
    </Button>
    <Teleport to="body">
      <Transition name="toast">
        <div
          v-if="showToast"
          class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-dw-bg raised-5 text-dw-primary text-[.85rem] font-medium px-5 py-2 rounded-full pointer-events-none z-[600]"
          role="status"
        >
          Link copied!
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style>
.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.22s ease,
    translate 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
  translate: -50% 0;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  translate: -50% 6px;
}
</style>
