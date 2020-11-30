<template>
    <div class="comments">
        <b-card class="mx-3" border-variant="info" align="left">
            <template #header>
            <h2>Comment List</h2>
            </template>
            <ul v-if="comments && comments.length">
                <li v-for="comment of comments" v-bind:key="comment.id" class="mb-3 mx-4">
                    <RatingCard v-bind:comment="comment" ></RatingCard>
                </li>
            </ul>
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