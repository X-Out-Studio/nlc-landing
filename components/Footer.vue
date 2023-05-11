<template>
    <footer class="footer">
        <form class="footer__form">
            <div class="container">
                <div class="footer__form-top">
                    <div class="global-title white">связаться с нами</div>
                </div>
            </div>
        </form>
        <div class="footer__info">
            <div class="container">
                <a class="footer__phone" href="tel: +71234567890">Телефон +7 123 456 78 90</a>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <p class="footer__regulation">Любое использование или копирование материалов или сборки материалов сайта,
                    элементов дизайна и оформления допускается только с разрешения правообладателя и только со ссылкой на
                    источник: <a href="#">https://8stories.team</a></p>
                <a class="footer__policy" href="#">Политика конфиденциальности</a>
                <p class="footer__year">2023</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: var(--blackLight);
    padding-top: 77px;
    padding-bottom: 90px;

    &__bottom {
        padding-top: 35px;
        border-top: 1px solid #FFFFFF;

        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: #FFFFFF;
        }
    }

    &__info {
        color: #FFFFFF;
        padding-bottom: 31px;
    }

    &__regulation {
        max-width: 670px;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 165%;
    }
}
</style>