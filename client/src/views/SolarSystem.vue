<template>
  <div id="solar-system">
    <Sol :name="sol.name" :fillColour="sol.bulkColour" :diameter="sol.diameter_ss" />
    <Satellite v-for="(planet, index) in planets" :key="index" :name="planet.name" :fillColour="planet.bulkColour" :diameter="planet.diameter_ss" :orbitDiameter="sol.diameter_ss" :transitionDelay="(index * 2 + 2) / 10" :flexOrder="0" />
  </div>
</template>

<script>
import Sol from '@/components/Sol.vue';
import Satellite from '@/components/Satellite.vue';
import sol from '@/data/sol.json';
import planets from '@/data/planets.json';

export default {
  name: 'SolarSystem',
  data() {
    return {
      sol,
      planets,
    };
  },
  components: {
    Sol,
    Satellite,
  },
};
</script>

<style lang="scss" scoped>
#solar-system {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding-left: 9vw;
  overflow: hidden;
}

@media (max-width: 970px) {
  #solar-system {
    flex-direction: column;
    padding-left: 0;
    padding-top: 9vh;
  }
}
</style>
