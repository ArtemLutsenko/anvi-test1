export default {
  beforeMount: (el) => {
    if (el.children[0].tagName === 'INPUT') {
      const input = el.children[0]
      document.addEventListener('click', (element) => {
        if (!input.value && element.target !== el && element.target !== input) {
          el.classList.remove('full')
        }
      })
      document.addEventListener('change', (element) => {
        if (!input.value && element.target !== el && element.target !== input) {
          el.classList.remove('full')
        }
      })
      input.addEventListener('input', () => {
        if (input.value && !el.classList.contains('full')) {
          el.classList.add('full')
        }
      })
      el.addEventListener('click', () => {
        input.focus()
        if (!el.classList.contains('full')) {
          el.classList.add('full')
        }
      })
    }
  },
  updated: (el) => {
    if (el.children[0].tagName === 'INPUT') {
      const input = el.children[0]
      if (input.value && !el.classList.contains('full')) {
        el.classList.add('full')
      }
    }
  },
}
