<script setup>
import { useCalcFormStore } from "@/store/calcForm";
const store = useCalcFormStore();
const openForm = () => {
  store.openModal ? (store.openModal = false) : (store.openModal = true);
};
</script>

<template>
  <div class="calculator-container">
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
      <div v-if="store.openModal">
        <IndexCalculatorFirstStep v-if="store.currentStep === 1" />
        <IndexCalculatorSecondStep v-if="store.currentStep === 2" />
        <IndexCalculatorThirdStep v-if="store.currentStep === 3" />
        <IndexCalculatorFourthStep v-if="store.currentStep === 4" />
        <IndexCalculatorFifthStep v-if="store.currentStep === 5" />
        <IndexCalculatorSixthStep v-if="store.currentStep === 6" />
        <IndexCalculatorSeventhStep v-if="store.currentStep === 7" />
        <IndexCalculatorEighthStep v-if="store.currentStep === 8" />
        <IndexCalculatorFinalStep v-if="store.currentStep === 9" />
      </div>
    </Transition>
  </div>
</template>
<style scoped lang='scss'>
.calculator-container {
  margin: 0 0 140px 0;
}
.section-calculator {
  height: 615px;
  width: 100%;
  background: url("@/assets/img/calculator/background.png") center center/cover
    no-repeat;
  position: relative;
}
.button {
  padding: 30px 106px;
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