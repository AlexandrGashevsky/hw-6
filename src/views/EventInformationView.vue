<script setup>
import axios from 'axios'
</script>

<template>
    <div class="event-information__card">
        <h1>{{course.title}}</h1>
        <div class="lesson" v-for="(lesson, index) in course.lessons">
            <img class="card-image" :src="`${lesson.previewImageLink}/lesson-${index+1}.webp`"/> 
            <h2>{{ lesson.title }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            course: Object
            };
        },
        mounted() {
                //console.log(this.$route.params.id);
                axios.get(`https://api.wisey.app/api/v1/core/preview-courses/${this.$route.params.id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNzU1NzBhYi01MDI5LTRjYTUtODM2Ny01M2UzN2Y3OGE5NjkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5ODU1MTMsImV4cCI6MTY3OTg4NTUxM30.q-Ayli5KgBAg6kq3vXj6WhIjjO8deeE-wEXaw131w34`)
                .then(response => {
                   // this.course = response.data;
                    console.log(response.data);
                    this.course = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    } 
</script>

<style>
  .event-information__card{
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px rgb(0, 0, 0);
    padding: 10px;
    border-radius: 0.1%;
    margin-top: 10px;
  }
</style>