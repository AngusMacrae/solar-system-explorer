<template>
  <router-view :key="$route.path" />
</template>

<style lang="scss">
@import "scss/variables";

*,
*:before,
*:after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  width: 100vw;
  line-height: 1.5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bg-colour;
  color: $primary-colour;
}

ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

.flow {
  --flow-space: 1em;
}

.flow > * + * {
  margin-top: var(--flow-space);
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
