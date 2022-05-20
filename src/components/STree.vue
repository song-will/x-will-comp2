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
const props = defineProps({
  options: {
    type: Array,
    default: () => [
      {
        label: "一级 1",
        children: [
          {
            label: "二级 1-1",
            children: [
              {
                label: "三级 1-1-1",
              },
            ],
          },
        ],
      },
      {
        label: "一级 2",
        children: [
          {
            label: "二级 2-1",
            children: [
              {
                label: "三级 2-1-1",
              },
            ],
          },
          {
            label: "二级 2-2",
            children: [
              {
                label: "三级 2-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "一级 3",
        children: [
          {
            label: "二级 3-1",
            children: [
              {
                label: "三级 3-1-1",
              },
            ],
          },
          {
            label: "二级 3-2",
            children: [
              {
                label: "三级 3-2-1",
              },
            ],
          },
        ],
      },
    ],
  },
});
</script>
