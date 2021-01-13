<template>
  <div>
    <h2>This is children!</h2>
    <h3 v-if="show">{{ msg }}</h3>
    <button @click="showMsg">显示</button>
  </div>
</template>

<script>
import bus from "../../util/bus";
export default {
  data() {
    return {
      show: false,
      msg: "from child msg",
    };
  },
  methods: {
    showMsg() {
      this.show = true;
    },
  },
  mounted() {
    this.msg = bus.$on('msg', (val) => {
    //   this.msg = val;
    console.log(val)
    });
  },
};
</script>
<style scoped></style>