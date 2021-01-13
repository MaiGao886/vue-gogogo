<template>
  <div>
    <div>
      <h1>This is parent coyp!</h1>
      <!-- {{msg}} -->
      <!-- <child></child> -->
    </div>
  </div>
</template>

<script>
// import Child from "./Child.vue";
export default {
  data() {
    return {
      msg: "from parent copy msg"
    }
  },
  components: {
    // Child,
  },
  mounted () {
    // this.msg = this.$children[0].msg;
  },
};
</script>

<style scoped>
</style>