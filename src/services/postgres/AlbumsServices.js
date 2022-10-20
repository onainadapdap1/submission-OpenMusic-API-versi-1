/*
    *FUNGSI : Mengelola resources dengan database postgreSql
    *RETURNING merupakan kueri yang memungkinkan kita untuk mengambil 
    *nilai kolom dari baris yang terdampak oleh operasi INSERT, UPDATE, ataupun DELETE.
*/
// melakukan koneksi database
const { nanoid } = require('nanoid');
const {Pool} = require('pg');
class AlbumsService {
    constructor() {
        this._pool = new Pool();
    }
    // 1. membuat fungsi addAlbum
    async addAlbum({name, year}) {
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;
        // 2. query untuk memasukkan album ke database
        const query = {
            text: 'INSERT INTO albums VALUES($1, $2, $3, $4, $5) RETURNING id',
            values: [id, name, year, createdAt, updatedAt],
        }
        // 3. mengekseskusi query, query() berjalan asyncronous maka tambahkan keyword async/await 
        const result = await this._pool.query(query);
        // 4. cek apakah album berhasil ditambahkan ke database
        if(!result.rows[0].id) {
            throw new Error('Catatan gagal ditambahkan');
        }
        return result.rows[0].id;
    }
}