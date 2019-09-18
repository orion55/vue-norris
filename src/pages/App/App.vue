<template>
    <div id="app">
        <img src="./../../assets/chuk.gif" class="dance">
        <div class="btn__group">
            <Btn title="Получить шутку" @handleClick="handleFetchJoke"/>
            <Btn title="Остановить таймер" @handleClick="handleFetchJoke"/>
        </div>
        <JokeBox></JokeBox>
    </div>
</template>

<script>
  import Btn from '@/components/Button'
  import JokeBox from '@/components/JokeBox'
  import 'normalize.css'

  export default {
    name: 'App',
    components: {
      Btn,
      JokeBox,
    },
    methods: {
      handleFetchJoke () {},
    },
    computed: {
      joke () {
        return {}
      },
    },
  }
</script>

<style>
    #app {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }

    .dance {
        width: 65px;
        padding-bottom: 15px;
        padding-top: 15px;
    }
</style>
