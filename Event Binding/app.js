const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inp: "",
      text: "",
      fu: "",
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    sub(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num
      }
    },
    setInput(event) {
      this.inp = event.target.value
    },
    submitform() {
      alert(`submitted`)
    },
    resetInput() {
      this.text = ""
    },
  },
  computed: {
    fullinput() {
      if (this.fu === "") {
        return ""
      }
      return this.fu + " " + " hardcoded value"
    },
  },
})

app.mount("#events")
