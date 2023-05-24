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
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.0425 0.15123L1.35412 9.51897C-0.399009 10.1849 -0.388867 11.1097 1.03247 11.5221L7.62772 13.4678L22.8872 4.36308C23.6087 3.94792 24.268 4.17126 23.7261 4.62615L11.3629 15.1777L10.908 21.6078C11.5744 21.6078 11.8686 21.3187 12.2424 20.9776L15.4458 18.0317L22.1091 22.6861C23.3378 23.326 24.2201 22.9972 24.5259 21.6106L28.9 2.11603C29.3477 0.41841 28.2147 -0.350246 27.0425 0.15123Z"
                        fill="#1E1E1E"
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
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9965 8.66482C10.6094 8.66482 8.66141 10.6129 8.66141 13C8.66141 15.3871 10.6094 17.3352 12.9965 17.3352C15.3836 17.3352 17.3316 15.3871 17.3316 13C17.3316 10.6129 15.3836 8.66482 12.9965 8.66482ZM25.9985 13C25.9985 11.2048 26.0148 9.42584 25.914 7.63387C25.8132 5.55247 25.3384 3.70522 23.8164 2.18319C22.2911 0.657911 20.4472 0.186343 18.3658 0.0855244C16.5706 -0.0152937 14.7917 0.000967347 12.9998 0.000967347C11.2046 0.000967347 9.42566 -0.0152937 7.63373 0.0855244C5.55236 0.186343 3.70515 0.661163 2.18315 2.18319C0.657899 3.70847 0.186339 5.55247 0.0855228 7.63387C-0.0152934 9.42909 0.000967329 11.208 0.000967329 13C0.000967329 14.792 -0.0152934 16.5742 0.0855228 18.3661C0.186339 20.4475 0.661151 22.2948 2.18315 23.8168C3.7084 25.3421 5.55236 25.8137 7.63373 25.9145C9.42891 26.0153 11.2078 25.999 12.9998 25.999C14.7949 25.999 16.5739 26.0153 18.3658 25.9145C20.4472 25.8137 22.2944 25.3388 23.8164 23.8168C25.3416 22.2915 25.8132 20.4475 25.914 18.3661C26.0181 16.5742 25.9985 14.7952 25.9985 13ZM12.9965 19.6703C9.30533 19.6703 6.32637 16.6912 6.32637 13C6.32637 9.30876 9.30533 6.32974 12.9965 6.32974C16.6877 6.32974 19.6666 9.30876 19.6666 13C19.6666 16.6912 16.6877 19.6703 12.9965 19.6703ZM19.9398 7.61436C19.078 7.61436 18.382 6.91839 18.382 6.05656C18.382 5.19473 19.078 4.49876 19.9398 4.49876C20.8016 4.49876 21.4976 5.19473 21.4976 6.05656C21.4978 6.2612 21.4577 6.46389 21.3795 6.65301C21.3013 6.84212 21.1866 7.01396 21.0419 7.15866C20.8972 7.30337 20.7254 7.41811 20.5363 7.4963C20.3471 7.5745 20.1445 7.61462 19.9398 7.61436Z"
                        fill="#1E1E1E"
                      />
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

  &--active {
    color: var(--blackLight);
    background-color: #f4f4f4;
    padding-bottom: 7px;

    .header__burger-point {
      background-color: currentColor;
    }

    .container {
      border-bottom: 0px solid currentColor;
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

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 18px;
    border-bottom: 1px solid currentColor;
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

                svg {
                  &:hover {
                    path {
                      fill: #1e1e1e;
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
