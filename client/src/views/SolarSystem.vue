<template>
  <div id="solar-system">
    <Sol :name="sol.name" :fillColour="sol.bulkColour" :diameter="sol.diameter" />
    <Satellite v-for="(planet, index) in planets" :key="index" :name="planet.name" :fillColour="planet.bulkColour" :diameter="planet.diameter" :orbitDiameter="sol.diameter" :transitionDelay="(index * 2 + 2) / 10" :flexOrder="0" />
  </div>
</template>

<script>
import Sol from '@/components/Sol.vue';
import Satellite from '@/components/Satellite.vue';

export default {
  name: 'SolarSystem',
  data() {
    return {
      sol: {
        name: 'Sol',
        bulkColour: '#fbd813',
        diameter: 5000,
      },
      planets: [
        {
          name: 'Mercury',
          bulkColour: '#DBCECA',
          diameter: 25,
        },
        {
          name: 'Venus',
          bulkColour: '#8B7D82',
          diameter: 55,
        },
        {
          name: 'Earth',
          bulkColour: '#6b93d6',
          diameter: 60,
        },
        {
          name: 'Mars',
          bulkColour: '#bc2731',
          diameter: 35,
        },
        {
          name: 'Jupiter',
          bulkColour: '#d8ca9d',
          diameter: 250,
        },
        {
          name: 'Saturn',
          bulkColour: '#ab604a',
          diameter: 200,
        },
        {
          name: 'Uranus',
          bulkColour: '#bbe1e4',
          diameter: 100,
        },
        {
          name: 'Neptune',
          bulkColour: '#73ACAC',
          diameter: 100,
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
