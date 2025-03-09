<script setup lang="ts">
  import { toTypedSchema } from "@vee-validate/zod";
  import { useForm } from "vee-validate";
  import { z } from "zod";

  useSeoMeta({
    title: "Авторизация",
    description: "Введите слой email и пароля для авторизации.",
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
      class="relative m-auto grid w-full max-w-sm gap-5 rounded-3xl bg-white p-12 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
    >
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-medium">{{ $t("login.title") }}</h1>
        <p class="text-sm text-[rgb(97,104,112)]">{{ $t("login.description") }}</p>
      </div>
      <form @submit.prevent="onSubmit">
        <fieldset :disabled="isSubmitting" class="grid gap-3">
          <UiVeeInput
            type="email"
            name="email"
            :placeholder="$t('login.email')"
            :disabled="isSubmitting"
          />
          <UiVeeInput
            type="password"
            name="password"
            :placeholder="$t('login.password')"
            :disabled="isSubmitting"
          />
          <UiButton
            size="none"
            variant="gray"
            class="mt-3 w-full"
            type="submit"
            :loading="isSubmitting"
            >{{ $t("login.login") }}</UiButton
          >
        </fieldset>
      </form>
      <div class="flex flex-col gap-2 text-sm">
        <NuxtLink to="/reset" class="text-lightblue hover:text-darkblue">{{
          $t("login.forgot")
        }}</NuxtLink>
        <span>
          {{ $t("login.signup") }}
          <NuxtLink to="/registration" class="text-lightblue hover:text-darkblue">
            {{ $t("login.signup_button") }}
          </NuxtLink>
        </span>
      </div>
      <div class="absolute -top-16 flex w-full items-center justify-center">
        <NuxtImg src="/logo.svg" width="118" height="38" />
      </div>
    </div>
  </div>
</template>
