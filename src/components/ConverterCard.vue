<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-muted">{{selectedCurrency}}</h5>
            <div class="">
                <select class="form-select form-select-lg py-3 outline" v-model="selectedCurrency" >
                    <option
                            v-for="curency in currencyList"
                            :key="curency.CharCode" :value="curency.Name">{{curency.CharCode}}</option>
                </select>
                <input class="border-primary input"  type="text">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ConverterCard",
    props: {
      currencies: Object,
    },
    data() {
      return {
        selectedCurrency: null
      }
    },
    computed: {
      currencyList() {
        if(this.currencies) {
          this.selectedCurrency = this.currencies[Object.keys(this.currencies)[0]].Name
        }
        return this.currencies
      }
    }
  }
</script>

<style scoped>
.outline {
    border: none;
    outline: none;
}

    .input {
        border-width:0 0 2px;
        outline: none;
    }
</style>
