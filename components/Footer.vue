<script setup>
import { watch } from 'vue';
import { useFooterFormStore } from '@/store/footerForm';
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
  console.log(data);
  return data.data.bot;
};

const store = useFooterFormStore();
let errorActive = ref(false);
let errorPhone = ref(false);
let finishForm = ref(false);
const telegramSend = () => {
  axios(`${config.handlBack}${config.endpoints.telegramSend}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    data: {
      from: 'footer',
      fio: store.fio,
      phone: store.phone,
      question: store.question,
    },
  });
};
const sendForm = async () => {
  if (store.fio && store.phone && store.question) {
    if (store.phone?.length < 16 && store.phone != null) {
      errorPhone.value = true;
    } else {
      if (!(await recaptcha())) {
        errorActive.value = false;
        errorPhone.value = false;
        finishForm.value = true;
        console.log('Не бот');
        telegramSend();
      } else {
        console.log('Бот');
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
  }
});
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="global-title white">связаться с&nbsp;нами</div>
        <div class="footer__social">
          <p class="footer__social-text">
            Узнай о нас больше в соц. сетях
          </p>
          <ul class="footer__social-items">
            <li>
              <a
                href="https://t.me/nlc_auto"
                target="_blank"
                class="footer__social-link"
              >
                <svg
                  class="telegram"
                  width="52"
                  height="42"
                  viewBox="0 0 52 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.4901 0.27616L2.42808 17.3825C-0.715464 18.5984 -0.697278 20.2873 1.85133 21.0404L13.6773 24.5933L41.0391 7.96736C42.3329 7.20925 43.515 7.61708 42.5433 8.44775L20.3749 27.7158L19.5591 39.4578C20.7542 39.4578 21.2815 38.9299 21.9518 38.3069L27.6959 32.9275L39.644 41.4269C41.8471 42.5953 43.4292 41.9948 43.9774 39.4628L51.8207 3.86406C52.6235 0.764054 50.5918 -0.639579 48.4901 0.27616Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/nlc_auto"
                target="_blank"
                class="footer__social-link"
              >
                <svg
                  class="youtube"
                  width="64"
                  height="47"
                  viewBox="0 0 64 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6 33.5714L42.208 23.5L25.6 13.4286V33.5714ZM62.592 7.285C63.008 8.86286 63.296 10.9779 63.488 13.6636C63.712 16.3493 63.808 18.6657 63.808 20.68L64 23.5C64 30.8521 63.488 36.2571 62.592 39.715C61.792 42.7364 59.936 44.6836 57.056 45.5229C55.552 45.9593 52.8 46.2614 48.576 46.4629C44.416 46.6979 40.608 46.7986 37.088 46.7986L32 47C18.592 47 10.24 46.4629 6.944 45.5229C4.064 44.6836 2.208 42.7364 1.408 39.715C0.992 38.1371 0.704 36.0221 0.512 33.3364C0.288 30.6507 0.192 28.3343 0.192 26.32L0 23.5C0 16.1479 0.512 10.7429 1.408 7.285C2.208 4.26357 4.064 2.31643 6.944 1.47714C8.448 1.04071 11.2 0.738571 15.424 0.537142C19.584 0.302142 23.392 0.201428 26.912 0.201428L32 0C45.408 0 53.76 0.537143 57.056 1.47714C59.936 2.31643 61.792 4.26357 62.592 7.285Z"
                    fill="white"
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
                  viewBox="0 0 42 42"
                  class="insta"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9944 13.997C17.1383 13.997 13.9915 17.1439 13.9915 21C13.9915 24.8561 17.1383 28.003 20.9944 28.003C24.8504 28.003 27.9972 24.8561 27.9972 21C27.9972 17.1439 24.8504 13.997 20.9944 13.997ZM41.9977 21C41.9977 18.1 42.0239 15.2263 41.8611 12.3316C41.6982 8.96937 40.9312 5.98536 38.4726 3.52669C36.0087 1.06278 33.03 0.301015 29.6678 0.138155C26.7679 -0.0247052 23.8943 0.00156264 20.9996 0.00156264C18.0997 0.00156264 15.2261 -0.0247052 12.3314 0.138155C8.9692 0.301015 5.98524 1.06803 3.52663 3.52669C1.06276 5.99061 0.301009 8.96937 0.138152 12.3316C-0.0247047 15.2316 0.00156261 18.1053 0.00156261 21C0.00156261 23.8947 -0.0247047 26.7737 0.138152 29.6684C0.301009 33.0306 1.06801 36.0146 3.52663 38.4733C5.9905 40.9372 8.9692 41.699 12.3314 41.8618C15.2313 42.0247 18.105 41.9984 20.9996 41.9984C23.8995 41.9984 26.7732 42.0247 29.6678 41.8618C33.03 41.699 36.014 40.932 38.4726 38.4733C40.9365 36.0094 41.6982 33.0306 41.8611 29.6684C42.0292 26.7737 41.9977 23.9 41.9977 21ZM20.9944 31.775C15.0317 31.775 10.2195 26.9628 10.2195 21C10.2195 15.0372 15.0317 10.225 20.9944 10.225C26.957 10.225 31.7692 15.0372 31.7692 21C31.7692 26.9628 26.957 31.775 20.9944 31.775ZM32.2105 12.3001C30.8183 12.3001 29.6941 11.1759 29.6941 9.78367C29.6941 8.39148 30.8183 7.26722 32.2105 7.26722C33.6026 7.26722 34.7269 8.39148 34.7269 9.78367C34.7273 10.1143 34.6625 10.4417 34.5362 10.7472C34.4099 11.0527 34.2245 11.3302 33.9908 11.564C33.757 11.7978 33.4794 11.9831 33.174 12.1094C32.8685 12.2357 32.541 12.3005 32.2105 12.3001Z"
                    fill="url(#paint0_linear_925_590)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_925_590"
                      x1="5"
                      y1="-6"
                      x2="46"
                      y2="66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F8D63D"></stop>
                      <stop
                        offset="0.484375"
                        stop-color="#ED3279"
                      ></stop>
                      <stop offset="1" stop-color="#172EF7"></stop>
                    </linearGradient>
                  </defs>
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
              placeholder="+7 (_ _ _) _ _ _ - _ _  -  _ _ "
              v-model="store.phone"
              v-maska
              data-maska="+7 (# # #) # # # - # #  -  # # "
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
                Нажимая на кнопку «Отправить», вы соглашаетесь
                с&nbsp;условиями
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
            <div class="modal__thank white">
              Спасибо за обращение!
            </div>
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
          <a
            class="footer__email"
            style=""
            href="mailto:nlc-auto@yandex.ru "
            >Почта
            <span style="white-space: nowrap">
              nlc-auto@yandex.ru</span
            >
          </a>
        </div>
        <ul class="footer__menu">
          <li class="footer__item">
            <a href="#" class="footer__link">Главная</a>
          </li>
          <li class="footer__item">
            <a href="#stagesWork" class="footer__link"
              >Этапы&nbsp;работ</a
            >
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
          <a class="footer__policy" href="#"
            >Политика конфиденциальности</a
          >
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
      gap: 55px;

      li {
        list-style-type: none;
      }
    }

    &-link {
      display: block;

      .telegram {
        &:hover {
          path {
            fill: #00b0ef;
            stroke: #00b0ef;
            transition: 0.3s;
          }
        }
      }

      .youtube {
        &:hover {
          path {
            fill: #eb3238;
            stroke: #eb3238;
            transition: 0.3s;
          }
        }
      }

      .insta {
        path {
          fill: #ffffff;
          transition: 0.3s;
        }
        &:hover {
          path {
            fill: url(#paint0_linear_925_590);
            transition: 0.3s;
          }
        }
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
        gap: 62px;
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
        max-width: 150px;
        gap: 21px;
      }

      &-link {
        height: 25px;

        svg {
          width: 100%;
          height: 100%;
        }
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
