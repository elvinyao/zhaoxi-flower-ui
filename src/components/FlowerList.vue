<template>
  <div>Flower List</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlowerList',
  props: {
    msg: String,
  },
});
</script>