import { ref, computed, watch, onMounted } from 'vue';

const activeTags = ref<string[]>([]);
const activeDate = ref<string | null>(null);
let _initialized = false;
const LS_KEY = 'dw:filter';

export function useFilter() {
  const hasFilters = computed(
    () => activeTags.value.length > 0 || activeDate.value !== null,
  );
  const filterCount = computed(
    () => activeTags.value.length + (activeDate.value ? 1 : 0),
  );

  function toggleTag(tag: string) {
    const idx = activeTags.value.indexOf(tag);
    activeTags.value =
      idx === -1
        ? [...activeTags.value, tag]
        : activeTags.value.filter((t) => t !== tag);
  }

  function setDate(date: string | null) {
    activeDate.value = activeDate.value === date ? null : date;
  }

  function clearAll() {
    activeTags.value = [];
    activeDate.value = null;
  }

  onMounted(() => {
    if (_initialized) return;
    _initialized = true;
    const url = new URL(window.location.href);
    const urlTags = url.searchParams.get('tags');
    const urlDate = url.searchParams.get('date');
    if (urlTags !== null || urlDate !== null) {
      activeTags.value = urlTags ? urlTags.split(',').filter(Boolean) : [];
      activeDate.value = urlDate || null;
      return;
    }
    try {
      const parsed = JSON.parse(localStorage.getItem(LS_KEY) ?? 'null');
      if (parsed) {
        activeTags.value = parsed.tags ?? [];
        activeDate.value = parsed.date ?? null;
      }
    } catch {
      /* ignore */
    }
  });

  watch([activeTags, activeDate], () => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (activeTags.value.length)
      url.searchParams.set('tags', activeTags.value.join(','));
    else url.searchParams.delete('tags');
    if (activeDate.value) url.searchParams.set('date', activeDate.value);
    else url.searchParams.delete('date');
    window.history.replaceState({}, '', url.toString());
    if (hasFilters.value)
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({ tags: activeTags.value, date: activeDate.value }),
      );
    else localStorage.removeItem(LS_KEY);
  });

  return {
    activeTags,
    activeDate,
    hasFilters,
    filterCount,
    toggleTag,
    setDate,
    clearAll,
  };
}
