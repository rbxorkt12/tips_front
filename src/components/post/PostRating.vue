<template>
    <div class="comments">
        <b-card class="mx-3" border-variant="info" align="left">
            <template #header>
            <h2>Comment List</h2>
            </template>
            <b-row v-if="comments && comments.length">
                <b-col v-for="comment of comments" v-bind:key="comment.id" class="mb-3 mx-4">
                    <RatingCard v-bind:comment="comment" ></RatingCard>
                </b-col>
            </b-row>
        </b-card>
        <div id="comment_add">
            <RatingAdd :id="id"></RatingAdd>
        </div>
    </div>
</template>

<script>
import RatingCard from '../Rating/RatingCard'
import RatingAdd from '../Rating/RatingAdd'
export default {
    components: {
        RatingCard,
        RatingAdd
    },
    props: ['id','comments'],

}
</script>

<style>

</style>