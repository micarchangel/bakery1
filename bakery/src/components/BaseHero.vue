<template>
  <section class="hero">
    <div class="container">
      <h2 class="hero__title">Асортимент</h2>
      <div class="hero__wrap">
        <ul class="list-reset hero__list">
          <li class="hero__item">
            <img class="hero__img" src="/img/heroimg-1.png" alt="img1" /><span class="hero__txt"
              >Пана-Кота</span
            >
          </li>
          <li class="hero__item">
            <img class="hero__img" src="/img/heroimg-2.png" alt="img2" /><span class="hero__txt"
              >Торти</span
            >
          </li>
          <li class="hero__item">
            <img class="hero__img" src="/img/heroimg-3.png" alt="img3" /><span class="hero__txt"
              >Бенто</span
            >
          </li>
          <li class="hero__item">
            <img class="hero__img" src="/img/heroimg-4.png" alt="img4" /><span class="hero__txt"
              >Капкейки</span
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.hero {
  padding-top: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);

  &__title {
    margin: 0;
    margin-bottom: 70px;
    text-align: center;
    color: #000;
    font-family: sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__list {
    padding-bottom: 70px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
  &__txt {
    color: #000;
    font-family: sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__img {
    margin-bottom: 10px;
  }
  &__wrap {
    position: relative;
  }
}
</style>
