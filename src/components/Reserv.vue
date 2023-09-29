<template>
    <div class="container-card text-center" style="margin-top: 10px;">
          <div class="row">
            <div class="d-flex flex-wrap justify-content-between">
              <div v-for="(item, index) in tlAttraction" :key="item" class="card" style="width: 18rem;">
                <img class="card-img-top" v-if="item.name" :src="item.img" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{item.name}}</h5>
                  <!--<button class="btn btn-primary" @click="addToTable(item.name)">Book</button>-->
                  <router-link :to="'/' + item.name" class="btn btn-primary">Book</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </template>
    
    <script setup>
    import { ref } from "vue";
    import { RouterLink, RouterView } from 'vue-router'
    import { defineProps, defineEmits } from 'vue';
    
    const travel = ref("");
    const tlAttraction = ref([
        { name:'ท่าช้าง', img: "tahchang.jpg" }, 
        { name:'GoodViews', img: "goodviews.jpg" }, 
        { name:'RiverSide', img: "riverside.jpg" }, 
        { name:'WarmUp', img: "warmup.jpg" }, 
        { name:'THAY Nimman', img: "thaynimman.jpg" },
        { name:'Lism Cafe', img: "lism.jpg" },
        { name:'Beer Lab', img: "beerlab.jpg" },
        { name:'TAMMA Cafe', img: "tamma.jpg"}]); 
    
    /*const tableData = ref([]); // Create a ref for the table data
    
    const addToTable = (name) => {
      tableData.value.push(name); // Add the selected name to the table data
    };*/
    document.body.classList.remove('page-a-body');

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

* {
  margin: 0;
  padding: 0;
}

.container-card .row{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
}

section table {
  margin-top: 55px;
}
</style>
