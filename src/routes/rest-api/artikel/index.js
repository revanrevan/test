import  Services  from "../../../service";

export async function get(req, res){
    let sql = "SELECT * FROM artikel";
    const data_artikel = await Services.getData(sql);
    return res.json(data_artikel);
}

export async function post(req, res){
    const { gambar_artikel, judul_artikel, isi_artikel } = req.body;
    let request_data = {
        gambar_artikel : gambar_artikel,
        judul_artikel : judul_artikel,
        isi_artikel : isi_artikel
    }
    const data_artikel = await Services.saveData("artikel", request_data)
    return res.json(data_artikel);
}
