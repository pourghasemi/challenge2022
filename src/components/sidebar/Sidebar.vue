<template>
  <nav>
    <h1>Data<b>Guard</b></h1>
    <ul>
      <NavItem
        v-for="tab in tabs"
        :key="tab"
        :title="tabdata[tab].title"
        :path="`/${tabdata[tab].title}`"
        :name="tab"
      />
    </ul>
    <div
      class="switchBtn"
      :class="{ shadowGreen: isActive, shadowRed: !isActive }"
    >
      All pluging disabled
      <SwitchButton :isActive="isActive" @update="changeDisableAll" />
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import NavItem from "./NavItem.vue";
import SwitchButton from "@/components/widgets/SwitchButton.vue";

export default {
  name: "SidebarApp",

  computed: { ...mapState(["tabs", "tabdata", "plugins"]) },
  components: { NavItem, SwitchButton },
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  methods: {
    changeDisableAll(value) {
      this.isActive = value;
      if (value) {
        for (let tab of this.tabs) {
          this.tabdata[tab].disabled = [];
        }
      } else {
        const plugins = Object.keys(this.plugins);
        for (let tab of this.tabs) {
          this.tabdata[tab].disabled.push(...plugins);
        }
      }
      this.postData();
    },
    postData() {
      this.$store.dispatch("postData", {
        data: {
          tabs: this.tabs,
          tabdata: this.tabdata,
          plugins: this.plugins,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  background-color: #f1f1f1;
  min-width: 250px;
  height: 100vh;
  display: flex;
  flex-flow: column;

  h1 {
    font-weight: normal;
    text-align: center;
  }
  ul {
    padding: 0;
    flex: 1;
  }
  .switchBtn {
    padding: 15px 0px 40px 0px;
    text-align: center;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;
    &:after {
      content: "gggg";
      height: 200%;
      position: absolute;
      width: 100%;
      left: -25%;
      bottom: 0;
      width: 150%;
    }
  }
  .shadowRed {
    &:after {
      box-shadow: 0 0 42px 13px inset $red;
    }
  }
  .shadowGreen {
    &:after {
      box-shadow: 0 0 42px 13px inset $green;
    }
  }
}
</style>
