<template>
  <div
    id="solar-system"
    :class="{ 'child-expanded': expanded != null ? true : false }"
  >
    <h1 class="title">{{ title }}</h1>
    <Sol
      :name="sol.name"
      :fillColour="sol.bulkColour"
      :diameter="sol.diameter_ss"
      :class="{ 'planet-expanded': expanded != null ? true : false }"
    />
    <Planet
      v-for="(planet, index) in planets"
      :key="index"
      :index="index"
      :name="planet.name"
      :fillColour="planet.bulkColour"
      :diameter="planet.diameter_ss"
      :orbitDiameter="sol.diameter_ss"
      :rings="planet.rings"
      :transitionDelay="(index * 2 + 2) / 10"
      :expanded="index == expanded ? true : false"
      :otherExpanded="index != expanded && expanded != null ? true : false"
      @toggle="toggleHandler(index)"
      @collapse="collapseAll()"
    />
  </div>
</template>

<script>
import Sol from "@/components/Sol.vue";
import Planet from "@/components/Planet.vue";
import sol from "@/data/sol.json";
import planets from "@/data/planets.json";

export default {
  name: "SolarSystem",
  data() {
    return {
      sol,
      planets,
      expanded: null
    };
  },
  computed: {
    title() {
      return this.expanded == null
        ? this.sol.title
        : this.planets[this.expanded].title;
    }
  },
  methods: {
    toggleHandler(target_planet_index) {
      this.expanded = target_planet_index;
    },
    collapseAll() {
      this.expanded = null;
    }
  },
  components: {
    Sol,
    Planet
  }
};
</script>

<style lang="scss" scoped>
#solar-system {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding-left: 9vw;
  padding-right: 0;
  overflow: hidden;
  transition: padding-right 0.5s;
}

#solar-system.child-expanded {
  padding-right: 9vw;
}

.title {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
}

@media (max-width: 970px) {
  #solar-system {
    flex-direction: column;
    padding-left: 0;
    padding-top: 9vh;
  }
}
</style>
