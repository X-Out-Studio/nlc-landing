<script setup>
import { ref } from 'vue';

const activeHeader = ref(false);
const activeMobileMenu = ref(false);

///Смена цвета при scroll страницы
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      activeHeader.value = true;
    } else {
      activeHeader.value = false;
    }
  });
});

///Навигация
const headerLinks = reactive([
  {
    name: 'Этапы работы',
    active: false,
    href: '#stagesWork',
  },
  {
    name: 'О нас',
    active: false,
    href: '#about',
  },
  {
    name: 'Отзывы',
    active: false,
    href: '#reviews',
  },
  {
    name: 'Контакты',
    active: false,
    href: '#footer',
  },
]);

const onChangeActiveLink = (indexLink) => {
  headerLinks.forEach((item, index) => {
    item.active = index === indexLink ? true : false;
  });
  activeMobileMenu.value = false;
  document.body.classList.remove('body--hidden');
};

const activeMobileHeader = () => {
  activeHeader.value = true;
  activeMobileMenu.value = !activeMobileMenu.value;
  document.body.classList.toggle('body--hidden');
  if (!activeMobileMenu.value && window.scrollY === 0) {
    activeHeader.value = false;
  }
};
</script>

<template>
  <header :class="!activeHeader ? 'header' : 'header header--active'">
    <div class="container">
      <a href="#main" class="header__logo">
        <img
          v-if="!activeHeader"
          activeHeader
          src="@/assets/img/header/logo.svg"
          alt=""
        />
        <img
          v-if="activeHeader"
          src="../assets/img/header/logoActive.svg"
          alt=""
        />
      </a>
      <div class="header__menu">
        <ul class="header__nav">
          <li
            v-for="(item, index) in headerLinks"
            :key="index"
            :class="
              item.active
                ? 'header__nav-item header__nav-item--active'
                : 'header__nav-item'
            "
          >
            <a
              :href="item.href"
              class="header__link"
              @click="onChangeActiveLink(index)"
              >{{ item.name }}</a
            >
          </li>
        </ul>
        <a class="header__number" href="tel:+79381332323"
          >+7 938 133 23 23</a
        >
      </div>
      <button
        class="header__burger"
        :class="activeMobileMenu ? 'header__burger--active' : ''"
        @click="activeMobileHeader()"
      >
        <div class="header__burger-point"></div>
        <div class="header__burger-point"></div>
        <div class="header__burger-point"></div>
      </button>
    </div>

    <Transition name="slide-fade">
      <div v-if="activeMobileMenu" class="header__mobile">
        <div class="header__mobile-menu">
          <ul class="header__nav">
            <li
              v-for="(item, index) in headerLinks"
              :key="index"
              :class="
                item.active
                  ? 'header__nav-item header__nav-item--active'
                  : 'header__nav-item'
              "
            >
              <a
                :href="item.href"
                class="header__link"
                @click="onChangeActiveLink(index)"
                >{{ item.name }}</a
              >
            </li>
          </ul>
          <a class="header__call" href="tel:+79381332323"
            >позвонить</a
          >
          <div class="header__info">
            <div class="header__info-social">
              <p class="header__info-social-text">
                Узнай о нас больше<br />
                в соц. сетях
              </p>
              <ul class="header__info-social-items">
                <li>
                  <a
                    href="https://t.me/nlc_auto"
                    target="_blank"
                    class="footer__social-link"
                  >
                    <svg
                      width="29"
                      height="23"
                      viewBox="0 0 29 23"
                      class="telegram"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0425 0.15123L1.35412 9.51897C-0.399009 10.1849 -0.388867 11.1097 1.03247 11.5221L7.62772 13.4678L22.8872 4.36308C23.6087 3.94792 24.268 4.17126 23.7261 4.62615L11.3629 15.1777L10.908 21.6078C11.5744 21.6078 11.8686 21.3187 12.2424 20.9776L15.4458 18.0317L22.1091 22.6861C23.3378 23.326 24.2201 22.9972 24.5259 21.6106L28.9 2.11603C29.3477 0.41841 28.2147 -0.350246 27.0425 0.15123Z"
                        fill="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@NextLevelCar"
                    target="_blank"
                    class="footer__social-link footer__social-link--insta"
                  >
                    <svg
                      width="32"
                      height="25"
                      class="youtube"
                      viewBox="0 0 32 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8 17.8571L21.104 12.5L12.8 7.14286V17.8571ZM31.296 3.875C31.504 4.71429 31.648 5.83928 31.744 7.26786C31.856 8.69643 31.904 9.92857 31.904 11L32 12.5C32 16.4107 31.744 19.2857 31.296 21.125C30.896 22.7321 29.968 23.7679 28.528 24.2143C27.776 24.4464 26.4 24.6071 24.288 24.7143C22.208 24.8393 20.304 24.8929 18.544 24.8929L16 25C9.296 25 5.12 24.7143 3.472 24.2143C2.032 23.7679 1.104 22.7321 0.704 21.125C0.496 20.2857 0.352 19.1607 0.256 17.7321C0.144 16.3036 0.0959999 15.0714 0.0959999 14L0 12.5C0 8.58929 0.256 5.71429 0.704 3.875C1.104 2.26786 2.032 1.23214 3.472 0.785714C4.224 0.553572 5.6 0.392857 7.712 0.285714C9.792 0.160714 11.696 0.107143 13.456 0.107143L16 0C22.704 0 26.88 0.285714 28.528 0.785714C29.968 1.23214 30.896 2.26786 31.296 3.875Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/_nextlevelcar_"
                    target="_blank"
                    class="footer__social-link footer__social-link--insta"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 42 42"
                      fill="none"
                      class="insta"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9944 13.997C17.1383 13.997 13.9915 17.1439 13.9915 21C13.9915 24.8561 17.1383 28.003 20.9944 28.003C24.8504 28.003 27.9972 24.8561 27.9972 21C27.9972 17.1439 24.8504 13.997 20.9944 13.997ZM41.9977 21C41.9977 18.1 42.0239 15.2263 41.8611 12.3316C41.6982 8.96937 40.9312 5.98536 38.4726 3.52669C36.0087 1.06278 33.03 0.301015 29.6678 0.138155C26.7679 -0.0247052 23.8943 0.00156264 20.9996 0.00156264C18.0997 0.00156264 15.2261 -0.0247052 12.3314 0.138155C8.96921 0.301015 5.98524 1.06803 3.52663 3.52669C1.06276 5.99061 0.301009 8.96937 0.138152 12.3316C-0.0247047 15.2316 0.00156261 18.1053 0.00156261 21C0.00156261 23.8947 -0.0247047 26.7737 0.138152 29.6684C0.301009 33.0306 1.06801 36.0146 3.52663 38.4733C5.9905 40.9372 8.96921 41.699 12.3314 41.8618C15.2313 42.0247 18.105 41.9984 20.9996 41.9984C23.8995 41.9984 26.7732 42.0247 29.6678 41.8618C33.03 41.699 36.014 40.932 38.4726 38.4733C40.9365 36.0094 41.6982 33.0306 41.8611 29.6684C42.0292 26.7737 41.9977 23.9 41.9977 21ZM20.9944 31.775C15.0317 31.775 10.2195 26.9628 10.2195 21C10.2195 15.0372 15.0317 10.225 20.9944 10.225C26.957 10.225 31.7692 15.0372 31.7692 21C31.7692 26.9628 26.957 31.775 20.9944 31.775ZM32.2105 12.3001C30.8183 12.3001 29.6941 11.1759 29.6941 9.78367C29.6941 8.39148 30.8183 7.26722 32.2105 7.26722C33.6026 7.26722 34.7269 8.39148 34.7269 9.78367C34.7273 10.1143 34.6625 10.4417 34.5362 10.7472C34.4099 11.0527 34.2245 11.3302 33.9908 11.564C33.757 11.7978 33.4794 11.9831 33.174 12.1094C32.8685 12.2357 32.5411 12.3005 32.2105 12.3001Z"
                        fill="url(#paint0_linear_925_590)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_925_590"
                          x1="5"
                          y1="-6"
                          x2="46"
                          y2="66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#F8D63D" />
                          <stop
                            offset="0.484375"
                            stop-color="#ED3279"
                          />
                          <stop offset="1" stop-color="#172EF7" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="header__info-data">
              <a href="tel:+79381332323"
                >Телефон<br />
                +7 938 133 23 23</a
              >
              <a href="mailto:nlc-auto@yandex.ru"
                >Почта<br />
                nlc-auto@yandex.ru</a
              >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.header {
  width: 100%;
  padding-top: 17px;
  position: fixed;
  z-index: 20;
  color: #ffffff;
  transition: color 0.3s, background-color 0.3s, padding 0.3s;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 18px;
    border-bottom: 1px solid #ffffff;
  }

  &--active {
    color: var(--blackLight);
    background-color: #f4f4f4;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.15);

    .header__burger-point {
      background-color: #1e1e1e;
    }

    .container {
      border-bottom: 1px solid transparent;
    }
  }

  &__logo {
    width: 159px;
    height: 34px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__number {
    font-family: 'Druk Text Wide Cyr';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 128.61%;
    text-align: right;
    letter-spacing: 0.03em;
    color: currentColor;
  }

  &__menu {
    display: flex;
    flex-direction: row;
    gap: 121px;
    align-items: center;
  }

  &__burger {
    width: 30px;
    height: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    display: none;

    &-point {
      width: 5px;
      height: 5px;
      background-color: #ffffff;
      border-radius: 50%;
    }
  }

  &__link {
    width: calc(100% + 10px);
    font-weight: 400;
    font-size: 16px;
    line-height: 128.61%;
  }

  &__nav {
    display: flex;
    flex-direction: row;
    gap: 27px;
    align-items: center;

    &-item {
      list-style-type: none;
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 0;
        margin: 0 auto;
        height: 1px;
        background-color: currentColor;
        left: 0;
        bottom: -4px;
        transition: width 0.3s ease-in 0s;
      }

      &:hover {
        position: relative;

        &::after {
          width: 100%;
        }
      }

      &--active {
        position: relative;

        .header__link {
          font-weight: 700;
        }

        &::after {
          width: 100%;
        }
      }
    }
  }

  &__call {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 21px 38px;
    font-weight: 900;
    font-size: 16px;
    line-height: 0.7;
    color: currentColor;
    font-family: 'Druk Text Wide Cyr';
    border: 1px solid currentColor;
    border-radius: 108px;
    background-color: transparent;
    transition: background-color 0.3s;

    &:hover {
      background-color: #000000;
      border: 1px solid #000000;
      color: #ffffff;
    }
  }
}

