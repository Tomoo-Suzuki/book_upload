<template>
  <div class="searchBox">
    <label>
      <input type="text" />
      <button>検索</button>
    </label>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {},
  methods: {}
});
</script>
<style lang="scss" scoped>
@import "../../scss/_color.scss";

.searchBox {
  > label {
    display: inline-block;
    width: 100%;

    > input {
      display: inline-block;
      width: calc(100% - 7rem);
      border: solid 1px #e6e6e6;
      height: 2.8rem;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    > button {
      background: $upload_blue_dark;
      color: #ffffff;
      font-weight: bold;
      width: 3rem;
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
}
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 900px) {
  .searchBox {
    > label {
      display: block;
      width: 95%;
      margin: auto;
      text-align: center;

      > input {
        display: inline-block;
        width: calc(100% - 7rem);
        border: solid 1px #e6e6e6;
        height: 2.9rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      > button {
        background: $upload_blue_dark;
        color: #ffffff;
        font-weight: bold;
        width: 3rem;
        text-align: center;
        height: 3rem;
        line-height: 3rem;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }
  }
}

@media screen and (max-width: 413px) {
}
</style>
