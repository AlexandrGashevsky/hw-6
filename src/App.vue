<script setup>
import { RouterLink, RouterView } from "vue-router";
import axios from 'axios'
</script>

<template>
  <header>
    <div>
      <nav class="naviagation">
        <RouterLink to="/">Courses</RouterLink>
      </nav>
    </div>
  </header>
  <div v-show="loading" class="lds-ring"><div></div><div></div><div></div><div></div></div>
  <div v-show="!loading">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      loading: true
    }
  },
  methods: {
    getData(){
      let result; 
      axios.get('https://api.wisey.app/api/v1/core/preview-courses/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNzU1NzBhYi01MDI5LTRjYTUtODM2Ny01M2UzN2Y3OGE5NjkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5ODU1MTMsImV4cCI6MTY3OTg4NTUxM30.q-Ayli5KgBAg6kq3vXj6WhIjjO8deeE-wEXaw131w34')
      .then((response) => {
        result = response.data;
         this.$store.state.events = result.courses;
         console.log(result.courses);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(() => {
        this.loading = false;
      })
    },
    
  },
  created: function(){this.getData()}
}
</script>

<style>
  .naviagation > *{
    margin-right: 20px;
  }

  .lds-ring {
  margin-left: calc(50% - 160px);
  display: inline-block;
  position: relative;
  width: 400px;
  height: 400px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 320px;
  height: 320px;
  margin: 8px;
  border: 30px solid rgb(39, 39, 39);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: rgb(20, 20, 20) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
