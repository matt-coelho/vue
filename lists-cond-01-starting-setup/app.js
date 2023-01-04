const app = Vue.createApp({
  data() {
    return {
      goals: [],
      newValue: "",
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.newValue)
      this.newValue = ""
      console.log(this.goals)
    },
    removeGoal(id) {
      this.goals.splice(id, 1)
    },
  },
})

app.mount("#user-goals")
