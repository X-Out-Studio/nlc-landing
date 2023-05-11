<template>
  <div class="section-about">
    <div class="global-title">О нас</div>
    <div class="about-card">
      <div class="about-card__left-container">
        <div class="text">
          <span>Next Level Car</span> - ваш надежный партнер в покупке
          автомобиля мечты!<br /><br />
          Мы занимаемся подбором и покупкой автомобилей из Европы, США, Китая,
          ОАЭ и предоставляем услуги высочайшего качества. Наша команда
          профессионалов имеет многолетний опыт в автомобильной индустрии и
          может найти любой автомобиль, основываясь на ваших предпочтениях.<br /><br />
          Мы сотрудничаем с дилерами и автохаусами по всей Европе, поэтому
          будьте уверены - с NLC вы точно найдете то, что вам нужно.
        </div>
        <div class="logo">
          <img src="../../assets/img/nlc-logo.svg" alt="" />
        </div>
      </div>
      <div class="about-card__right-container">
        <img src="../../assets/img/about/jurii.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.section-about {
  display: flex;
  flex-direction: column;
  margin: 103px 188px 140px 150px;
}
.about-card {
  display: flex;
  align-self: center;
  width: fit-content;
  justify-content: space-between;
  background: #1b1b1b;
  border-radius: 14px;
  margin: 81px 0 0 0;
  &__left-container {
    padding: 48px 55px;
  }
  &__right-container {
    width: 633px;
    height: 481px;
    img {
      width: fit-content;
      height: 100%;
      object-fit: cover;
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
  padding: 48px 0 0 0;
}
</style>