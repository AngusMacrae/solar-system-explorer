<template>
  <router-link to="/planet/Mercury">
    <div class="ss-object"></div>
    <p>{{name}}</p>
    <p>{{fillColour}}</p>
    <p>{{diameter}}</p>
  </router-link>
</template>

<script>
export default {
  name: "SSObject",
  props: ["name", "fillColour", "diameter"]
};
</script>

<style lang="scss" scoped>
.ss-object {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>