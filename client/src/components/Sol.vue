<template>
  <div class="wrapper offscreen">
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
  },
  mounted() {
    setTimeout(() => {
      this.$el.classList.remove("offscreen");
    }, 100);
    console.log("hi");
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.wrapper {
  position: absolute;
  right: 92vw;
  transition: right 0.8s ease-out;
}

.offscreen {
  right: 100vw;
  h2 {
    opacity: 0 !important;
  }
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
    opacity: 1;
    transition: all 0.2s ease;
    transition: opacity 0.3s ease-in-out 0.9s;
  }

  &:hover h2 {
    transform: translateX(50%) scale(1.02);
    color: $bg-colour;
  }
}

@media (max-width: 970px) {
  .wrapper {
    right: auto;
    bottom: 92vh;
  }

  .wrapper.offscreen {
    bottom: 100vh;
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