<template>
    <div class="joke-box">
        <h2>{{ getJoke.title}}</h2>
        <img :src="getJoke.icon_url" alt=""/>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'JokeBox',
    computed: {
      ...mapGetters(['getJoke'])
    }
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
