<template>
  <div>
    <div>
      <h1>This is parent!</h1>
      {{msg}}
      <child ref="child"></child>
    </div>
  </div>
</template>

<script>
import bus from "../../util/bus"
import Child from "./Child.vue";
export default {
  data() {
    return {
      msg: "from parent msg"
    }
  },
  components: {
    Child,
  },
  mounted () {
    bus.$emit('msg',this.msg);
  },
};
</script>

<style scoped>
</style>