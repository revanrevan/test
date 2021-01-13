<script>
// import Artikel from "../routes/artikel.svelte";

    // let artikel = [
    //     {gambarArtikel:'assets/images/blog-item-01.png', linkArtikel:'detailArtikel', judulArtikel:'Vivamus ac vehicula dui', isiArtikel:'Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.'},
    //     {gambarArtikel:'assets/images/blog-item-02.png', linkArtikel:'detailArtikel', judulArtikel:'Phasellus convallis augue', isiArtikel:'Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.'},
    //     {gambarArtikel:'assets/images/blog-item-03.png', linkArtikel:'detailArtikel', judulArtikel:'Nam gravida purus non', isiArtikel:'Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.'}
    // ]

    import { onMount } from "svelte";

    let arr_artikel = []
    async function getArtikel(){
        try {
            const data_artikel = await fetch('/rest-api/artikel')
            const resl = await data_artikel.json();
            arr_artikel = resl;
            console.log("oke");
        } catch (err) {
            console.log(err);
        }
    }

    onMount(function(){
        getArtikel();
    })
</script>

<style>

</style>

{#each arr_artikel as art}    
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="blog-post-thumb">
            <div class="img">
                <img src="assets/images/blog-item-01.png" alt="">
            </div>
            <div class="blog-content">
                <h3>
                    <a href="/artikel/{art.id_artikel}">{art.judul_artikel}</a>
                </h3>
                <div class="text">
                {@html art.isi_artikel}
                </div>
                <a href="/artikel/{art.id_artikel}" class="main-button">Read More</a>
            </div>
        </div>
    </div>
{/each}