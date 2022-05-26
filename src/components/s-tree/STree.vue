<template>
  <div class="s-tree">
    <ul class="wrapper">
        <li class="item" v-for="item in data" :key="item.label" @click.stop="() => handleClick(item)">
            <div>
                {{item.label}}
                <s-tree v-show="item.expand" :options="item.children"></s-tree>
            </div>
        </li>
    </ul>
  </div>
</template>

<script name="STree" setup>
// import STree from '@/components/s-tree/STree.vue'
import { reactive } from 'vue';
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});

let copyOptions = props.options.map(item => {
  const hasChild = item.children && item.children.length
  const temp = hasChild ? {expand: false} : {}
  return {
    ...item,
    ...temp,
    hasChild
  }
})
const data = reactive(copyOptions)

const handleClick = (item) => {
  if (Reflect.has(item, 'expand')) {
    item.expand = !item.expand
  }
}

</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
</style>
