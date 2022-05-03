<template>
  <router-link :to="path" custom v-slot="{ navigate, isActive }">
    <li :active="isActive">
      <NavLink :href="path" @click="navigate" :name="name">
        <fa icon="bars" />
        <span>{{ title }}</span>
      </NavLink>
    </li>
  </router-link>
</template>
<script>
export default {
  name: "NavItem",
  props: ["title", "path", "name"],
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: flex;
  padding: 0;
  padding-left: 2px;
  flex-flow: column;
  &[active="true"] {
    navlink {
      background: #fff;
      border-left: solid 3px $red;
    }
  }
  navlink {
    padding: 15px 10px;
    color: initial;
    border-left: solid 3px transparent;
    span {
      margin-left: 10px;
    }
  }
}
</style>
