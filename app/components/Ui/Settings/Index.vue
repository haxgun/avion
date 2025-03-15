<script lang="ts" setup>
  import {
    DotsVertical,
    InfoCircle,
    LifeBuoy01,
    LogOut02,
    MessageSquare02,
    Settings01,
    Tool02,
  } from "untitledui-js/vue";

  interface UserData {
    name: string;
    email: string;
    avatar: string;
    staff: boolean;
  }

  const userData: UserData = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://avatar.vercel.sh/williamkim",
    staff: true,
  };

  const menuitems = [
    { title: "Настройки", icon: Settings01, shortcut: "⌘S" },
    { title: "Обратная связь", icon: MessageSquare02, shortcut: "⌘T" },
    { title: "Поддержка", icon: LifeBuoy01, shortcut: "⌘S" },
    { title: "О нас", icon: InfoCircle, shortcut: "⌘K" },
    { title: "Выйти", icon: LogOut02 },
  ];
</script>

<template>
  <div class="fixed right-7 top-7 flex cursor-pointer items-center justify-center">
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <div class="flex items-center justify-center rounded-lg bg-[#e0e3e6] p-3">
          <DotsVertical :size="16" />
        </div>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent
        align="end"
        class="w-full max-w-[265px] rounded-[16px] border-none bg-[#fefefe] p-0 shadow-[0_5px_20px_rgba(0,0,0,0.04),0_2px_2px_rgba(0,0,0,0.04)]"
      >
        <div class="p-2">
          <div class="p-2" v-if="userData">
            <div class="flex items-center justify-start gap-3 overflow-hidden">
              <NuxtImg
                :src="userData.avatar"
                class="rounded-full"
                alt="Logo"
                width="36"
                height="36"
              />
              <div
                class="flex w-full flex-col justify-between overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <div class="overflow-hidden text-ellipsis text-sm font-semibold leading-tight">
                  {{ userData.name }}
                </div>
                <div
                  class="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-normal leading-tight text-muted-foreground"
                >
                  {{ userData.email }}
                </div>
              </div>
              <span
                v-if="userData.staff"
                class="rounded-full border border-[#d9aeae] bg-[#ffd7d7] px-2 py-0 text-[10px] font-bold uppercase text-[#7c0000]"
                >Staff</span
              >
            </div>
          </div>
          <UiDropdownMenuSeparator class="bg-black/5" />
          <UiDropdownMenuItem
            v-if="userData.staff"
            class="p-2 text-sm"
            title="Панель управления"
            :icon="Tool02"
            shortcut="⌘P"
          />
          <template v-for="(item, i) in menuitems" :key="i">
            <UiDropdownMenuItem
              v-if="item.title"
              class="p-2 text-sm"
              :title="item.title"
              :icon="item.icon"
              :shortcut="item.shortcut"
            />
          </template>
        </div>
        <div
          class="mt-1 flex h-10 w-full items-center justify-center border-t-[#ededed]/10 bg-[#f9f9f9] text-xs font-semibold text-[#8e939a]"
        >
          © 2025 avion Made with ❤️ in Russia
        </div>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </div>
</template>
