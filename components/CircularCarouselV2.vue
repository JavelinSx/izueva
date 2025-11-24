<script setup lang="ts">
interface Props {
  images: string[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  openImage: [index: number]
}>()

const currentIndex = ref(2) // Начинаем с 3-го слайда
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const dragOffset = ref(0)
const threshold = 50 // минимальное расстояние для свайпа
const hasDragged = ref(false) // флаг для отслеживания реального движения

const totalSlides = computed(() => props.images.length)

// Переход к следующему слайду
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
}

// Переход к предыдущему слайду
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
}

// Touch события
const handleTouchStart = (e: TouchEvent) => {
  isDragging.value = true
  startX.value = e.touches[0].clientX
  currentX.value = e.touches[0].clientX
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return
  currentX.value = e.touches[0].clientX
  dragOffset.value = currentX.value - startX.value

  // Отмечаем, что было реальное движение (больше 5px)
  if (Math.abs(dragOffset.value) > 5) {
    hasDragged.value = true
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return

  const diff = startX.value - currentX.value

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      nextSlide() // Свайп влево
    } else {
      prevSlide() // Свайп вправо
    }
  }

  isDragging.value = false
  startX.value = 0
  currentX.value = 0
  dragOffset.value = 0

  // Сбрасываем флаг драга с небольшой задержкой, чтобы предотвратить клик
  setTimeout(() => {
    hasDragged.value = false
  }, 50)
}

// Mouse события (для desktop)
const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  startX.value = e.clientX
  currentX.value = e.clientX
}

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  e.preventDefault()
  currentX.value = e.clientX
  dragOffset.value = currentX.value - startX.value

  // Отмечаем, что было реальное движение (больше 5px)
  if (Math.abs(dragOffset.value) > 5) {
    hasDragged.value = true
  }
}

const handleMouseUp = () => {
  if (!isDragging.value) return

  const diff = startX.value - currentX.value

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  isDragging.value = false
  startX.value = 0
  currentX.value = 0
  dragOffset.value = 0

  // Сбрасываем флаг драга с небольшой задержкой, чтобы предотвратить клик
  setTimeout(() => {
    hasDragged.value = false
  }, 50)
}

const handleMouseLeave = () => {
  if (isDragging.value) {
    isDragging.value = false
    startX.value = 0
    currentX.value = 0
    dragOffset.value = 0
    setTimeout(() => {
      hasDragged.value = false
    }, 50)
  }
}

// Клик на активный слайд
const handleSlideClick = () => {
  // Открываем попап только если не было драга
  if (!isDragging.value && !hasDragged.value) {
    emit('openImage', currentIndex.value)
  }
}

// Получить позицию слайда
const getSlideStyle = (index: number) => {
  const position = index - currentIndex.value
  const absPosition = Math.abs(position)

  // Нормализуем позицию для loop
  let normalizedPosition = position
  if (position > totalSlides.value / 2) {
    normalizedPosition = position - totalSlides.value
  } else if (position < -totalSlides.value / 2) {
    normalizedPosition = position + totalSlides.value
  }

  const isActive = normalizedPosition === 0

  // Показываем больше слайдов по бокам
  const maxVisible = 5
  const isVisible = Math.abs(normalizedPosition) <= maxVisible

  if (!isVisible) {
    return {
      transform: 'scale(0)',
      opacity: 0,
      zIndex: -1,
      pointerEvents: 'none' as const,
      transition: 'none',
    }
  }

  const zIndex = 100 - Math.abs(normalizedPosition)

  // Базовые значения для неактивных карт
  let scale = Math.max(0.7, 1 - (Math.abs(normalizedPosition) * 0.08))
  let opacity = Math.max(0.6, 1 - (Math.abs(normalizedPosition) * 0.15))
  let translateX = normalizedPosition * 20
  let translateY = Math.abs(normalizedPosition) * 15
  let rotate = normalizedPosition * 5

  // Специальная логика для активной карточки при драге
  if (isActive && isDragging.value && dragOffset.value !== 0) {
    // Нормализуем dragOffset (-1 до 1 на основе ширины экрана)
    const maxDrag = 150
    const dragProgress = Math.min(Math.abs(dragOffset.value) / maxDrag, 1)

    // Карточка двигается за пальцем/мышью (увеличено с 0.5 до 0.7)
    translateX = dragOffset.value * 0.7

    // Уменьшение размера при движении (от 1 до 0.85)
    scale = 1 - (dragProgress * 0.15)

    // Поворот в направлении движения (уменьшено с 15 до 5 градусов)
    rotate = (dragOffset.value / maxDrag) * 5

    // Небольшое движение вверх при драге
    translateY = dragProgress * -20

    // Немного уменьшаем прозрачность
    opacity = 1 - (dragProgress * 0.2)
  } else if (isActive) {
    // Активная карточка без драга
    scale = 1
    opacity = 1
    translateX = 0
    translateY = 0
    rotate = 0
  }

  return {
    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateZ(${rotate}deg)`,
    opacity: opacity,
    zIndex: zIndex,
    transition: isDragging.value ? 'none' : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: isActive ? 'auto' : 'none' as const,
  }
}

// Auto play
const autoplayEnabled = ref(true)
let autoplayInterval: NodeJS.Timeout | null = null

const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  autoplayInterval = setInterval(() => {
    if (autoplayEnabled.value) {
      nextSlide()
    }
  }, 3000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const handleMouseEnter = () => {
  autoplayEnabled.value = false
}

const handleMouseLeaveCarousel = () => {
  autoplayEnabled.value = true
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

// Останавливаем autoplay при драге
watch(isDragging, (newVal) => {
  if (newVal) {
    autoplayEnabled.value = false
  }
})
</script>

<template>
  <div class="cards-carousel-v2">
    <div class="carousel-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeaveCarousel"
      @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
      @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp"
      @mouseleave.self="handleMouseLeave">
      <div class="cards-wrapper">
        <div v-for="(image, index) in images" :key="index" class="card" :style="getSlideStyle(index)"
          @click="handleSlideClick">
          <img :src="image" :alt="`Image ${index + 1}`" draggable="false" />
        </div>
      </div>

      <!-- Pagination dots -->
      <!-- <div class="pagination">
        <button
          v-for="(image, index) in images"
          :key="`dot-${index}`"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click.stop="currentIndex = index"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.cards-carousel-v2 {
  position: relative;
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 280px;
  height: 450px;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  /* Разрешаем вертикальный скролл, но блокируем горизонтальный */
}

.carousel-container:active {
  cursor: grabbing;
}

.carousel-container * {
  user-select: none;
  -webkit-user-select: none;
}

.cards-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform-origin: center center;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

/* Pagination */
.pagination {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 200;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(212, 181, 211, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot:hover {
  background: rgba(212, 181, 211, 0.7);
  transform: scale(1.2);
}

.dot.active {
  background: linear-gradient(135deg, #d4b5d3, #c39dc2);
  transform: scale(1.4);
  box-shadow: 0 4px 12px rgba(212, 181, 211, 0.6);
}

/* Responsive */
@media (min-width: 640px) {
  .carousel-container {
    max-width: 320px;
    height: 500px;
  }
}

@media (min-width: 768px) {
  .carousel-container {
    max-width: 400px;
    height: 600px;
  }
}

@media (min-width: 1024px) {
  .carousel-container {
    max-width: 500px;
    height: 700px;
  }
}
</style>
