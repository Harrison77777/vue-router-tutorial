<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <div class="row w-100">
                    <div class="col-lg-3">
                        <router-link to='/'>
                            <a class="navbar-brand" href="#">Start Bootstrap</a>
                        </router-link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="col-lg-4">
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <router-link to="/">
                                        <a class="nav-link active" href="#">Home
                                            <span class="sr-only">(current)</span>
                                        </a>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <form>
                            <div class="row w-100 justify-content-center align-content-center mt-1">
                                <input class="form-control form-control-sm w-75" type="text" />
                                <button class="btn btn-sm btn-success ml-1" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>

</style>