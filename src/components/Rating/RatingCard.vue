<template>
    <div id="rate_card">
        <b-card border-variant="info">
            <b-card-text>
            {{comment}}
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