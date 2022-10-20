/*
    *Server konfiguration
*/
// import  dotenv dan menjalankan konfigurasinya
require('dotenv').config();
const Hapi = require('@hapi/hapi');

const init = async () => {
    // HTTP server sendiri dibuat melalui method Hapi.server(), menerima 1 parameter ServerOptions
    // ServerOptions merupakan objek yang menampung konfigurasi dari server yang hendak dibuat
    const server = Hapi.server({
        // Sekarang berkas .env sudah dibaca oleh Node.js dan kini nilai dari variable 
        // environment yang ada di berkas .env dapat diakses melalui properti process.env.
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();