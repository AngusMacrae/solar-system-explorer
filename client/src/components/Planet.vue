<template>
  <div class="wrapper offscreen">
    <div class="orbit" :style="cssVars"></div>
    <router-link :to="path" disabled>
      <div class="planet" :style="cssVars">
        <h2>{{name}}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Planet",
  props: ["name", "fillColour", "diameter", "solDiameter", "transitionDelay"],
  computed: {
    path() {
      return "/planet/" + this.name;
    },
    cssVars() {
      return {
        "--fill-colour": this.fillColour,
        "--diameter-vw": this.diameter / 15 + "vw",
        "--diameter-vh": this.diameter / 15 + "vh",
        "--sol-diameter": this.solDiameter + "px",
        "--transition-delay": this.transitionDelay + "s"
      };
    }
  },
  mounted() {
    setTimeout(() => {
      this.$el.classList.remove("offscreen");
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.wrapper {
  position: relative;
}

.planet {
  position: relative;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  width: var(--diameter-vw);
  height: var(--diameter-vw);
  background-color: var(--fill-colour);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  transition: transform 0.2s ease,
    bottom 1.2s cubic-bezier(0.57, 0.02, 0.78, 1) var(--transition-delay),
    left 1.2s ease-out var(--transition-delay);
  color: $muted-colour;

  &:hover {
    transform: scale(1.02);
    color: $primary-colour;
  }

  h2 {
    font-size: 1.3rem;
    position: relative;
    top: 40px;
    background-color: $bg-colour;
    opacity: 1;
    transition: opacity 0.3s ease-in-out calc(var(--transition-delay) + 1.3s);
  }
}

.orbit {
  width: var(--sol-diameter);
  height: var(--sol-diameter);
  border-radius: 50%;
  border: 1px solid $muted-colour;
  z-index: -999;
  position: absolute;
  top: calc(var(--diameter-vw) / 2 - var(--sol-diameter) / 2);
  right: calc(var(--diameter-vw) / 2);
  opacity: 1;
  transition: opacity 0.3s ease-in-out calc(var(--transition-delay) + 0.8s);
}

a {
  color: inherit;
  text-decoration: none;
}

.offscreen {
  .orbit {
    opacity: 0;
  }

  .planet {
    bottom: 75vh;
    left: -10vw;
    h2 {
      opacity: 0;
    }
  }
}

@media (max-width: 970px) {
  .planet {
    width: var(--diameter-vh);
    height: var(--diameter-vh);
    transition: transform 0.2s ease,
      left 1.2s cubic-bezier(0.57, 0.02, 0.78, 1) var(--transition-delay),
      bottom 1.2s ease-out var(--transition-delay);
  }

  .offscreen {
    .planet {
      left: -75vw;
      bottom: 15vh;
    }
  }

  .orbit {
    width: calc(var(--sol-diameter) / 2);
    height: calc(var(--sol-diameter) / 2);
    top: auto;
    right: calc(var(--diameter-vh) / 2 - var(--sol-diameter) / 4);
    bottom: calc(var(--diameter-vh) / 2);
  }

  .planet {
    justify-content: center;

    h2 {
      top: auto;
      transform: translateX(50%);
      left: calc(var(--diameter-vh) / 2 + 20px);
    }
  }
}

@media (max-width: 405px) {
  .planet h2 {
    // left: calc(var(--diameter-vh) / 2 + 10px);
    font-size: 1.15rem;
  }
}

// @media (max-width: 340px) {
//   .planet {
//     width: var(--diameter-vh);
//     height: var(--diameter-vh);
//   }
// }
</style>