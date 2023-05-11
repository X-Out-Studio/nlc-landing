<template>
  <div class="main-content">
    <div class="content-container">
      <div class="title">Автомобили из Европы под&nbsp;заказ</div>
      <div class="telegram-box">
        <div class="text">
          БЕСПЛАТНЫЙ ПОДБОР АВТО
          <span>ЗА 2 ЧАСА</span>
        </div>
        <a class="telegram-button" href="https://ya.ru" target="_blank">
          <svg
            width="66"
            height="14"
            viewBox="0 0 66 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3525 0.0920533L1.2938 5.79416C0.266098 6.19948 0.272044 6.76244 1.10524 7.01347L4.97142 8.19776L13.9166 2.65579C14.3396 2.40308 14.726 2.53903 14.4084 2.81592L7.16101 9.2386L6.89432 13.1526C7.28501 13.1526 7.45743 12.9766 7.67656 12.769L9.55444 10.9758L13.4605 13.809C14.1808 14.1984 14.698 13.9983 14.8772 13.1543L17.4414 1.28802C17.7038 0.254685 17.0396 -0.213193 16.3525 0.0920533Z"
              fill="white"
            />
            <path
              d="M65.8536 7.35355C66.0488 7.15829 66.0488 6.84171 65.8536 6.64645L62.6716 3.46447C62.4763 3.2692 62.1597 3.2692 61.9645 3.46447C61.7692 3.65973 61.7692 3.97631 61.9645 4.17157L64.7929 7L61.9645 9.82843C61.7692 10.0237 61.7692 10.3403 61.9645 10.5355C62.1597 10.7308 62.4763 10.7308 62.6716 10.5355L65.8536 7.35355ZM37.5 7.5H65.5V6.5H37.5V7.5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.main-content {
  display: flex;
  width: 100%;
  height: 967px;
  background-image: url("../../assets/img/index/mainCar/img.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 118px 150px 64px 150px;
  .content-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    .title {
      max-width: 800px;
      font-weight: 900;
      font-size: 79px;
      line-height: 128.61%;
      text-transform: uppercase;
      color: #ffffff;
      font-family: "Druk Text Wide Cyr";
      font-style: normal;
    }
    .telegram-box {
      align-self: flex-end;
      background: rgba(23, 23, 23, 0.56);
      backdrop-filter: blur(17px);
      border-radius: 13px;
      display: flex;
      align-items: center;
      padding: 34px 59px 44px 47px;
      gap: 46px;
      color: white;
      font-weight: 700;
      font-size: 30px;
      line-height: 156.61%;
      text-transform: uppercase;
      .text {
        max-width: 340px;
        span {
          color: #29aee4;
        }
      }
      .telegram-button {
        padding: 10px 44px;
        border: 1px solid #ffffff;
        border-radius: 108px;
      }
    }
  }
}
</style>