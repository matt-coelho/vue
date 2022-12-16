const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods: {
    boxSelected(box) {
      this.boxASelected = false
      this.boxBSelected = false
      this.boxCSelected = false

      if (box === "A") {
        this.boxASelected = true
      } else if (box === "B") {
        this.boxBSelected = true
      } else if (box === "C") {
        this.boxCSelected = true
      }

      console.log(
        `boxA ${this.boxASelected}, boxB ${this.boxBSelected}, boxC ${this.boxCSelected}`
      )
    },
  },
})
app.mount("#styling")

const app2 = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods: {
    boxSelected(box) {
      this.boxASelected = false
      this.boxBSelected = false
      this.boxCSelected = false

      if (box === "A") {
        this.boxASelected = true
      } else if (box === "B") {
        this.boxBSelected = true
      } else if (box === "C") {
        this.boxCSelected = true
      }

      console.log(
        `boxA ${this.boxASelected}, boxB ${this.boxBSelected}, boxC ${this.boxCSelected}`
      )
    },
  },
})
app2.mount("#stylingwclasses")
