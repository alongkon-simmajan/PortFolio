<template>
  <section id="contact" class="py-28 bg-bg-primary">
    <div class="max-w-3xl mx-auto px-8">
      <div v-reveal class="text-center mb-16">
        <span class="section-label">พูดคุยกัน</span>
        <h2 class="section-title">ช่องทางการติดต่อ</h2>
      </div>

      <div v-reveal="80" class="bg-bg-card border border-white/[0.07] rounded-2xl p-10 text-center hover:border-accent/30 transition-all duration-300 shadow-xl">
        <p class="text-slate-300 leading-relaxed mb-10 md:text-lg max-w-xl mx-auto">
          ผมเปิดรับโอกาสใหม่ๆ สำหรับงานประจำที่ท้าทาย<br> เพื่อนำทักษะมาสร้างสรรค์ผลงาน — ยินดีพูดคุยเสมอครับ!
        </p>
        
        <div class="flex flex-col items-center gap-5 mb-10 text-slate-400">
          <a href="mailto:fromalongkon@gmail.com" class="flex items-center gap-3 hover:text-accent transition-colors text-lg">
            <i class="fas fa-envelope text-accent w-6" />
            <span>fromalongkon@gmail.com</span>
          </a>
          <a href="tel:0951855543" class="flex items-center gap-3 hover:text-accent transition-colors text-lg">
            <i class="fas fa-phone text-accent w-6" />
            <span>095-185-5543</span>
          </a>
          <div class="flex items-center gap-3 text-lg">
            <i class="fas fa-map-marker-alt text-accent w-6" />
            <span>Bangkok, Thailand</span>
          </div>
        </div>

        <div class="flex justify-center items-center gap-2 mb-10">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span class="text-green-400 font-medium">พร้อมรับงานใหม่</span>
        </div>

        <div class="flex justify-center gap-5 flex-wrap">
          <a href="https://github.com/alongkon-simmajan" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-3 text-slate-200 bg-bg-primary border border-white/10 px-8 py-3.5 rounded-xl hover:border-accent hover:text-accent hover:-translate-y-1 transition-all shadow-lg font-medium">
            <i class="fab fa-github text-xl" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/fromalongkon-simmajan-24357a231/" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-3 text-slate-200 bg-bg-primary border border-white/10 px-8 py-3.5 rounded-xl hover:border-accent hover:text-accent hover:-translate-y-1 transition-all shadow-lg font-medium">
            <i class="fab fa-linkedin text-xl" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
