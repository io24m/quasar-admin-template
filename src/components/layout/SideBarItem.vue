<template>
  <div>
    <template v-if="item.children">
      <q-expansion-item
        icon="mail"
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
      <q-item to="/" exact :inset-level="headerInsetLevel">
        <q-item-section avatar>
          <q-icon name="inbox" />
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
};
</script>