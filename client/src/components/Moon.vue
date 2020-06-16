<template>
  <router-link :to="path">
    <div class="moon" :style="cssVars">
      <h2>{{name}}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Moon",
  props: ["name", "fillColour", "diameter"],
  computed: {
    path() {
      return "/moon/" + this.name;
    },
    cssVars() {
      return {
        "--diameter": this.diameter / 15 + "vw",
        "--fill-colour": this.fillColour
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.moon {
  border-radius: 50%;
  background-color: var(--fill-colour);
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  h2 {
    position: absolute;
    font-size: 1.3rem;
    transform: translateX(-50%);
    left: 50%;
    bottom: -40px;
    color: $muted-colour;
  }

  &:hover h2 {
    color: $primary-colour;
  }
}

.planet-system .moon {
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

.planet-system.expanded .moon {
  width: var(--diameter);
  height: var(--diameter);
  opacity: 1;
}
</style>
