<template>
  <div class="cureency mx-auto">
    <SearchFilter title="Введите название валюты или её код" @searchClick="searchClick"></SearchFilter>
    <ExchangeRateItem
            v-for="currency in currencyList" :key="currency.CharCode"
            :currency="currency">
    </ExchangeRateItem>
<!--    <div v-for="(currency, CharKey) in currencyList" :key="CharKey">-->
<!--      <span>{{CharKey}}</span> - <span>{{currency.Value}}</span>-->
<!--    </div>-->
  </div>
</template>

<script>
import {getCurrencyList} from '../core/api';
import ExchangeRateItem from '../components/ExchangeRateItem';
import SearchFilter from '../components/SearchFilter';

export default {
  name: 'Currency',
  data () {
    return {
      currencyInfo: '',
      searchString: '',
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
  methods: {
    searchClick(filterStr) {
      this.searchString = filterStr;
    }
  },
  computed: {
    currencyList() {
      if (this.currencyInfo['Valute']) {
       const filteredList = Object.values(this.currencyInfo['Valute']);
       if(!this.searchString) {
         return filteredList;
       }
       return filteredList.filter(el => {
         return el.NumCode.toLowerCase().includes(this.searchString.toLowerCase()) ||
                 el.Name.toLowerCase().includes(this.searchString.toLowerCase())
       });
      }
    }
  },
  components: {
    ExchangeRateItem,
    SearchFilter
  }
}
</script>
<style scoped>
  .cureency {
    width: 50%;
  }
</style>
