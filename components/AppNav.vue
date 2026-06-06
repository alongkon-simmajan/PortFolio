<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { href: '#about',    label: 'About' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 60
  }, { passive: true })
})
</script>

<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled ? 'bg-bg-primary/90 backdrop-blur-md border-b border-white/[0.06] py-3' : 'py-5',
  ]">
    <div class="max-w-5xl mx-auto px-8 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="font-mono text-accent text-lg font-medium">
        <span class="opacity-40">&lt;</span>AlexDev<span class="opacity-40">/&gt;</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a v-for="l in links" :key="l.href" :href="l.href"
          class="text-slate-400 text-sm hover:text-accent transition-colors relative group">
          {{ l.label }}
          <span class="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-200" />
        </a>
        <a href="#" class="font-mono text-sm text-accent border border-accent/50 px-4 py-1.5 rounded-md hover:bg-accent/10 transition-colors">
          Resume
        </a>
      </div>

      <!-- Mobile toggle -->
      <button @click="menuOpen = !menuOpen" class="md:hidden p-2 flex flex-col gap-1.5" aria-label="Toggle menu">
        <span :class="['block w-6 h-px bg-slate-300 transition-all duration-300', menuOpen ? 'translate-y-[7px] rotate-45' : '']" />
        <span :class="['block w-6 h-px bg-slate-300 transition-all duration-300', menuOpen ? 'opacity-0' : '']" />
        <span :class="['block w-6 h-px bg-slate-300 transition-all duration-300', menuOpen ? '-translate-y-[7px] -rotate-45' : '']" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="menuOpen"
        class="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-white/[0.06] px-8 py-5 flex flex-col gap-4">
        <a v-for="l in links" :key="l.href" :href="l.href"
          class="text-slate-400 hover:text-accent transition-colors"
          @click="menuOpen = false">
          {{ l.label }}
        </a>
        <a href="#" class="text-accent text-center border border-accent/50 px-4 py-2 rounded-md hover:bg-accent/10 transition-colors">
          Resume
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
