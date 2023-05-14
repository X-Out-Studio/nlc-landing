<template>
    <section class="price">
        <div class="global-title">цена в россии vs NLC</div>
        <div class="price__card">
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo price__logo-nlc" src="../../assets/img/price/logoNLC.svg" alt="">
                    <img class="price__car" src="../../assets/img/price/car1.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo price__logo-avito" src="../../assets/img/price/logoAvito.svg" alt="">
                    <img class="price__car" src="../../assets/img/price/car2.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo price__logo-nlc" src="../../assets/img/price/logoNLC.svg" alt="">
                    <img class="price__car" src="../../assets/img/price/car1.jpg" alt="">
                </div>
                <div class="price__info">
                    <p class="price__name">Porshe Macan</p>
                    <p class="price__rub">4 000 000 руб.</p>
                </div>
            </div>
            <div class="price__item">
                <div class="price__img">
                    <img class="price__logo price__logo-avito" src="../../assets/img/price/logoAvito.svg" alt="">
                    <img class="price__car" src="../../assets/img/price/car2.jpg" alt="">
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
    padding: 0 15px;

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

        &-nlc {
            width: 163px;
            height: 34px;
        }

        &-avito {
            width: 263px;
            height: 66px;
        }
    }

    &__car {
        object-fit: cover;
        width: 100%;
        height: 100%;
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

@media(max-width: 992px) {
    .price {
        margin-top: 40px;
        margin-bottom: 30px;

        &__logo {

            &-nlc {
                width: 116px;
                height: 24px;
            }

            &-avito {
                width: 191px;
                height: 48px;
            }
        }
    }
}

@media(max-width: 768px) {
    .price {
        &__card {
            margin-top: 31px;
        }
    }
}

@media (max-width: 670px) {
    .price {
        &__card {
            grid-template-columns: 1fr;
        }
    }
}

@media (max-width: 600px) {
    .price {
        align-items: flex-start;

        &__card {
            row-gap: 0;
        }

        &__logo {
            top: 21px;
        }

        &__name {
            font-size: 20px;
            line-height: 147.11%;
        }

        &__rub {
            font-weight: 700;
            font-size: 30px;
            line-height: 147.11%;
        }

        &__info {
            align-items: flex-start;
            padding: 21px 20px 18px 17px;
        }
    }
}
</style>