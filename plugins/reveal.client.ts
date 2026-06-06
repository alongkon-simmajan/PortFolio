export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    beforeMount(el, binding) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
    },
    mounted(el, binding) {
      const delay = typeof binding.value === 'number' ? binding.value : 0
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, delay)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      observer.observe(el)
    },
  })
})
