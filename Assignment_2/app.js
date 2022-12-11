const app = Vue.createApp({
  data() {
    return {
      kdown: "",
      kpress: "",
    }
  },
  methods: {
    showalert() {
      alert("the alert")
    },
    inp(event) {
      this.kdown = event.target.value
    },
    ev(event) {
      this.kpress = event.target.value
    },
  },
})

app.mount("#assignment")
