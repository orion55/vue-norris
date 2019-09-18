<template>
    <button
            :class="{
      btn: true,
      btn_block: block,
      btn_disabled: disabled
    }"
            :style="{ width }"
            :disabled="disabled"
            @click="handleClick"
    >
        <span class="btn__title" v-if="!!title">{{ title }}</span>
    </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      hadnleClick: {
        type: Function,
        default: () => {},
      },
      title: {
        type: String,
        default: '',
      },
      buttonType: {
        type: String,
        default: 'primary',
        validator: value =>
          [
            'primary',
            'secondary',
            'thirdly',
            'fourthly',
            'fifthly',
            'sixthly',
          ].indexOf(value) !== -1,
      },
      width: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      block: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleClick () {
        this.$emit('handleClick')
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        /* show a hand cursor on hover; some argue that we
        should keep the default arrow cursor for buttons */
        cursor: pointer;
    }

    .btn {
        display: inline-block;
        text-align: center;
        text-decoration: none;

        margin: 2px 5px 2px 2px;

        border: solid 2px transparent;
        border-radius: 15px;

        padding: 1em 1em;

        color: #FFFFFF;
        background-color: red;

        transition: background-color .5s ease-out;

        text-transform: uppercase;

    }

    .btn:active {
        transform: translateY(1px);
        filter: saturate(150%);
    }

    .btn:hover {
        color: red;
        border-color: red;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    }

    .btn::-moz-focus-inner {
        border: none;
    }

    .btn:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5),
        0 0 0 1.5px rgba(255, 0, 0, 0.5);
    }

    /* .btn {
         cursor: pointer;
         width: 140px;
         height: 50px;
         border-radius: 4px;
         background: #d23232;
         color: #fff;
         text-transform: uppercase;
     }

     .btn_block {
         display: block;
     }

     .btn_disabled {
         background: gray;
     }*/
</style>
