const attValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackAvaliable: false,
      specialAttackLoad: 0,
      healAvailable: false,
      heals: 4,
      winner: null,
      logMessages: [],
    }
  },
  methods: {
    newGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.specialAttackAvaliable = false
      this.specialAttackLoad = 0
      this.healAvailable = false
      this.heals = 4
      this.logMessages = []
      this.winner = null
    },
    countRound() {
      this.specialAttackLoad++
      if (this.specialAttackLoad >= 3) {
        this.specialAttackAvaliable = true
      } else {
        this.specialAttackAvaliable = false
      }
    },
    makesHealAvailable() {
      if (this.playerHealth === 100 || this.heals === 0) {
        this.healAvailable = false
      } else {
        this.healAvailable = true
      }
    },
    surrender() {
      this.winner = "The Monster Won, you surrendered yourself."
    },
    attackMonster() {
      const attackValue = attValue(12, 5)
      this.monsterHealth -= attackValue
      this.addLog(" player ", " attack ", -attackValue)
      this.countRound()
      this.attackPlayer()
      this.makesHealAvailable()
    },
    attackPlayer() {
      const attackValue = attValue(15, 8)
      this.playerHealth -= attackValue
      this.addLog(" monster ", " attack ", -attackValue)
    },
    specialAttackMonster() {
      if (this.specialAttackAvaliable) {
        const attackValue = attValue(20, 15)
        this.monsterHealth -= attackValue
        this.addLog(" player ", " special attack ", -attackValue)
        this.specialAttackAvaliable = !this.specialAttackAvaliable
        this.attackPlayer()
      }
    },
    healPlayer() {
      if (this.healAvailable) {
        const healValue = attValue(20, 8)

        if (this.playerHealth + healValue > 100) {
          this.playerHealth = 100
        } else {
          this.playerHealth += healValue
        }
        this.addLog(" player ", " heal ", healValue)
        this.heals--
        this.countRound()
        this.attackPlayer()
        this.makesHealAvailable()
      }
    },
    addLog(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      })
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: 0 + "%" }
      }
      return { width: this.monsterHealth + "%" }
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: 0 + "%" }
      }
      return { width: this.playerHealth + "%" }
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "Its a Draw."
      } else if (value <= 0) {
        this.winner = "The Monster Won!"
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "Its a Draw."
      } else if (value <= 0) {
        this.winner = "You Won!"
      }
    },
  },
})

app.mount("#game")
