<script setup>
import { ref } from 'vue';

const activeHeader = ref(false);

///Смена цвета при scroll страницы
onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            activeHeader.value = true;
        }
        else {
            activeHeader.value = false;
        }
    });
})

///Навигация
const headerLinks = reactive([
    {
        name: "Этапы работы",
        active: true,
        href: "#"
    },
    {
        name: "О нас",
        active: false,
        href: "#"
    },
    {
        name: "Отзывы",
        active: false,
        href: "#"
    },
    {
        name: "Контакты",
        active: false,
        href: "#"
    }
])

const onChangeActiveLink = (indexLink) => {
    console.log(111);
    headerLinks.forEach((item, index) => {
        item.active = index === indexLink ? true : false;
    });
}

</script>

<template>
    <header :class="!activeHeader ? 'header' : 'header header--active'">
        <div class="container">
            <a class="header__logo">
                <img v-if="!activeHeader" activeHeader src="../assets/img/header/logo.png" alt="">
                <img v-if="activeHeader" src="../assets/img/header/logoActive.png" alt="">
            </a>
            <div class="header__menu">
                <ul class="header__nav">
                    <li v-for="(item, index) in headerLinks" :key="index"
                        :class="item.active ? 'header__nav-item header__nav-item--active' : 'header__nav-item'">
                        <a :href="item.href" class="header__link" @click="onChangeActiveLink(index)">{{ item.name }}</a>
                    </li>
                </ul>
                <a class="header__call" href="tel:+71234567890">позвонить</a>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    width: 100%;
    padding-top: 17px;
    position: fixed;
    z-index: 20;
    color: #FFFFFF;
    transition: color 0.3s, background-color 0.3s, padding 0.3s;

    &--active {
        color: var(--blackLight);
        background-color: #F4F4F4;
        padding-bottom: 7px;
    }

    &__logo {
        width: 159px;
        height: 34px;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
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

    &__nav {
        display: flex;
        flex-direction: row;
        gap: 27px;
        align-items: center;

        &-item {
            list-style-type: none;

            &::after {
                position: absolute;
                content: "";
                width: 0;
                height: 1px;
                background-color: currentColor;
                left: 0;
                bottom: -4px;
                /* transition: width 0.3s; */
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

    &__link {
        font-weight: 400;
        font-size: 16px;
        line-height: 128.61%;
        transition: font-weight .4s ease-in-out;
    }

    &__call {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 21px 38px;
        font-weight: 900;
        font-size: 16px;
        line-height: 128.61%;
        color: currentColor;
        font-family: 'Druk Text Wide Cyr';
        border: 1px solid currentColor;
        border-radius: 108px;
    }
}
</style>