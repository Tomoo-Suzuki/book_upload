<template>
  <div>
    <div class="radioAndCheckbox">
      <label>
        <span>メールマガジンを受けとる</span>
        <input type="checkbox" name="magazine" value="1" @change="formUpdate" />
      </label>
      <p>旬の情報やメルマガ限定コンテンツを運営よりお届けします。</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    magazine: {
      type: String,
      default: null
    }
  },
  methods: {
    formUpdate(e: Event) {
      this.$emit("formUpdate", e);
    }
  }
});
</script>
<style lang="scss" scoped></style>
