<script setup>
import { useModalStepsStore } from '@/store/modalSteps';
const store = useModalStepsStore();
</script>

<template>
  <div class="main-content" id="main" data-aos="fade">
    <div class="content-container">
      <div class="text">
        <div class="title">
          Подбор&nbsp;и&nbsp;доставка авто из Европы и кореи
          за&nbsp;3&nbsp;недели
        </div>
        <div class="subtitle">
          Закажите экспорт авто в РФ "под&nbsp;ключ" и&nbsp;<span
            >сэкономьте от 20% его стоимости.</span
          >
        </div>
        <Button
          text="Оставить заявку"
          @click="store.openModal = true"
        />
      </div>
      <div class="telegram-box" data-aos="fade-up">
        <div class="text">
          БЕСПЛАТНЫЙ ПОДБОР АВТО
          <span>ЗА 2 ЧАСА</span>
        </div>
        <a
          class="telegram-button"
          href="https://t.me/avtobodbor77_bot"
          target="_blank"
        >
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
<style scoped lang="scss">
.main-content {
  display: flex;
  width: 100%;
  height: 967px;
  background-image: url('@/assets/img/mainCar/img2.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 135px 150px 49px 150px;

  .content-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .title {
      max-width: 1186px;
      font-weight: 900;
      font-size: 55px;
      line-height: 128.61%;
      text-transform: uppercase;
      color: #ffffff;
      font-family: 'Druk Text Wide Cyr';
      font-style: normal;
      text-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);

      span {
        font-family: 'Druk Text Wide Cyr';
        font-size: 50px;
      }
    }

    .subtitle {
      color: #ededed;
      font-weight: 400;
      font-size: 24px;
      line-height: 147.11%;
      max-width: 469px;
      margin-top: 42px;
      margin-bottom: 60px;

      span {
        font-weight: 700;
      }
    }

    .telegram-box {
      align-self: flex-end;
      background: rgba(23, 23, 23, 0.56);
      backdrop-filter: blur(17px);
      border: 2px solid rgba(255, 255, 255, 0.234);
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
        transition: all 0.3s;

        svg {
          path {
            transition: all 0.3s;
          }
        }

        &:hover {
          background: white;

          svg {
            path {
              fill: black;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1550px) {
    height: 802px;

    .content-container {
      text-shadow: 2px 5px 3px rgb(36 36 36 / 12%);

      .title {
        font-size: 46px;
        line-height: 128.61%;
        max-width: 993px;

        span {
          font-size: 32px;
        }
      }

      .subtitle {
        font-weight: 400;
        font-size: 19px;
        line-height: 147.11%;
        margin-top: 11px;
        margin-bottom: 47px;
      }

      .telegram-box {
        padding: 38px 74px 38px 48px;
        gap: 17px;

        .text {
          font-size: 24px;
          line-height: 143.11%;
          max-width: 272px;
        }

        .telegram-button {
          padding: 4px 30px;
        }
      }
    }
  }

  @media (max-width: 1020px) {
    padding: 128px 15px 36px 15px;
    height: 689px;

    background-position: center;

    .content-container {
      .telegram-box {
        align-self: center;
        flex-direction: column;
        padding: 23px 16px;

        .text {
          font-size: 23px;
          text-align: center;
        }

        .telegram-button {
          width: 100%;
          display: flex;
          align-items: center;
          height: 56px;
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .main-content {
    padding-top: 102px;
    .content-container {
      .title {
        font-size: 20px;
        line-height: 128.61%;
        max-width: 405px;
      }

      .subtitle {
        font-weight: 400;
        font-size: 14px;
        line-height: 147.11%;
        max-width: 350px;
        margin-bottom: 27px;
      }

      .button {
        padding: 16px 36px;
        font-size: 16px;
      }
    }
  }
}
</style>
