<template>
  <b-card bg-variant="dark" text-variant="white">
  <b-card-text>
    {{buying.user}} bought {{buying.post}}th post
  </b-card-text>
  <router-link :to="'post/'+buying.post" tag="b-button"></router-link>
  </b-card>
</template>

<script>
export default {
    props: {
        buying: {},
    },
}
</script>

<style>

</style>