<template>
    <div class="card">
        <div class="card-body input-group">
            <label>
                {{title}}
                <input type="text" class="input-group" v-model="searchStr">
            </label>
            <button class="btn btn-primary input-group-btn" @click="clickHandler">Найти</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SearchFilter",
    props: {
      title: String
    },
    data() {
      return {
        searchStr: '',
      }
    },
    methods: {
      clickHandler() {
        this.$emit('searchClick', this.searchStr);
        this.searchStr = '';
      }
    }
  }
</script>

<style scoped>

</style>
