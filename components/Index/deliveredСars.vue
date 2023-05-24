<script setup>
import { ref } from 'vue';

const textButton = ref('Ещё');
const currentState = ref(0);

//0 - Desktop
//1 - Mobile
//2 - activeCards in Mobile

/* Мобильная версия*/
onMounted(() => {
  currentState.value = window.screen.width < 600 ? 1 : 0;

  window.addEventListener('resize', () => {
    currentState.value =
      window.screen.width < 600 && currentState.value == 2
        ? 2
        : window.screen.width < 600
        ? 1
        : 0;
    textButton.value = currentState.value == 2 ? 'Скрыть' : 'Ещё';
  });
});

/* Открытие карточек Mobile*/
const openCarsItem = () => {
  if (currentState.value == 1) {
    currentState.value = 2;
    textButton.value = 'Скрыть';
  } else {
    currentState.value = 1;
    textButton.value = 'Ещё';
  }
};

function scrollCard() {}
</script>

<template>
  <section class="deliveredCars">
    <div class="container">
      <div class="global-title" data-aos="fade">
        доставленные<br />автомобили
      </div>
      <div class="deliveredCars__cards">
        <div class="deliveredCars__item" data-aos="fade-up">
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car1.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">Audi Q8 50 TDI</p>
                <p class="deliveredCars__text">2020&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">35 тыс. км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">0.3 л. (286 л. с.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">6 900 000 руб.</p>
          </div>
        </div>
        <div class="deliveredCars__item" data-aos="fade-up">
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car2.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">
                  Mercedes-Benz Vito 119
                </p>
                <p class="deliveredCars__text">2020 г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">20 тыс. км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">2.1 л. (190 л.с.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">5 600 000 руб.</p>
          </div>
        </div>
        <div
          id="lastCard"
          class="deliveredCars__item"
          data-aos="fade-up"
        >
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car3.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">Porshe Macan </p>
                <p class="deliveredCars__text">2022&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">0 км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">2.0 л. (265 л.с.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">8 550 000 руб.</p>
          </div>
        </div>
        <div
          v-if="currentState == 0 || currentState == 2"
          class="deliveredCars__item"
          data-aos="fade-up"
        >
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car4.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">
                  BMW X6 xDrive40i M Sport
                </p>
                <p class="deliveredCars__text">2022&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">0 км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">245 кВт (333 Л.С.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">10 400 000 руб.</p>
          </div>
        </div>
        <div
          v-if="currentState == 0 || currentState == 2"
          class="deliveredCars__item"
          data-aos="fade-up"
        >
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car5.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">
                  BMW X6 XDrive40d М Sport
                </p>
                <p class="deliveredCars__text">2018&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">25 тыс. км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">3.0 л (326 л. с.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">5 000 000 руб.</p>
          </div>
        </div>
        <div
          v-if="currentState == 0 || currentState == 2"
          class="deliveredCars__item"
          data-aos="fade-up"
        >
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car6.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">Tesla Model Y</p>
                <p class="deliveredCars__text">2022&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">0 км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">450 л.с</p>
              </div>
            </div>
            <p class="deliveredCars__price">5 900 000 руб.</p>
          </div>
        </div>
        <div
          v-if="currentState == 0 || currentState == 2"
          class="deliveredCars__item"
          data-aos="fade-up"
        >
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car7.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">Audi Q7 S LINE 50</p>
                <p class="deliveredCars__text">2023&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">0 км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text">0.3 л. (286 л. с.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">10 500 000 руб.</p>
          </div>
        </div>
        <div
          v-if="currentState == 0 || currentState == 2"
          class="deliveredCars__item"
          data-aos="fade-up"
        >
          <div class="deliveredCars__img">
            <img src="@/assets/img/deliveredCars/car8.png" alt="" />
          </div>
          <div class="deliveredCars__content">
            <div class="deliveredCars__info">
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__name">Porshe Macan</p>
                <p class="deliveredCars__text">2019&nbsp;г.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Пробег:</p>
                <p class="deliveredCars__text">70 тыс. км.</p>
              </div>
              <div class="deliveredCars__characteristic">
                <p class="deliveredCars__text">Объем двигателя:</p>
                <p class="deliveredCars__text"> 2.0 л. (245 л.с.)</p>
              </div>
            </div>
            <p class="deliveredCars__price">5 250 000 руб.</p>
          </div>
        </div>
      </div>
      <button class="deliveredCars__button" @click="openCarsItem()">
        {{ textButton }}
      </button>
      <!-- <a @click="openCarsItem()" href="#lastCard">Скрыть</a> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.deliveredCars {
  margin-bottom: 100px;

  .container {
    text-align: center;
  }

  &__cards {
    margin-top: 81px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 45px;
    margin-bottom: 48px;
  }

  &__button {
    display: none;
    border: 1px solid #000000;
    border-radius: 108px;
    background-color: transparent;
    padding: 21px 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 128.61%;
    color: #000000;
    width: fit-content;
    margin: 0 auto;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: #ffffff;
      background-color: #000000;
    }
  }

  &__item {
    background-color: #ffffff;
    box-shadow: 4px 14px 37px rgba(0, 0, 0, 0.03);
    border-radius: 14px;
    box-shadow: 4px 14px 37px rgba(0, 0, 0, 0.03);
    border-radius: 14px;
  }

  &__img {
    border-radius: 14px;
    height: 317px;

    img {
      border-radius: 14px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    padding: 22px 28px 24px 14px;
  }

  &__info {
    padding-bottom: 18px;
    border-bottom: 1px solid #1e1e1e;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__characteristic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:nth-child(1) {
      margin-bottom: 13px;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 20px;
    line-height: 128.61%;
    color: #000000;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 128.61%;
    color: #000000;
  }

  &__price {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 128.61%;
    color: #1e1e1e;
    text-align: center;
    margin-top: 21px;
  }
}

@media (max-width: 1830px) {
  .deliveredCars {
    &__cards {
      column-gap: 20px;
      row-gap: 27px;
    }

    &__name {
      font-weight: 700;
      font-size: 14px;
      line-height: 128.61%;
    }

    &__text {
      font-weight: 400;
      font-size: 14px;
      line-height: 128.61%;
    }

    &__price {
      font-weight: 700;
      font-size: 20px;
      line-height: 128.61%;
      margin-top: 10px;
    }

    &__img {
      height: 238px;
    }

    &__content {
      padding: 16px 7px 22px 7px;
    }
  }
}

@media (max-width: 1400px) {
  .deliveredCars {
    &__cards {
      margin-top: 20px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (max-width: 1270px) {
  .deliveredCars {
    margin-bottom: 40px;

    &__cards {
      grid-template-columns: 1fr 1fr;
    }

    &__img {
      height: 287px;
    }
  }
}

@media (max-width: 600px) {
  .deliveredCars {
    &__cards {
      grid-template-columns: 1fr;
      gap: 21px;
      margin: 20px;
      margin-bottom: 44px;
    }

    &__img {
      height: 237px;
    }

    &__characteristic:nth-child(1) {
      margin-bottom: 7px;
    }

    &__button {
      display: flex;
    }

    .global-title {
      text-align: start;
    }
  }
}
</style>
