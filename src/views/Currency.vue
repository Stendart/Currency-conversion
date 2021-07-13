<template>
  <div class="home">
    <div v-for="(currency, CharKey) in currencyList" :key="CharKey">
      <span>{{CharKey}}</span> - <span>{{currency.Value}}</span>
    </div>
  </div>
</template>

<script>
import {getCurrencyList} from '../core/api';

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
  }
}
</script>
