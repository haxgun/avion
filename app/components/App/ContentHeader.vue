<script setup lang="ts">
  import { QuotesDataEng, QuotesDataRus } from "@/data/App/Quotes.data";
  import { onMounted, ref } from "vue";

  const { locale } = useI18n();

  const username = ref("John Doe");
  const quotes = ref(locale.value === "en_US" ? QuotesDataEng : QuotesDataRus);
  const currentQuote = ref(quotes.value[0]);
  const currentDate = ref(new Date());
  const greeting = ref("");

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.value.length);
    currentQuote.value = quotes.value[randomIndex];
  }

  function getGreeting() {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 12) {
      return "app.header.greeting.morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "app.header.greeting.afternoon";
    } else if (currentTime >= 18 && currentTime < 22) {
      return "app.header.greeting.evening";
    } else {
      return "app.header.greeting.night";
    }
  }

  function formatDate(date: Date) {
    const days = [
      "app.header.calendar.days.sunday",
      "app.header.calendar.days.monday",
      "app.header.calendar.days.tuesday",
      "app.header.calendar.days.wednesday",
      "app.header.calendar.days.thursday",
      "app.header.calendar.days.friday",
      "app.header.calendar.days.saturday",
    ];
    const months = [
      "app.header.calendar.months.january",
      "app.header.calendar.months.february",
      "app.header.calendar.months.march",
      "app.header.calendar.months.april",
      "app.header.calendar.months.may",
      "app.header.calendar.months.june",
      "app.header.calendar.months.july",
      "app.header.calendar.months.august",
      "app.header.calendar.months.september",
      "app.header.calendar.months.october",
      "app.header.calendar.months.november",
      "app.header.calendar.months.december",
    ];

    return {
      dayOfWeek: days[date.getDay()],
      dayOfMonth: date.getDate(),
      month: months[date.getMonth()],
    };
  }

  const formattedDate = ref(formatDate(currentDate.value));

  watch(locale, () => {
    quotes.value = locale.value === "en_US" ? QuotesDataEng : QuotesDataRus;
    getRandomQuote();
  });

  onMounted(() => {
    getRandomQuote();
    greeting.value = getGreeting();

    setInterval(() => {
      currentDate.value = new Date();
      formattedDate.value = formatDate(currentDate.value);
    }, 1000);

    setInterval(() => {
      greeting.value = getGreeting();
    }, 60 * 1000);
  });
</script>

<template>
  <header class="sticky top-0 z-10 pb-7 pt-12">
    <div class="flex flex-row justify-between gap-6 font-medium leading-relaxed">
      <div class="flex flex-col justify-start">
        <span class="text-xl">{{ $t(greeting) }}, {{ username }}</span>
        <span class="whitespace-pre-line text-xl text-neutral-500">{{ currentQuote }}</span>
      </div>
      <div class="flex flex-col items-center justify-start">
        <span class="text-sm font-semibold uppercase leading-none text-[#9b9b9b]">{{
          $t(formattedDate.dayOfWeek)
        }}</span>
        <span class="text-4xl font-bold leading-none">{{ formattedDate.dayOfMonth }}</span>
        <span class="text-sm font-medium capitalize leading-none text-[#9b9b9b]">{{
          $t(formattedDate.month)
        }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
