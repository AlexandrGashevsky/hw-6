

<template>
    <div >
        <img class="card-image" :src="`${card.previewImageLink}/cover.webp`"/> 
        <h3>{{card.title}}</h3>
        <h4>Number of lessons: {{card.lessonsCount}}</h4>
        <h4>Rating: {{card.rating}}</h4>
        <p>{{card.description}}</p>
        <h5>Tags: {{card.tags.join(",")}}</h5>
        <RouterLink :to="{name: 'eventPage', params:{id:card.id}}">More</RouterLink>
    </div>
</template>

<script>
    export default {
        props: {
            card: Object
        }
    }
</script>

<style>
    .card-image{
        width: 100%;
    }
</style>