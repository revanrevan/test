<script context="module">
    export async function preload({ params }) {
        // console.log(params);
        try {
            const qry = await this.fetch("/rest-api/artikel/" + params.detailArtikel);
            const resl = await qry.json();
            return { data_artikel: resl[0] };
        } catch (err) {
            this.error(err);
        }
    }
</script>

<script>
    export let data_artikel = {gambar_artikel:'', judul_artikel:'', isi_artikel:''};
</script>

<style>
    .gambarartikel{
        width: 80%;
    }
</style>

<br>

<section class="section" id="testimonials">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
                <div class="center-heading">
                    <img src="assets/images/blog-item-01.png" alt="" class="gambarartikel">
                </div>
                <div class="center-heading">
					<h2 class="section-title"><strong>{data_artikel.judul_artikel}</strong></h2>
                </div>
                <!-- <relative-time>27 des 2020</relative-time> -->
                <hr>
			</div>
			<div class="offset-lg-3 col-lg-6">
				<!-- <div class="center-text"> -->
					{@html data_artikel.isi_artikel}
				<!-- </div> -->
			</div>
        </div>
    </div>
</section>