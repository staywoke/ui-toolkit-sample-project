<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
/* Theme Color */
$--color-primary: #409EFF;
$--color-success: #67c23a;
$--color-warning: #e6a23c;
$--color-danger: #f56c6c;
$--color-info: #909399;
$--color-white: #fff;
$--color-black: #000;

/* Theme Text Color */
$--color-text-primary: #303133;
$--color-text-regular: #606266;
$--color-text-secondary: #909399;
$--color-text-placeholder: #c0c4cc;

/* Theme Background Color */
$--background-color-base: #f5f7fa;

/* Icon Font Path ( Required ) */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

/**
 * Wish to override other base theme syles?
 * @SEE: ./node_modules/element-ui/packages/theme-chalk/src/common/var.scss
 */

@import "~element-ui/packages/theme-chalk/src/index";
@import "~vue2-animate/src/sass/vue2-animate";

/* Requred Base App Style */
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
#app {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}
</style>
