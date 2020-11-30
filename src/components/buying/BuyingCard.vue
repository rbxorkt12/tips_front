<template>
  <b-card bg-variant="info" text-variant="white">
  <b-card-text>
    {{buying.user}}th User bought {{buying.post}}th post
  </b-card-text>
  <router-link :to="'post/'+buying.post" tag="b-button">Go to Post</router-link>
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