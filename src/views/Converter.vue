<template>
  <div class="convert">
    <ConverterCard
            :currencies="currencyList"
            :inputVal="nominal"
            :selected="mainCurrency"
            @changeValute="setMainCurrency"
            @changeNominal="changeNominal"
    >
    </ConverterCard>
    <button class="btn btn-white text-primary rounded-circle" @click="clickHandler">⟷</button>
    <ConverterCard
            :currencies="currencyList"
            :is-disable="true"
            :inputVal="calcCourse"
            :selected="minorCurrency"
            @changeValute="setMinorCurrency"
    >
    </ConverterCard>
  </div>
</template>
<script>
import ConverterCard from '../components/ConverterCard';
import {calculateCourse, swapCurrency} from '../core/utils';

  export default {
    name: 'Convert',
    data() {
      return {
        mainCurrency: null,
        minorCurrency: null,
        nominal: 1,
      }
    },
    methods: {
      clickHandler() {
        const {main, minor} = swapCurrency(this.mainCurrency, this.minorCurrency)
        this.mainCurrency = main;
        this.minorCurrency = minor;
      },
      setMainCurrency(val) {
        this.mainCurrency = val
      },
      setMinorCurrency(val) {
        this.minorCurrency = val
      },
      changeNominal(nominal) {
        this.nominal = +nominal
      }
    },
    computed: {
      currencyList() {
        return this.$store.getters.getValute;
      },
      calcCourse() {
        // Курс к рублю
        let rubCourse = calculateCourse(this.mainCurrency?.Value, this.mainCurrency?.Nominal);
        rubCourse *= this.minorCurrency?.Nominal;
        const course = calculateCourse(rubCourse, this.minorCurrency?.Value);
        const minorCourse = course * this.nominal;
        return minorCourse.toFixed(3);
      }
    },
    components: {
      ConverterCard
    }
  }
</script>
<style scoped>
  .convert {
    display: flex;
    align-items: center;
  }
</style>
