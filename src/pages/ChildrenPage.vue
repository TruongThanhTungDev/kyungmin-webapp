<template>
  <div>
    <h1>Page with slug: {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildrenPage',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>