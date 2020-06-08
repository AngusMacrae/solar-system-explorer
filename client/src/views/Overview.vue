<template>
  <div id="solar-system-overview">
    <!-- <router-link to="/planet/Mercury">Mercury</router-link> -->
    <SSObject
      v-for="object in Objects"
      :key="object.index"
      :name="object.name"
      :fillColour="object.bulkColour"
      :diameter="object.linkDiameter"
    />
  </div>
</template>

<script>
import SSObject from "@/components/SSObject.vue";

export default {
  name: "Overview",
  data() {
    return {
      Objects: [
        {
          name: "Sol",
          bulkColour: "#fbd813",
          linkDiameter: 300
        },
        {
          name: "Mercury",
          bulkColour: "#DBCECA",
          linkDiameter: 50
        },
        {
          name: "Venus",
          bulkColour: "#fbd813",
          linkDiameter: 300
        },
        {
          name: "Earth",
          bulkColour: "#DBCECA",
          linkDiameter: 50
        },
        {
          name: "Mars",
          bulkColour: "#fbd813",
          linkDiameter: 300
        },
        {
          name: "Jupiter",
          bulkColour: "#DBCECA",
          linkDiameter: 50
        },
        {
          name: "Saturn",
          bulkColour: "#DBCECA",
          linkDiameter: 50
        },
        {
          name: "Neptune",
          bulkColour: "#fbd813",
          linkDiameter: 300
        },
        {
          name: "Uranus",
          bulkColour: "#DBCECA",
          linkDiameter: 50
        }
      ]
    };
  },
  components: {
    SSObject
  }
};
</script>

<style lang="scss" scoped>
#solar-system-overview {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #999;
  }
}
</style>