import  Services  from "../../../service";

export async function get(req, res){
    let sql = "SELECT * FROM toko_bangunan";
    const data_toko = await Services.getData(sql);
    return res.json(data_toko);
}

export async function post(req, res){
    const { foto_1, foto_2, foto_3, nama_toko, alamat_toko, keterangan_toko } = req.body;
    let request_data = {
        foto_1 : foto_1,
        foto_2 : foto_2,
        foto_3 : foto_3,
        nama_toko : nama_toko,
        alamat_toko : alamat_toko,
        keterangan_toko : keterangan_toko
    }
    const data_toko = await Services.saveData("toko_bangunan", request_data)
    return res.json(data_toko);
}
