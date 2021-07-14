<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-muted">{{currency.Name}}</h5>
                <div class="rate-wrapper">
                    <div>
                        <span>{{getCurrencyPair.first.price}} {{getCurrencyPair.first.currencyName}}</span>
                        <button class="exchangeBtn" @click="clickHandler">⟷</button>
                        <span>{{getCurrencyPair.second.price}} {{getCurrencyPair.second.currencyName}}</span>
                    </div>
                    <span :class="[isIncrease ? 'text-success': 'text-danger']">{{setValueCurrency}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {calculateCourse, calculatePrice, swapCurrency} from '../core/utils';

    export default {
    name: "ExchangeRateItem",
    props: {
      currency: {
        type: Object,
        require: true
      }
    },
    data() {
      return {
        isReverse: false,
        firstCurrency: {
          price: this.currency.Nominal,
          currencyName: this.currency.CharCode
        },
        secondCurrency: {
          price: this.currency.Value,
          currencyName: 'RUB'
        },
      }
    },
    methods: {
      clickHandler() {
        this.isReverse = !this.isReverse;
      },
    },
    computed: {
      calcDiferentCurrency() {
        return this.currency.Value - this.currency.Previous;
      },
      isIncrease() {
        return this.calcDiferentCurrency >= 0;
      },
      setValueCurrency() {
        if(this.isIncrease) {
          return '↑' + this.calcDiferentCurrency.toFixed(2);
        }
        return '↓' + this.calcDiferentCurrency.toFixed(2);
      },
      getCurrencyPair() {
        const course = calculateCourse(this.changeCurrency.second.price, this.changeCurrency.first.price);
        const price = calculatePrice(course, this.currency.Nominal);
        return {
          first: {...this.changeCurrency.first, price: this.currency.Nominal},
          second: {...this.changeCurrency.second, price: price}
        }
      },
      changeCurrency() {
        if(this.isReverse) {
          const {main, minor} = swapCurrency(this.firstCurrency, this.secondCurrency)
          return {
            first: main,
            second: minor,
          }
        }
        return {
          first: this.firstCurrency,
          second: this.secondCurrency,
        }
      }
    },
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
</style>
