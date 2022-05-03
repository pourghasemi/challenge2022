<template>
  <div class="home">
    <h2 class="pageTitle">{{ pageTitle }}</h2>
    <PluginList
      :plugins="plugins"
      :activePlugins="activePlugins"
      :disabledPlugins="disabledPlugins"
      @activeStatusChange="activeStatusChange"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PluginList from "@/components/home/PluginList.vue";

let tabSelected = "";

export default {
  name: "HomeView",
  components: { PluginList },

  data() {
    return {
      pageTitle: this.$route.params.tab || this.tabs[0],
      pluginList: [],
      activePlugins: [],
      disabledPlugins: [],
    };
  },

  computed: { ...mapState(["tabs", "tabdata", "plugins"]) },

  created() {
    this.$store.dispatch("fetchDataTab");
  },

  methods: {
    updateData() {
      for (let [key, value] of Object.entries(this.tabdata)) {
        if (value.title == this.$route.params.tab) tabSelected = key;
      }
      this.pageTitle = this.$route.params.tab;
      this.activePlugins = this.tabdata[tabSelected].active;
      this.disabledPlugins = this.tabdata[tabSelected].disabled;
    },

    activeStatusChange({ value, plugin }) {
      if (value) {
        this.tabdata[tabSelected].active.push(plugin);
        this.tabdata[tabSelected].inactive = this.tabdata[
          tabSelected
        ].inactive.filter((item) => item !== plugin);
      } else {
        this.tabdata[tabSelected].inactive.push(plugin);
        this.tabdata[tabSelected].active = this.tabdata[
          tabSelected
        ].active.filter((item) => item !== plugin);
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

  watch: {
    $route() {
      this.updateData();
    },
    tabdata() {
      this.updateData();
    },
  },
};
</script>
