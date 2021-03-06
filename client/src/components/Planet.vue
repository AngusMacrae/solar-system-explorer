<template>
  <div
    class="planet-system"
    :style="cssVars"
    :class="{ expanded: expanded, 'other-expanded': otherExpanded, 'with-rings': rings }"
>
    <div class="planet-wrapper" @click="$emit('toggle', $event.target)">
      <div class="orbit"></div>
      <router-link :to="path" :event="expanded ? 'click' : ''">
        <div class="planet">
          <h2>{{ name }}</h2>
          <img src="../assets/rings.svg" class="rings" v-if="rings" />
        </div>
      </router-link>
    </div>
    <Moon
      v-for="(moon, index) in moons"
      :key="index"
      :name="moon.name"
      :fillColour="moon.bulkColour"
      :diameter="moon.diameter"
    />
    <transition name="fade">
      <button class="back-btn" v-if="expanded" @click="$emit('collapse')">&#8592; Back to Solar System</button>
    </transition>
  </div>
</template>

<script>
import Moon from "@/components/Moon.vue";
import moons_list from "@/data/moons.json";

export default {
  name: "Planet",
  props: [
    "index",
    "name",
    "fillColour",
    "diameter",
    "orbitDiameter",
    "rings",
    "transitionDelay",
    "expanded",
    "otherExpanded"
  ],
  computed: {
    path() {
      return "/planet/" + this.name;
    },
    moons() {
      return moons_list.filter(moon => moon.planet == this.name);
    },
    cssVars() {
      return {
        "--svg-url": `url(${require("@/assets/" + this.name + ".svg")})`,
        "--fill-colour": this.fillColour,
        "--planet-diameter-hor": this.diameter / 15 + "vw",
        "--planet-radius-hor": this.diameter / 30 + "vw",
        "--planet-diameter-ver": this.diameter / 15 + "vh",
        "--planet-radius-ver": this.diameter / 30 + "vh",
        "--orbit-diameter": this.orbitDiameter + "px",
        "--orbit-radius": this.orbitDiameter / 2 + "px",
        "--transition-delay": this.transitionDelay + "s",
        "--flex-order": this.index > 4 ? 1 : 0
      };
    }
  },
  components: {
    Moon
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.planet-system {
  display: flex;
  position: relative;
  /* justify-content: center; */
  justify-content: space-evenly;
  align-items: center;
  width: var(--planet-diameter-hor);
  transition: width 0.5s ease-in-out;

  &.with-rings {
    /* width: calc(var(--planet-diameter-hor) * 2); */
    /* margin-left: 2vw; */
    /* margin-right: 2vw; */
  }

  &.expanded {
    width: 82vw;
    justify-content: space-evenly;
  }

  &.other-expanded {
    width: 0;
  }
}

.planet-wrapper {
  position: relative;
  order: var(--flex-order);
}

.other-expanded {
  .planet, .rings {
    width: 0;
    height: 0;
    opacity: 0;
  }
}

.expanded {
  &.with-rings .planet-wrapper {
    /* margin-left: 7vw; */
  }

  .planet {
    width: 20vw;
    height: 20vw;
  }
}

.planet {
  color: $muted-colour;
  background-color: var(--fill-colour);
  background-image: var(--svg-url);
  position: relative;
  right: var(--orbit-radius);
  border-radius: 50%;
  width: var(--planet-diameter-hor);
  height: var(--planet-diameter-hor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out,
    height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  animation: orbit-in-left 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)
    calc(var(--transition-delay) + 0.5s) 1 normal backwards;

  &:hover {
    transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)
      scale(1.02);
    color: $primary-colour;
  }

  h2 {
    font-size: 1.3rem;
    position: relative;
    top: 40px;
    background-color: $bg-colour;
    animation: fade-in 1s ease-in-out calc(var(--transition-delay) + 1.5s) 1
      normal backwards;
  }
}

.expanded .orbit,
.other-expanded .orbit {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.orbit {
  width: var(--orbit-diameter);
  height: var(--orbit-diameter);
  border-radius: 50%;
  border: 1px solid $muted-colour;
  z-index: -999;
  position: absolute;
  top: calc(var(--planet-radius-hor) - var(--orbit-radius));
  right: var(--planet-radius-hor);
  transition: opacity 0.3s ease-in-out 0.2s;
  animation: fade-in 1s ease-out calc(var(--transition-delay) + 1s) 1 normal
    backwards;
}

a {
  color: inherit;
  text-decoration: none;
}

.rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  max-width: none;
  width: calc(var(--planet-diameter-hor) * 2);
  height: calc(var(--planet-diameter-hor) * 0.737);
  transition: width 0.5s ease-in-out, height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: 0.6;
  /* z-index: -99; */
}

.expanded .rings {
  width: 40vw;
  height: calc(40vw * 0.3685);
}

.back-btn {
  position: absolute;
  top: 0;
  left: 0;
  color: inherit;
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

}

.fade-enter-active {
  transition: opacity 0.5s 0.5s
}

.fade-leave-active {
  transition: opacity 0.05s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

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
  .planet {
    width: var(--planet-diameter-ver);
    height: var(--planet-diameter-ver);
    bottom: var(--orbit-radius);
    right: auto;
    transform: rotate(0deg) translateY(var(--orbit-radius)) rotate(0deg);
    justify-content: center;

    animation: orbit-in-top 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)
      var(--transition-delay) 1 normal backwards;

    &:hover {
      transform: rotate(0deg) translateY(var(--orbit-radius)) rotate(0deg)
        scale(1.02);
    }

    h2 {
      top: auto;
      transform: translateX(50%);
      left: calc(var(--planet-diameter-ver) / 2 + 20px);
      animation: fade-in 1s ease-in-out calc(var(--transition-delay) + 2s) 1
        normal both;
    }
  }

  .with-rings .planet h2 {
      transform: translateX(50%) translateY(20px);
  }

  .orbit {
    width: calc(var(--orbit-diameter) / 2);
    height: calc(var(--orbit-diameter) / 2);
    top: auto;
    right: calc(var(--planet-diameter-ver) / 2 - var(--orbit-diameter) / 4);
    bottom: calc(var(--planet-diameter-ver) / 2);
  }

  .rings {
    width: calc(var(--planet-diameter-ver) * 2);
    height: calc(var(--planet-diameter-ver) * 0.737);
  }
}

@media (max-width: 405px) {
  .planet h2 {
    font-size: 1.15rem;
  }
}

@media (max-width: 370px) {
  .planet h2 {
    left: calc(var(--planet-diameter-ver) / 2 + 10px);
  }
}

// @media (max-width: 340px) {
//   .planet {
//     width: var(--planet-diameter-ver);
//     height: var(--planet-diameter-ver);
//   }
// }
</style>
