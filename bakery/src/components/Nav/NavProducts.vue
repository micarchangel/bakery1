<template>
  <section class="NavProducts">
    <div class="container">
      <div class="NavProducts__wrap">
        <ul class="list-reset NavProducts__list">
          <li class="NavProducts__item NavProducts__img-1">
            <span class="NavProducts__productTtl"> ТИРАМИСУ В СТАКАНЧИКЕ, 4 ШТ </span>
            <span class="NavProducts__productTtl"> Вес: 0,78 кг </span>
            <div class="NavProducts__productOrder">
              <span class="NavProducts__productPrice">1 200 ₽</span>
              <button class="btn-reset NavProducts__productBtn">Заказать</button>
            </div>
          </li>
          <li class="NavProducts__item NavProducts__img-2">
            <span class="NavProducts__productTtl"> ТОРТ БАУНТИ 2КГ </span>
            <span class="NavProducts__productTtl"> Вес: 1,79 кг </span>
            <div class="NavProducts__productOrder">
              <span class="NavProducts__productPrice">3 000 ₽</span>
              <button class="btn-reset NavProducts__productBtn">Заказать</button>
            </div>
          </li>
          <li class="NavProducts__item NavProducts__img-3">
            <span class="NavProducts__productTtl"> ТОРТ ФУНДУК ШОКОЛАД 2КГ </span>
            <span class="NavProducts__productTtl"> Вес: 1,87 кг </span>
            <div class="NavProducts__productOrder">
              <span class="NavProducts__productPrice">3 200 ₽</span>
              <button class="btn-reset NavProducts__productBtn">Заказать</button>
            </div>
          </li>
          <li class="NavProducts__item NavProducts__img-4">
            <span class="NavProducts__productTtl"> ТОРТ ТИРАМИСУ 2КГ </span>
            <span class="NavProducts__productTtl"> Вес: 2 кг </span>
            <div class="NavProducts__productOrder">
              <span class="NavProducts__productPrice">3 200 ₽</span>
              <button class="btn-reset NavProducts__productBtn">Заказать</button>
            </div>
          </li>
          <li class="NavProducts__item NavProducts__img-5">
            <span class="NavProducts__productTtl"> ТОРТ МОЛОЧНАЯ ДЕВОЧКА БАНАН/КЛУБН 2КГ </span>
            <span class="NavProducts__productTtl"> Вес: 2 кг </span>
            <div class="NavProducts__productOrder">
              <span class="NavProducts__productPrice">3 000 ₽</span>
              <button class="btn-reset NavProducts__productBtn">Заказать</button>
            </div>
          </li>
          <li class="NavProducts__item NavProducts__img-6">
            <span class="NavProducts__productTtl"> ТОРТ МУССОВЫЙ ТРИ ШОКОЛАДА </span>
            <span class="NavProducts__productTtl"> Вес: 1,78 кг </span>
            <div class="NavProducts__productOrder">
              <span class="NavProducts__productPrice">5 200 ₽</span>
              <button class="btn-reset NavProducts__productBtn">Заказать</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.NavProducts {
  padding: 90px;
  &__wrap {
    width: 100%;
  }
  &__list {
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }
  &__item {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 290px 25px 25px 25px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 266px;
      background-size: cover;
    }
  }
  &__img-1::before {
    background-image: url(/public/img/img-1.jpg);
  }
  &__img-2::before {
    background-image: url(/public/img/img-2.jpg);
  }
  &__img-3::before {
    background-image: url(/public/img/img-3.jpg);
  }
  &__img-4::before {
    background-image: url(/public/img/img-4.jpg);
  }
  &__img-5::before {
    background-image: url(/public/img/img-5.jpg);
  }
  &__img-6::before {
    background-image: url(/public/img/img-6.jpg);
  }
  &__productOrder {
    display: flex;
    justify-content: space-between;
  }
  &__productTtl {
    margin-bottom: 20px;
  }
  &__productBtn {
    padding: 5px 15px;
    background-color: #e12549;
    border-radius: 30px;
    color: #fff;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
