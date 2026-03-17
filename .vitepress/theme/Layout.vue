<script setup lang="ts">
import { ref, watch } from 'vue';
import { useData, useRoute, Content } from 'vitepress';
import Logo from './components/Logo.vue';
import FrsourceLogo from './components/FrsourceLogo.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import FloatingAd from './components/FloatingAd.vue';
import Button from './components/Button.vue';
import RSSIcon from './components/RSSIcon.vue';
import AdPlaceholder from './components/AdPlaceholder.vue';

const { frontmatter } = useData();
const route = useRoute();
const menuOpen = ref(false);

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);

const navItems = [
  { href: '/', label: 'Daily Feed' },
  { href: '/feed.rss', label: 'RSS', icon: RSSIcon, submenu: true },
  { href: '/feed.atom', label: 'Atom', icon: RSSIcon, submenu: true },
  { href: '/feed.json', label: 'JSON Feed', icon: RSSIcon, submenu: true },
  {
    href: 'mailto:dailyweb@frsource.org?subject=Link proposal&body=Link: https://... , Description/Summary: ... , Are you the author? [yes/no], Comments: ...',
    label: 'Submit Link',
  },
];
</script>

<template>
  <div
    class="p-2 w-full flex flex-col min-h-dvh bg-dw-bg grid gap-4 grid-rows-[auto_1fr_auto] sm:grid-cols-[min-content_min-content_auto] xl:grid-cols-[auto_1fr_auto] [grid-template-areas:'logo_menu''aside_aside''content_content''footer_footer'] sm:[grid-template-areas:'logo_curated_menu''aside_aside_aside''content_content_content''footer_footer_footer'] lg:[grid-template-areas:'logo_logo_content''aside_aside_content''footer_footer_curated']"
  >
    <header
      class="[grid-area:logo] sticky top-2 z-50 bg-dw-bg h-[48px] lg:h-[60px] max-w-min px-4 lg:px-6 flex items-center gap-3 lg:gap-8 rounded-xl raised-5 whitespace-nowrap"
    >
      <Logo />

      <!-- Desktop nav — hidden on mobile -->
      <nav
        class="hidden lg:flex items-center gap-6 flex-1"
        aria-label="Site navigation"
      >
        <a
          v-for="{ href, label, icon } in navItems.filter(
            (item) => !item.submenu,
          )"
          :key="href"
          :href="href"
          class="text-sm font-medium text-dw-muted hover:text-dw-primary transition-colors no-underline inline-flex items-center gap-1.5"
        >
          <component v-if="icon" :is="icon" class="w-3 h-3" />
          {{ label }}
        </a>
      </nav>
    </header>
    <div
      class="flex [grid-area:curated] fixed sm:sticky bottom-2 right-2 sm:top-2 m-auto sm:mr-0 h-[48px] lg:bottom-2 z-50"
    >
      <!-- Curated by FRSOURCE — always visible -->
      <Button
        href="https://frsource.org"
        target="_blank"
        rel="noopener noreferrer"
        class="h-full raised-5 items-center rounded-xl bg-dw-bg inline-flex items-center gap-2"
        title="FRSOURCE"
      >
        <div class="text-right leading-tight">
          <span class="block text-[.65rem] lg:text-[.7rem] text-dw-muted"
            >Curated by</span
          >
          <span class="text-[.8rem] font-bold text-dw-text tracking-wider"
            >FRSOURCE</span
          >
        </div>

        <FrsourceLogo prefix="hdr" class="w-[44px] lg:w-[52px] h-auto block" />
      </Button>
    </div>
    <!-- Hamburger button — mobile only -->
    <div class="[grid-area:menu] sticky top-2 z-[1000] lg:hidden ml-auto">
      <Button
        class="bg-dw-bg h-[48px] lg:h-[60px] flex-col items-center justify-center gap-[5.5px] rounded-xl shrink-0 transition-all duration-200 cursor-pointer border-none"
        @click="menuOpen = !menuOpen"
        size="lg"
        :active="menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
      >
        <span
          class="block w-[18px] h-[2px] bg-dw-text rounded-full transition-all duration-300 origin-center"
          :class="menuOpen ? 'translate-y-[7.5px] rotate-45' : ''"
        />
        <span
          class="block w-[18px] h-[2px] bg-dw-text rounded-full transition-all duration-300 origin-center"
          :class="menuOpen ? 'opacity-0 scale-x-0' : ''"
        />
        <span
          class="block w-[18px] h-[2px] bg-dw-text rounded-full transition-all duration-300 origin-center"
          :class="menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''"
        />
      </Button>
      <!-- ── Mobile menu panel ── -->
      <Transition name="mobile-menu">
        <header
          v-if="menuOpen"
          class="absolute mt-2 w-[calc(100dvw-var(--spacing)*4)] right-0 bg-dw-bg raised-5 mx-auto rounded-2xl overflow-hidden whitespace-nowrap"
        >
          <nav class="-raised-1" aria-label="Mobile navigation">
            <ul class="flex flex-col md:flex-row md:flex-wrap gap-3 p-6">
              <li
                v-for="{ href, label, icon } in navItems"
                class="basis-[calc(50%-var(--spacing)*3)] min-w-0 grow-1"
              >
                <Button
                  @click="menuOpen = false"
                  :key="href"
                  :href="href"
                  size="lg"
                  class="w-full"
                >
                  <component v-if="icon" :is="icon" class="w-4 h-4" />
                  {{ label }}
                </Button>
              </li>
            </ul>
          </nav>
        </header>
      </Transition>
    </div>
    <div class="[grid-area:aside] text-center">
      <header
        class="pt-10 pb-2 sm:pb-6"
        :class="{ 'hidden lg:block': frontmatter.layout }"
      >
        <h1
          class="text-[2.4rem] font-extrabold tracking-tight text-dw-text leading-tight mb-2.5"
        >
          digestweb<span class="text-dw-primary-light font-normal">.dev</span>
        </h1>
        <h2 class="text-dw-muted mb-2">
          Your essential dose of webdev and AI news, handpicked.
        </h2>
      </header>
      <aside
        class="raised-5 rounded-2xl bg-dw-bg overflow-hidden hidden lg:block m-auto max-w-68"
      >
        <div
          class="flex items-center justify-between -raised-1 px-3 py-1.5 pe-1.5"
        >
          <span
            class="text-[.62rem] font-bold uppercase tracking-[.08em] text-dw-subtle"
            >Advertisement</span
          >
        </div>
        <div class="p-3 pb-0 text-[.875rem] text-dw-text leading-relaxed">
          <AdPlaceholder />
        </div>
      </aside>
    </div>

    <!-- ── Main ── -->
    <main
      class="flex-1 max-w-[980px] w-full mx-auto px-2 lg:px-4 pt-6 pb-16 [grid-area:content]"
    >
      <ArticleDetail v-if="frontmatter.layout === 'article'" />
      <Content v-else />
    </main>

    <!-- ── Footer ── -->
    <footer
      class="py-2 px-4 pb-10 lg:pb-2 text-sm text-right text-dw-muted [grid-area:footer]"
    >
      &copy; {{ new Date().getFullYear() }} digestweb.dev &mdash; brought to you
      by&nbsp;
      <a
        href="https://frsource.org"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center align-middle no-underline color-dw-accent hover:text-dw-primary font-medium transition-colors"
      >
        FRSOURCE
      </a>
    </footer>

    <FloatingAd class="lg:hidden" />
  </div>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.97);
}
</style>
