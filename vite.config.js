import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue(),
    ],
});

// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import vue from '@vitejs/plugin-vue'
// import path from 'path'
//
// export default defineConfig({
//     plugins: [
//         laravel([
//             'resources/js/app.js',
//         ]),
//         vue(),
//     ],
//     resolve: {
//         alias: {
//             '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//         }
//     },
// });
