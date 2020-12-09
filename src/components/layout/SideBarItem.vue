<template>
  <div v-if="!item.hidden">
    <template v-if="hasChild(item.children)">
      <q-expansion-item
        :icon="item.meta && item.meta.icon"
        :header-inset-level="headerInsetLevel"
        :label="item.name"
      >
        <SideBarItem
          v-for="(c, index) in item.children"
          :key="index"
          :item="c"
          :header-inset-level="headerInsetLevel + 0.5"
        />
      </q-expansion-item>
    </template>
    <template v-else>
      <q-item :to="item.path" exact :inset-level="headerInsetLevel">
        <q-item-section avatar>
          <q-icon :name="item.meta && item.meta.icon" />
        </q-item-section>
        <q-item-section> {{ item.name }} </q-item-section>
      </q-item>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    headerInsetLevel: {
      type: Number,
      default: () => 0,
    },
  },
  name: "SideBarItem",

  methods: {
    hasChild(children) {
      if (!children) {
        return false;
      }
      const childrens = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          //this.onlyOneChild = item;
          return true;
        }
      });
      return childrens.length !== 1;
    },
  },
};
</script>