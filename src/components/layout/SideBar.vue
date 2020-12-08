<template>
  <div>
    <a-list dense bordered class="rounded-borders">
      <SideBarItem v-for="(item, index) in items" :key="index" :item='item' />
    </a-list>
  </div>
</template>
<script>
import SideBarItem from "./SideBarItem";
export default {
  components: { SideBarItem },
  data() {
    return {
      items: [
        {
          icon: "",
          name: "index",
          path: "/",
        },
        {
          icon: "",
          name: "index2",
          path: "/2",
        },
        {
          icon: "",
          name: "index3",
          children: [
            {
              icon: "",
              name: "index31",
              path: "/3",
            },
            {
              icon: "",
              name: "index32",
              path: "/4",
              children: [
                {
                  icon: "",
                  name: "index321",
                  path: "/41",
                },
                {
                  icon: "",
                  name: "index322",
                  path: "/42",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>