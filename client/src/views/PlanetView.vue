<template>
  <div>
    <h1>{{ $route.params.body }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: fetch('http://localhost:5000/api/planets/' + this.$route.params.body).then(response => {
        console.log(response.json());
        return response.json();
      }),
    };
  },
  mounted() {
    console.log(this.body);
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
