const app = Vue.createApp({
  data() {
    return {
      user: "",
      userClass: [],

      enteredBackground: "",
      backgroundcolor: "",

      isVisible: false,
      hiddenClass: "hidden",
      visibleClass: "visible",
      visibilityclass: this.hiddenClass,
    }
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible
      this.isVisible
        ? (this.visibilityclass = this.visibleClass)
        : (this.visibilityclass = this.hiddenClass)
      this.userClass.push(this.visibilityclass)
    },
  },
  watch: {
    user() {
      if (this.user === "user1" || this.user === "user2") {
        this.userClass.push(this.user)
      } else {
        if (this.userClass.length != 0) {
          this.userClass.length = 0
        }
      }
    },
  },
})
app.mount("#assignment")
