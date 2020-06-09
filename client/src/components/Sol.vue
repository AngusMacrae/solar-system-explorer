<template>
  <div class="wrapper">
    <router-link :to="path">
      <div class="body" :style="cssVars">
        <h2>{{name}}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sol",
  props: ["name", "fillColour", "diameter"],
  computed: {
    path() {
      return "/body/" + this.name;
    },
    cssVars() {
      return {
        "--bg-colour": this.fillColour,
        "--diameter": this.diameter + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: -4900px;
}

.body {
  border-radius: 50%;
  width: var(--diameter);
  height: var(--diameter);
  background-color: var(--bg-colour);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  padding-right: 35px;
}

a {
  color: darken(#fbd813, 20%);
  text-decoration: none;

  h2 {
    font-size: 1.3rem;
    transition: all 0.2s ease;
  }

  &:hover h2 {
    transform: scale(1.02);
    color: #181818;
  }
}

@media (max-width: 970px) {
  .wrapper {
    position: absolute;
    left: auto;
    top: -4900px;
  }

  .body {
    align-items: center;
    justify-content: flex-end;
    padding-right: 0;
    padding-bottom: 35px;
  }
}
</style>