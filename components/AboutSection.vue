<script setup lang="ts">
const stats = [
  { num: '3+',  label: 'Years' },
  { num: '20+', label: 'Projects' },
  { num: '10+', label: 'Clients' },
]
const tags = ['Problem Solver', 'Open Source', 'Team Player', 'Continuous Learner']
</script>

<template>
  <section id="about" class="py-28 bg-bg-secondary">
    <div class="max-w-5xl mx-auto px-8">
      <!-- Header -->
      <div v-reveal class="text-center mb-16">
        <span class="section-label">Who I Am</span>
        <h2 class="section-title">About Me</h2>
      </div>

      <div class="grid md:grid-cols-[auto_1fr] gap-16 items-start">
        <!-- Image + stats -->
        <div v-reveal="80" class="flex flex-col items-center">
          <div class="relative group inline-block">
            <div class="w-60 h-60 rounded-xl bg-bg-card border border-white/10 flex items-center justify-center text-6xl text-slate-600">
              <i class="fas fa-user" />
            </div>
            <div class="absolute top-3.5 left-3.5 w-60 h-60 rounded-xl border-2 border-accent -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2" />
          </div>
          <div class="flex gap-10 mt-8 pt-6 border-t border-white/[0.07] w-full justify-center">
            <div v-for="s in stats" :key="s.label" class="text-center">
              <span class="block font-mono text-2xl font-bold text-accent">{{ s.num }}</span>
              <span class="text-xs text-slate-500 uppercase tracking-wider">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div v-reveal="160" class="space-y-5">
          <p class="text-slate-400 leading-relaxed">
            I'm a passionate <strong class="text-accent font-semibold">Full Stack Developer</strong> with a love
            for building products that make a difference. I work across the entire stack — from crafting
            pixel-perfect UIs to designing scalable backend architectures.
          </p>
          <p class="text-slate-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
            writing about software engineering. I believe great software is built at the intersection of clean
            code and great UX.
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <span v-for="tag in tags" :key="tag"
              class="font-mono text-xs text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full">
              {{ tag }}
            </span>
          </div>
          <div class="pt-3">
            <a href="#"
              class="inline-flex items-center gap-2 text-slate-400 border border-white/10 px-5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all duration-200">
              Download Resume <i class="fas fa-download text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
