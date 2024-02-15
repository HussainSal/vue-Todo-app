<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/homePage/Navbar.vue";
import Footer from "@/components/homePage/Footer.vue";

export default defineComponent({
  components: { Navbar, Footer },
  setup() {},
});
</script>
