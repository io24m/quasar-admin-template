<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <!-- <q-btn align="around" dense flat label="test" icon="card_giftcard" />
        <q-separator dark vertical inset /> -->
        <!-- 
        <q-space /> -->

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
        <!-- <q-btn dense flat label="test" icon-right="open_in_new" /> -->
        <q-btn
          align="around"
          dense
          flat
          type="a"
          href="http://www.quasarchs.com/vue-components/ajax-bar"
          target="__blank"
        >
          Quasar <q-icon name="open_in_new" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <SideBar />
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from "./SideBar";
export default {
  components: { SideBar },
  data() {
    return {
      left: false,
    };
  },
};
</script>