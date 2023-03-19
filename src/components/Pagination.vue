<script setup></script>


<template>
<div class="pagination-section">
    <ul class="pagination">
        <li>←</li>
        <li v-for="(index) in countPages(n)" :key="index">{{index}}</li>
        <li>→</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'pagination',
    props:{
        n: Number
    },
    methods: {
        countPages(arrayLength){
            if(arrayLength <= 10){
                return 1;
            } else {
              return Math.ceil(arrayLength/10);
            }
        }
    }
}
</script>

<style>
    .pagination{
        padding: 0;
        margin-left: auto;
        margin-right: auto;
        list-style: none;
        display: flex;
        width: 400px;
        align-items: center;
    }
    .pagination > * {
        
        border: solid 1px rgb(65, 65, 65);
        border-radius: 3%;
        background-color: rgb(231, 239, 245);
        text-align: center;
        font-size: 30px;
        margin: auto;
        width: 36px;
        transition-duration: 100ms;

    }
    .pagination > *:hover,
    .pagination > *:focus{
        font-weight: bold;
        cursor: pointer;
        border: solid 5px rgb(0, 41, 16);
        transition-duration: 100ms;
    }
</style>