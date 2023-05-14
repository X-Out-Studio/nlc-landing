<script setup>
import { useCalcFormStore } from "@/store/calcForm";
const store = useCalcFormStore();
const openForm = () => {
  store.openModal ? (store.openModal = false) : (store.openModal = true);
};
const changeState = (param) => {
  store.answers.firstStep = param;
};
let active = ref(null);
const changeActive = (field) => {
  active.value = field;
};
</script>

<template>
  <div>
    <div class="calc-container" v-if="store.currentStep == 1">
      <div class="title-container">
        <div class="name">Какой автомобиль хотите купить?</div>
        <div class="page">01<span>/08</span></div>
      </div>
      <div class="select-container">
        <div class="gray-select" :class="active == 1 ? 'active' : ''" @click="() => {
          changeState('Новый');
          changeActive(1);
        }
          ">
          Новый
        </div>
        <div class="gray-select" :class="active == 2 ? 'active' : ''" @click="() => {
          changeState('С пробегом');
          changeActive(2);
        }
          ">
          С пробегом
        </div>
      </div>
      <div class="navigate-container">
        <svg @click="openForm" width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.6464 33.1464C23.4512 33.3417 23.4512 33.6583 23.6464 33.8536L26.8284 37.0355C27.0237 37.2308 27.3403 37.2308 27.5355 37.0355C27.7308 36.8403 27.7308 36.5237 27.5355 36.3284L24.7071 33.5L27.5355 30.6716C27.7308 30.4763 27.7308 30.1597 27.5355 29.9645C27.3403 29.7692 27.0237 29.7692 26.8284 29.9645L23.6464 33.1464ZM43 33H24V34H43V33Z"
            fill="#ABABAB" />
          <rect x="0.5" y="0.5" width="66" height="66" rx="33" stroke="#ABABAB" />
        </svg>
        <button @click="store.currentStep++">Далее</button>
      </div>
    </div>

  </div>
</template>
<style  lang='scss'>
.calc-container {
  display: flex;
  flex-direction: column;
  padding: 114px 55px;
  background: white;

  .title-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 53px;

    .name {
      font-family: "Druk Text Wide Cyr";
      max-width: 650px;
      font-weight: 900;
      font-size: 37px;
      line-height: 128.61%;
      text-transform: uppercase;
      color: #1e1e1e;
    }

    .page {
      align-self: end;
      font-weight: 400;
      font-size: 25px;
      line-height: 128.61%;
      color: #bababa;

      span {
        font-size: 16px;
      }
    }
  }

  .select-container {
    display: flex;
    align-self: center;
    margin: 53px 0 0 0;
    gap: 9px;

    .gray-select {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 10px;
      width: 172px;
      height: 100px;
      left: 544px;
      top: 194px;
      background: #f2f2f2;
      border-radius: 12px;

      &.active {
        border: 1px solid #000000;
      }
    }
  }

  .navigate-container {
    display: flex;
    align-items: center;
    gap: 15px;
    align-self: center;
    margin: 67px 0 0 0;

    svg {
      cursor: pointer;

      rect,
      path {
        transition: all 0.3s;
      }

      &:hover {
        rect {
          stroke: #1e1e1e;
        }

        path {
          fill: #1e1e1e;
        }
      }
    }

    button {
      background: #ffffff;
      cursor: pointer;
      border-radius: 108px;
      padding: 20.5px 74px;
      font-weight: 400;
      font-size: 20px;
      line-height: 128.61%;
      color: #1e1e1e;
      border: 1px solid #1e1e1e;
      transition: all 0.3s;

      &:hover {
        background: #1e1e1e;
        color: #ffffff;
      }
    }
  }
}
</style>