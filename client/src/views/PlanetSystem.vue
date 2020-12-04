<template>
  <div
    id="solar-system"
    @click="collapseAll($event.target)"
    :class="{ 'child-expanded': expanded > -1 ? true : false }"
  >
    <h1 class="title">{{ title }}</h1>
    <transition name="slide">
      <Sol
        v-if="expanded == -1"
        :name="sol.name"
        :fillColour="sol.bulkColour"
        :diameter="sol.diameter_ss"
      />
    </transition>
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
      :otherExpanded="index != expanded && expanded > -1 ? true : false"
      @toggle="toggleHandler(index)"
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
      expanded: -1
    };
  },
  computed: {
    title() {
      return this.expanded == -1 ? sol.title : planets[this.expanded].title;
    }
  },
  methods: {
    toggleHandler(target_planet_index) {
      this.expanded = target_planet_index;
    },
    collapseAll(target_element) {
      if (target_element.id == "solar-system") {
        this.expanded = -1;
        setTimeout(() => {
          this.$router.push("/");
        }, 600);
      }
    }
  },
  mounted() {
    this.expanded = planets.findIndex(
      planet => planet.name == this.$route.params.bodyName
    );
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-8vw);
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
