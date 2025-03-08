<script setup lang="ts">
  import { toTypedSchema } from "@vee-validate/zod";
  import { useForm } from "vee-validate";
  import { z } from "zod";

  useSeoMeta({
    title: "Log in",
    description: "Enter your email & password to log in.",
  });

  const schema = z.object({
    email: z
      .string({ required_error: "Заполните поле" })
      .email("Введите действительный адрес электронной почты"),
    password: z
      .string({ required_error: "Заполните поле" })
      .min(8, "Пароль должен содержать минимум 8 символов"),
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
        <h1 class="text-xl font-medium">Авторизация</h1>
        <p class="text-sm text-[rgb(97,104,112)]">Войдите, если у Вас уже есть учетная запись.</p>
      </div>
      <form @submit.prevent="onSubmit">
        <fieldset :disabled="isSubmitting" class="grid gap-3">
          <UiVeeInput type="email" name="email" placeholder="Email" :disabled="isSubmitting" />
          <UiVeeInput
            type="password"
            name="password"
            placeholder="Пароль"
            :disabled="isSubmitting"
          />
          <UiButton
            size="none"
            variant="gray"
            class="mt-3 w-full"
            type="submit"
            :disabled="isSubmitting"
            >Авторизоваться</UiButton
          >
        </fieldset>
      </form>
      <div class="flex flex-col gap-2 text-sm">
        <NuxtLink to="/reset" class="text-lightblue hover:text-darkblue">Забыли пароль?</NuxtLink>
        <span>
          Вы не имеете аккаунта?
          <NuxtLink to="/registration" class="text-lightblue hover:text-darkblue">
            Зарегистрируйтесь
          </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
