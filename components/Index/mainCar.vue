<template>
  <div class="main-content">
    <div class="content-container">
      <div class="title">Автомобили из Европы под&nbsp;заказ</div>
      <div class="telegram-box"></div>
    </div>
    <img src="../../assets/img/index/mainCar/img.png" alt="" />
  </div>
</template>
<style scoped lang='scss'>
.main-content {
  width: 100%;
  height: 967px;
  position: relative;
  .content-container {
    margin: 118px 150px 64px 150px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      max-width: 800px;
      font-weight: 900;
      font-size: 65px;
      line-height: 128.61%;
      text-transform: uppercase;
      color: #ffffff;
      font-family: "Druk Text Wide Cyr";
      font-style: normal;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>