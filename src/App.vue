<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #000;">
            <a class="navbar-brand" href="#">blckdit</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home<span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Content
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/myposts" class="dropdown-item">Posts</router-link>
                            <router-link to="/mycomments" class="dropdown-item">Comments</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>



<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    footer {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #373737;
        color: #F3F3F3;
        flex-shrink: 0;
        text-align: center;
        padding: 5px;
        font-size: 18px;
        margin-top: 20px;
    }

    a {
        color: #F3F3F3;
        text-decoration: none;
    }

</style>
