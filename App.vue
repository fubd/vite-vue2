<script>
  export default {
    data() {
      return {
        count: 0
      }
    },

    methods: {
      onClick() {
        this.count++
      }
    }
  }
</script>

<template>
  <div>
    <button @click="onClick">click, {{ count }}</button>
  </div>
</template>