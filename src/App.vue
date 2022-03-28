<template>
  <div id="app">
    <vue-page-transition name="fade-in-up">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --overlay-bg: #45462a !important;
}

.overlay-top {
  z-index: 999;
}

html,
body {
  font-size: 10px;
}

#app {
  background: #f2f2f2;
  color: #000;
}
</style>
