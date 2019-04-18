<template>
    <div>
        <div v-if="user" class="container">
            <div class='row justify-content-end'>
                <div class='col-2'>
                    <h2>{{user.username}}</h2>
                </div>
                <div class="col-3" style="text-align: right;">

                    <div class="button-group"><button @click="toggleNewPost" class="btn btn-secondary">New Post</button>
                        <button @click="logout" class="btn btn-secondary">Logout</button></div>
                </div>
            </div>
            <escape-event @escape="escape"></escape-event>
            <new-post :show="show" @escape="escape" @postSubmitted="postSubmitted" />
            <feed :posts="posts" class="frontPage" />
        </div>
        <div v-else>
            <p>If you would like to create posts, please register for an account or login.</p>
            <router-link to="/register" class="btn btn-secondary">Register</router-link> or
            <router-link to="/login" class="btn btn-secondary">Login</router-link>
        </div>
    </div>
</template>

<script>
    import EscapeEvent from '@/components/EscapeEvent.vue'
    import NewPost from '@/components/NewPost.vue'
    import Feed from '@/components/Feed.vue'
    export default {
        name: 'myposts',
        components: {
            EscapeEvent,
            NewPost,
            Feed
        },
        data() {
            return {
                show: false,
            }
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
            posts() {
                return this.$store.state.posts;
            }
        },
        created() {
            this.$store.dispatch("getUser");
            this.$store.dispatch("getMyPosts")
        },
        methods: {
            async logout() {
                try {
                    this.error = await this.$store.dispatch("logout");
                } catch (error) {
                    console.log(error);
                }
            },
            escape() {
                this.show = false;
            },
            toggleNewPost() {
                this.show = true;
            },
            async postSubmitted() {
                this.show = false;
                try {
                    this.error = await this.$store.dispatch("getMyPosts");
                } catch (error) {
                    console.log(error);
                }
            },
        }
    }

</script>

<style scoped>
    .frontPage {
        margin: auto;
        margin-top: 20px;
        max-width: 500px;
    }

    .btn {
        margin: 5px 5px;
    }

    .container {
        margin-top: 10px;
    }

</style>
