<template>
  <h1>{{ message }}</h1>
  <HelloWorld />
</template>

<script>
import HelloWorld from "~/components/HelloWorld";

export default {
  components: {
    HelloWorld,
  },

  data() {
    return {
      message: "보혜야 사룽해~♥",
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
}
</style>
