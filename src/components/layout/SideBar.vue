<template>
  <div>
    <q-list dense class="rounded-borders">
      <SideBarItem v-for="(item, index) in routers" :key="index" :item="item" />
    </q-list>
  </div>
</template>
<script>
import SideBarItem from "./SideBarItem";
import { mapGetters } from "vuex";
export default {
  components: { SideBarItem },
  computed: {
    ...mapGetters({
      routers: "permission/getRouters",
    }),
  },
};
</script>