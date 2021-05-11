<template>
  <div>
    <h1>{{ countOrJoke }}</h1>
    <button @click="add">Add 1</button>
    <button @click="add2">Add 2</button>
    <button @click="subtract">Subtract 1</button>
    <button @click="subtract(3)">Subtract 3</button>
    <button @click="getJoke">Get a joke (Async)</button>
  </div>
</template>

<script>
export default {
  data() {
    return { ...this.$store.state };
  },
  computed: {
    countOrJoke() {
      return this.$store.state.joke || this.$store.state.count;
    },
  },

  methods: {
    add() {
      return this.$store.commit("add");
    },
    add2() {
      return this.$store.commit("add", 2);
    },
    getJoke() {
      return this.$store.dispatch("getJoke");
    },
    subtract(payload) {
      return this.$store.commit("subtract", +payload);
    },
  },
};
</script>
