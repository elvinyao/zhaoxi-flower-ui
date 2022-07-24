<template>
  <div>Home Content</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeContent',
  props: {
    msg: String,
  },
});
</script>