<script setup>
</script>

<template>
    <section class="stagesWork">
        <p class="stagesWork__title">этапы работы</p>
        <div class="stagesWork__steps">
            <div class="stagesWork__arrow">
                <img src="../../assets/img/stagesWork/arrow.png" alt="">
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
        <div class="stagesWork__weeks--car">
            <img src="../../assets/img/stagesWork/car.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
.stagesWork {
    position: relative;
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
        }

        &--car {
            top: 206px;
            left: 0;
            position: absolute;
        }
    }

    .button {
        position: absolute;
        top: 45px;
    }
}
</style>