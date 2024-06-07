<template>
  <section class="NavContact">
    <div class="container">
      <div class="NavContact__wrap">
        <div class="NavContact__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aefd5bc56160885ca3403eb4b420db5a0aae5d25664b5403d3ab197373180ae6b&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
        <div class="NavContact__info">
          <ul class="list-reset NavContact__list">
            <li class="NavContact__item">
              <span class="NavContact__txtTtl">Наши адреса</span>
              <span class="NavContact__txt">г. Москва Верхняя Радищевская ул. 2/1с3</span>
            </li>
            <li class="NavContact__item">
              <span class="NavContact__txtTtl">Режим работы </span>
              <span class="NavContact__txt">с 9 до 21</span>
            </li>
            <li class="NavContact__item">
              <span class="NavContact__txtTtl">Телефоны </span>
              <span class="NavContact__txt"
                >Отдел продаж:
                <a class="NavContact__txt" href="tel:+74959275387">+7 (495) 927-53-87</a></span
              >
            </li>
            <li class="NavContact__item">
              <span class="NavContact__txtTtl">Поставщикам и партнерам</span>
              <span class="NavContact__txt"
                ><a class="NavContact__txt" href="mailto:partners@dessertparadise.ru"
                  >partners@dessertparadise.ru</a
                ></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.NavContact {
  padding: 90px;
  &__wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  &__info {
    padding: 20px 30px;
    background-color: #fdeeca;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__txt {
    color: #000;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &__txtTtl {
    color: #030405;
    opacity: 0.8;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
