<script setup>
import { useCalcFormStore } from "@/store/calcForm";
const store = useCalcFormStore();
const openForm = () => {
  store.openModal ? (store.openModal = false) : (store.openModal = true);
};
const changeState = (param) => {
  store.answers.secondStep = param;
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
        <div class="name">Выберите бренд автомобиля</div>
        <div class="page">02<span>/08</span></div>
      </div>
      <div class="select-container">
        <div class="select-row">
          <div class="gray-container">
            <div class="gray-select" :class="active == 1 ? 'active' : ''" @click="() => {
              changeState('Mercedes');
              changeActive(1);
            }
              ">
              <img src="@/assets/img/car-models/merc.png" alt="" />
            </div>
            <div class="model-title">Mercedes</div>
          </div>
          <div class="gray-container">
            <div class="gray-select" :class="active == 2 ? 'active' : ''" @click="() => {
              changeState('BMW');
              changeActive(2);
            }
              ">
              <img src="@/assets/img/car-models/bmw.png" alt="" />
            </div>
            <div class="model-title">BMW</div>
          </div>
          <div class="gray-container">
            <div class="gray-select" :class="active == 3 ? 'active' : ''" @click="() => {
              changeState('porsche');
              changeActive(3);
            }
              ">
              <img src="@/assets/img/car-models/porsche.png" alt="" />
            </div>
            <div class="model-title">Porsche</div>
          </div>
          <div class="gray-container">
            <div class="gray-select" :class="active == 4 ? 'active' : ''" @click="() => {
              changeState('Audi');
              changeActive(4);
            }
              ">
              <img src="@/assets/img/car-models/audi.png" alt="" />
            </div>
            <div class="model-title">Audi</div>
          </div>
          <div class="gray-container">
            <div class="gray-select" :class="active == 5 ? 'active' : ''" @click="() => {
              changeState('Volkswagen');
              changeActive(5);
            }
              ">
              <img src="@/assets/img/car-models/vw.png" alt="" />
            </div>
            <div class="model-title">Volkswagen</div>
          </div>
          <div class="gray-container">
            <div class="gray-select" :class="active == 6 ? 'active' : ''" @click="() => {
              changeState('Tesla');
              changeActive(6);
            }
              ">
              <img src="@/assets/img/car-models/tesla.png" alt="" />
            </div>
            <div class="model-title">Tesla</div>
          </div>
          <div class="gray-select" :class="active == 7 ? 'active' : ''" @click="() => {
            changeState('Другое');
            changeActive(7);
          }
            ">
            Другое
          </div>
        </div>
      </div>
      <div class="navigate-container">
        <svg @click="store.currentStep--" width="67" height="67" viewBox="0 0 67 67" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.6464 33.1464C23.4512 33.3417 23.4512 33.6583 23.6464 33.8536L26.8284 37.0355C27.0237 37.2308 27.3403 37.2308 27.5355 37.0355C27.7308 36.8403 27.7308 36.5237 27.5355 36.3284L24.7071 33.5L27.5355 30.6716C27.7308 30.4763 27.7308 30.1597 27.5355 29.9645C27.3403 29.7692 27.0237 29.7692 26.8284 29.9645L23.6464 33.1464ZM43 33H24V34H43V33Z"
            fill="#ABABAB" />
          <rect x="0.5" y="0.5" width="66" height="66" rx="33" stroke="#ABABAB" />
        </svg>
        <button
          @click="store.answers.secondStep == 'Другое' ? store.answers.secondStepOtherWaiting = true : store.currentStep++">Далее</button>
      </div>
    </div>
  </div>
</template>
