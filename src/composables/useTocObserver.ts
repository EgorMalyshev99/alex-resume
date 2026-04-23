import { onMounted, onUnmounted, ref } from 'vue'

export function useTocObserver(anchors: string[]) {
  const activeAnchor = ref('')

  let observer: IntersectionObserver | null = null

  function onScroll() {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
    const last = anchors[anchors.length - 1]
    if (atBottom && last) activeAnchor.value = last
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeAnchor.value = entry.target.id
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    anchors.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer!.observe(el)
    })

    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', onScroll)
  })

  return { activeAnchor }
}
