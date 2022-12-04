/* vanilla js
const buttonEl = document.querySelector("button")
const inputEl = document.querySelector("input")
const listEl = document.querySelector("ul")

function addGoal() {
  const enteredValue = inputEl.value
  const listItemEl = document.createElement("li")
  listItemEl.textContent = enteredValue
  listEl.appendChild(listItemEl)
  inputEl.value = ""
}

buttonEl.addEventListener("click", addGoal)
 */

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue)
      this.enteredValue = ""
    },
  },
}).mount("#app")
//------------------------------------------------------------------------------
const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course",
      vueLink: "https://vuejs.org",
    }
  },
})
app.mount("#user-goal")

const apphead = Vue.createApp({
  methods: {
    headGoal() {
      if (Math.random() < 0.5) {
        return "Learn Vue"
      } else {
        return "Master Vue"
      }
    },
  },
})
apphead.mount("#head")

const apphtml = Vue.createApp({
  data() {
    return {
      html1: "<p><strong>Alive</strong></p>",
      html2: "<p><strong>Dead</strong></p>",
    }
  },
  methods: {
    htmcode() {
      if (Math.random() < 0.5) {
        return this.html1
      } else {
        return this.html2
      }
    },
  },
})
apphtml.mount("#htmlcode")
