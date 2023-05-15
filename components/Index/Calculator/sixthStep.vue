<script setup>
import { useCalcFormStore } from "@/store/calcForm";
const store = useCalcFormStore();
const openForm = () => {
  store.openModal ? (store.openModal = false) : (store.openModal = true);
};
const changeState = (param) => {
  store.answers.sixthStep = param;
};
let active = ref(null);
const changeActive = (field) => {
  active.value = field;
};
</script>

<template>
  <div>
    <div class="calc-container">
      <div class="title-container">
        <div class="name">На какой бюджет вы&nbsp;рассчитываете?</div>
        <div class="page">06<span>/08</span></div>
      </div>
      <div class="select-container">
        <div
          class="gray-select"
          :class="active == 1 ? 'active' : ''"
          @click="
            () => {
              changeState('до 3 млн. руб');
              changeActive(1);
            }
          "
        >
          до 3 млн. руб
        </div>
        <div
          class="gray-select"
          :class="active == 2 ? 'active' : ''"
          @click="
            () => {
              changeState('4-6 млн. руб');
              changeActive(2);
            }
          "
        >
          4-6 млн. руб
        </div>
        <div
          class="gray-select"
          :class="active == 3 ? 'active' : ''"
          @click="
            () => {
              changeState('7-9 млн. руб.');
              changeActive(3);
            }
          "
        >
          7-9 млн. руб.
        </div>
        <div
          class="gray-select"
          :class="active == 4 ? 'active' : ''"
          @click="
            () => {
              changeState('более10 млн. руб.');
              changeActive(4);
            }
          "
        >
          более 10 млн. руб.
        </div>
      </div>
      <div class="navigate-container">
        <svg
          @click="store.currentStep--"
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6464 33.1464C23.4512 33.3417 23.4512 33.6583 23.6464 33.8536L26.8284 37.0355C27.0237 37.2308 27.3403 37.2308 27.5355 37.0355C27.7308 36.8403 27.7308 36.5237 27.5355 36.3284L24.7071 33.5L27.5355 30.6716C27.7308 30.4763 27.7308 30.1597 27.5355 29.9645C27.3403 29.7692 27.0237 29.7692 26.8284 29.9645L23.6464 33.1464ZM43 33H24V34H43V33Z"
            fill="#ABABAB"
          />
          <rect
            x="0.5"
            y="0.5"
            width="66"
            height="66"
            rx="33"
            stroke="#ABABAB"
          />
        </svg>
        <button @click="store.currentStep++">Далее</button>
      </div>
    </div>
  </div>
</template>
