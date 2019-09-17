<template>
    <div class="joke-box">
        <h2>{{ title }}</h2>
        <img :src="poster" alt=""/>
    </div>
</template>

<script>
  export default {
    name: 'JokeBox',
    props: {
      title: String,
      poster: String,
    },
  }
</script>

<style scoped>
    .joke-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .joke-box h2 {
        font-size: 18px;
    }
</style>
