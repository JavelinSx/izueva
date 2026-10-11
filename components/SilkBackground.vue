<script setup lang="ts">
/**
 * Анимированный фон: «шёлковые нити» — пучки тонких линий, которые медленно
 * переплетаются, как пряди волос, и золотистые блёстки, поднимающиеся вверх.
 * При prefers-reduced-motion рисуется один неподвижный кадр.
 */
const canvas = ref<HTMLCanvasElement | null>(null)

interface Ribbon {
  y: number
  amp: number
  k: number
  k2: number
  sp: number
  ph: number
  tilt: number
  spread: number
  tone: [number, number, number]
}

interface Spark {
  x: number
  y: number
  r: number
  sp: number
  tw: number
}

const TONES: [number, number, number][] = [
  [183, 104, 136],
  [201, 162, 126],
  [160, 120, 186],
  [222, 150, 166],
]

let raf = 0
let cleanup: (() => void) | null = null

onMounted(() => {
  const c = canvas.value
  const ctx = c?.getContext('2d')
  if (!c || !ctx) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let W = 0
  let H = 0
  let seed = 11
  const rnd = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  let ribbons: Ribbon[] = []
  const sparks: Spark[] = Array.from({ length: 40 }, () => ({
    x: rnd(),
    y: rnd(),
    r: 0.6 + rnd() * 1.6,
    sp: 0.000012 + rnd() * 0.00003,
    tw: rnd() * Math.PI * 2,
  }))

  const build = () => {
    seed = 11
    const count = Math.max(2, Math.round(H / 380))
    const narrow = W < 640
    ribbons = Array.from({ length: count }, (_, i) => ({
      y: (i + 0.5) / count,
      amp: (narrow ? 24 : 36) + rnd() * (narrow ? 30 : 56),
      k: (narrow ? 0.005 : 0.0015) + rnd() * (narrow ? 0.004 : 0.0012),
      k2: (narrow ? 0.006 : 0.0018) + rnd() * (narrow ? 0.005 : 0.0018),
      sp: 0.00016 + rnd() * 0.00012,
      ph: rnd() * Math.PI * 2,
      tilt: (rnd() - 0.5) * 0.18,
      spread: (narrow ? 32 : 46) + rnd() * 40,
      tone: TONES[i % TONES.length],
    }))
  }

  const fit = () => {
    W = window.innerWidth
    H = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    c.width = Math.round(W * dpr)
    c.height = Math.round(H * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    build()
    if (reduce) draw(14000)
  }

  const draw = (t: number) => {
    ctx.clearRect(0, 0, W, H)
    const strands = W < 640 ? 10 : 14
    const dx = W < 640 ? 10 : 16

    for (const r of ribbons) {
      const cy = r.y * H
      for (let j = 0; j < strands; j++) {
        const f = j / (strands - 1) - 0.5
        ctx.beginPath()
        for (let x = -40; x <= W + 40; x += dx) {
          const base = cy
            + Math.sin(x * r.k + t * r.sp + r.ph) * r.amp
            + Math.sin(x * r.k * 0.47 - t * r.sp * 0.8 + r.ph * 2) * r.amp * 0.6
            + (x - W / 2) * r.tilt
          const y = base + f * r.spread * Math.sin(x * r.k2 + t * r.sp * 1.6 + r.ph)
          if (x === -40) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        const a = 0.05 + 0.15 * (1 - Math.abs(f) * 1.6)
        ctx.strokeStyle = `rgba(${r.tone[0]},${r.tone[1]},${r.tone[2]},${a.toFixed(3)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    for (const s of sparks) {
      const o = 0.2 + 0.4 * Math.sin(t * 0.0018 + s.tw)
      if (o <= 0.02) continue
      const y = ((((s.y - t * s.sp) % 1) + 1) % 1) * H
      const x = s.x * W + Math.sin(t * 0.0004 + s.tw) * 14
      ctx.fillStyle = `rgba(201,162,126,${o.toFixed(3)})`
      ctx.beginPath()
      ctx.arc(x, y, s.r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  fit()
  window.addEventListener('resize', fit)

  if (!reduce) {
    let last = 0
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      // ~30 кадров в секунду достаточно для медленного движения
      if (t - last < 33) return
      last = t
      draw(t)
    }
    raf = requestAnimationFrame(loop)
  }

  cleanup = () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', fit)
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <canvas ref="canvas" aria-hidden="true" class="pointer-events-none fixed inset-0 z-0 h-full w-full" />
</template>
