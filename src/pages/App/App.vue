<!--Компонент основного приложения-->
<template>
    <div id="app">
        <img src="./../../assets/chuk.gif" class="dance" alt="">
        <div class="btn__group">
            <Btn/>
            <ButtonStopWatch/>
        </div>
        <JokeBox/>
    </div>
</template>

<script>
  import Btn from '@/components/Button'
  import ButtonStopWatch from '@/components/ButtonStopWatch'
  import JokeBox from '@/components/JokeBox'
  import 'normalize.css'
  import 'es6-promise/auto';

  export default {
    name: 'App',
    components: {
      Btn,
      JokeBox,
      ButtonStopWatch,
    }
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap');

    #app {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-family: 'Didact Gothic', "Arial Narrow", Arial, sans-serif;
    }

    .dance {
        width: 65px;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    .btn__group {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
