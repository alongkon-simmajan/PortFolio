<script setup lang="ts">
const categories = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'JavaScript'],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST API', 'GraphQL'],
  },
  {
    icon: 'fas fa-database',
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM'],
  },
  {
    icon: 'fas fa-cloud',
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git / GitHub', 'CI/CD', 'Vercel', 'AWS', 'Linux'],
  },
]
</script>

<template>
  <section id="skills" class="py-28 bg-bg-primary">
    <div class="max-w-5xl mx-auto px-8">
      <div v-reveal class="text-center mb-16">
        <span class="section-label">What I Work With</span>
        <h2 class="section-title">Tech Stack</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div
          v-for="(cat, i) in categories" :key="cat.title"
          v-reveal="i * 80"
          class="bg-bg-card border border-white/[0.07] rounded-xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
        >
          <h3 class="flex items-center gap-3 font-semibold text-slate-200 mb-5">
            <i :class="[cat.icon, 'text-accent']" />
            {{ cat.title }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in cat.skills" :key="skill"
              class="font-mono text-xs text-slate-400 bg-bg-secondary border border-white/[0.07] px-3 py-1.5 rounded-md hover:border-accent/50 hover:text-accent transition-colors duration-200 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
