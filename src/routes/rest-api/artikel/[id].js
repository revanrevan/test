import Services from '../../../service';

export async function get(req, res){
    const {id} = req.params;
    let sql = `SELECT * FROM artikel WHERE id_artikel ='${id}'`;
    const data_artikel = await Services.getData(sql);
    res.json(data_artikel);
}

export async function patch(req, res){
    const {id} = req.params;
    const { gambar_artikel, judul_artikel, isi_artikel } = req.body;
    let request_data = {
        gambar_artikel : gambar_artikel,
        judul_artikel : judul_artikel,
        isi_artikel : isi_artikel
    }
    const data_artikel = await Services.editData(`id_artikel = '${id}'`, "artikel", request_data)
    res.json(data_artikel);
}

export async function del(req, res){
    const {id} = req.params;
    const data_artikel = await Services.hapusData(`id_artikel = '${id}'`, "artikel")
    res.json(data_artikel);
}