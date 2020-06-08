<template>
  <div id="solar-system-overview">
    <router-link to="/planet/Mercury">Mercury</router-link>
    <router-link to="/planet/Venus">Venus</router-link>
    <router-link to="/planet/Earth">Earth</router-link>
    <router-link to="/planet/Mars">Mars</router-link>
    <router-link to="/planet/Jupiter">Jupiter</router-link>
    <router-link to="/planet/Saturn">Saturn</router-link>
    <router-link to="/planet/Neptune">Neptune</router-link>
    <router-link to="/planet/Uranus">Uranus</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Overview",
  data() {
    return {};
  },
  mounted: function() {},
  components: {}
};
</script>

<style lang="scss" scoped>
#solar-system-overview {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #999;
  }
}
</style>