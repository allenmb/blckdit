<template>
    <transition v-if="show" name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h1 class="modal-title">New Post</h1>
                    </div>
                    <div class="modal-body">
                        <p v-if="error" class="error">{{error}}</p>
                        <form @submit.prevent="submitPost">
                            <input v-model="title" placeholder="Title">
                            <p></p>
                            <textarea v-model="content" placeholder="Your post here"></textarea>
                            <p></p>
                            <button type="button" @click="close" class="btn btn-secondary">Close</button>
                            <button type="submit" class="btn btn-secondary">Submit Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'NewPost',
        props: {
            show: Boolean,
        },
        data() {
            return {
                title: '',
                content: '',
                error: '',
            }
        },
        methods: {
            close() {
                this.$emit('escape');
            },
            async submitPost() {
                try {
                    this.$store.dispatch("submitPost", {
                        title: this.title,
                        content: this.content
                    });
                    if (!this.error) {
                        this.title = '';
                        this.content = '';
                        this.file = null;
                        this.$emit('postSubmitted');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

</script>

<style scoped>
    input {
        width: 100%;
    }

    textarea {
        width: 100%;
        height: 100px
    }

    .btn btn-secondary {
        float: right;
    }

</style>
