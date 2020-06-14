<template>
  <div>
    <h1>{{ $route.params.bodyName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PlanetDetails',
  data() {
    return {
      json_data: fetch('http://localhost:5000/api/planet/' + this.$route.params.bodyName).then(response => response.json()),
    };
  },
  mounted() {
    this.json_data.then(data => console.log(data));
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';

// div {
//   height: 100vh;
//   background-image: url("../assets/jupiter-wide.jpg");
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// }
</style>
