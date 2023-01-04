const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: "",
      visible: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
      this.task = ""
    },
    visibility() {
      this.visible = !this.visible
    },
  },
  computed: {
    buttonlabel() {
      if (this.visible) {
        return "Hide list"
      } else {
        return "Show list"
      }
    },
  },
})

app.mount("#assignment_1")
