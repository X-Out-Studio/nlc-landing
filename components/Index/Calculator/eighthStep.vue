<script setup>
import { useCalcFormStore } from "@/store/calcForm";
const store = useCalcFormStore();
const openForm = () => {
  store.openModal ? (store.openModal = false) : (store.openModal = true);
};

let active = ref(null);
const changeActive = (field) => {
  active.value = field;
};
let errorFlag = ref(false);

const checkForm = () => {
  if (!(store.answers.number && store.answers.fio)) {
    errorFlag.value = true;
  } else {
    errorFlag.value = false;
    store.currentStep++;
  }
};
</script>

<template>
  <div>
    <div class="calc-container">
      <div class="title-container">
        <div class="name final">
          Укажите&nbsp;ваши&nbsp;контактные
          данные&nbsp;для&nbsp;обратной&nbsp;связи
        </div>
        <div class="page">08<span>/08</span></div>
      </div>
      <div class="select-container final with-input">
        <input
          type="text"
          class="wishes-input"
          v-model="store.answers.fio"
          :class="errorFlag ? 'error' : ''"
          placeholder="Имя Фамилия"
        />
        <input
          type="text"
          class="wishes-input"
          :class="errorFlag ? 'error' : ''"
          v-model="store.answers.number"
          placeholder="+7 ..."
        />
      </div>
      <div class="navigate-container final">
        <button @click="checkForm">Отправить</button>
        <span
          >Нажимая на кнопку «Отправить», вы соглашаетесь с условиями
          <a href="/#" target="_blank"
            >Политики обработки персональных данных</a
          >
        </span>
      </div>
    </div>
  </div>
</template>
