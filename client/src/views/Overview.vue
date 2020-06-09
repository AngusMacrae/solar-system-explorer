<template>
  <div id="solar-system-overview">
    <!-- <router-link to="/planet/Mercury">Mercury</router-link> -->
    <Sol
      :name="bodies[0].name"
      :fillColour="bodies[0].bulkColour"
      :diameter="bodies[0].linkDiameter"
    />
    <Planet
      v-for="planet in planets"
      :key="planet.index"
      :name="planet.name"
      :fillColour="planet.bulkColour"
      :diameter="planet.linkDiameter"
    />
  </div>
</template>

<script>
import Sol from "@/components/Sol.vue";
import Planet from "@/components/Planet.vue";

export default {
  name: "Overview",
  data() {
    return {
      bodies: [
        {
          name: "Sol",
          bulkColour: "#fbd813",
          linkDiameter: 5000
        }
      ],
      planets: [
        {
          name: "Mercury",
          bulkColour: "#DBCECA",
          linkDiameter: 50
        },
        {
          name: "Venus",
          bulkColour: "#8B7D82",
          linkDiameter: 100
        },
        {
          name: "Earth",
          bulkColour: "#6b93d6",
          linkDiameter: 100
        },
        {
          name: "Mars",
          bulkColour: "#bc2731",
          linkDiameter: 75
        },
        {
          name: "Jupiter",
          bulkColour: "#d8ca9d",
          linkDiameter: 250
        },
        {
          name: "Saturn",
          bulkColour: "#ab604a",
          linkDiameter: 200
        },
        {
          name: "Neptune",
          bulkColour: "#73ACAC",
          linkDiameter: 150
        },
        {
          name: "Uranus",
          bulkColour: "#bbe1e4",
          linkDiameter: 150
        }
      ]
    };
  },
  components: {
    Sol,
    Planet
  }
};
</script>

<style lang="scss" scoped>
#solar-system-overview {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding-left: 115px;
  overflow: hidden;
}

@media (max-width: 970px) {
  #solar-system-overview {
    flex-direction: column;
    padding-left: 0;
    padding-top: 115px;
  }
}
</style>