<template>
  <main class="main">
    <div>
      <!-- <img :src="notFoundImg" class="img" /> -->
      <h1>Page Not Found!</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// import notFoundImage from "../assets/notFound.png";

export default defineComponent({
  setup() {
    // const notFoundImg = notFoundImage;
    // return { notFoundImg };
  },
});
</script>

<style>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  height: 400px;
  width: 400px;
}
</style>
