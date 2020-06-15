<template>
  <div id="solar-system" @click="collapseAll($event.target)" :class="{ 'child-expanded': expanded != null ? true : false }">
    <Sol :name="sol.name" :fillColour="sol.bulkColour" :diameter="sol.diameter_ss" :class="{ 'planet-expanded': expanded != null ? true : false }" />
    <Planet v-for="(planet, index) in planets" :key="index" :name="planet.name" :fillColour="planet.bulkColour" :diameter="planet.diameter_ss" :orbitDiameter="sol.diameter_ss" :transitionDelay="(index * 2 + 2) / 10" :expanded="index == expanded ? true : false" :otherExpanded="index != expanded && expanded != null ? true : false" @toggle="toggleHandler(index)" />
  </div>
</template>

<script>
import Sol from '@/components/Sol.vue';
import Planet from '@/components/Planet.vue';
import sol from '@/data/sol.json';
import planets from '@/data/planets.json';

export default {
  name: 'SolarSystem',
  data() {
    return {
      sol,
      planets,
      expanded: null,
    };
  },
  methods: {
    toggleHandler(target_planet_index) {
      this.expanded = target_planet_index;
    },
    collapseAll(target_element) {
      if (target_element.id == 'solar-system') {
        this.expanded = null;
      }
    },
  },
  components: {
    Sol,
    Planet,
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
  transition: padding-left 0.2s;
}

#solar-system.child-expanded {
  padding-left: 0;
}

@media (max-width: 970px) {
  #solar-system {
    flex-direction: column;
    padding-left: 0;
    padding-top: 9vh;
  }
}
</style>
