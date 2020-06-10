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
        "--fill-colour": this.fillColour,
        "--diameter": this.diameter + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.wrapper {
  position: absolute;
  right: 92vw;
}

.body {
  border-radius: 50%;
  width: var(--diameter);
  height: var(--diameter);
  background-color: var(--fill-colour);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
}

a {
  color: darken(#fbd813, 20%);
  text-decoration: none;

  h2 {
    position: relative;
    right: 4vw;
    transform: translateX(50%);
    font-size: 1.3rem;
    transition: all 0.2s ease;
  }

  &:hover h2 {
    transform: scale(1.02);
    color: $bg-colour;
  }
}

@media (max-width: 970px) {
  .wrapper {
    position: absolute;
    right: auto;
    bottom: 92vh;
  }

  .body {
    align-items: center;
    justify-content: flex-end;
    width: calc(var(--diameter) / 2);
    height: calc(var(--diameter) / 2);
  }

  a {
    h2 {
      right: auto;
      bottom: 4vh;
      transform: translateY(50%);
    }

    &:hover h2 {
      transform: translateY(50%) scale(1.02);
    }
  }
}
</style>