<script>
    // export let konten = {gambarKonten:'', judulKonten:'', isiKonten:''};
    // export let gambarKonten;
    // export let judulKonten;
    // export let isiKonten;

    let konten = [
        {link:'/caritoko', coleg:'6', gambarKonten:'assets/images/featured-item-01.png', judulKonten:'Cari Toko Bangunan', isiKonten:'Mencari Toko Bangunan terdekat dengan lokasi anda saat ini lebih mudah dengan fitur ini'},
        {link:'/caritukang', coleg:'6', gambarKonten:'assets/images/featured-item-01.png', judulKonten:'Cari Tukang', isiKonten:'Mencari Tukang Bangunan lebih mudah dengan fitur ini, tanpa keliling untuk mencari tukang'}
        // {gambarKonten:'assets/images/featured-item-01.png', judulKonten:'Ultimate Marketing', isiKonten:'You just need to tell your friends about our free templates'}
    ]
</script>

<style>

</style>
{#each konten as cont}
    <div class="col-lg-{cont.coleg} col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
        <a href="{cont.link}">
        <div class="features-small-item">
            <div class="icon">
                <i><img src={cont.gambarKonten} alt="{cont.judulKonten}"></i>
            </div>
            <h5 class="features-title">{cont.judulKonten}</h5>
            <p>{cont.isiKonten}</p>
        </div>
        </a>
    </div>    
{/each}
