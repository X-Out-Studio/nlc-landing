<script setup>
const navigateParams = {
  nextEl: '.swiper-next',
  prevEl: '.swiper-prev',
};
</script>

<template>
  <section class="price">
    <div class="global-title" data-aos="fade">сравнение цен</div>
    <div class="price__card">
      <div class="price__item">
        <p class="price__place">в россии:</p>
      </div>
      <div class="price__item">
        <p class="price__place">в Next level car:</p>
      </div>
      <div class="price__item">
        <div class="price__img">
          <img
            class="price__car"
            src="@/assets/img/price/car2.png"
            alt=""
          />
        </div>
        <div class="price__info">
          <div class="price__info-logo">
            <img src="@/assets/img/price/logoAuto.svg" alt="" />
          </div>
          <div class="price__nav">
            <p class="price__name">Mercedes-Benz G-Класс AMG</p>
            <button class="swiper-next">
              <img src="@/assets/img/price/arrowRight.svg" alt="" />
            </button>
          </div>
          <p class="price__rub"><span>ЦЕНА:</span>22 950 000 руб.</p>
        </div>
      </div>
      <div class="price__item">
        <div class="price__img">
          <img
            class="price__car"
            src="@/assets/img/price/car1.png"
            alt=""
          />
        </div>
        <div class="price__info">
          <div class="price__info-logo">
            <img src="@/assets/img/price/logoNLC.svg" alt="" />
          </div>
          <div class="price__nav">
            <p class="price__name">Mercedes-Benz G-Класс AMG</p>
            <button class="swiper-next">
              <img src="@/assets/img/price/arrowRight.svg" alt="" />
            </button>
          </div>
          <p class="price__rub"><span>ЦЕНА:</span>19 500 000 руб.</p>
          <div class="price__info-circle">
            <p>3,5 млн.</p>
            <img
              class="price__info-text"
              src="@/assets/img/price/text.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="price__item">
        <div class="price__img">
          <img
            class="price__car"
            src="@/assets/img/price/car2.png"
            alt=""
          />
        </div>
        <div class="price__info">
          <div class="price__info-logo">
            <img src="@/assets/img/price/logoAuto.svg" alt="" />
          </div>
          <div class="price__nav">
            <p class="price__name">Mercedes-Benz G-Класс AMG</p>
            <button class="swiper-next">
              <img src="@/assets/img/price/arrowRight.svg" alt="" />
            </button>
          </div>
          <p class="price__rub"><span>ЦЕНА:</span>22 950 000 руб.</p>
        </div>
      </div>
      <div class="price__item">
        <div class="price__img">
          <img
            class="price__car"
            src="@/assets/img/price/car1.png"
            alt=""
          />
        </div>
        <div class="price__info">
          <div class="price__info-logo">
            <img src="@/assets/img/price/logoNLC.svg" alt="" />
          </div>
          <div class="price__nav">
            <p class="price__name">Mercedes-Benz G-Класс AMG</p>
            <button class="swiper-next">
              <img src="@/assets/img/price/arrowRight.svg" alt="" />
            </button>
          </div>
          <p class="price__rub"><span>ЦЕНА:</span>19 500 000 руб.</p>
        </div>
      </div>
    </div>
    <!-- <div class="price__swipers" data-aos="fade-up">
      <Swiper
        :slides-per-view="2"
        :spaceBetween="'37'"
        :modules="[SwiperNavigation]"
        :navigation="navigateParams"
        :autoplay="{
          delay: 1000,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
        }"
      >
        <SwiperSlide>
          <div class="price__item">
            <div class="price__img">
              <img
                class="price__car"
                src="@/assets/img/price/car1.png"
                alt=""
              />
            </div>
            <div class="price__info">
              <div class="price__nav">
                <p class="price__name">Mercedes-Benz G-Класс AMG</p>
                <button class="swiper-next">
                  <img
                    src="@/assets/img/price/arrowRight.svg"
                    alt=""
                  />
                </button>
              </div>
              <p class="price__rub">19 500 000 руб.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="price__item">
            <div class="price__img">
              <img
                class="price__car"
                src="@/assets/img/price/car2.png"
                alt=""
              />
            </div>
            <div class="price__info price__info--white">
              <div class="price__nav">
                <p class="price__name">Mercedes-Benz G-Класс AMG</p>
                <button class="swiper-prev">
                  <img
                    src="@/assets/img/price/arrowLeft.svg"
                    alt=""
                  />
                </button>
              </div>
              <p class="price__rub">22 950 000 руб.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        :slides-per-view="2"
        :spaceBetween="'37'"
        :modules="[SwiperNavigation]"
        :navigation="navigateParams"
        :autoplay="{
          delay: 1000,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
        }"
      >
        <SwiperSlide>
          <div class="price__item">
            <div class="price__img">
              <img
                class="price__car"
                src="@/assets/img/price/car3.png"
                alt=""
              />
            </div>
            <div class="price__info">
              <div class="price__nav">
                <p class="price__name">BMW X6 30d</p>
                <button class="swiper-next">
                  <img
                    src="@/assets/img/price/arrowRight.svg"
                    alt=""
                  />
                </button>
              </div>
              <p class="price__rub">10 500 000 руб.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="price__item">
            <div class="price__img">
              <img
                class="price__car"
                src="@/assets/img/price/car4.png"
                alt=""
              />
            </div>
            <div class="price__info price__info--white">
              <div class="price__nav">
                <p class="price__name">BMW X6 30d</p>
                <button class="swiper-prev">
                  <img
                    src="@/assets/img/price/arrowLeft.svg"
                    alt=""
                  />
                </button>
              </div>
              <p class="price__rub">13 000 000 руб.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