@media (max-width: 1200px) {
  .header {
    .container {
      margin: 0 20px;
    }

    &__menu {
      gap: 50px;
    }
  }
}

@media (max-width: 900px) {
  .header {
    padding-top: 30px;

    .container {
      padding-bottom: 10px;
    }

    &__logo {
      width: 93px;
      height: 20px;
    }

    &__menu {
      display: none;
    }

    &__burger {
      display: flex;
      transition: transform 0.3s;

      &--active {
        transform: rotate(90deg);
      }
    }

    &__mobile {
      position: relative;
      top: 0;
      width: 100%;
      height: 100vh;
      padding: 46px 20px 126px 15px;
      background-color: #f4f4f4;
      overflow: auto;
      z-index: -1;

      &-menu {
        display: flex;
        flex-direction: column;
        gap: 54px;

        .header__nav {
          flex-direction: column;
          gap: 25px;
          align-items: flex-start;
          color: #1e1e1e;
        }

        .header__call {
          width: fit-content;
          color: #1f1f1f;

          &:hover {
            color: #ffffff;
          }
        }

        .header__info {
          padding-top: 26px;
          border-top: 1px solid #1e1e1e;
          color: #1f1f1f;
          display: flex;
          flex-direction: column;
          gap: 42px;

          &-social {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &-text {
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 128.61%;
            }

            &-items {
              display: flex;
              flex-direction: row;
              gap: 20px;
              align-items: center;

              li {
                list-style-type: none;

                a {
                  display: block;
                }

                .telegram {
                  &:hover {
                    path {
                      fill: #00b0ef;
                    }
                  }
                }

                .youtube {
                  &:hover {
                    path {
                      fill: #eb3238;
                    }
                  }
                }

                .insta {
                  path {
                    fill: #000000;
                  }
                  &:hover {
                    path {
                      fill: url(#paint0_linear_925_590);
                    }
                  }
                }
              }
            }
          }

          &-data {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
