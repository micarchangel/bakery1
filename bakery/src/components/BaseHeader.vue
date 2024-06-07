<template>
  <section class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo-wrap">
          <img
            class="header__logo"
            width="150px"
            height="150px"
            src="/img/ciasteczka.png"
            alt="logo"
          />
          <span class="header__logo-text">Десертный рай</span>
        </div>
        <aside>
          <nav class="header__nav">
            <ul class="list-reset header__list">
              <router-link to="/"><li class="header__item">Главная</li></router-link>
              <router-link to="/products"> <li class="header__item">Продукты</li></router-link>
              <router-link to="/about"> <li class="header__item">Описание</li></router-link>
              <router-link to="/reviews"><li class="header__item">Отзывы</li></router-link>
              <router-link to="/contact"><li class="header__item">Контакты</li></router-link>
            </ul>
          </nav>
        </aside>
      </div>
      <div class="header__content">
        <h1 class="header__title">Сладкое делает нас счастливее</h1>
        <span class="header__subtitle"> После наших тортов, вы точно вернетесь за добавкой!</span>
        <router-link to="/products">
          <span class="btn-reset header__btn">Выбрать десерт</span></router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.header {
  background-image: url('../img/header.png');
  background-repeat: no-repeat;
  background-position: center;
  min-height: 1080px;
  width: 100%;
  &__wrap {
    margin-bottom: 90px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  &__list {
    display: flex;
    gap: 50px;
  }
  &__item {
    color: #fff;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &__title {
    margin: 0;
    color: #fff;
    font-family: sans-serif;
    font-size: 75px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
  &__subtitle {
    margin-bottom: 50px;
    display: block;
    color: #fff;
    font-family: sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__btn {
    padding: 11px 34px;
    fill: #e12549;
    background: #e12549;
    border-radius: 30px;
    filter: drop-shadow(0px 0px 19.712px #e12549) drop-shadow(0px 0px 39.424px #e12549)
      drop-shadow(0px 0px 137.984px #e12549) drop-shadow(0px 0px 275.968px #e12549)
      drop-shadow(0px 0px 473.088px #e12549) drop-shadow(0px 0px 827.903px #e12549);
    color: #fff;
    font-family: sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__content {
    text-align: center;
  }
  &__logo-wrap {
    display: flex;
    flex-direction: column;
  }
  &__logo {
    margin-bottom: 10px;
  }
  &__logo-text {
    color: #fff;
    font-family: TD Mars;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
