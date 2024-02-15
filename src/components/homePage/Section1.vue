<template>
  <section class="flex justify-center">
    <Container>
      <div class="flex flex-col justify-center py-[10rem] items-center">
        <h2 class="text-[4rem] mb-[3rem] font-[600]">
          Don’t let your day doing nothing
        </h2>
        <div
          class="flex max-w-[1072px] w-[100%] text-[3rem] mt-[4rem] justify-between font-[500]"
        >
          <div
            class="flex flex-col items-center gap-y-[4rem] transition-all duration-200 hover:translate-y-[-0.8rem]"
          >
            <div class="flex justify-center">
              <img :src="taskIco" alt="task" class="w-[80%]" />
            </div>
            <p>Small Task</p>
          </div>
          <div
            class="flex flex-col items-center gap-y-[4rem] transition-all duration-200 hover:translate-y-[-0.8rem]"
          >
            <div class="flex justify-center">
              <img :src="noteIco" alt="note" class="w-[80%]" />
            </div>
            <p>Write It</p>
          </div>
          <div
            class="flex flex-col items-center gap-y-[4rem] transition-all duration-200 hover:translate-y-[-0.8rem]"
          >
            <div class="flex justify-center">
              <img :src="workIco" alt="work" class="w-[80%]" />
            </div>
            <p>Do It</p>
          </div>
          <div
            class="flex flex-col items-center gap-y-[4rem] transition-all duration-200 hover:translate-y-[-0.8rem]"
          >
            <div class="flex justify-center">
              <img
                :src="repeatIco"
                alt="repeat"
                class="w-[80%] transition-all duration-200 hover:translate-y-[-0.8rem]"
              />
            </div>
            <p>Repeat</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "../ContainerBox.vue";

import repeatIco from "@/assets/repeat.svg";
import noteIco from "@/assets/note.svg";
import workIco from "@/assets/work.svg";
import taskIco from "@/assets/task.svg";

export default defineComponent({
  components: { Container },
  setup() {
    return { repeatIco, noteIco, workIco, taskIco };
  },
});
</script>
