<template>
    <div>
        <h1>Login to your account</h1>
        <form @submit.prevent="login">
            <fieldset>
                <p style='color: #BD696D;'>All fields are required.</p>

                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="username" type="text" placeholder="Username">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" placeholder="Password">
                </div>


                <button type="submit" class="btn btn-secondary">Submit</button>

            </fieldset>
        </form>
        <p v-if="error" class="error">{{error}}</p>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                username: '',
                password: '',
                error: '',
            }
        },
        methods: {
            async login() {
                try {
                    this.error = await this.$store.dispatch("login", {
                        username: this.username,
                        password: this.password
                    });
                    if (this.error === "")
                        this.$router.push('myposts');
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

</script>

<style scoped>
    form {
        border: 1px solid #ccc;
        background-color: #eee;
        border-radius: 4px;
        padding: 20px;
    }

    .pure-controls {
        display: flex;
    }

    .pure-controls button {
        margin-left: auto;
    }

</style>
