<template>
    <div class="joke-box">
        <h2 class="joke-box__title">{{ joke.title}}</h2>
        <img :src="joke.icon_url" alt=""/>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'JokeBox',
    computed: {
      ...mapState(['joke']),
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

    .joke-box__title {
        font-size: 20px;
        font-weight: bold;
    }
</style>
