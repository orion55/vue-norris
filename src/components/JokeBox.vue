<template>
    <div class="joke-box">
        <h2 class="joke-box__title">{{ joke}}</h2>
        <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" class="joke-box__img"/>
        <div class="joke-box__error" v-if="flagError">{{errorMsg}}</div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'JokeBox',
    computed: {
      ...mapState(['joke', 'flagError', 'errorMsg']),
    },
  }
</script>

<style scoped>
    .joke-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    .joke-box__img {
        padding-bottom: 10px;
    }

    .joke-box__title {
        font-size: 20px;
        font-weight: bold;
    }

    .joke-box__error {
        color: red;
        font-size: 20px;
    }
</style>
