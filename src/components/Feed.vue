<template>
    <div>
        <div class="post" v-for="post in posts" v-bind:key="post._id">
            <p class="postTitle">{{post.title}}</p>
            <p class="postContent">{{post.content}}</p>
            <p class="postDate">
                <span v-if="post.user.username">{{post.user.username}}, </span>
                {{formatDate(post.created)}}
            </p>

        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'Feed',
        props: {
            posts: Array
        },
        methods: {
            formatDate(date) {
                if (moment(date).diff(Date.now(), 'days') < 15)
                    return moment(date).fromNow();
                else
                    return moment(date).format('d MMMM YYYY');
            }
        }
    }

</script>

<style scoped>
    .postTitle {
        margin: 0px;
        font-size: 2.5em;
        color: #000;
    }

    .postContent {
        color: #333;

    }

    .postDate {
        margin: 0px;
        font-size: 0.9em;
        font-weight: normal;
        color: #555;
    }

    p {
        margin: 0px;
    }

    .post {
        margin: auto;
        margin-top: 5px;
        display: inline-block;
        width: 100%;
        border-style: outset;
        border-radius: 4px;
        border-width: thick;
        padding: 10px;
        background-color: #c9c9c9;

    }

</style>
