<script setup lang="ts">
const experiences = [
  {
    company: 'JMT Network Services PCL. | JMART Building, Bangkok',
    role: 'Programmer',
    period: 'มิถุนายน 2024 – ปัจจุบัน',
    current: true,
    color: '#64ffda',
    icon: 'fas fa-building',
    bullets: [
      'พัฒนาและดูแลรักษาเว็บแอปพลิเคชันแบบ Responsive ด้วย Vue.js และ Nuxt.js',
      'ออกแบบและวางโครงสร้าง RESTful APIs ด้วย Node.js (Express / ElysiaJS)',
      'จัดการ Schema ฐานข้อมูลและ Query ผ่าน Prisma ORM (PostgreSQL / MySQL)',
      'ประสานงานกับทีม Cross-functional ภายใต้ Agile / Scrum',
    ],
    skills: ['Vue.js', 'Nuxt.js', 'Node.js', 'Express', 'ElysiaJS', 'Prisma', 'PostgreSQL', 'MySQL'],
  }
]

const education = {
  degree: 'บริหารธุรกิจบัณฑิต สาขาเทคโนโลยีธุรกิจดิจิทัล',
  university: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น',
  period: '2020 – 2024',
}
</script>

<template>
  <section id="experience" class="py-28 bg-bg-primary">
    <div class="max-w-5xl mx-auto px-8">
      <div v-reveal class="text-center mb-16">
        <span class="section-label">ประวัติการทำงาน</span>
        <h2 class="section-title">ประสบการณ์ & การศึกษา</h2>
      </div>

      <!-- Experience Timeline -->
      <div class="mb-16 space-y-6">
        <div
          v-for="(exp, i) in experiences" :key="exp.company"
          v-reveal="i * 80"
          class="bg-bg-card border border-white/[0.07] rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 mt-0.5"
                :style="`border-color: ${exp.color}33; color: ${exp.color}`">
                <i :class="exp.icon" class="text-sm" />
              </div>
              <div>
                <h3 class="font-semibold text-slate-100">{{ exp.role }}</h3>
                <p class="text-sm text-slate-500">{{ exp.company }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <span class="font-mono text-xs text-slate-500 border border-white/10 px-3 py-1 rounded-full">
                {{ exp.period }}
              </span>
              <span v-if="exp.current" class="flex items-center gap-1.5 text-xs text-green-400">
                <i class="fas fa-circle text-[0.45rem]" /> ปัจจุบัน
              </span>
            </div>
          </div>
          <ul class="space-y-2 mb-4 pl-13">
            <li v-for="bullet in exp.bullets" :key="bullet"
              class="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
              <i class="fas fa-chevron-right text-accent text-xs mt-1 flex-shrink-0" />
              {{ bullet }}
            </li>
          </ul>
          <div class="flex flex-wrap gap-1.5">
            <span v-for="s in exp.skills" :key="s"
              class="font-mono text-[0.7rem] text-accent bg-accent/5 border border-accent/15 px-2.5 py-0.5 rounded">
              {{ s }}
            </span>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div v-reveal="80" class="bg-bg-card border border-white/[0.07] rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent">
              <i class="fas fa-graduation-cap text-sm" />
            </div>
            <div>
              <h3 class="font-semibold text-slate-100">{{ education.degree }}</h3>
              <p class="text-sm text-slate-500 mt-0.5">{{ education.university }}</p>
            </div>
          </div>
          <span class="font-mono text-xs text-slate-500 border border-white/10 px-3 py-1 rounded-full h-fit flex-shrink-0">
            {{ education.period }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
