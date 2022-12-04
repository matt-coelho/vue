const assigment = Vue.createApp({
  data() {
    return {
      myName: "Matheus",
      myAge: 28,
      imgurl:
        "http://www.dumpaday.com/wp-content/uploads/2017/12/photos-61-2.jpg",
    }
  },
  methods: {
    favNumber() {
      return Math.random()
    },
    myAgeIn5y() {
      return this.myAge + 5
    },
  },
})
assigment.mount("#assignment")
