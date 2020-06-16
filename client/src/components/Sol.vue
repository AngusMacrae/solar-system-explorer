<template>
  <div class="wrapper">
    <router-link :to="path">
      <div class="body" :style="cssVars">
        <h2>{{ name }}</h2>
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
  transition: transform 0.3s ease;
  animation: slide-in-left 1s ease-out 1 normal backwards;
}

.wrapper.planet-expanded {
  transform: translateX(-8vw);
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
    transition: transform 0.2s;
    animation: fade-in 0.5s ease-out 1s 1 normal backwards;
  }

  &:hover h2 {
    transform: translateX(50%) scale(1.02);
    color: $bg-colour;
  }
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-8vw);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-in-top {
  0% {
    bottom: 100vh;
  }
  100% {
    bottom: 92vh;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 970px) {
  .wrapper {
    animation: slide-in-top 0.8s ease-out 0.5s 1 normal both;
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
      animation: fade-in 0.3s ease-out 1.5s 1 normal both;
    }

    &:hover h2 {
      transform: translateY(50%) scale(1.02);
    }
  }
}

@media (max-width: 405px) {
  a h2 {
    font-size: 1.15rem;
  }
}
</style>
