<script setup lang="ts">
  import { toTypedSchema } from "@vee-validate/zod";
  import { useForm } from "vee-validate";
  import { z } from "zod";

  useSeoMeta({
    title: "Восстановления пароля",
    description: "Введите email для восстановления пароля",
  });

  const schema = z.object({
    email: z
      .string({ required_error: "Заполните поле" })
      .email("Введите действительный адрес электронной почты"),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async () => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 3000));
    useSonner.promise(promise, {
      loading: "Sending information to our servers...",
      success: () => "We updated your information.",
      error: () => "Error! Your information could not be sent to our servers!",
    });
  });

  definePageMeta({
    layout: false,
  });
</script>

<template>
  <div class="flex h-dvh w-dvw items-center justify-center bg-[#f7f8fa]">
    <div
      class="m-auto grid max-w-md gap-5 rounded-3xl bg-white p-12 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-medium">Восстановление пароля</h1>
        <p class="text-sm text-[rgb(97,104,112)]">
          Чтобы сбросить свой пароль, пожалуйста, введите адрес электронной почты вашей учетной
          записи.
        </p>
      </div>
      <form @submit.prevent="onSubmit">
        <fieldset :disabled="isSubmitting" class="grid gap-3">
          <UiVeeInput type="email" name="email" placeholder="Email" :disabled="isSubmitting" />
          <UiButton
            size="none"
            variant="gray"
            class="mt-3 w-full"
            type="submit"
            :loading="isSubmitting"
            >Восстановить пароль</UiButton
          >
        </fieldset>
      </form>
    </div>
  </div>
</template>
