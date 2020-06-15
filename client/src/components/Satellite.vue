<template>
  <div class="wrapper" :style="cssVars">
    <div class="orbit" :style="cssVars"></div>
    <router-link :to="path">
      <div class="satellite" :style="cssVars">
        <h2>{{ name }}</h2>
        <!-- <div class="ring"></div> -->
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Satellite',
  props: ['name', 'fillColour', 'diameter', 'orbitDiameter', 'transitionDelay', 'flexOrder'],
  computed: {
    path() {
      return '/' + this.name;
    },
    cssVars() {
      return {
        '--fill-colour': this.fillColour,
        '--diameter-vw': this.diameter / 15 + 'vw',
        '--diameter-vh': this.diameter / 15 + 'vh',
        '--orbit-diameter': this.orbitDiameter + 'px',
        '--transition-delay': this.transitionDelay + 's',
        '--flex-order': this.flexOrder,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.wrapper {
  position: relative;
  order: var(--flex-order);
}

.satellite {
  --orbit-radius: calc(var(--orbit-diameter) / 2);
  color: $muted-colour;
  background-color: var(--fill-colour);
  position: relative;
  right: var(--orbit-radius);
  border-radius: 50%;
  width: var(--diameter-vw);
  height: var(--diameter-vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  transition: transform 0.2s ease;
  // animation: orbit-in-left 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) calc(var(--transition-delay) + 1.5s) 1 normal backwards;

  &:hover {
    transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg) scale(1.02);
    color: $primary-colour;
  }

  h2 {
    font-size: 1.3rem;
    position: relative;
    top: 40px;
    background-color: $bg-colour;
    // animation: fade-in 1s ease-in-out calc(var(--transition-delay) + 3s) 1 normal both;
  }
}

.orbit {
  width: var(--orbit-diameter);
  height: var(--orbit-diameter);
  border-radius: 50%;
  border: 1px solid $muted-colour;
  z-index: -999;
  position: absolute;
  top: calc(var(--diameter-vw) / 2 - var(--orbit-diameter) / 2);
  right: calc(var(--diameter-vw) / 2);
  // animation: fade-in 1s ease-out calc(var(--transition-delay) + 2s) 1 normal both;
}

a {
  color: inherit;
  text-decoration: none;
}

// .ring {
//   position: absolute;
//   border-radius: 50%;
//   width: calc(var(--diameter-vw) * 1.2);
//   height: calc(var(--diameter-vw) * 1.2);
//   z-index: -99;
//   background-color: white;
// }

@keyframes orbit-in-left {
  0% {
    transform: rotate(315deg) translateX(var(--orbit-radius)) rotate(-315deg);
  }
  100% {
    transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
}

@keyframes orbit-in-top {
  0% {
    transform: rotate(45deg) translateY(var(--orbit-radius)) rotate(-45deg);
  }
  100% {
    transform: rotate(0deg) translateY(var(--orbit-radius)) rotate(0deg);
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
  .satellite {
    width: var(--diameter-vh);
    height: var(--diameter-vh);
    bottom: var(--orbit-radius);
    right: auto;
    transform: rotate(0deg) translateY(var(--orbit-radius)) rotate(0deg);
    justify-content: center;

    animation: orbit-in-top 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) calc(var(--transition-delay) + 0.5s) 1 normal backwards;

    &:hover {
      transform: rotate(0deg) translateY(var(--orbit-radius)) rotate(0deg) scale(1.02);
    }

    h2 {
      top: auto;
      transform: translateX(50%);
      left: calc(var(--diameter-vh) / 2 + 20px);
      animation: fade-in 1s ease-in-out calc(var(--transition-delay) + 2s) 1 normal both;
    }
  }

  .orbit {
    width: calc(var(--orbit-diameter) / 2);
    height: calc(var(--orbit-diameter) / 2);
    top: auto;
    right: calc(var(--diameter-vh) / 2 - var(--orbit-diameter) / 4);
    bottom: calc(var(--diameter-vh) / 2);
  }
}

@media (max-width: 405px) {
  .satellite h2 {
    font-size: 1.15rem;
  }
}

@media (max-width: 370px) {
  .satellite h2 {
    left: calc(var(--diameter-vh) / 2 + 10px);
  }
}

// @media (max-width: 340px) {
//   .planet {
//     width: var(--diameter-vh);
//     height: var(--diameter-vh);
//   }
// }
</style>
