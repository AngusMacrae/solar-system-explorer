<template>
  <div class="moon" :style="cssVars"></div>
</template>

<script>
export default {
  name: 'Moon',
  props: ['name', 'fillColour', 'diameter'],
  computed: {
    cssVars() {
      return {
        '--diameter': this.diameter / 15 + 'vw',
        '--fill-colour': this.fillColour,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.planet-system .moon {
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
  transition: all 0.2s;
}

.planet-system.expanded .moon {
  width: var(--diameter);
  height: var(--diameter);
  opacity: 1;
  margin: 2vw;
}

.moon {
  border-radius: 50%;
  background-color: var(--fill-colour);
}
</style>
