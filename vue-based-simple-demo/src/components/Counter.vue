<template>
  <div class="counter">
    <button @click="reduce">-</button>
    <span>{{computeExample}}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data() {
      return {a: 1}
    },
    computed: {
      computeExample: function () {
        console.log(`computed say: compute!`)
        return this.a + this.$store.getters.double
      }
    },
    watch: {
      a: function (newValue, oldValue) {
        console.log(`watcher say: newValue:${newValue} oldValue:${oldValue}`)
      }
    },
    methods: {
      reduce() {
        console.log(`methods say: reduce`)
        this.$store.commit('reduce')
        console.log(`methods say: reduce success`)
      },
      async increment() {
        console.log(`methods say: increment`)
        await this.$store.dispatch('asyncIncrement')
      }
    }
  }
</script>

<style scoped>
  button {
    display: inline;
  }
</style>
