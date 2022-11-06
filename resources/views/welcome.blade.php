<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel 9 - Vue 3</title>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
        <!-- Scripts -->
{{--        @vite(['resources/sass/app.scss', 'resources/js/app.js'])--}}
        @vite(['resources/js/app.js'])

    </head>
    <body>
    <div class="container mt-3" >
        <h1> VUE</h1>
        <a href="#" class="btn btn-primary">Button</a>
    </div>
    <div id="app"></div>
    </body>
</html>
