<template>
  <label class="switch">
    <input type="checkbox" :checked="isActive" @change="update" />
    <span class="slider round"></span>
  </label>
</template>
<script>
export default {
  props: ["isActive"],
  methods: {
    update(e) {
      this.$emit("update", e.target.checked);
    },
  },
};
</script>
<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background-color: $green;
    }
    &:focus + .slider {
      box-shadow: 0 0 1px $green;
    }
    &:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $red;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: 1;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 1px;
      bottom: 1px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
}
</style>
