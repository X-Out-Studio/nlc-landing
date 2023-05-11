<template>
  <div class="calc-container">
    <div class="title-container">
      <div class="name">Какой автомобиль хотите купить?</div>
      <div class="page">01<span>/08</span></div>
    </div>
  </div>
</template>
<style  lang='scss'>
.calc-container {
  display: flex;
  flex-direction: column;
  .title-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 53px;
    .name {
      font-family: "Druk Text Wide Cyr";
      max-width: 650px;
      font-weight: 900;
      font-size: 37px;
      line-height: 128.61%;
      text-transform: uppercase;
      color: #1e1e1e;
    }
    .page {
      align-self: end;
      font-weight: 400;
      font-size: 25px;
      line-height: 128.61%;
      color: #bababa;
      span {
        font-size: 16px;
      }
    }
  }
}
</style>