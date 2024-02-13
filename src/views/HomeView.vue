<template>
  <Header />
  <main>
    <Section1 />
    <Section2 />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/homePage/Header.vue";
import Section1 from "@/components/homePage/Section1.vue";
import Section2 from "@/components/homePage/Section2.vue";
export default defineComponent({
  components: { Header, Section1, Section2 },
  name: "HomeView",
});
</script>
