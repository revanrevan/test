<script context="module">
    export async function preload({ params }) {
        console.log(params);
        try {
            const qry = await this.fetch("/rest-api/artikel/" + params.idartikel);
            const resl = await qry.json();
            return { data_artikel: resl[0] };
        } catch (err) {
            this.error(err);
        }
    }
</script>

<script>
    export let data_artikel = {gambar_artikel:'', judul_artikel:'', isi_artikel:''};
    import { goto } from "@sapper/app"
    import { onMount } from "svelte"

    let dataisi;

    onMount(async() => {
        await import("quill/dist/quill.snow.css")
        const quillModule = await import("quill/dist/quill")
        const Quill = quillModule.default
        var Font = Quill.import('formats/font');
        Font.whitelist = ['mirza', 'roboto'];
        Quill.register(Font, true);

        const quillEditorr = new Quill('#editor-containe', {
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
        quillEditorr.root.innerHTML = data_artikel.isi_artikel;
        dataisi = quillEditorr;
    })

    async function editArtikel() {
        data_artikel.isi_artikel = dataisi.root.innerHTML
        try {
            const qry = await fetch("/rest-api/artikel/" + data_artikel.id_artikel, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data_artikel),
            });
            const resl = await qry.json();
            if (resl) {
                goto('/tambah_artikel')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function delArtikel(){
        try {
            const qrys = await fetch("/rest-api/artikel/" + data_artikel.id_artikel, {
                method: "DELETE",
            });
            const result = await qrys.json(); 
            if (result) {
                goto('/tambah_artikel')
            }
        } catch (error) {
            console.log(error);
        }
    }
 
    
</script>

<style>
    #editor-containe{
        height: 375px;
	}
</style>

<svelte:head>
    <title>Edit Artikel {data_artikel.judul_artikel}</title>
</svelte:head>


<br><br>
<br><br>
<section class="section padding-top-70 padding-bottom-0" id="features">
	<div class="container">
        <div class="form-group">
            <input type="text" bind:value={data_artikel.judul_artikel} class="form-control" placeholder="Masukan Judul Artikel"/>
        </div>
        
        <div id="editor-containe">
            
        </div>
        
        <div class="form-group">
            <button class="btn btn-sm" type="button" on:click="{editArtikel}">SIMPAN</button>
        </div>
        
        <div class="form-group">
            <button class="btn btn-sm" type="button" on:click="{delArtikel}">DELETE</button>
        </div>
    </div>
</section>
