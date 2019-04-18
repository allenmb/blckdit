<template>
    <div class="frontPage">
        <feed :posts="posts" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Feed from '@/components/Feed.vue'

    export default {
        name: 'home',
        components: {
            Feed
        },
        computed: {
            posts() {
                return this.$store.state.posts;
            }
        },
        async created() {
            await this.$store.dispatch("getAllPosts");
        },
    }

</script>

<style>
    .frontPage {
        margin: auto;
        margin-top: 20px;
        max-width: 500px;
    }

</style>
