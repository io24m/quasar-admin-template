<template>
  <div>
    <a-list dense bordered class="rounded-borders">
      <SideBarItem v-for="(item, index) in routers" :key="index" :item="item" />
    </a-list>
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