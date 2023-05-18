<script setup>
import { useCalcFormStore } from "@/store/calcForm";
const store = useCalcFormStore();
const openForm = () => {
  store.openModal ? (store.openModal = false) : (store.openModal = true);
  if(!store.openModal) store.$reset();
};

</script>

<template>
  <div class="calculator-container" id="calculator-form">
    <Transition>
      <div class="section-calculator" v-if="!store.openModal">
        <div class="description-container">
          <div class="description">закажите просчет прямо сейчас</div>
          <Button :text="'Рассчитать'" @click="openForm" />
        </div>
        <div class="img-container">
          <img src="@/assets/img/calculator/car.png" alt="" />
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-show="store.openModal" class="steps">
        <IndexCalculatorFirstStep v-show="store.currentStep === 1 && store.answers.firstStepBUWaiting === false" />
        <IndexCalculatorFirstStepBU v-show="store.currentStep === 1 && store.answers.firstStepBUWaiting === true" />
        <IndexCalculatorSecondStep v-show="store.currentStep === 2 && store.answers.secondStepOtherWaiting === false" />
        <IndexCalculatorSecondStepOther
          v-show="store.currentStep === 2 && store.answers.secondStepOtherWaiting === true" />
        <IndexCalculatorThirdStep v-show="store.currentStep === 3" />
        <IndexCalculatorFourthStep v-show="store.currentStep === 4" />
        <IndexCalculatorFifthStep v-show="store.currentStep === 5" />
        <IndexCalculatorSixthStep v-show="store.currentStep === 6" />
        <IndexCalculatorSeventhStep v-show="store.currentStep === 7" />
        <IndexCalculatorEighthStep v-show="store.currentStep === 8" />
        <IndexCalculatorFinalStep v-show="store.currentStep === 9" />
        <button class="steps__cross" @click="openForm">
          <img src="@/assets/img/calculator/cross.svg" alt="">
        </button>
      </div>
    </Transition>
  </div>
</template>
<style scoped lang='scss'>
.calculator-container {}

.section-calculator {
  height: 615px;
  width: 100%;
  position: relative;
  background: url("@/assets/img/calculator/background.png") center center/cover no-repeat;
  position: relative;

  @media (max-width: 1656px) {
    height: 459px;
  }

  @media (max-width: 1200px) {
    height: 695px;
  }

  @media (max-width: 576px) {
    height: calc(100vh - 78px);
  }
}

.img-container {
  position: absolute;
  right: 0;
  top: -40px;
  width: 1391px;
  height: 650px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  @media (max-width: 1905px) {
    width: 1228px;
  }

  @media (max-width: 1656px) {
    width: 946px;
    height: 486px;
  }

  @media (max-width: 1439px) {
    width: 726px;
  }

  @media (max-width: 1200px) {
    width: auto;
    height: 486px;
    top: 110px;

    img {
      object-position: 22%;
    }
  }
}

.steps {
  position: relative;

  &__cross {
    position: absolute;
    top: 45px;
    right: 40px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }
}

.description-container {
  padding: 40px 0 175px 147px;

  .description {
    font-family: "Druk Text Wide Cyr";
    font-weight: 900;
    font-size: 51px;
    line-height: 128.61%;
    text-transform: uppercase;
    color: #ffffff;
    max-width: 719px;
    margin: 0 0 113px 0;
  }

  .button {
    padding: 30px 106px;

    @media (max-width: 1200px) {
      align-self: center;
      width: 247px;
      height: 66px;
      padding: 20px 71px;
      font-size: 19px;
    }

    @media (max-width: 576px) {
      position: absolute;
      bottom: 40px;
      z-index: 2;
    }
  }

  @media (max-width: 1656px) {
    .description {
      font-size: 44px;
      max-width: 749px;
      margin: 0 0 76px 0;
    }
  }

  @media (max-width: 1200px) {
    padding: 40px 16px 48px 16px;
    display: flex;
    flex-direction: column;

    .description {
      font-size: 31px;
      max-width: 369px;
      margin: 0 0 381px 0;
    }
  }

  @media (max-width: 576px) {
    .description {
      top: 20px;
      left: 16px;
      position: absolute;
      z-index: 2;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>