<template>
  <div id="about" class="section-about">
    <div class="global-title" data-aos="fade-up">О нас</div>
    <div class="about-card">
      <div class="about-card__left-container" data-aos="fade">
        <div class="text">
          <span>Next Level Car</span> - ваш надежный партнер в покупке
          автомобиля мечты!<br /><br />
          Мы занимаемся подбором и покупкой автомобилей из Европы,
          США, Китая, ОАЭ и предоставляем услуги высочайшего качества.
          Наша команда профессионалов имеет многолетний опыт в
          автомобильной индустрии и может найти любой автомобиль,
          основываясь на ваших предпочтениях.<br /><br />
          Мы сотрудничаем с дилерами и автохаусами по всей Европе,
          поэтому будьте уверены - с NLC вы точно найдете то, что вам
          нужно.
        </div>
        <div class="logo">
          <img src="@/assets/img/about/logo.png" alt="" />
        </div>
      </div>
      <div class="about-card__right-container">
        <img src="../../assets/img/about/jurii.webp" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section-about {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;

  .global-title {
    padding-left: 150px;
  }
}

.about-card {
  display: flex;
  flex-direction: row;
  background: #1b1b1b;
  border-radius: 14px;
  max-width: 1375px;
  width: 100%;
  margin: 81px auto 0 auto;

  &__left-container {
    width: 54%;
    padding: 48px 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__right-container {
    width: 46%;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 14px;
    }
  }
}

.text {
  font-size: 18px;
  line-height: 137.11%;
  color: #ffffff;
  max-width: 582px;

  span {
    font-weight: 700;
  }
}

.logo {
  width: 155px;
  height: 33px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 1450px) {
  .section-about {
    padding: 0 15px;

    .text {
      font-size: 15px;
      line-height: 137.11%;
    }

    .about-card {
      max-width: 1034px;

      &__left-container {
        padding: 41px 35px 44px 45px;
      }

      &__right-container {
        height: 415px;
      }
    }
  }
}

@media (max-width: 1170px) {
  .section-about {
    .global-title {
      padding-left: 0;
    }
  }
}

@media (max-width: 900px) {
  .section-about {
    margin-top: 40px;
    margin-bottom: 40px;

    .about-card {
      flex-direction: column;
      margin-top: 31px;

      &__left-container {
        width: 100%;
        gap: 30px;
        padding: 31px 22px 21px 21px;

        .text {
          max-width: 100%;
        }
      }

      &__right-container {
        width: 100%;
        height: 500px;
      }
    }
  }
}

@media (max-width: 600px) {
  .section-about {
    .text {
      font-size: 14px;
      line-height: 137.11%;
    }

    .about-card {
      &__right-container {
        height: 350px;
      }
    }
  }
}

@media (max-width: 440px) {
  .section-about {
    .about-card {
      &__right-container {
        height: 325px;
      }
    }
  }
}
</style>
