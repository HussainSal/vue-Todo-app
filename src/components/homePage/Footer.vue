<template>
  <footer class="flex justify-center items-center py-[8rem]">
    <Container>
      <div
        class="flex justify-between border-t-[1px] border-[var(--color-secondary)] pt-[3.8rem] px-[4rem]"
      >
        <div class="flex flex-col text-[2.4rem]">
          <div>
            <div class="flex">
              <span>
                <img :src="Book" alt="" />
              </span>
              <p
                class="text-[var(--color-grey7)] line-clamp-2 w-[48%] ml-[2.8rem]"
              >
                Lets change your habit join with million people
              </p>
            </div>
          </div>
          <div class="mt-[6.2rem] font-[500]">
            <p>DK Tech Company</p>
            <p class="text-[var(--color-grey4)]">
              Uma Street, Lost City, Aincard
            </p>
          </div>
        </div>
        <div class="flex max-w-[500px] w-[100%] justify-between text-[2rem]">
          <div class="flex flex-col items-center">
            <h5 class="text-[2rem] text-[var(--color-secondary)] font-[500]">
              Features
            </h5>
            <div
              class="flex flex-col mt-[3.6rem] space-y-[1.3rem] text-[var(--color-grey4)] font-[600] items-center"
            >
              <router-link to="/">Task Management</router-link>
              <router-link to="/">Priority Levels</router-link>
              <router-link to="/">Sync Across Devices</router-link>
              <router-link to="/">Privacy and Security</router-link>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <h5 class="text-[2rem] text-[var(--color-secondary)] font-[500]">
              Pricing
            </h5>
            <div
              class="flex flex-col mt-[3.6rem] space-y-[1.3rem] text-[var(--color-grey4)] font-[600] items-center"
            >
              <router-link to="/">Freemium Model</router-link>
              <router-link to="/">Subscription Model</router-link>
              <router-link to="/">One-Time Purchase</router-link>
              <router-link to="/">Bundle Deals</router-link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "@/components/ContainerBox.vue";
import Book from "@/assets/book.svg";

export default defineComponent({
  components: { Container },
  setup() {
    return { Book };
  },
});
</script>

<style></style>
