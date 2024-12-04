import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const HOST = process.env.VITE_HOST

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host: HOST,
        hmr: {
            host: HOST
        },
    },
});