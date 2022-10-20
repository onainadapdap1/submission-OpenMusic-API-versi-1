/*
    *Server konfiguration
*/
const Hapi = require('@hapi/hapi');

const init = async () => {
    // HTTP server sendiri dibuat melalui method Hapi.server(), menerima 1 parameter ServerOptions
    // ServerOptions merupakan objek yang menampung konfigurasi dari server yang hendak dibuat
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
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