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
  export default {
    name: "ExchangeRateItem",
    props: {
      // currencyTitle: {
      //   type: String,
      //   default: 'Название не указанно'
      // },
      // mainCurrency: {
      //   type: Object,
      //   require: true
      // },
      // minorCurrency: {
      //   type: Object,
      //   require: true
      // },
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
        // this.$emit('reverseCurrency')
      },
      calculateCourse(mainCur, minorCur) { // Вынести в отдельный файл
        return mainCur / minorCur;
      }
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
        const course = this.calculateCourse(this.changeCurrency.second.price, this.changeCurrency.first.price);
        const price = (course * this.currency.Nominal).toFixed(3);
        return {
          first: {...this.changeCurrency.first, price: this.currency.Nominal},
          second: {...this.changeCurrency.second, price: price}
        }
      },
      changeCurrency() {
        if(this.isReverse) {
          return {
            first: this.secondCurrency,
            second: this.firstCurrency,
          }
        }
        return {
          first: this.firstCurrency,
          second: this.secondCurrency,
        }
      }
    },
    watch: {
      // isReverse(newVal, oldVal) {
      //   if(newVal) {
      //     this.firstCurrency = this.minorCurrency;
      //     this.secondCurrency = this.mainCurrency;
      //     return;
      //   }
      //   this.firstCurrency = this.mainCurrency;
      //   this.secondCurrency = this.minorCurrency;
      // }
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

    .text {
        line-height: 1.5rem;
        height: 1.6rem;
    }
</style>
