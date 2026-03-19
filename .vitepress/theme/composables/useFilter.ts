import { ref, computed, watch, onMounted } from 'vue';

const activeTags = ref<string[]>([]);
const minSignificance = ref(1);
let _initialized = false;
const LS_KEY = 'dw:filter';

export function useFilter() {
  const hasFilters = computed(
    () => activeTags.value.length > 0 || minSignificance.value > 1,
  );
  const filterCount = computed(
    () => activeTags.value.length + (minSignificance.value > 1 ? 1 : 0),
  );

  function toggleTag(tag: string) {
    const idx = activeTags.value.indexOf(tag);
    activeTags.value =
      idx === -1
        ? [...activeTags.value, tag]
        : activeTags.value.filter((t) => t !== tag);
  }

  function setMinSignificance(val: number) {
    minSignificance.value = minSignificance.value === val ? 1 : val;
  }

  function clearAll() {
    activeTags.value = [];
    minSignificance.value = 1;
  }

  onMounted(() => {
    if (_initialized) return;
    _initialized = true;
    const url = new URL(window.location.href);
    const urlTags = url.searchParams.get('tags');
    const urlSig = url.searchParams.get('sig');
    if (urlTags !== null || urlSig !== null) {
      activeTags.value = urlTags ? urlTags.split(',').filter(Boolean) : [];
      const sig = urlSig ? parseInt(urlSig, 10) : 1;
      minSignificance.value = sig >= 1 && sig <= 4 ? sig : 1;
      return;
    }
    try {
      const parsed = JSON.parse(localStorage.getItem(LS_KEY) ?? 'null');
      if (parsed) {
        activeTags.value = parsed.tags ?? [];
        const sig = parsed.sig ?? 1;
        minSignificance.value = sig >= 1 && sig <= 4 ? sig : 1;
      }
    } catch {
      /* ignore */
    }
  });

  watch([activeTags, minSignificance], () => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (activeTags.value.length)
      url.searchParams.set('tags', activeTags.value.join(','));
    else url.searchParams.delete('tags');
    if (minSignificance.value > 1)
      url.searchParams.set('sig', String(minSignificance.value));
    else url.searchParams.delete('sig');
    window.history.replaceState({}, '', url.toString());
    if (hasFilters.value)
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({
          tags: activeTags.value,
          sig: minSignificance.value,
        }),
      );
    else localStorage.removeItem(LS_KEY);
  });

  return {
    activeTags,
    minSignificance,
    hasFilters,
    filterCount,
    toggleTag,
    setMinSignificance,
    clearAll,
  };
}
