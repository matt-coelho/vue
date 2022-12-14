const app = Vue.createApp({
  data() {
    return { number: 0, resultado: "" }
  },
  methods: {
    addfive() {
      this.number += 5
    },
    addone() {
      this.number += 1
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return (this.resultado = "Not there yet")
      } else if (this.number > 37) {
        return (this.resultado = "Too much")
      } else {
        return (this.resultado = "Gotcha")
      }
    },
  },
  watch: {
    number() {
      console.log(this.number)
      setTimeout(() => {
        this.number = 0
      }, 5000)
    },
  },
})
app.mount("#assignment")
