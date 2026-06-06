<script setup lang="ts">
const sending = ref(false)
const sent = ref(false)
const form = reactive({ name: '', email: '', subject: '', message: '' })

async function submit() {
  sending.value = true
  await new Promise(r => setTimeout(r, 1500))
  sending.value = false
  sent.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => (sent.value = false), 3000)
}
</script>

<template>
  <section id="contact" class="py-28 bg-bg-primary">
    <div class="max-w-5xl mx-auto px-8">
      <div v-reveal class="text-center mb-16">
        <span class="section-label">Let's Talk</span>
        <h2 class="section-title">Get In Touch</h2>
      </div>

      <div class="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">
        <!-- Info -->
        <div v-reveal class="space-y-6">
          <p class="text-slate-400 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project in mind, a question,
            or just want to say hi — feel free to reach out!
          </p>
          <div class="space-y-4">
            <div class="flex items-center gap-3 text-slate-400">
              <i class="fas fa-envelope text-accent w-5 text-center" />
              <span>alex@example.com</span>
            </div>
            <div class="flex items-center gap-3 text-slate-400">
              <i class="fas fa-map-marker-alt text-accent w-5 text-center" />
              <span>Bangkok, Thailand</span>
            </div>
            <div class="flex items-center gap-3">
              <i class="fas fa-circle text-green-400 w-5 text-center text-[0.55rem]" />
              <span class="text-green-400 text-sm">Available for work</span>
            </div>
          </div>
          <div class="flex gap-3 flex-wrap">
            <a href="#"
              class="flex items-center gap-2 text-slate-400 border border-white/10 px-4 py-2 rounded-lg text-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
              <i class="fab fa-github" /> GitHub
            </a>
            <a href="#"
              class="flex items-center gap-2 text-slate-400 border border-white/10 px-4 py-2 rounded-lg text-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
              <i class="fab fa-linkedin" /> LinkedIn
            </a>
          </div>
        </div>

        <!-- Form -->
        <form v-reveal="100" class="space-y-4" @submit.prevent="submit">
          <div class="grid grid-cols-2 gap-4">
            <input v-model="form.name" type="text" placeholder="Your Name" required
              class="bg-bg-card border border-white/[0.08] rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors" />
            <input v-model="form.email" type="email" placeholder="Your Email" required
              class="bg-bg-card border border-white/[0.08] rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors" />
          </div>
          <input v-model="form.subject" type="text" placeholder="Subject"
            class="w-full bg-bg-card border border-white/[0.08] rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors" />
          <textarea v-model="form.message" rows="5" placeholder="Your Message" required
            class="w-full bg-bg-card border border-white/[0.08] rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors resize-none" />
          <button type="submit" :disabled="sending || sent"
            :class="[
              'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              sent
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-accent text-bg-primary hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_25px_rgba(100,255,218,.2)]',
              sending ? 'opacity-75 cursor-not-allowed' : '',
            ]"
          >
            <template v-if="sent">
              <i class="fas fa-check" /> Message Sent!
            </template>
            <template v-else-if="sending">
              <i class="fas fa-spinner fa-spin" /> Sending...
            </template>
            <template v-else>
              Send Message <i class="fas fa-paper-plane" />
            </template>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
