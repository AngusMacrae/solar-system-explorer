<template>
  <div id="planet-system">
    <Sol :name="sol.name" :fillColour="sol.bulkColour" :diameter="sol.diameter_ss" />
    <!-- <Sol :name="planet.name" :fillColour="planet.bulkColour" :diameter="planet.diameter" /> -->
    <Satellite v-for="(planet, index) in planets" :key="index" :name="planet.name" :fillColour="planet.bulkColour" :diameter="planet.diameter_ss" :orbitDiameter="sol.diameter_ss" :transitionDelay="(index * 2 + 2) / 10" :flexOrder="0" />
    <Satellite v-for="(moon, index) in moons" :key="index" :name="moon.name" :fillColour="moon.bulkColour" :diameter="moon.diameter_ps" :orbitDiameter="planet.diameter" :transitionDelay="(index * 2 + 2) / 10" :flexOrder="index * 2" />
  </div>
</template>

<script>
import Sol from '@/components/Sol.vue';
import Satellite from '@/components/Satellite.vue';
import sol from '@/data/sol.json';
import planets from '@/data/planets.json';
import moons from '@/data/moons.json';

export default {
  name: 'PlanetSystem',
  data() {
    return {
      sol,
      planets,
      planet: planets.filter(planet => planet.name == this.$route.params.bodyName),
      moons: moons.filter(moon => moon.planet == this.$route.params.bodyName),
    };
  },
  components: {
    Sol,
    Satellite,
  },
};
</script>

<style lang="scss" scoped>
#planet-system {
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
  #planet-system {
    flex-direction: column;
    padding-left: 0;
    padding-top: 9vh;
  }
}
</style>
