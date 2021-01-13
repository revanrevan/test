const mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'marikang',
    port: 3306,
    multipleStatements: true
}

class Service {
    constructor() {
        this.koneksi = mysql.createPool(config);
    }
    getData(sql) {
        return new Promise((resolve, reject) => {
            this.koneksi.getConnection((err, run) => {
                if (err) reject(err);
                run.query(sql, (error, hasil) => {
                    run.release();
                    if (error) reject(error);
                    resolve(hasil)
                })
            })
        })
    }
    saveData(nama_table, data_request) {
        let sql = "INSERT INTO ?? SET ?";
        return new Promise((resolve, reject) => {
            this.koneksi.getConnection((err, run) => {
                if (err) reject(err);
                run.query(sql, [nama_table, data_request], (error, hasil) => {
                    run.release();
                    if (error) reject(error);
                    resolve(hasil)
                })
            })
        })

    }
    editData(where, nama_table, data_request) {
        let sql = "UPDATE ?? SET ? WHERE "+where;
        return new Promise((resolve, reject) => {
            this.koneksi.getConnection((err, run) => {
                if (err) reject(err);
                run.query(sql, [nama_table, data_request], (error, hasil) => {
                    run.release();
                    if (error) reject(error);
                    resolve(hasil)
                })
            })
        })

    }

    hapusData(where, nama_table) {
        let sql = "DELETE FROM ?? WHERE "+where;
        return new Promise((resolve, reject) => {
            this.koneksi.getConnection((err, run) => {
                if (err) reject(err);
                run.query(sql, [nama_table], (error, hasil) => {
                    run.release();
                    if (error) reject(error);
                    resolve(hasil)
                })
            })
        })

    }
}
// module.exports.Services = Service;
export default new Service();