<template>
  <div class="s-tree">
    <ul>
        <li v-for="item in options" :key="item.label">
            <div>
                {{item.label}}
                <template v-if="item.children && item.children.length">
                    <s-tree :options="item.children"></s-tree>
                </template>
            </div>
        </li>
    </ul>
  </div>
</template>

<script setup>
import STree from '@/components/STree.vue'
defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});
</script>
