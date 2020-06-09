<template>
  <div class="wrapper">
    <div class="orbit" :style="cssVars"></div>
    <router-link :to="path">
      <div class="planet" :style="cssVars">
        <h2>{{name}}</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Planet",
  props: ["name", "fillColour", "diameter"],
  computed: {
    path() {
      return "/planet/" + this.name;
    },
    cssVars() {
      return {
        "--bg-colour": this.fillColour,
        "--diameter": this.diameter / 20 + "vw"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.planet {
  border-radius: 50%;
  width: var(--diameter);
  height: var(--diameter);
  background-color: var(--bg-colour);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  transition: all 0.2s ease;
  color: #252525;

  &:hover {
    transform: scale(1.02);
    color: #999;
  }

  h2 {
    font-size: 1.3rem;
    position: relative;
    top: 40px;
  }
}

.orbit {
  width: 5000px;
  height: 5000px;
  border-radius: 50%;
  border: 1px solid #252525;
  z-index: -999;
  position: absolute;
  top: calc(var(--diameter) / 2 - 2500px);
  right: calc(var(--diameter) / 2);
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 970px) {
  .orbit {
    top: auto;
    right: calc(var(--diameter) / 2 - 2500px);
    bottom: calc(var(--diameter) / 2);
  }

  .planet {
    justify-content: center;

    h2 {
      top: auto;
      left: calc(var(--diameter) / 2 + 60px);
    }
  }
}
</style>