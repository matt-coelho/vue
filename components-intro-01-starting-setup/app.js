const app = Vue.createApp({
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0000-0000",
        email: "manuel@gmail.com",
      },
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0000-0000",
          email: "manuel@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "1111-0000",
          email: "julie@gmail.com",
        },
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0000-0000",
          email: "manuel@gmail.com",
        },
      ],
    }
  },
})

app.component("friend-contact", {
  template: `
        <li v-for='friend of friends'>
          <h2>{{ friend.name }}</h2>
          <button @click:="toggleDetails()">
            {{detailsAreVisible ? 'Hide':'Show'}} Details
          </button>
          <ul>
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
  },
})

app.mount("#app")
