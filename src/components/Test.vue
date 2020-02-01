<template>
  <h2>Hello, {{ personName }}!</h2>
</template>
<script>


export default {
  name: "HelloPerson",
  //props: ['personName'],
  data() {
    return {
      personName: "Person"
    }
  }
}
</script>
<style scoped>
  h2 {
    font-size: 40px;
    color: mediumseagreen;
  }
</style>