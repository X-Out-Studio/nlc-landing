<template>
    <section class="price">
        <div class="global-title">цена в россии vs NLC</div>
        <div class="price__card">
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo" src="../../assets/img/price/logoNLC.svg" alt="">
                    <img src="../../assets/img/price/car1.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo" src="../../assets/img/price/logoAvito.svg" alt="">
                    <img src="../../assets/img/price/car2.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo" src="../../assets/img/price/logoNLC.svg" alt="">
                    <img src="../../assets/img/price/car1.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo" src="../../assets/img/price/logoAvito.svg" alt="">
                    <img src="../../assets/img/price/car2.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.price {
    margin-top: 140px;
    margin-bottom: 147px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__card {
        margin-top: 79px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 37px;
        row-gap: 4px;
    }

    &__item {
        &:nth-child(even) {
            .price__info {
                background-color: #ffffff;
                color: var(--blackLight);
            }
        }
    }

    &__logo {
        position: absolute;
        top: 28px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 17px;
        padding: 28px 0 26px 0;
        background-color: var(--blackLight);
        border-radius: 14px;
        color: #EDEDED;
        position: relative;
        top: -28px;
    }

    &__name {
        font-weight: 700;
        font-size: 25px;
        line-height: 147.11%;
    }

    &__rub {
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 147.11%;
    }

    &__img {
        border-radius: 14px;
        position: relative;

        img {
            border-radius: 14px;
        }
    }
}
</style>