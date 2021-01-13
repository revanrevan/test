<script>
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

    let data_artikel = {gambar_artikel:'', judul_artikel:'', isi_artikel:''};
    let htmlEditor
    let quillEditor
    onMount(async() => {
        await import("quill/dist/quill.snow.css")
        const quillModule = await import("quill/dist/quill")
        const Quill = quillModule.default
        // console.log(quillModule);
        var Font = Quill.import('formats/font');
        Font.whitelist = ['mirza', 'roboto'];
        Quill.register(Font, true);
        
        quillEditor = new Quill('#editor-container', {
            modules: {
                toolbar: 
                [
                    [{ header: [1, 2, 3, 4, 5, 6] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'blockquote', 'code-block', 'image', 'video'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ align: [] }]
                ]
            },
            placeholder: 'Silahkan Masukkan Isi artikel...',
            theme: 'snow' //  or 'bubble'
        });
        htmlEditor = quillEditor;
    })
    async function simpanArtikel(){
        data_artikel.isi_artikel = htmlEditor.root.innerHTML;
        try {
            const q = await fetch('/rest-api/artikel/',{
                method:"POST",
                headers :{
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data_artikel)
            });

            const resl = await q.json();
            if (resl) {
                // console.log(resl);
                quillEditor = false;
                await getArtikel();
            }
        } catch (err) {
            console.log(err);
        }
    }
</script>

<style>
    #editor-container{
        height: 375px;
	}
</style>

<svelte:head>
    <title>Tambah Artikel</title>
</svelte:head>

<br><br>
<br><br>
<section class="section padding-top-70 padding-bottom-0" id="features">
	<div class="container">
        <div class="form-group">
            <input type="text" bind:value={data_artikel.judul_artikel} class="form-control" placeholder="Masukan Judul Artikel"/>
        </div>
        
        <div id="editor-container">
            
        </div>
        
        <div class="form-group">
            <button class="btn btn-sm" type="button" on:click="{simpanArtikel}">SIMPAN</button>
        </div>
        
        <ul>
            {#each arr_artikel as arr}
                <!-- <li><a href="/artikel/{arr.id_artikel}">{arr.judul}</a> <div>{@html arr.isiartikel}</div></li> -->
                <div class="container" data-aos="fade-up">
                    <a href="/tambah_artikel/{arr.id_artikel}">
                        <div class="card mb-3">
                            <div id="frame-image">
                                <img src="{arr.gambar_artikel}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body"> 
                                <h5 class="card-title">{arr.judul_artikel}</h5>
                                <p class="card-text potong">{@html arr.isi_artikel}</p>
                            </div>
                        </div>
                    </a>
                </div> 
            {/each}
        </ul>            
    </div>
</section>
