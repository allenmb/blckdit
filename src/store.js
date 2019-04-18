import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        posts: [],
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        async register(context, data) {
            try {
                let response = await axios.post("/api/users", data);
                context.commit('setUser', response.data);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async login(context, data) {
            try {
                let response = await axios.post("/api/users/login", data);
                context.commit('setUser', response.data);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async logout(context) {
            try {
                await axios.delete("/api/users");
                context.commit('setUser', null);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async getUser(context) {
            try {
                let response = await axios.get("/api/users");
                context.commit('setUser', response.data);
                return "";
            } catch (error) {
                return "";
            }
        },
        async submitPost(context, data) {
            try {
                await axios.post('/api/posts', data);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async getMyPosts(context) {
            try {
                let response = await axios.get("/api/posts");
                context.commit('setPosts', response.data);
                return "";
            } catch (error) {
                return "";
            }
        },
        async getAllPosts(context) {
            try {
                let response = await axios.get("/api/posts/all");
                context.commit('setPosts', response.data);
                return "";
            } catch (error) {
                return "";
            }
        },
    }
})
