  <button @click="sendTelegram">Отправить сообщение в телегу</button>
  {{ data }}

import { useReCaptcha } from "vue-recaptcha-v3";
import axios from "axios";

const recaptchaInstance = useReCaptcha();
const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha("action");
  return token;
};
const rec = async () => {
  const token = await recaptcha();
  axios(`http://localhost:7777/api/check-captcha/${token}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  }).then(function (response) {
    console.log(response.data);
  });
};

const sendTelegram = async () => {
  axios(`http://localhost:7777/api/telegram-send`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    data: {
      aa: "bb",
    },
  }).then(function (response) {
    console.log(response.data);
  });
};