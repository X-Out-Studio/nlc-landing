<script setup>
</script>

<template>
    <section class="stagesWork">
        <p class="stagesWork__title">этапы работы</p>
        <div class="stagesWork__steps">
            <div class="stagesWork__arrow">
                <div class="stagesWork__step">
                    <div class="stagesWork__step--content">
                        <p class="stagesWork__step--name">1. подбор автомобиля</p>
                        <p class="stagesWork__step--text">Специалисты NLC подбирают вам авто по необходимым параметрам на
                            площадках Европы.</p>
                    </div>
                    <div class="stagesWork__step--done">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <div class="stagesWork__step stagesWork__step--right">
                    <div class="stagesWork__step--content">
                        <p class="stagesWork__step--name">2. заключение договора</p>
                        <p class="stagesWork__step--text">Компания NLC заключает договоры с клиентами на поставку автомобиля
                            как по полной, так и по частичной оплате (мин. аванс - 25%).</p>
                    </div>
                    <div class="stagesWork__step--done">
                        <img src="../../assets/img/stagesWork/done.svg" alt="">
                    </div>
                </div>
                <img class="stagesWork__arrow-img" src="../../assets/img/stagesWork/arrow.png" alt="">
            </div>
        </div>
        <p class="stagesWork__text">
            <span>Наш подход</span> заключается в том, чтобы полностью удовлетворить потребности каждого клиента и сделать
            процесс
            покупки автомобиля максимально простым и удобным. Мы гарантируем максимальную прозрачность сделок и лучшие цены
            на автомобили!
            <br><br>
            Свяжитесь с нами, и мы поможем вам подобрать автомобиль вашей мечты!
        </p>
        <div class="stagesWork__weeks">
            <p class="stagesWork__weeks-text">2 недели</p>
            <Button />
        </div>
        <div class="stagesWork__car">
            <img src="../../assets/img/stagesWork/car.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.stagesWork {
    background-color: var(--blackLight);
    padding-top: 40px;
    padding-bottom: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
        font-weight: 900;
        font-size: 38px;
        line-height: 128.61%;
        color: #ffffff;
        text-transform: uppercase;
        font-family: 'Druk Text Wide Cyr';
    }

    &__text {
        margin-top: 41px;
        font-weight: 400;
        font-size: 15px;
        line-height: 137.11%;
        color: #ffffff;
        text-align: center;
        font-style: normal;
        max-width: 709px;

        span {
            font-weight: 700;
        }
    }

    &__steps {
        margin-top: 13px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    &__step {
        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;

        &--content {
            background-color: #1E1E1E;
            border: 1px dashed #C6F3B6;
            border-radius: 7px;
            padding: 18px 20px 15px 35px;
        }

        &--name {
            font-weight: 700;
            font-size: 16px;
            line-height: 128.61%;
            text-transform: uppercase;
            color: #EDEDED;
        }

        &--text {
            margin-top: 27px;
            font-weight: 400;
            font-size: 14px;
            line-height: 147.11%;
            color: #EDEDED;
        }

        &--done {
            background-color: #C6F3B6;
            border: 8px solid #D9FFCC;
            border-radius: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 33px;
            height: 33px;
        }

        &--right {
            .stagesWork__step--done {
                order: -1;
            }
        }
    }

    &__arrow {
        position: relative;
        display: flex;
        flex-direction: column;


        &-img {
            position: absolute;
            left: 50%;
        }
    }

    &__weeks {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;

        &-text {
            font-style: normal;
            font-weight: 900;
            font-size: 151px;
            line-height: 97.11%;
            color: rgba(255, 255, 255, 0.1);
            letter-spacing: 0.015em;
            text-transform: uppercase;
            font-family: 'Druk Text Wide Cyr';
        }
    }

    &__car {
        top: 206px;
        left: 0;
        position: absolute;
        z-index: 0;
    }

    .button {
        position: absolute;
        top: 45px;
    }
}
</style>