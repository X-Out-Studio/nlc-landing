<script setup>
import { useCalcFormStore } from '@/store/calcForm';
const store = useCalcFormStore();
const openForm = () => {
  store.openModal
    ? (store.openModal = false)
    : (store.openModal = true);
};

let active = ref(null);
const changeActive = (field) => {
  active.value = field;
};
let errorFlag = ref(false);
let errorPhone = ref(false);
let finishForm = ref(false);

import { useConfigStore } from '@/store/config';
const config = useConfigStore();

import { useReCaptcha } from 'vue-recaptcha-v3';
import axios from 'axios';

const recaptchaInstance = useReCaptcha();
const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('action');
  const data = await axios(
    `${config.handlBack}${config.endpoints.captcha}${token}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    }
  );
  return data.data.bot;
};

const telegramSend = () => {
  axios(`${config.handlBack}${config.endpoints.telegramSend}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    data: {
      from: 'calculator',
      firstStep: store.answers.firstStep,
      firstStepBU: store.answers.firstStepBU,
      secondStep: store.answers.secondStep,
      secondStepOther: store.answers.secondStepOther,
      thirdStep: store.answers.thirdStep,
      fourthStep: store.answers.fourthStep,
      fifthStep: store.answers.fifthStep,
      sixthStep: store.answers.sixthStep,
      seventhStep: store.answers.seventhStep,
      fio: store.answers.fio,
      phone: store.answers.number,
    },
  });
};

const checkForm = async () => {
  if (!(store.answers.number && store.answers.fio)) {
    errorFlag.value = true;
    errorPhone.value = false;
    finishForm.value = false;
  } else {
    if (
      store.answers.number?.length < 16 &&
      store.answers?.number != null
    ) {
      errorPhone.value = true;
    } else {
      if (!(await recaptcha())) {
        telegramSend();

        errorFlag.value = false;
        errorPhone.value = false;
        finishForm.value = true;
        errorFlag.value = false;
        store.currentStep++;
        setTimeout(() => {
          openForm();
          store.$reset();
        }, '4000');
      } else {
      }
    }
  }
};

watch(store.answers, (a) => {
  if (store.answers.number?.length == 16) {
    errorPhone.value = false;
  } else {
    errorPhone.value = true;
  }
});
</script>

<template>
  <div>
    <div class="calc-container">
      <div class="title-container">
        <div class="name final desktop">
          Укажите&nbsp;ваши&nbsp;контактные
          данные&nbsp;для&nbsp;обратной&nbsp;связи
        </div>
        <div class="name final mobile">
          Укажите ваши контактные данные для обратной связи
        </div>
        <div class="page">08<span>/08</span></div>
      </div>
      <div class="select-container final with-input">
        <div class="select-row eighth">
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
            :class="[
              errorFlag ? 'error' : '',
              errorPhone ? 'error-phone' : '',
            ]"
            v-model="store.answers.number"
            placeholder="+7 ..."
            v-maska
            data-maska="+7 ### ###-##-##"
          />
        </div>
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
