<template>
  <nav class="flex justify-center bg-[var(--color-grey1)]">
    <Container>
      <div class="flex justify-between py-[2.6rem] items-center">
        <router-link to="/">
          <img :src="logo" alt="Todo" class="w-[100%]" />
        </router-link>
        <div class="space-x-[2.6rem] text-[2rem]">
          <router-link
            to="/userAuth?mode=login"
            class="shadow-lg bg-[var(--color-secondary)] text-[2.4rem] rounded-[10px] font-[500] py-[0.7rem] px-[2.9rem] inline-block"
          >
            Log In
          </router-link>
          <router-link to="/userAuth?mode=signup"> Sign Up </router-link>
        </div>
      </div>
    </Container>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/todoLogo.svg";
import Container from "../ContainerBox.vue";

export default defineComponent({
  components: { Container },
  setup() {
    return { logo };
  },
});
</script>

<style></style>
