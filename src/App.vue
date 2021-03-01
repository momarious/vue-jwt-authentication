<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>

body {
    margin: 20px;
    /* background-color: royalblue !important; */
  }

.center,
.center-column,
.top,
.right,
.bottom,
.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-column {
  flex-direction: column;
}
.top {
  align-items: flex-start;
}
.right {
  justify-content: flex-end;
}
.bottom {
  align-items: flex-end;
}
.left {
  justify-content: flex-start;
}
</style>
