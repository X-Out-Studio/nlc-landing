<script setup>
const navigateParams = {
  nextEl: ".swiper-next",
  prevEl: ".swiper-prev",
};
</script>

<template>
  <div class="swiper-section">
    <div class="title-container">
      <div class="global-title">Дилеры, с которыми мы работаем</div>
    </div>
    <div class="swiper-container">
      <Swiper :slides-per-view="4.5" :spaceBetween="'42'" :modules="[SwiperNavigation]" :navigation="navigateParams"
        :autoplay="{
          delay: 1000,
        }" :breakpoints="{
  320: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1020: {
    slidesPerView: 3.5,
    spaceBetween: 16,
  },
  1575: {
    slidesPerView: 4.5,
    spaceBetween: 42,
  },
}">
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/merc.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/bmw.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/tesla.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/porsche.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/audi.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/vw.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/toyota.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide-content">
            <img src="@/assets/img/car-models/lexus.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-navigate">
        <div class="swiper-prev">
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="44" cy="44" r="43.5" stroke="#35322E" />
            <path
              d="M58.5092 44.7391C58.7045 44.5438 58.7045 44.2272 58.5092 44.0319L55.3273 40.85C55.132 40.6547 54.8154 40.6547 54.6201 40.85C54.4249 41.0452 54.4249 41.3618 54.6201 41.5571L57.4486 44.3855L54.6201 47.2139C54.4249 47.4092 54.4249 47.7258 54.6201 47.921C54.8154 48.1163 55.132 48.1163 55.3273 47.921L58.5092 44.7391ZM29.8906 44.8855H58.1557V43.8855H29.8906V44.8855Z"
              fill="#35322E" />
          </svg>
        </div>
        <div class="swiper-next">
          <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="44" cy="44" r="43.5" stroke="#35322E" />
            <path
              d="M58.5092 44.7391C58.7045 44.5438 58.7045 44.2272 58.5092 44.0319L55.3273 40.85C55.132 40.6547 54.8154 40.6547 54.6201 40.85C54.4249 41.0452 54.4249 41.3618 54.6201 41.5571L57.4486 44.3855L54.6201 47.2139C54.4249 47.4092 54.4249 47.7258 54.6201 47.921C54.8154 48.1163 55.132 48.1163 55.3273 47.921L58.5092 44.7391ZM29.8906 44.8855H58.1557V43.8855H29.8906V44.8855Z"
              fill="#35322E" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.swiper-section {
  background: #f4f4f4;
  padding: 57px 150px 61px 150px;

  @media (max-width: 1020px) {
    padding: 35px 15px 48px 15px;
  }
}

.title-container {
  max-width: 820px;
}

.swiper-container {
  margin: 91px 0 0 0;

  @media (max-width: 1020px) {
    margin: 47px 0 0 0;
  }
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 183px;

  img {
    width: fit-content;
    height: fit-content;
    object-fit: cover;
  }

  @media (max-width: 1220px) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    height: 88px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  background: white;
  box-shadow: 4px 14px 37px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
}

.swiper-navigate {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin: 52px 0 0 0;

  .swiper-prev {
    svg {
      transform: rotate(180deg);
    }
  }

  .swiper-prev,
  .swiper-next {
    cursor: pointer;
  }

  .swiper-button-disabled {
    opacity: 0.24;
    cursor: auto;
  }

  @media (max-width: 1440px) {
    gap: 11px;

    .swiper-next,
    .swiper-prev {
      svg {
        width: 66px;
        height: 66px;
      }
    }
  }

  @media (max-width: 1020px) {
    margin: 25px 0 0 0;
  }

  @media (max-width: 1440px) {
    gap: 7px;

    .swiper-next,
    .swiper-prev {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>