<template>
  <div class="convert">
    <ConverterCard :currencies="currencyList"></ConverterCard>
    <button class="btn btn-white text-primary rounded-circle" @click="clickHandler">⟷</button>
    <ConverterCard :currencies="currencyList"></ConverterCard>
  </div>
</template>
<script>
  import ConverterCard from '../components/ConverterCard';

  export default {
    name: 'Convert',
    methods: {
      clickHandler() {

      }
    },
    computed: {
      currencyList() {
        return this.$store.getters.getValute;
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
