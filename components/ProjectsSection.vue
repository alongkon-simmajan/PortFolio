<script setup lang="ts">
const projects = [
  {
    icon: 'fas fa-boxes',
    color: '#64ffda',
    title: 'Enterprise Asset Management System',
    desc: 'ระบบบริหารจัดการสินทรัพย์ระดับประเทศ พร้อม RBAC และสิทธิ์เฉพาะสาขา รองรับ lifecycle ของสินทรัพย์ ทั้งการโอน, ตัดจำหน่าย และ reporting dashboard แบบ real-time',
    tech: ['Vue.js', 'ElysiaJS', 'TypeScript', 'Prisma ORM', 'PostgreSQL'],
    github: '#',
    demo: '#',
  },
  {
    icon: 'fas fa-dumbbell',
    color: '#7c3aed',
    title: 'Automated Fitness Booking Platform',
    desc: 'ระบบ booking อัตโนมัติประสิทธิภาพสูง พร้อม auto check-in ผ่าน scheduled API tasks และ admin dashboard สำหรับติดตามพนักงานและจัดการ gym capacity',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Docker'],
    github: '#',
    demo: '#',
  }
]
</script>

<template>
  <section id="projects" class="py-28 bg-bg-secondary">
    <div class="max-w-5xl mx-auto px-8">
      <div v-reveal class="text-center mb-16">
        <span class="section-label">ผลงานที่ผ่านมา</span>
        <h2 class="section-title">โปรเจกต์แนะนำ</h2>
      </div>
      <div
        class="grid gap-5 mx-auto justify-center"
        :class="projects.length === 1 ? 'max-w-sm' : projects.length === 2 ? 'md:grid-cols-2 max-w-2xl' : 'md:grid-cols-3'"
      >
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
              <a :href="p.github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"
                class="w-8 h-8 bg-bg-primary/90 border border-white/10 rounded-md flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent text-sm transition-colors">
                <i class="fab fa-github" />
              </a>
              <a :href="p.demo" aria-label="Live demo" target="_blank" rel="noopener noreferrer"
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
