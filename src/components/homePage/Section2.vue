<template>
  <section class="flex justify-center">
    <Container>
      <div class="flex py-[10rem] gap-x-[5rem]">
        <div>
          <img :src="img" alt="" class="person" />
        </div>
        <div class="flex flex-col justify-center w-[50%]">
          <h2 class="text-[4.4rem] text-wrap mb-[3rem] font-[600]">
            Achieve your target and won your life
          </h2>
          <router-link
            to="/todo"
            class="shadow-lg hover:bg-[var(--color-primary-hover)] bg-[var(--color-primary)] text-[2.4rem] rounded-[8px] font-[500] py-[0.7rem] px-[2.9rem] inline-block self-start"
          >
            Get started
          </router-link>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Container from "../ContainerBox.vue";
import img from "@/assets/section2.png";

export default defineComponent({
  components: { Container },
  setup() {
    return { img };
  },
});
</script>
