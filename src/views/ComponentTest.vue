<template>
  <div class="component-test">
    <h2>递归组件</h2>
    <s-tree :options="treeData"></s-tree>
  </div>
</template>

<script setup>
import STree from '@/components/STree.vue';
import { treeData } from '@/test-consts/'

</script>
