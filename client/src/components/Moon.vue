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
        "--svg-url": `url(${require("@/assets/" + this.name + ".svg")})`,
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
  background-image: var(--svg-url);
  position: relative;
  transition: all 0.5s ease-in-out;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
  visibility: hidden;

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
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s;
  }

  &:hover h2 {
    color: $primary-colour;
  }
}

.expanded {
  .moon {
    width: var(--diameter);
    height: var(--diameter);
    opacity: 1;
    visibility: visible;
  }
  h2 {
    transition: opacity 0.3s 0.2s;
    opacity: 1;
  }
}
</style>
