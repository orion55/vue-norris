<!--Компонент вывода шуток с анимацией-->
<template>
    <transition name="fade"
                enter-active-class="animated fadeIn fast"
                leave-active-class="animated fadeOut" mode="out-in">
        <div class="joke-box" :key="jokeId">
            <h2 class="joke-box__title">{{ joke}}</h2>
            <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" class="joke-box__img"/>
            <div class="joke-box__error" v-if="flagError">{{errorMsg}}</div>
        </div>
    </transition>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'JokeBox',
    computed: {
      ...mapState(['joke', 'flagError', 'errorMsg', 'jokeId']),
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

    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .fadeIn {
        animation-name: fadeIn;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    .fadeOut {
        animation-name: fadeOut;
    }

    .animated.fast {
        animation-duration: 800ms;
    }
</style>
