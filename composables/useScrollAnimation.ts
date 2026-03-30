import type { Ref } from 'vue'

interface ScrollAnimationOptions {
  /** Процент видимости элемента для срабатывания (0-1) */
  threshold?: number
  /** Отступ от viewport для срабатывания */
  rootMargin?: string
  /** Анимировать только один раз */
  once?: boolean
  /** CSS класс для анимации */
  animationClass?: string
}

/**
 * Composable для плавного появления элементов при скролле
 * Использует Intersection Observer API для оптимальной производительности
 *
 * @example
 * ```vue
 * <script setup>
 * const { elementRef } = useScrollAnimation({ animationClass: 'fade-in-up' })
 * </script>
 * <template>
 *   <div ref="elementRef" class="animate-on-scroll">Контент</div>
 * </template>
 * ```
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    animationClass = 'fade-in-up'
  } = options

  const elementRef: Ref<HTMLElement | null> = ref(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    // Проверяем поддержку Intersection Observer
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback для старых браузеров - просто показываем элемент
      elementRef.value.classList.add('is-visible')
      isVisible.value = true
      return
    }

    // Проверяем настройку prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elementRef.value.classList.add('is-visible')
      isVisible.value = true
      return
    }

    // Добавляем базовый класс и класс анимации
    elementRef.value.classList.add('animate-on-scroll', animationClass)

    // Создаем observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            isVisible.value = true

            // Если анимация должна срабатывать только один раз
            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            // Если анимация должна повторяться
            entry.target.classList.remove('is-visible')
            isVisible.value = false
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}

/**
 * Composable для анимации группы элементов с задержкой
 *
 * @example
 * ```vue
 * <script setup>
 * const { containerRef } = useStaggerAnimation({
 *   itemSelector: '.card',
 *   animationClass: 'fade-in-up',
 *   staggerDelay: 100
 * })
 * </script>
 * <template>
 *   <div ref="containerRef">
 *     <div class="card animate-on-scroll">Карточка 1</div>
 *     <div class="card animate-on-scroll">Карточка 2</div>
 *     <div class="card animate-on-scroll">Карточка 3</div>
 *   </div>
 * </template>
 * ```
 */
export const useStaggerAnimation = (options: {
  itemSelector: string
  animationClass?: string
  staggerDelay?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
}) => {
  const {
    itemSelector,
    animationClass = 'fade-in-up',
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options

  const containerRef: Ref<HTMLElement | null> = ref(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!containerRef.value) return

    const items = containerRef.value.querySelectorAll(itemSelector)
    if (items.length === 0) return

    // Проверяем поддержку Intersection Observer
    if (typeof IntersectionObserver === 'undefined') {
      items.forEach((item) => {
        item.classList.add('is-visible')
      })
      return
    }

    // Проверяем настройку prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      items.forEach((item) => {
        item.classList.add('is-visible')
      })
      return
    }

    // Добавляем классы анимации каждому элементу
    items.forEach((item, index) => {
      item.classList.add('animate-on-scroll', animationClass)
      // Добавляем задержку через inline style для точного контроля
      ;(item as HTMLElement).style.animationDelay = `${index * staggerDelay}ms`
    })

    // Создаем observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')

            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    items.forEach((item) => observer!.observe(item))
  })

  onUnmounted(() => {
    if (observer && containerRef.value) {
      const items = containerRef.value.querySelectorAll(itemSelector)
      items.forEach((item) => observer!.unobserve(item))
      observer.disconnect()
    }
  })

  return {
    containerRef
  }
}
