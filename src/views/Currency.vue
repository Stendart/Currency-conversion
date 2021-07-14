<template>
  <div class="cureency mx-auto">
    <SearchFilter title="Введите название валюты или её код" @searchClick="searchClick"></SearchFilter>
    <ExchangeRateItem
            v-for="currency in currencyFilteredList" :key="currency.CharCode"
            :currency="currency">
    </ExchangeRateItem>
  </div>
</template>

<script>
import ExchangeRateItem from '../components/ExchangeRateItem';
import SearchFilter from '../components/SearchFilter';

export default {
  name: 'Currency',
  data () {
    return {
      searchString: '',
    }
  },
  methods: {
    searchClick(filterStr) {
      this.searchString = filterStr;
    }
  },
  computed: {
    currencyFilteredList() {
      const valute = this.$store.getters.getValute;
      if (valute) {          // Вынести
       const filteredList = Object.values(valute);
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
