<script>
    // export let miniKonten = {gambar:'', judul:'', keterangan:''}
    // export let miniGambar;
    // export let miniJudul;
    // export let miniIsi;

    let mini=[
        {miniGambar:'assets/images/work-process-item-01.png', miniJudul:'Get Ideas', miniIsi:'Pilih tukang sesuai pekerjaan.'},
        {miniGambar:'assets/images/work-process-item-01.png', miniJudul:'Sketch Up', miniIsi:'Tekan tombol WA setelah menentukan tukang yang sesuai.'},
        {miniGambar:'assets/images/work-process-item-01.png', miniJudul:'Discuss', miniIsi:'Akan masuk ke WA admin Marikang (muncul template chat seperti Nama, Alamat, Pekerjaan) yang harus di isi oleh customer.'},
        {miniGambar:'assets/images/work-process-item-01.png', miniJudul:'Revise', miniIsi:'Lalu Tim Marikang akan menanyakan kapan kunjungan atau survei lokasi.'},
        {miniGambar:'assets/images/work-process-item-01.png', miniJudul:'Approve', miniIsi:'Dilokasi Tim akan mengecek berapa bahan dan biaya yang harus di bayarkan oleh customer.'},
        {miniGambar:'assets/images/work-process-item-01.png', miniJudul:'Launch', miniIsi:'Ketika sudah Deal, Tim akan mengerjakan sesuai kesepakatan bersama.'},
    ]
</script>

<style>

</style>

{#each mini as Min}
    
<div class="col-lg-2 col-md-3 col-sm-6 col-6">
    <a href=" " class="mini-box">
        <i><img src="{Min.miniGambar}" alt=""></i>
        <strong>{Min.miniJudul}</strong>
        <span>{Min.miniIsi}</span>
    </a>
</div>

{/each}
