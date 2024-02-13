<template>
  <header class="flex justify-center">
    <Container>
      <div class="flex items-center py-[8rem]">
        <div class="text-center">
          <h1 class="text-[4.4rem] line-clamp-2 mb-[3rem] font-[600]">
            Organizing your day activity with Todo Daily
          </h1>
          <router-link
            to="/todo"
            class="shadow-lg bg-[var(--color-primary)] text-[2.4rem] rounded-[8px] font-[500] py-[0.7rem] px-[2.9rem] inline-block"
          >
            Get started
          </router-link>
        </div>
        <div class="mt-[4rem] max-w-[600px] w-[100%]">
          <img :src="homeImg" alt="todo" />
        </div>
      </div>
    </Container>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "../ContainerBox.vue";
import homeImg from "@/assets/homeImg.png";

export default defineComponent({
  components: { Container },
  setup() {
    return { homeImg };
  },
});
</script>

<style></style>
