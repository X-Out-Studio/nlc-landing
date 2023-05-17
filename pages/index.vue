<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3';
import axios from 'axios';
const secret = '6LcrKhkmAAAAAEEmajrBjTHKjNYZjRsJ_5isiUqQ'

const recaptchaInstance = useReCaptcha();
const recaptcha = async () => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha('action');
  return token;
};

const rec = async () => {
  const token = await recaptcha();
  // axios(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-type': 'application/json',
  //   },
  //   mode: 'no-cors',
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  // const { data, error } = await useFetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-type': 'application/json',
  //   },
  //   method: 'POST',
  //   mode: 'no-cors'

  // });
}
</script>
<template>
  <IndexMainCar />
  <IndexSwiperModels />
  <IndexStagesWork />
  <IndexAbout />
  <IndexDeliveredСars />
  <IndexWhy />
  <IndexPrice />
  <IndexCalculatorMain />
  <IndexReviews />
  <Modal />
  <TelegramPopup />
</template>