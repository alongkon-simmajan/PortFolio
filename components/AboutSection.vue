<script setup lang="ts">
const stats = [
  { num: 'Fullstack Developer', label: 'ตำแหน่ง' },
  { num: '2+',   label: 'ประสบการณ์ (ปี)' },
  { num: 'RMUTI', label: 'มหาวิทยาลัย' },
]
const tags = ['นักแก้ปัญหา', 'เรียนรู้เร็ว', 'Agile / Scrum', 'Full Stack']
</script>

<template>
  <section id="about" class="py-28 bg-bg-secondary">
    <div class="max-w-5xl mx-auto px-8">
      <!-- Header -->
      <div v-reveal class="text-center mb-16">
        <span class="section-label">ข้อมูลส่วนตัว</span>
        <h2 class="section-title">เกี่ยวกับฉัน</h2>
      </div>

      <div class="grid md:grid-cols-[auto_1fr] gap-16 items-start">
        <!-- Image + stats -->
        <div v-reveal="80" class="flex flex-col items-center">
          <div class="relative group inline-block">
            <div class="w-60 h-60 rounded-xl overflow-hidden border border-white/10">
              <img src="/files/pictureProfiles/pf.jpg" alt="Alongkorn Simmachan" class="w-full h-full object-cover object-top" />
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
            ผมเป็น <strong class="text-accent font-semibold">Software Engineer</strong> ที่มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชัน
            ทั้งฝั่ง Frontend และ Backend มีประสบการณ์สร้าง Responsive UI และ Backend API ที่มีประสิทธิภาพ
          </p>
          <p class="text-slate-400 leading-relaxed">
            จบการศึกษาระดับปริญญาตรี <strong class="text-slate-200">คณะบริหารธุรกิจและเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีธุรกิจดิจิทัล</strong>
            จาก <strong class="text-slate-200">มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น</strong> ปี 2024 
          </p>
          <p class="text-slate-400 leading-relaxed">
            ปัจจุบันทำงานในตำแหน่ง <strong class="text-accent">Programmer</strong> ที่
            <strong class="text-slate-200">JMT Network Services PCL.</strong> ตั้งแต่มิถุนายน 2024
            รับผิดชอบพัฒนาเว็บแอปพลิเคชันด้วย Vue.js / Nuxt.js ออกแบบ RESTful APIs ด้วย Node.js / ElysiaJS /Express
            และจัดการฐานข้อมูลผ่าน Prisma ORM ภายใต้กระบวนการทำงานแบบ Agile / Scrum
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <span v-for="tag in tags" :key="tag"
              class="font-mono text-xs text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full">
              {{ tag }}
            </span>
          </div>
          <div class="pt-3">
            <a href="/files/CV_Alongkorn_Simmachan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-slate-400 border border-white/10 px-5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all duration-200">
              ดูเรซูเม่ <i class="fas fa-external-link-alt text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
