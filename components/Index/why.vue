<script setup>
import { useCalcFormStore } from '@/store/calcForm';
const store = useCalcFormStore();

const scrollToCalcForm = () => {
  const el = document.getElementById('calculator-form');
  window.scrollTo(0, el.offsetTop - 100);
};
</script>

<template>
  <section class="why">
    <div class="container">
      <div class="global-title white" data-aos="fade-up">
        Почему стоит заказать автомобиль из Европы?
      </div>
      <div class="why__cards" data-aos="fade">
        <div class="why__item why__item--white why__item--1">
          <p class="why__name">Честный пробег</p>
          <p class="why__text">
            В Европейских странах корректировка пробега уголовно
            наказуема.
          </p>
        </div>
        <div class="why__item why__item--2">
          <p class="why__name">Огромный выбор</p>
          <p class="why__text">
            В Европе доступно множество уникальных моделей для
            внутреннего рынка с богатым оснащением – гибриды,
            кей-кары, кроссоверы и минивэны.
          </p>
        </div>
        <div class="why__item why__item--white why__item--3">
          <p class="why__name">Юридическая чистота</p>
          <p class="why__text">
            Автомобиль поступит с полным пакетом документов об уплате
            таможенных платежей и утилизационного сбора, вы будете
            первым собственником в ПТС.
          </p>
        </div>
        <div class="why__item why__item--4">
          <p class="why__name">Благоприятные условия эксплуатации</p>
          <p class="why__text">
            Умеренный климат, ровные дороги, качественное топливо и
            строгий регламент обслуживания. Автомобили имеют
            преимущественно трассовый пробег.
          </p>
        </div>
        <div class="why__item why__item--white why__item--5">
          <p class="why__name">Выгодная цена</p>
          <p class="why__text">
            С учетом таможенных платежей
            и&nbsp;доставки&nbsp;автомобили обходятся дешевле, чем на
            внутреннем рынке.
          </p>
        </div>
        <button
          class="why__item why__item--6"
          @click="scrollToCalcForm"
        >
          <p class="why__name">подобрать авто</p>
          <svg
            width="201"
            height="16"
            viewBox="0 0 201 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200.106 8.80135C200.496 8.41082 200.496 7.77766 200.106 7.38713L193.742 1.02317C193.351 0.632646 192.718 0.632646 192.328 1.02317C191.937 1.41369 191.937 2.04686 192.328 2.43738L197.984 8.09424L192.328 13.7511C191.937 14.1416 191.937 14.7748 192.328 15.1653C192.718 15.5558 193.351 15.5558 193.742 15.1653L200.106 8.80135ZM0.490234 9.09424H199.399V7.09424H0.490234V9.09424Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.why {
  padding: 37px 0 91px 0;
  background-color: var(--blackLight);

  .global-title {
    max-width: 994px;
  }

  &__cards {
    margin-top: 58px;
    display: flex;
    flex-direction: row;
    row-gap: 36px;
    column-gap: 48px;
    flex-wrap: wrap;
  }

  &__item {
    border-radius: 7px;
    padding: 29px 17px 45px 24px;
    background-color: var(--blackLight);
    border: 1px solid #ffffff;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 27px;

    &--white {
      background-color: #ffffff;
      color: #000000;
    }

    &--1 {
      width: 23%;
    }

    &--2 {
      width: 37%;

      .why__text {
        max-width: 86%;
      }
    }

    &--3 {
      width: 32%;
    }

    &--4 {
      width: 38%;

      .why__text {
        max-width: 84%;
      }
    }

    &--5 {
      width: 28%;

      .why__text {
        max-width: 86%;
      }
    }

    &--6 {
      width: 26%;
      background-color: rgba(0, 0, 0, 0.5);
      background: url('@/assets/img/why/car.png') no-repeat;
      background-position: right;
      padding-left: 63px;
      background-color: rgba(0, 0, 0, 0.5);
      gap: 30px;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background-image: url('@/assets/img/why/car1.png');
      }

      &:focus {
        border: 1px solid #ffffff;
      }
    }
  }

  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 128.61%;
    text-transform: uppercase;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 147.11%;
  }
}

@media (max-width: 1500px) {
  .why {
    padding: 37px 0 71px 0;

    &__cards {
      row-gap: 29px;
    }

    &__item {
      padding: 19px 17px 20px 24px;

      &--2 {
        width: 34%;
      }

      &--4 {
        width: 35%;
      }
    }

    &__name {
      font-size: 16px;
      line-height: 128.61%;
    }

    &__text {
      font-size: 14px;
      line-height: 147.11%;
    }
  }
}

@media (max-width: 1445px) {
  .why {
    &__item {
      &--1 {
        width: 21%;
      }

      &--6 {
        background-size: 220px 160px;
        width: 25%;
      }

      &--5 {
        width: 27%;
      }
    }
  }
}

@media (max-width: 1250px) {
  .why {
    &__item {
      &--1 {
        width: 38%;
      }

      &--2 {
        width: 54%;
      }

      &--4 {
        width: 46%;
      }

      &--3 {
        width: 46%;
      }

      &--5 {
        width: 50%;
      }

      &--6 {
        width: 42%;
      }
    }
  }
}

@media (max-width: 900px) {
  .why {
    &__cards {
      gap: 31px;
    }

    .container {
      margin: 0 15px 0 45px;
    }
  }
}

@media (max-width: 600px) {
  .why {
    padding: 40px 0;

    &__cards {
      gap: 15px;
      margin-top: 31px;
    }

    &__item {
      width: 100%;
      column-gap: 0;
      gap: 14px;

      &--6 {
        padding: 55px 45px 65px 45px;
        gap: 25px;
        background-size: 249px 166px;
      }
    }

    .container {
      margin: 0 15px;
    }
  }
}
</style>
