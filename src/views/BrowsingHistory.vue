<template>
  <main>
    <H2 text="閲覧履歴" />
    <!-- <button @click="toEachPage('/form-user')">User</button>
    <button @click="toEachPage('/form-post')">Story Upload</button>
    <button @click="toEachPage('/form-story')">Story Detail</button>
    <button @click="toEachPage('/form-account')">Account</button>-->
  </main>
</template>

<script lang="ts">
import H2 from "@/components/atoms/H2";

import Vue from "vue";
export default Vue.extend({
  components: {
    H2
  },
  methods: {
    toEachPage(path) {
      this.$router.push(path);
    }
  }
});
</script>
