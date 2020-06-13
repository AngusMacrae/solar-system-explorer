<template>
  <div>
    <h1>{{$route.params.body}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // body: fetch().then(response => response.json())
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

// div {
//   height: 100vh;
//   background-image: url("../assets/jupiter-wide.jpg");
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// }
</style>