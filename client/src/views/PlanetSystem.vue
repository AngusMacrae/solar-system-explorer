<template>
  <div>
    <h1>{{ $route.params.bodyName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PlanetSystem',
  data() {
    return {
      json_data: fetch('http://localhost:5000/api/moons/' + this.$route.params.bodyName).then(response => response.json()),
    };
  },
  mounted() {
    this.json_data.then(data => console.log(data));
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';
</style>
