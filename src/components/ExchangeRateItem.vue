<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-muted">{{currencyTitle}}</h5>
                <div class="rate-wrapper">
                    <div>
                        <span>{{mainCurrency.price}} {{mainCurrency.currencyName}}</span>
                        <button class="exchangeBtn">⟷</button>
                        <span>{{minorCurrency.price}} {{minorCurrency.currencyName}}</span>
                    </div>
                    <span :class="[false ? 'text-danger': 'text-success']">↑ 0,225</span>
                </div>

<!--                <p class="card-text">-->
<!--                    Some quick example text to build on the card title and make up the bulk of the-->
<!--                    card's content.-->
<!--                </p>-->
<!--                <button type="button" class="btn btn-primary">Button</button>-->
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ExchangeRateItem",
    props: {
      currencyTitle: {
        type: String,
        default: 'Название не указанно'
      },
      mainCurrency: {
        type: Object,
        require: true
      },
      minorCurrency: {
        type: Object,
        require: true
      }
    }
  }
</script>

<style scoped>
.exchangeBtn {
    border: none;
    background: none;
    outline:none;
}

.rate-wrapper {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
}

    .text {
        line-height: 1.5rem;
        height: 1.6rem;
    }
</style>
