<script setup lang="ts">
  import { vOnClickOutside } from "@vueuse/components";
  import { CornerRightDown } from "untitledui-js/vue";

  const keys = useMagicKeys();
  const ctrlE = keys["Ctrl+E"];

  const textInput = useTemplateRef("textInput");
  const inputFocus = ref(false);

  const newTask = ref("");

  function handleInput() {
    if (textInput.value) {
      textInput.value.style.height = "auto";
      textInput.value.style.height = textInput.value.scrollHeight + "px";
      const parent = textInput.value.parentNode;
      parent.style.height = textInput.value.scrollHeight + "px";
    }
  }

  const focusInputFalse = () => {
    if (newTask.value.length === 0) {
      inputFocus.value = false;
    }
  };

  const focusInput = () => {
    inputFocus.value = true;

    setTimeout(() => {
      if (textInput.value) {
        textInput.value.focus();
      }
    }, 100);
  };

  watch(ctrlE, (v) => {
    if (v) focusInput();
  });
</script>

<template>
  <div
    v-on-click-outside="focusInputFalse"
    class="relative flex w-full cursor-pointer flex-row items-start justify-between gap-3 rounded-lg px-5 py-3 transition-all"
    :class="[
      inputFocus
        ? 'z-50 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]'
        : 'bg-[#e0e3e6]/70 shadow-none hover:bg-[#e0e3e6]',
    ]"
    @click="focusInput"
  >
    <div class="absolute left-0 top-0 flex h-11 w-11 shrink-0 flex-col items-center justify-center">
      <span
        class="block h-5 w-5 rounded-[6px] bg-[#e0e3e6] transition-transform"
        :class="[inputFocus ? 'translate-x-0 scale-100' : '-translate-x-2/3 scale-0']"
      ></span>
    </div>
    <div
      class="relative flex h-5 w-full items-start justify-start gap-3 transition-[padding,height]"
      :class="[inputFocus ? 'pl-5' : 'pl-0']"
    >
      <div v-if="!inputFocus" class="text-sm text-[#C4C7CA]">{{ $t("app.header.input") }}</div>
      <textarea
        v-model="newTask"
        v-if="inputFocus"
        ref="textInput"
        rows="1"
        :placeholder="$t('app.header.input')"
        class="h-full w-full resize-none overflow-hidden break-words bg-transparent text-sm outline-none"
        type="text"
        @input="handleInput"
      />
    </div>
    <Transition mode="out-in">
      <UiKeyboardKey v-if="!inputFocus" :keys="['Ctrl', 'E']" />
      <button v-else>
        <CornerRightDown color="#C4C7CA" :size="16" />
      </button>
    </Transition>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.1s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
