<template>
  <div id="planet-system">
    <Sol :name="planet.name" :fillColour="planet.bulkColour" :diameter="planet.diameter" />
    <Satellite v-for="(moon, index) in moons" :key="index" :name="moon.name" :fillColour="moon.bulkColour" :diameter="moon.diameter" :orbitDiameter="planet.diameter" :transitionDelay="(index * 2 + 2) / 10" :flexOrder="0" />
  </div>
</template>

<script>
import Sol from '@/components/Sol.vue';
import Satellite from '@/components/Satellite.vue';

export default {
  name: 'PlanetSystem',
  data() {
    return {
      planet: {
        name: this.$route.params.bodyName,
        bulkColour: '#6b93d6',
        diameter: 3000,
      },
      // moons: fetch('http://localhost:5000/api/moons/' + this.$route.params.bodyName).then(response => response.json()),
      moons: [
        {
          name: 'Moon',
          bulkColour: '#DBCECA',
          diameter: 500,
        },
      ],
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
