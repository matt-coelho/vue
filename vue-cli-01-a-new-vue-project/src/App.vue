<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <NewFriend @add-contact="placeContact" />
    <ul>
      <FriendContact
        v-for="friend in friends"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :key="friend.id"
        :id="friend.id"
        @delete-friend="deleteContact"
      />
    </ul>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue"
import NewFriend from "./components/NewFriend.vue"

export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel F.",
          phone: "1234567890",
          email: "manuel@localhost.com",
        },
        {
          id: "carla",
          name: "Carla F.",
          phone: "123459831",
          email: "carla@localhost.com",
        },
        {
          id: "diego",
          name: "Diego F.",
          phone: "12345384592",
          email: "diego@localhost.com",
        },
        {
          id: "saulo",
          name: "Saulo F.",
          phone: "87821321232",
          email: "saulo@localhost.com",
        },
      ],
    }
  },
  methods: {
    placeContact(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
      }
      this.friends.push(newFriend)
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id != friendId)
    },
  },
  computed: {},
  components: { FriendContact, NewFriend },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
