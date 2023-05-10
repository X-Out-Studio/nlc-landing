<template>
  <div class="main-content">
    <div class="img-container">
      <div class="title">Автомобили из Европы под заказ</div>
      <img src="../../assets/img/index/mainCar/img.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang='scss'>
.main-content {
  // .main-container {
  //   margin: 118px 150px 64px 150px;
  // }
  .img-container {
    width: 100%;
    height: 967px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .title {
      position: absolute;
      font-weight: 900;
      font-size: 79px;
      line-height: 128.61%;
      text-transform: uppercase;
      color: #ffffff;
      font-family: "Druk Text Wide Cyr";
      font-style: normal;
    }
  }
}
</style>