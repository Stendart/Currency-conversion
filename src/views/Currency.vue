<template>
  <div class="cureency mx-auto">
    <ExchangeRateItem
            v-for="(currency, CharKey) in currencyList" :key="CharKey"
            :title="CharKey"
            :currency="currency"
            :main-currency="{price: 1, currencyName: CharKey}"
            :minor-currency="{price: currency.Value, currencyName: 'RUB'}">
    </ExchangeRateItem>
<!--    <div v-for="(currency, CharKey) in currencyList" :key="CharKey">-->
<!--      <span>{{CharKey}}</span> - <span>{{currency.Value}}</span>-->
<!--    </div>-->
  </div>
</template>

<script>
import {getCurrencyList} from '../core/api';
import ExchangeRateItem from '../components/ExchangeRateItem';

export default {
  name: 'Currency',
  data () {
    return {
      currencyInfo: ''
    }
  },
  async created() {
    try {
      this.currencyInfo = await getCurrencyList()
    }
    catch (e) {
      console.log(e)
    }
  },
  computed: {
    currencyList() {
      return this.currencyInfo['Valute']
    }
  },
  components: {
    ExchangeRateItem
  }
}
</script>
<style scoped>
  .cureency {
    width: 50%;
    /*margin: 0 auto;*/
  }
</style>
