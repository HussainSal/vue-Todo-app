<template>
  <main class="authPage">
    <section class="flex justify-center">
      <Container>
        <div class="flex justify-center relative">
          <h1
            class="absolute z-[-100] text-[35rem] text-[var(--color-grey3)] font-[600] text-nowrap top-0 left-0 leading-[1]"
          >
            {{ query === "login" ? "Log In" : "Sign Up" }}
          </h1>
          <div
            class="bg-[var(--color-grey1)] rounded-[10px] border-[var(--color-grey3)] border-[1px] text-[var(--color-grey5)] mt-[8rem] shadow-[0_1rem_2rem_1rem_rgba(0,0,0,.2)] relative"
          >
            <div
              v-if="loading"
              class="absolute bg-[rgba(0,0,0,0.6)] w-[100%] h-[100%] z-50 flex justify-center items-center"
            >
              <Loader />
            </div>
            <div
              class="flex text-[2rem] font-[600] border-b-[1px] border-[var(--color-grey3)] justify-between"
            >
              <div class="px-[3.5rem]">
                <router-link
                  to="/userAuth?mode=login"
                  :class="`px-[3.5rem] py-[2rem] block ${
                    query === `login`
                      ? `text-[var(--color-primary)] active-link `
                      : ``
                  }`"
                  >Log In</router-link
                >
              </div>
              <div class="px-[3.5rem]">
                <router-link
                  to="/userAuth?mode=signup"
                  :class="`px-[3.5rem] py-[2rem] block ${
                    query === `signup`
                      ? `text-[var(--color-primary)] active-link `
                      : ``
                  }`"
                  >Sign Up</router-link
                >
              </div>
            </div>
            <div
              v-if="isError.error"
              class="text-[#fff] text-[1.8rem] text-center bg-[#ff1e1e] mt-[1rem] px-[1rem] py-[0.4rem]"
            >
              <p>{{ isError.errorMessage }}!</p>
            </div>
            <form
              class="px-[5rem] py-[5rem] text-[1.6rem] flex flex-col"
              @submit.prevent="formSubmitHandler"
            >
              <div class="flex flex-col space-y-[2.5rem]">
                <div>
                  <input
                    v-if="query === 'signup'"
                    :class="`input ${
                      userName.isValid === false && `inputNotValid`
                    }`"
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                    v-model="userName.val"
                    @blur="userNameBlurHandler"
                    @input="userNameInputHandler"
                  />
                  <p
                    v-if="userName.isValid === false"
                    class="text-[var(--color-delete)] mt-[1rem]"
                  >
                    Username must be atleast 3 character!
                  </p>
                </div>
                <div>
                  <input
                    :class="`input ${
                      email.isValid === false && `inputNotValid`
                    }`"
                    type="email"
                    id="email"
                    placeholder="Email ID"
                    required
                    v-model="email.val"
                    @blur="emailBlurHandler"
                    @input="emailInputHandler"
                  />
                  <p
                    v-if="email.isValid === false"
                    class="text-[var(--color-delete)] mt-[1rem]"
                  >
                    Please include "@" in the email address.
                  </p>
                </div>
                <div>
                  <input
                    :class="`input ${
                      password.isValid === false && `inputNotValid`
                    }`"
                    type="password"
                    id="pass"
                    placeholder="Password"
                    required
                    v-model="password.val"
                    @blur="passwordBlurHandler"
                    @input="passwordInputHandler"
                  />
                  <p
                    v-if="password.isValid === false"
                    class="text-[var(--color-delete)] mt-[1rem]"
                  >
                    Must be atleast 6 characters!
                  </p>
                </div>
              </div>
              <router-link
                v-if="query === 'login'"
                class="mt-[3rem] inline-block"
                to="/"
                >Forget password?</router-link
              >
              <button
                class="block shadow-md hover:bg-[var(--color-primary-hover)] px-[5rem] py-[1.5rem] bg-[var(--color-primary)] text-[#fff] text-[1.8rem] rounded-[8px] mt-[4rem]"
              >
                {{ query === "login" ? "Sign In" : "Register" }}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Container from "@/components/ContainerBox.vue";
import { useRoute } from "vue-router";
import { signIn, signUp } from "@/util/isAuth";
import Loader from "@/assets/Loader.vue";

type InputVal = {
  val: string;
  isValid: null | boolean;
  isTouched: boolean;
};

export default defineComponent({
  components: { Container, Loader },
  setup() {
    const route = useRoute();
    const query = ref<string>(String(route.query.mode));
    const userName = ref<InputVal>({
      val: "",
      isValid: null,
      isTouched: false,
    });
    const loading = ref(false);
    const isError = ref({ error: false, errorMessage: "" });

    const email = ref<InputVal>({
      val: "",
      isValid: null,
      isTouched: false,
    });

    const password = ref<InputVal>({
      val: "",
      isValid: null,
      isTouched: false,
    });

    return {
      query,
      userName,
      email,
      password,
      loading,
      isError,
    };
  },
  watch: {
    $route: "changeHandler",
  },
  beforeUpdate() {
    this.email = { val: "", isValid: null, isTouched: false };
    this.userName = { val: "", isValid: null, isTouched: false };
    this.password = { val: "", isValid: null, isTouched: false };
    this.isError = { error: false, errorMessage: "" };
  },

  methods: {
    changeHandler() {
      console.log("hi");
      this.query = String(this.$route.query.mode);
    },

    userNameBlurHandler() {
      this.userName.isTouched = true;
      if (this.userName.val === "") this.userName.isValid = false;
    },

    userNameInputHandler(e: InputEvent) {
      const nameIsValid = /^[a-zA-Z0-9]{3,12}$/g.test(
        (e.target as HTMLInputElement).value
      );
      this.userName.isValid = nameIsValid;
    },

    emailBlurHandler() {
      this.email.isTouched = true;
      if (this.email.val === "") this.email.isValid = false;
    },

    emailInputHandler(e: Event) {
      const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(
        (e.target as HTMLInputElement).value
      );

      this.email.isValid = emailIsValid;
    },

    passwordBlurHandler() {
      this.password.isTouched = true;
      if (this.password.val === "") this.password.isValid = false;
    },

    passwordInputHandler(e: Event) {
      const passwordIsValid = /^[a-zA-Z]{6,12}$/g.test(
        (e.target as HTMLInputElement).value
      );

      this.password.isValid = passwordIsValid;
    },

    async formSubmitHandler(e: Event) {
      try {
        this.loading = true;
        this.isError.error = false;
        if (this.$route.query.mode === "signup") {
          if (
            !this.userName.isValid ||
            !this.email.isValid ||
            !this.password.isValid
          )
            return;
          const res = await signUp({
            email: this.email.val,
            password: this.password.val,
            username: this.userName.val,
          });

          this.$router.push("/todo");
        } else {
          if (!this.email.isValid || !this.password.isValid) return;
          const res = await signIn({
            email: this.email.val,
            password: this.password.val,
          });
          this.$router.push("/todo");
        }
      } catch (error: any) {
        this.isError.error = true;
        this.isError.errorMessage =
          error.code.slice(5).charAt(0).toUpperCase() +
          error.code.slice(6).replace(/-/g, " ");
        return;
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style>
.input {
  width: 100%;
  padding: 1.5rem 3rem;
  border-radius: 8px;
  background-color: var(--color-grey3);
}

.input:-internal-autofill-selected {
  background-color: var(--color-grey3) !important;
}

.inputNotValid {
  border: 1px solid var(--color-delete);
}

.active-link {
  position: relative;
}

.active-link::after {
  content: "";
  position: absolute;
  background-color: var(--color-primary);
  width: 100%;
  height: 0.6rem;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  left: 0;
  bottom: 0;
}
</style>
