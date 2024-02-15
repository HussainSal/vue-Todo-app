<template>
  <div
    class="p-[1rem] px-[4rem] bg-[var(--color-grey3)] text-[#b3b3b3] rounded-[2rem] absolute w-[38rem] right-0 top-[6rem] userTop shadow-xl flex flex-col items-center"
  >
    <div
      class="flex flex-col items-center w-[100%] border-b-[1px] border-b-[var(--color-grey5)] pb-[1rem]"
    >
      <p class="text-[1.8rem]">gamess5656@gmail.com</p>
      <div class="mt-[2rem] flex flex-col items-center">
        <div
          class="w-[7rem] h-[7rem] bg-[var(--color-grey6)] rounded-full overflow-hidden"
        >
          <img :src="userSvg" alt="user" />
        </div>
        <p class="mt-[1.4rem] text-[2.4rem]">Hi, John Alex</p>
      </div>
    </div>
    <div
      class="w-[100%] text-[2rem] rounded-[2rem] flex flex-col items-start space-y-[2rem] py-[2rem]"
    >
      <router-link
        to="/profile"
        class="flex items-center duration-200 text-[var(--color-grey7)] hover:underline"
      >
        <span class="mr-[0.8rem]">
          <img :src="user2Svg" alt="user" />
        </span>
        Manage profile
      </router-link>
      <button
        class="text-[var(--color-delete)] flex items-center"
        @click.prevent="signOutHandler"
      >
        <span class="mr-[0.8rem]">
          <img :src="logoutSvg" alt="logout" />
        </span>
        Sign out
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userSvg from "@/assets/user.svg";
import logoutSvg from "@/assets/logout.svg";
import user2Svg from "@/assets/user2.svg";
import { signOutFunc } from "@/util/isAuth";

export default defineComponent({
  setup() {
    const signOutHandler = async () => {
      await signOutFunc();
    };
    return { userSvg, logoutSvg, user2Svg, signOutHandler };
  },
});
</script>

<style>
.userTop {
  position: relative;
}

.userTop::before {
  content: "";
  position: absolute;
  top: -9px;
  right: 23%;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--color-grey3);
}
</style>
