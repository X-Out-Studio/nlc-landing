<script setup>
import { watch } from "vue";
import { useFooterFormStore } from "@/store/footerForm";
import { useConfigStore } from "@/store/config";
const config = useConfigStore();

import { useReCaptcha } from "vue-recaptcha-v3";
import axios from "axios";

const recaptchaInstance = useReCaptcha();
const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha("action");
  const data = await axios(
    `${config.handlBack}${config.endpoints.captcha}${token}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  );
  console.log(data);
  return data.data.bot;
};

const store = useFooterFormStore();
let errorActive = ref(false);
let errorPhone = ref(false);
let finishForm = ref(false);

const sendForm = async () => {
  if (store.fio && store.phone && store.question) {
    if (store.phone?.length < 16 && store.phone != null) {
      errorPhone.value = true;
    } else {
      if (!(await recaptcha())) {
        errorActive.value = false;
        errorPhone.value = false;
        finishForm.value = true;

        console.log("Не бот");
      } else {
        console.log("Бот");
      }
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
});
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="global-title white">связаться с&nbsp;нами</div>
        <div class="footer__social">
          <p class="footer__social-text">Узнай о нас больше в соц. сетях</p>
          <ul class="footer__social-items">
            <li>
              <a
                href="https://t.me/nlc_auto"
                target="_blank"
                class="footer__social-link"
              >
                <svg
                  width="52"
                  height="42"
                  viewBox="0 0 52 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.4901 0.27616L2.42808 17.3825C-0.715464 18.5984 -0.697278 20.2873 1.85133 21.0404L13.6773 24.5933L41.0391 7.96736C42.3329 7.20925 43.515 7.61708 42.5433 8.44775L20.3749 27.7158L19.5591 39.4578C20.7542 39.4578 21.2815 38.9299 21.9518 38.3069L27.6959 32.9275L39.644 41.4269C41.8471 42.5953 43.4292 41.9948 43.9774 39.4628L51.8207 3.86406C52.6235 0.764054 50.5918 -0.639579 48.4901 0.27616Z"
                    fill="transparent"
                    stroke="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/_nextlevelcar_"
                target="_blank"
                class="footer__social-link footer__social-link--insta"
              >
                <svg
                  width="51"
                  height="49"
                  viewBox="0 0 51 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4931 16.3299C20.8108 16.3299 16.9897 20.0012 16.9897 24.5C16.9897 28.9988 20.8108 32.6701 25.4931 32.6701C30.1755 32.6701 33.9966 28.9988 33.9966 24.5C33.9966 20.0012 30.1755 16.3299 25.4931 16.3299ZM50.9972 24.5C50.9972 21.1167 51.0291 17.7641 50.8313 14.3869C50.6335 10.4643 49.7022 6.98291 46.7167 4.11448C43.7249 1.23991 40.1079 0.351184 36.0252 0.161181C32.5039 -0.0288227 29.0145 0.00182308 25.4995 0.00182308C21.9782 0.00182308 18.4888 -0.0288227 14.9739 0.161181C10.8912 0.351184 7.2678 1.24604 4.28234 4.11448C1.29049 6.98904 0.365511 10.4643 0.167756 14.3869C-0.0299986 17.7702 0.00189745 21.1228 0.00189745 24.5C0.00189745 27.8772 -0.0299986 31.2359 0.167756 34.6131C0.365511 38.5357 1.29687 42.0171 4.28234 44.8855C7.27418 47.7601 10.8912 48.6488 14.9739 48.8388C18.4952 49.0288 21.9846 48.9982 25.4995 48.9982C29.0208 48.9982 32.5103 49.0288 36.0252 48.8388C40.1079 48.6488 43.7313 47.754 46.7167 44.8855C49.7086 42.011 50.6335 38.5357 50.8313 34.6131C51.0354 31.2359 50.9972 27.8833 50.9972 24.5ZM25.4931 37.0709C18.2528 37.0709 12.4094 31.4566 12.4094 24.5C12.4094 17.5434 18.2528 11.9291 25.4931 11.9291C32.7335 11.9291 38.5769 17.5434 38.5769 24.5C38.5769 31.4566 32.7335 37.0709 25.4931 37.0709ZM39.1127 14.3501C37.4222 14.3501 36.0571 13.0385 36.0571 11.4143C36.0571 9.79006 37.4222 8.47843 39.1127 8.47843C40.8032 8.47843 42.1684 9.79006 42.1684 11.4143C42.1689 11.8 42.0902 12.1819 41.9368 12.5384C41.7834 12.8948 41.5583 13.2186 41.2745 13.4913C40.9907 13.764 40.6536 13.9803 40.2827 14.1276C39.9117 14.275 39.5141 14.3506 39.1127 14.3501Z"
                    fill="transparent"
                    stroke="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__form">
      <template v-if="!finishForm">
        <div class="container">
          <div class="footer__data">
            <input
              class="footer__form-input"
              :class="errorActive ? 'error' : ''"
              placeholder="Ваше имя"
              v-model="store.fio"
            />
            <input
              class="footer__form-input footer__form-input-phone"
              :class="[
                errorActive ? 'error' : '',
                errorPhone ? 'error-phone' : '',
              ]"
              placeholder="+7..."
              v-model="store.phone"
              v-maska
              data-maska="+7 ### ###-##-##"
            />
          </div>
          <input
            class="footer__form-input footer__form-input--question"
            :class="errorActive ? 'error' : ''"
            placeholder="Ваш вопрос"
            required
            v-model="store.question"
          />
          <div class="footer__block">
            <div>
              <button class="footer__submit" @click="sendForm">
                Отправить
              </button>
              <p class="footer__send">
                Нажимая на кнопку «Отправить», вы соглашаетесь с&nbsp;условиями
                <a href="#">Политики обработки персональных данных</a>
              </p>
            </div>
            <div class="footer__logo footer__logo-desktop">
              <img src="../assets/img/footer/logo.png" alt="" />
            </div>
          </div>
        </div>
      </template>
      <template v-if="finishForm">
        <div class="container footer-done">
          <div class="modal__end footer-thank">
            <div class="modal__thank white">Спасибо за обращение!</div>
            <p class="modal__done white footer-done">
              Наш специалист свяжется с вами в ближайшее время
            </p>
          </div>
          <div class="footer__block">
            <div class="footer__logo footer__logo-desktop">
              <img src="../assets/img/footer/logo.png" alt="" />
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="footer__info">
      <div class="container">
        <div class="footer__contact">
          <div class="footer__contact-top">
            <a class="footer__phone" href="tel:+79381332323"
              >Телефон +7&nbsp;938&nbsp;133&nbsp;-23&nbsp;-23</a
            >
            <div class="footer__logo footer__logo-mobile">
              <img src="../assets/img/footer/logo.png" alt="" />
            </div>
          </div>
          <a class="footer__email" href="mailto:nlc-auto@yandex.ru "
            >Почта nlc-auto@yandex.ru
          </a>
        </div>
        <ul class="footer__menu">
          <li class="footer__item">
            <a href="#" class="footer__link">Главная</a>
          </li>
          <li class="footer__item">
            <a href="#stagesWork" class="footer__link">Этапы&nbsp;работ</a>
          </li>
          <li class="footer__item">
            <a href="#about" class="footer__link">О&nbsp;нас</a>
          </li>
          <li class="footer__item">
            <a href="#reviews" class="footer__link">Отзывы</a>
          </li>
          <li class="footer__item">
            <a href="#footer" class="footer__link">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__rule">
          <p class="footer__regulation">
            Разработано в
            <a href="#">
              <img src="@/assets/img/footer/logoUmax.svg" alt="" />
            </a>
          </p>
          <a class="footer__policy" href="#">Политика конфиденциальности</a>
        </div>
        <p class="footer__year">2023</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--blackLight);
  padding-top: 77px;
  padding-bottom: 90px;

  &__top {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .global-title {
      max-width: 438px;
    }
  }

  &__bottom {
    padding-top: 35px;
    border-top: 1px solid #ffffff;

    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
    }
  }

  &__info {
    color: #ffffff;
    padding-bottom: 31px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 155%;

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__social {
    display: flex;
    flex-direction: row;
    gap: 110px;

    &-text {
      font-weight: 400;
      font-size: 24px;
      line-height: 128.61%;
      color: #ffffff;
      max-width: 261px;
    }

    &-items {
      display: flex;
      flex-direction: row;
      gap: 113px;

      li {
        list-style-type: none;

        svg {
          &:hover {
            path {
              transition: fill 0.2s;
              fill: #ffffff;
            }
          }
        }
      }
    }

    &-link {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;

      svg {
        width: unset;
        height: unset;
      }
    }
  }

  &__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }

  &__item {
    list-style-type: none;
  }

  &__regulation {
    max-width: 670px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 165%;
    display: flex;
    flex-direction: row;
    gap: 18px;
    align-items: center;

    a {
      display: block;
      width: 120px;
      height: 43px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &__submit {
    font-weight: 400;
    font-size: 15px;
    line-height: 128.61%;
    text-align: center;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 108px;
    background-color: transparent;
    padding: 21px 178px 22px 178px;
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s;

    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }

  &__form {
    margin-top: 70px;
    margin-bottom: 165px;

    &-input {
      padding-bottom: 14px;
      border-bottom: 1px solid #ffffff;
      background-color: transparent;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 128.61%;
      color: #ffffff;
      width: 100%;

      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 128.61%;
        color: #ffffff;
      }

      &.error-phone {
        color: #ff0000;
      }

      &--question {
        margin-bottom: 56px;
      }

      //Я хотел назвать класс в твоём стиле (--), но когда биндишь его, он добавляется через пробел
      &.error {
        &::placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 128.61%;
          color: #ff0000;
        }
      }
    }
  }

  .container.footer-done {
    align-items: flex-start;

    .modal__end {
      gap: 50px;
    }
  }

  &-thank {
    max-width: 1034px;
    margin: 0 auto 0 0;
  }

  &__logo {
    width: 241px;
    height: 51px;

    &-mobile {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__data {
    display: flex;
    flex-direction: row;
    margin-bottom: 74px;
    gap: 448px;
  }

  &__send {
    margin-top: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: rgba(255, 255, 255, 0.39);
    max-width: 318px;
    margin-left: 30px;

    a {
      text-decoration: underline;
    }
  }

  &__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__rule {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 193px;
  }

  &__contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 220px;

    @media (max-width: 1600px) {
      gap: 120px;
    }
  }

  &__policy,
  &__year {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
  }
}

.container.footer-done {
  display: flex;
  align-items: flex-end;
}

@media (max-width: 1450px) {
  .footer {
    padding-bottom: 74px;

    &__top {
      .global-title {
        max-width: 390px;
      }
    }

    &__social {
      gap: 100px;

      &-text {
        font-size: 20px;
        line-height: 128.61%;
        max-width: 212px;
      }

      &-items {
        gap: 77px;
      }

      &-link {
        width: 34px;
        height: 34px;
      }
    }

    &__form {
      margin-top: 88px;
      margin-bottom: 123px;
    }

    &__data {
      gap: 127px;
    }

    &__submit {
      padding: 21px 154px 22px 154px;
    }

    &__menu {
      gap: 27px;
    }

    &__contact {
      gap: 54px;
    }

    &__regulation[data-v-3506faf6] {
      max-width: 447px;
    }

    &__rule {
      gap: 110px;
    }
  }
}

@media (max-width: 1350px) {
  .footer {
    &__info {
      .container {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &__menu {
      margin-top: 30px;
      width: 100%;
      justify-content: space-between;
    }

    &__social {
      gap: 70px;

      &-link {
        width: 27px;
        height: 27px;
      }
    }
  }
}

@media (max-width: 1150px) {
  .footer {
    &__top {
      .container {
        flex-direction: column;
        gap: 23px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .footer {
    &__bottom {
      .container {
        flex-direction: column;
        gap: 19px;
      }
    }

    &__rule {
      flex-direction: column;
      gap: 19px;
    }

    &__data {
      flex-direction: column;
      gap: 36px;
      margin-bottom: 41px;
    }

    &__form {
      margin-top: 38px;

      input {
        &::placeholder {
          color: rgba(255, 255, 255, 0.43);
        }
      }
    }

    &__block {
      flex-direction: column;
      gap: 50px;
    }

    .container.footer-done {
      flex-direction: column;
      gap: 50px;
    }
  }
}

@media (max-width: 600px) {
  .footer {
    padding-bottom: 44px;
    padding-top: 41px;

    &__top {
      .global-title {
        max-width: 264px;
      }
    }

    .container.footer-done {
      .modal__done {
        font-size: 20px;
        line-height: 150.61%;
      }

      .modal__end {
        gap: 22px;
      }

      .modal__thank {
        font-size: 27px;
        line-height: 128.61%;
      }
    }

    &__social {
      gap: 0;
      justify-content: space-between;

      &-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 128.61%;
        max-width: 150px;
      }

      &-items {
        gap: 58px;
      }
    }

    &__form {
      input {
        font-weight: 400;
        font-size: 14px;
        line-height: 128.61%;
        padding-bottom: 10px;

        &::placeholder {
          font-size: 14px;
          line-height: 128.61%;
        }
      }

      &-input {
        &--question {
          margin-bottom: 43px;
        }
      }
    }

    &__bottom {
      padding-top: 28px;

      .container {
        align-items: flex-start;
      }
    }

    &__rule {
      align-items: flex-start;
    }

    &__submit {
      width: 100%;
      padding: 21px 0;
      text-align: center;
    }

    &__send {
      margin: 16px auto 0 auto;
    }

    &__logo {
      &-desktop {
        display: none;
      }

      &-mobile {
        display: block;
        width: 153px;
        height: 33px;
      }
    }

    &__contact {
      flex-direction: column;
      gap: 15px;
      width: 100%;
      align-items: flex-start;

      a {
        max-width: 136px;
      }

      &-top {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    &__form {
      margin-bottom: 43px;
    }

    &__info {
      padding-bottom: 0;

      .container {
        border-bottom: 1px solid #ffffff;
        padding-bottom: 15px;
      }
    }

    &__bottom {
      border: 0;
    }

    &__menu {
      gap: 40px;
      overflow: hidden;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
        opacity: 0;
      }
    }
  }
}
</style>