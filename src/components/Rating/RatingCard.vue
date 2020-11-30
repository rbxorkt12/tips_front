<template>
    <div id="rate_card">
        <b-card :title="comment.stars" :sub-title="comment.user">
            <b-card-text>
            {{comment.comments}}
            </b-card-text>
        </b-card>
    </div>  
</template>

<script>
export default {
    props: ['comment'],
}
</script>

<style>

</style>