<script setup>
import { ref } from 'vue';
import { useModalStepsStore } from '@/store/modalSteps';
import { VueFinalModal } from 'vue-final-modal';

const store = useModalStepsStore();

let errorActive = ref(false);
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
      from: 'modal',
      fio: store.name,
      phone: store.phone,
    },
  });
};

const sendForm = async () => {
  if (store.name && store.phone) {
    if (store.phone?.length < 16 && store.phone != null) {
      errorPhone.value = true;
    } else {
      if (!(await recaptcha())) {
        // if (true) {

        telegramSend();
        errorActive.value = false;
        errorPhone.value = false;
        finishForm.value = true;
        setTimeout(() => {
          store.openModal = false;
          store.$reset();
          finishForm.value = false;
        }, 3000);
      } else {
      } // если бот
    }
  } else {
    if (store.phone?.length < 16 && store.phone != null) {
      errorPhone.value = true;
    }
    errorActive.value = true;
  }
};

watch(store, (a) => {
  if (store.phone?.length == 16) {
    errorPhone.value = false;
  }
});
</script>

<template>
  <vue-final-modal v-model="store.openModal">
    <section class="modal">
      <div class="modal__wrapper">
        <button class="modal__close" @click="store.openModal = false">
          <img src="../assets/img/modal/cross.svg" alt="" />
        </button>
        <Transition>
          <div v-if="!finishForm" class="modal__start">
            <div class="global-title">
              узнай стоимость своего авто
            </div>
            <form class="modal__form">
              <input
                class="modal__input"
                v-model="store.name"
                type="text"
                :class="errorActive ? 'error' : ''"
                placeholder="Ваше имя"
              />
              <input
                class="modal__input"
                v-model="store.phone"
                type="tel"
                :class="[
                  errorActive ? 'error' : '',
                  errorPhone ? 'error-phone' : '',
                ]"
                placeholder="+7..."
                v-maska
                data-maska="+7 ### ###-##-##"
              />
            </form>
            <div class="modal__send">
              <button class="modal__submit" @click="sendForm()">
                Отправить
              </button>
              <p class="modal__text">
                Нажимая на кнопку «Оставить заявку», вы соглашаетесь с
                условиями
                <a href="#">Политики обработки персональных данных</a>
              </p>
            </div>
          </div>
        </Transition>
        <Transition>
          <div v-if="finishForm" class="modal__end">
            <div class="modal__thank">спасибо за заявку!</div>
            <p class="modal__done">
              наш Специалист уже начал просчет
            </p>
            <div class="modal__social">
              <div class="modal__social-text">
                Узнай о нас больше в соц. сетях
                <img src="../assets/img/modal/arrow.svg" alt="" />
              </div>
              <a href="https://t.me/nlc_auto" target="_blank">
                <svg
                  width="36"
                  height="29"
                  viewBox="0 0 36 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5701 0.190682L1.68098 12.0022C-0.495321 12.8418 -0.482731 14.0079 1.28169 14.5279L9.46889 16.9811L28.4117 5.50127C29.3074 4.97782 30.1257 5.25941 29.4531 5.83297L14.1057 19.1371L13.5409 27.2447C14.3683 27.2447 14.7334 26.8801 15.1974 26.45L19.1741 22.7357L27.4458 28.6043C28.971 29.4111 30.0664 28.9964 30.4459 27.2481L35.8759 2.66804C36.4316 0.527561 35.0251 -0.441614 33.5701 0.190682Z"
                    fill="transparent"
                    stroke="#1E1E1E"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/_nextlevelcar_"
                target="_blank"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9954 11.3309C13.8739 11.3309 11.3265 13.8784 11.3265 17C11.3265 20.1216 13.8739 22.6691 16.9954 22.6691C20.117 22.6691 22.6644 20.1216 22.6644 17C22.6644 13.8784 20.117 11.3309 16.9954 11.3309ZM33.9981 17C33.9981 14.6524 34.0194 12.3261 33.8875 9.98276C33.7557 7.26092 33.1348 4.84529 31.1445 2.85494C29.1499 0.860345 26.7386 0.243679 24.0168 0.11184C21.6693 -0.0199994 19.343 0.00126499 16.9997 0.00126499C14.6521 0.00126499 12.3259 -0.0199994 9.98257 0.11184C7.26079 0.243679 4.8452 0.864598 2.85489 2.85494C0.860329 4.84954 0.243674 7.26092 0.111838 9.98276C-0.0199991 12.3303 0.00126497 14.6567 0.00126497 17C0.00126497 19.3433 -0.0199991 21.6739 0.111838 24.0172C0.243674 26.7391 0.864582 29.1547 2.85489 31.1451C4.84945 33.1397 7.26079 33.7563 9.98257 33.8882C12.3301 34.02 14.6564 33.9987 16.9997 33.9987C19.3472 33.9987 21.6735 34.02 24.0168 33.8882C26.7386 33.7563 29.1542 33.1354 31.1445 31.1451C33.139 29.1505 33.7557 26.7391 33.8875 24.0172C34.0236 21.6739 33.9981 19.3476 33.9981 17ZM16.9954 25.7226C12.1685 25.7226 8.27295 21.827 8.27295 17C8.27295 12.173 12.1685 8.27736 16.9954 8.27736C21.8224 8.27736 25.7179 12.173 25.7179 17C25.7179 21.827 21.8224 25.7226 16.9954 25.7226ZM26.0751 9.95724C24.9482 9.95724 24.0381 9.04713 24.0381 7.92011C24.0381 6.7931 24.9482 5.88299 26.0751 5.88299C27.2021 5.88299 28.1122 6.7931 28.1122 7.92011C28.1126 8.18773 28.0601 8.45278 27.9579 8.70009C27.8556 8.94739 27.7056 9.1721 27.5163 9.36133C27.3271 9.55056 27.1024 9.7006 26.8551 9.80286C26.6078 9.90512 26.3428 9.95758 26.0751 9.95724Z"
                    fill="transparent"
                    stroke="#1E1E1E"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  </vue-final-modal>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
