<template>
  <header
    class="container sticky top-0 z-50 mx-auto flex items-center justify-between bg-white/10 py-4 backdrop-blur-sm"
  >
    <div class="flex items-center gap-4">
      <NuxtImg src="/logo.svg" width="100" height="31,45" alt="logo" fetchpriority="high" />
    </div>
    <div class="flex items-center gap-4">
      <UiButton variant="ghost" size="sm">
        <NuxtLink to="/login">{{ $t("landing.header.buttons.login") }}</NuxtLink>
      </UiButton>
      <UiButton variant="blue" size="sm">
        <NuxtLink to="/registration">{{ $t("landing.header.buttons.signup") }}</NuxtLink></UiButton
      >
    </div>
  </header>
</template>