.price {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  padding: 0 15px;

  &__card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 23px;
    row-gap: 20px;
    max-width: 1093px;
    width: 100%;
  }

  &__place {
    font-weight: 900;
    font-size: 29px;
    line-height: 141.11%;
    font-family: 'Druk Text Wide Cyr';
    color: #8a8a8a;
    text-transform: uppercase;
    text-align: center;
  }

  &__item {
    width: 100%;
    &:nth-child(odd) {
      .price__info {
        background-color: #ffffff;
        color: var(--blackLight);
      }
    }
  }

  &__logo {
    position: absolute;
    top: 28px;

    &-nlc {
      width: 163px;
      height: 34px;
    }

    &-avito {
      width: 263px;
      height: 66px;
    }
  }

  &__car {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &__swipers {
    max-width: 1237px;
    width: 100%;
  }

  &__nav {
    width: 100%;
    display: flex;
    flex-direction: row;

    .swiper-next,
    .swiper-prev {
      background-color: transparent;
      display: none;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 27px 38px 40px 38px;
    background-color: var(--blackLight);
    border-radius: 14px;
    color: #ededed;
    position: relative;
    top: -28px;

    &-logo {
      max-width: 157px;
    }

    &--white {
      background-color: #ffffff;
      color: var(--blackLight);
    }

    &-circle {
      position: absolute;
      width: 190px;
      height: 190px;
      background-color: #ffffff;
      border-radius: 50%;
      right: -80px;
      bottom: -30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 30px;
      line-height: 82.61%;
      text-align: center;
      color: #000000;
      box-shadow: 0px 4px 49px rgba(0, 176, 239, 0.54);

      p {
        width: min-content;
      }
    }

    &-text {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: 50%;
      animation: rotate 3s ease-in-out infinite;
    }
  }

  &__name {
    font-weight: 400;
    font-size: 20px;
    line-height: 147.11%;
  }

  &__rub {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 147.11%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 147.11%;
    }
  }

  &__img {
    border-radius: 14px;
    position: relative;

    img {
      border-radius: 14px;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(45deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 992px) {
  .price {
    margin-top: 40px;
    margin-bottom: 20px;

    &__logo {
      &-nlc {
        width: 116px;
        height: 24px;
      }

      &-avito {
        width: 191px;
        height: 48px;
      }
    }

    &__swipers {
      padding-top: 30px;
    }
  }
}

@media (max-width: 768px) {
  .price {
    &__card {
      margin-top: 31px;
    }

    &__nav {
      justify-content: space-between;

      .swiper-next,
      .swiper-prev {
        display: block;
      }
    }

    &__info {
      align-items: flex-start;
      padding: 21px 20px 18px 17px;
    }
  }
}

@media (max-width: 670px) {
  .price {
    &__card {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 600px) {
  .price {
    align-items: flex-start;

    &__card {
      row-gap: 0;
    }

    &__logo {
      top: 21px;
    }

    &__name {
      font-size: 20px;
      line-height: 147.11%;
    }

    &__rub {
      font-weight: 700;
      font-size: 30px;
      line-height: 147.11%;
    }
  }
}
</style>
