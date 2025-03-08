<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <input
    v-bind="props"
    :class="styles({ class: props.class })"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      /** Additional classes to add to the input */
      class?: any;
      /** The id of the input */
      id?: string;
      /** The name of the input */
      name?: string;
      /** The placeholder of the input */
      placeholder?: string;
      /** Whether the input is disabled */
      disabled?: boolean;
      /** Whether the input is required */
      required?: boolean;
      /** The type of the input */
      type?: string;
      /** The value of the input */
      modelValue?: any;
      /** The maximum length of the input */
      maxlength?: number;
      /** The `RegExp` pattern of the input */
      pattern?: string;
    }>(),
    {
      type: "text",
      modelValue: "",
    }
  );

  const emit = defineEmits<{
    "update:modelValue": [value: string];
  }>();

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    let value = target.value;

    /* val input with pattern */
    if (props.pattern) {
      const regex = new RegExp(props.pattern);
      value = Array.from(value)
        .filter((char) => regex.test(char))
        .join("");
    }

    /* Handle maxlength */
    if (props.maxlength) {
      value = value.slice(0, props.maxlength);
    }

    target.value = value;
    emit("update:modelValue", value);
  };

  const styles = tv({
    base: "form-input w-full rounded-md border-none bg-[#F5F7FA] p-4 text-sm font-medium text-[#27272b] outline-none ring ring-0 transition-all file:border-0 file:bg-transparent file:px-1 file:text-sm file:font-medium file:text-foreground placeholder:text-[#B3B7BC] hover:ring-[#e7e9ec] file:hover:cursor-pointer focus:bg-[#fff] focus:outline-none focus:ring-0 focus:ring-2 focus:ring-[#008FFD] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
  });
</script>
