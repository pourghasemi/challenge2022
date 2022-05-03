<template>
  <div class="card" :class="{ disabled: isDisable }">
    <div class="card-body">
      <h4>{{ plugin.title }}</h4>
      <p>
        {{ plugin.description }}
      </p>
    </div>
    <div class="action-box">
      <SwitchButton :isActive="isActive" @update="activeStatusChange" />
      <br />
      <span class="active" v-if="isActive">Allowed</span>
      <span class="disActive" v-else>Blocked</span>
    </div>
  </div>
</template>

<script>
import SwitchButton from "@/components/widgets/SwitchButton.vue";
export default {
  components: { SwitchButton },
  props: {
    plugin: Object,
    activePlugins: Array,
    disabledPlugins: Array,
    name: String,
  },
  computed: {
    isActive() {
      return this.activePlugins.includes(this.name);
    },
    isDisable() {
      return this.disabledPlugins.includes(this.name);
    },
  },
  methods: {
    activeStatusChange(value) {
      this.$emit("activeStatusChange", { value, plugin: this.name });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: solid 3px #f5f5f5;
  border-radius: 7px;
  padding: 10px;
  flex: auto;
  display: flex;
  h4 {
    font-weight: normal;
    margin-top: 10px;
    color: #305366;
  }
  .card-body {
    flex: 1;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
      color: #959595;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .action-box {
    text-align: center;
    margin-top: 12px;
    span {
      font-size: 10px;
    }
    .disActive {
      color: $red;
    }
    .active {
      color: $green;
    }
  }
}
.disabled {
  pointer-events: none;
  opacity: 0.4;
}
@media only screen and (min-width: 1024px) {
  .card {
    max-width: calc(33% - 40px);
  }
}
</style>
