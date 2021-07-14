<template>
  <div class="cureency mx-auto">
    <SearchFilter class="my-4" title="Введите название валюты или её код"
                  @searchClick="searchClick"></SearchFilter>
    <ExchangeRateItem class="mb-2"
            v-for="currency in currencyFilteredList" :key="currency.CharCode"
            :currency="currency">
    </ExchangeRateItem>
    <h3 v-if="showNothingFilter">По заданному фильтру ничего не найдено</h3>
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

      if (valute) {
       const filteredList = Object.values(valute);
       if(!this.searchString) {
         return filteredList;
       }
       return filteredList.filter(el => {
         return el.NumCode.toLowerCase().includes(this.searchString.toLowerCase()) ||
                 el.Name.toLowerCase().includes(this.searchString.toLowerCase())
       });
      }
    },
    showNothingFilter() {
      return !this.currencyFilteredList?.length
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
