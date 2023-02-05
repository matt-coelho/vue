<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetailVisible">
      {{ detailVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailVisible">
      <li><strong>Phone </strong>{{ phoneNumber }}</li>
      <li><strong>E-mail </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
  </li>
</template>

<script>
export default {
  //props: ["name", "phoneNumber", "emailAddress"], //simplest way to define props
  props: {
    id: { type: String, required: true },
    name: { type: String },
    phoneNumber: { type: String, required: false, default: "0000-0000" },
    emailAddress: {
      type: String,
      required: false, //required can also be a function /** ,validator: function(value){ return } */
    },
  },
  emits: ["delete-friend"],
  data() {
    return {
      detailVisible: false,
    }
  },
  methods: {
    toggleDetailVisible() {
      this.detailVisible = !this.detailVisible
    },
  },
}
</script>
