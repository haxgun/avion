<template>
  <div class="flex h-dvh w-full flex-col bg-[#F7F8FA] pl-[calc(22rem+8px)]">
    <LazyUiHighlights />
    <UiSidebar />
    <div class="relative mx-auto my-0 flex min-h-full w-full max-w-2xl flex-col">
      <slot />
    </div>
  </div>
</template>
