<template>
  <div id="app">
    <img src="./../../assets/chuk.gif" class="dance">
    <Btn title="Получить шутку" @handleClick="handleFetchJoke"/>
    <JokeBox :title="joke.value" :poster="joke.icon_url"/>
  </div>
</template>

<script>
import Btn from "@/components/Button";
import JokeBox from "@/components/JokeBox";

export default {
  name: "App",
  components: {
    Btn,
    JokeBox
  },
  methods: {
    handleFetchJoke() {}
  },
  computed: {
    joke() {
      return {};
    }
  }
};
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
}
</style>
