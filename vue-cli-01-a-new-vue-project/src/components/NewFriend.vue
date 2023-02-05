<template>
  <li style="list-style-type: none">
    <form @submit.prevent="submitData">
      <div>
        <label>Name:</label>
        <input type="text" name="name" v-model="enteredName" />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" v-model="enteredPhone" />
      </div>
      <div>
        <label>E-mail:</label>
        <input type="text" name="email" v-model="enteredEmail" />
      </div>
      <div>
        <button type="submit">Add Friend</button>
      </div>
    </form>
  </li>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    }
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      )
      ;(this.enteredEmail = ""),
        (this.enteredName = ""),
        (this.enteredPhone = "")
    },
  },
}
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
