<script setup lang="ts">
const projects = [
  {
    icon: 'fas fa-shopping-cart',
    color: '#64ffda',
    title: 'E-Commerce Platform',
    desc: 'Full-featured online store with real-time inventory, Stripe payment integration, and an admin dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    icon: 'fas fa-tasks',
    color: '#7c3aed',
    title: 'Project Management App',
    desc: 'Collaborative tool with real-time updates, Kanban boards, file sharing, and integrated team chat.',
    tech: ['React', 'Express', 'Socket.io', 'MongoDB'],
  },
  {
    icon: 'fas fa-chart-line',
    color: '#f59e0b',
    title: 'Analytics Dashboard',
    desc: 'Real-time data visualization platform with customizable charts and automated reporting.',
    tech: ['TypeScript', 'FastAPI', 'Redis', 'Docker'],
  },
]
</script>

<template>
  <section id="projects" class="py-28 bg-bg-secondary">
    <div class="max-w-5xl mx-auto px-8">
      <div v-reveal class="text-center mb-16">
        <span class="section-label">What I've Built</span>
        <h2 class="section-title">Featured Projects</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-5">
        <div
          v-for="(p, i) in projects" :key="p.title"
          v-reveal="i * 80"
          class="bg-bg-card border border-white/[0.07] rounded-xl overflow-hidden hover:border-accent/35 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
        >
          <!-- Thumbnail -->
          <div class="relative h-44 flex items-center justify-center overflow-hidden"
            style="background:linear-gradient(135deg,#0c0c18,#161628)">
            <i :class="p.icon" class="text-5xl opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-300"
              :style="`color:${p.color}`" />
            <div class="absolute top-3 right-3 flex gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              <a href="#" aria-label="GitHub"
                class="w-8 h-8 bg-bg-primary/90 border border-white/10 rounded-md flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent text-sm transition-colors">
                <i class="fab fa-github" />
              </a>
              <a href="#" aria-label="Live demo"
                class="w-8 h-8 bg-bg-primary/90 border border-white/10 rounded-md flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent text-sm transition-colors">
                <i class="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
          <!-- Info -->
          <div class="p-5 flex flex-col flex-1">
            <h3 class="font-semibold text-slate-100 mb-2">{{ p.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{{ p.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="t in p.tech" :key="t"
                class="font-mono text-[0.7rem] text-accent bg-accent/5 border border-accent/15 px-2.5 py-0.5 rounded">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
