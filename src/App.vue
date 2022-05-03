<template>
  <div class="main">
    <SidebarApp />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarApp from "@/components/sidebar/Sidebar.vue";
export default {
  components: { SidebarApp },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Verdana, sans-serif;
}
.main {
  display: flex;
  flex-flow: row;
  a {
    text-decoration: none;
  }
  .content {
    padding: 0px 40px 20px 40px;
    .pageTitle {
      font-weight: normal;
      margin-bottom: 30px;
    }
  }
}
</style>
