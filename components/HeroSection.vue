<script setup lang="ts">
const phrases = ['Full Stack Developer', 'Vue.js / Nuxt.js Developer', 'Backend Developer', 'Problem Solver']
const typed = ref('')
let pIdx = 0, cIdx = 0, deleting = false

function tick() {
  const cur = phrases[pIdx]
  typed.value = deleting ? cur.slice(0, cIdx - 1) : cur.slice(0, cIdx + 1)
  deleting ? cIdx-- : cIdx++
  if (!deleting && cIdx === cur.length) { setTimeout(tick, 2000); return }
  if (deleting && cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length }
  setTimeout(tick, deleting ? 45 : 80)
}

onMounted(() => setTimeout(tick, 800))

const socials = [
  { icon: 'fab fa-github',   label: 'GitHub',   href: 'https://github.com/alongkon-simmajan' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/fromalongkon-simmajan-24357a231/' },
  { icon: 'fas fa-envelope', label: 'Email',    href: 'mailto:fromalongkon@gmail.com' },
]
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0"
        style="background-image:linear-gradient(rgba(100,255,218,.03)1px,transparent 1px),linear-gradient(90deg,rgba(100,255,218,.03)1px,transparent 1px);background-size:60px 60px" />
      <div class="absolute inset-0"
        style="background:radial-gradient(ellipse 70% 55% at 50% 55%,rgba(124,58,237,.12)0%,transparent 70%)" />
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-8 pt-28 w-full">
      <p class="hero-item font-mono text-accent text-sm mb-2" style="animation-delay:.2s">
        สวัสดี, ผมชื่อ
      </p>
      <h1 class="hero-item text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold leading-[1.05] mb-4" style="animation-delay:.4s">
        อลงกรณ์ <span class="gradient-text">สิมมาจันทร์</span>
      </h1>
      <div class="hero-item font-mono text-slate-400 text-[clamp(1rem,2.5vw,1.4rem)] h-9 flex items-center gap-px mb-6" style="animation-delay:.6s">
        {{ typed }}<span class="text-accent font-thin animate-blink ml-0.5">|</span>
      </div>
      <p class="hero-item text-slate-400 text-lg max-w-xl leading-relaxed mb-10" style="animation-delay:.8s">
        Full Stack Developer มุ่งเน้นสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและ Scalable ด้วย <strong class="text-accent">Vue.js</strong>, <strong class="text-accent">Nuxt.js</strong>, <strong class="text-accent">Node.js</strong>, <strong class="text-accent">Express</strong> และ <strong class="text-accent">ElysiaJS</strong>
      </p>
      <div class="hero-item flex flex-wrap gap-4 mb-12" style="animation-delay:1s">
        <a href="#projects"
          class="bg-accent text-bg-primary font-semibold px-7 py-3 rounded-lg hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-[0_0_30px_rgba(100,255,218,.2)]">
          ดูผลงานของฉัน
        </a>
        <a href="#contact"
          class="border border-accent text-accent px-7 py-3 rounded-lg hover:bg-accent/10 hover:-translate-y-0.5 transition-all">
          ติดต่อฉัน
        </a>
      </div>
      <div class="hero-item flex gap-3" style="animation-delay:1.2s">
        <a v-for="s in socials" :key="s.label" :href="s.href" :aria-label="s.label"
          target="_blank" rel="noopener noreferrer"
          class="w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-200">
          <i :class="s.icon" />
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#about" class="hero-item absolute bottom-10 left-1/2 -translate-x-1/2 z-10" style="animation-delay:1.5s">
      <div class="w-7 h-12 border-2 border-white/10 rounded-full flex justify-center pt-2">
        <span class="w-1 h-2 bg-accent rounded-full animate-scroll-dot" />
      </div>
    </a>
  </section>
</template>
