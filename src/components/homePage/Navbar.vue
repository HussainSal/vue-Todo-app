<template>
  <nav class="flex justify-center bg-[var(--color-grey1)]">
    <Container>
      <div class="flex justify-between py-[2.6rem] items-center">
        <router-link to="/">
          <img :src="logo" alt="Todo" class="w-[100%]" />
        </router-link>
        <div class="space-x-[2.6rem] text-[2rem]" v-if="!isAuth()">
          <router-link
            to="/userAuth?mode=login"
            class="shadow-lg hover:bg-[var(--color-secondary-hover)] bg-[var(--color-secondary)] text-[2.4rem] rounded-[10px] font-[500] py-[0.7rem] px-[2.9rem] inline-block"
          >
            Log In
          </router-link>
          <router-link
            to="/userAuth?mode=signup"
            class="hover:text-[var(--color-primary)]"
          >
            Sign Up
          </router-link>
        </div>
        <div class="relative" v-if="isAuth()">
          <button
            type="button"
            class="flex items-center text-[2rem]"
            @click.prevent="userMenuHandler"
            @keydown.prevent="closeUserMenuHandler"
          >
            <div
              class="w-[4rem] h-[4rem] bg-[var(--color-grey6)] rounded-full overflow-hidden"
            >
              <img :src="userSvg" alt="user" />
            </div>
            <p class="ml-[1.2rem] font-[500] text-[var(--color-grey6)]">
              John Alex
            </p>
            <div class="ml-[0.6rem]">
              <img
                :src="arrDown"
                alt="arrow"
                :class="`${
                  userMenu ? `rotate-[-180deg]` : `rotate-0`
                } duration-200 ease-in-out`"
              />
            </div>
          </button>
          <UserMenu v-if="userMenu" />
        </div>
      </div>
    </Container>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import logo from "@/assets/todoLogo.svg";
import Container from "../ContainerBox.vue";

import arrDown from "@/assets/arrowDown.svg";
import userSvg from "@/assets/user.svg";
import UserMenu from "../UserMenu.vue";
import { isAuth } from "@/util/isAuth";

export default defineComponent({
  components: { Container, UserMenu },
  setup() {
    const userMenu = ref(false);

    const userMenuHandler = () => {
      userMenu.value = !userMenu.value;
    };
    const closeUserMenuHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") userMenu.value = false;
    };

    return {
      logo,
      userSvg,
      arrDown,
      userMenu,
      userMenuHandler,
      closeUserMenuHandler,
      isAuth,
    };
  },
});
</script>

<style></style>
