<template>
  <div class="listBox">
    <PluginCard
      v-for="(plugin, key) in plugins"
      :key="plugin.title"
      :plugin="plugin"
      :name="key"
      :activePlugins="activePlugins"
      :disabledPlugins="disabledPlugins"
      @activeStatusChange="activeStatusChange"
    />
  </div>
</template>

<script>
import PluginCard from "./PluginCard.vue";

export default {
  components: { PluginCard },
  props: ["plugins", "activePlugins", "disabledPlugins"],
  methods: {
    activeStatusChange({ value, plugin }) {
      this.$emit("activeStatusChange", { value, plugin });
    },
  },
};
</script>

<style lang="scss" scoped>
.listBox {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
