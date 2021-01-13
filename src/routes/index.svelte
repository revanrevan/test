<script>
import Konten from '../components/Card.svelte';
import Mini from '../components/MiniCard.svelte';
import Big from '../components/BigCard.svelte';
// import ArtikelM from '../components/artikelCard.svelte'
import Artikel from './artikel/index.svelte';
</script>

<style>
	.judul{
		color: rgb(185, 19, 19);
	}
</style>

<svelte:head>
    <title>Marikang</title>
</svelte:head>

<div class="welcome-area" id="welcome">
	<div class="header-text">
		<div class="container">
			<div class="row">
				<div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
					<h1>Mari Membangun<br>Bersama <strong class="judul">MARIKANG</strong></h1>
					<!-- <a href="#features" class="main-button-slider">Discover More</a> -->
				</div>
			</div>
		</div>
	</div>
</div>

<center>
<section class="section home-feature">
	<div class="container"> 
		<div class="row">
			<div class="col-lg-12">
				<div class="row">
					<Konten />
				</div>
			</div>
		</div>
	</div>
</section>
</center>

<section class="section padding-top-70 padding-bottom-0" id="features">
	<div class="container">
		<div class="row">
			<div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
				<img src="assets/images/left-image.png" class="rounded img-fluid d-block mx-auto" alt="App">
			</div>
			<div class="col-lg-1"></div>
			<div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
				<div class="left-heading">
					<h2 class="section-title">Layanan <strong class="judul">MARIKANG</strong></h2>
				</div>
				<div class="left-text">
					<!-- <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p> -->
					<div class="row">
                        <div class="col-md-10 icon-box" data-aos="fade-up">
                            <h4>Perbaikan</h4>
                            <p>Memberikan layanan dengan menyesuaikan kebutuhan perbaikan tertentu pada bangunan berskala kecil. Perbaikan yang dapat diselesaikan dalam satu hari atau singkat</p>
                        </div>
                        <div class="col-md-10 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <h4>Renovasi & Bangun</h4>
                            <p>Memberikan layanan dengan menyesuaikan kebutuhan pembangunan skala besar yang dikerjakan. Renovasi dan Bangun diselesaikan dalam kurung waktu jangka panjang</p>
                        </div>
                        <div class="col-md-10 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <h4>Survei Lokasi & Konsultasi</h4>
                            <p>Survei Lokasi & Konsultasi ini merupakan layanan yang kami berikan guna mengetahui situasi lokasi dan memperhitungkan berapa banyak biaya yang harus dikeluarkan Client</p>
                        </div>
                    </div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="hr"></div>
			</div>
		</div>
	</div>
</section>

<section class="section padding-bottom-100">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
				<div class="left-heading">
					<h2 class="section-title">Cara Kerja <strong class="judul">MARIKANG</strong></h2>
				</div>
				<div class="left-text">
					<!-- <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p> -->
					<ul>
						<li><i ></i> Pilih tukang sesuai pekerjaan.</li>
						<li><i ></i> Tekan tombol WA setelah menentukan tukang yang sesuai.</li>
						<li><i ></i> Akan masuk ke WA admin Marikang (muncul template chat seperti Nama, Alamat, Pekerjaan) yang harus di isi oleh customer.</li>
						<li><i ></i> Lalu Tim Marikang akan menanyakan kapan kunjungan atau survei lokasi.</li>
						<li><i ></i> Dilokasi Tim akan mengecek berapa bahan dan biaya yang harus di bayarkan oleh customer.</li>
						<li><i ></i> Ketika sudah Deal, Tim akan mengerjakan sesuai kesepakatan bersama.</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-1"></div>
			<div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
				<img src="assets/images/right-image.png" class="rounded img-fluid d-block mx-auto" alt="App">
			</div>
		</div>
	</div>
</section>

<section class="mini" id="work-process">
	<div class="mini-content">
		<div class="container">
			<div class="row">
				<div class="offset-lg-3 col-lg-6">
					<div class="info">
						<h1>Work Process</h1>
						<p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<Mini />
			</div>
		</div>
	</div>
</section>

<section class="section" id="testimonials">
	<div class="container">
		<!-- ***** Section Title Start ***** -->
		<div class="row">
			<div class="col-lg-12">
				<div class="center-heading">
					<h2 class="section-title">What do they say?</h2>
				</div>
			</div>
			<div class="offset-lg-3 col-lg-6">
				<div class="center-text">
					<p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
				</div>
			</div>
		</div>
		<!-- ***** Section Title End ***** -->

		<div class="row">
			<!-- ***** Testimonials Item Start ***** -->
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="team-item">
					<div class="team-content">
						<i><img src="assets/images/testimonial-icon.png" alt=""></i>
						<p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
						<div class="user-image">
							<img src="http://placehold.it/60x60" alt="">
						</div>
						<div class="team-info">
							<h3 class="user-name">Catherine Soft</h3>
							<span>Managing Director</span>
						</div>
					</div>
				</div>
			</div>
			<!-- ***** Testimonials Item End ***** -->
			
			<!-- ***** Testimonials Item Start ***** -->
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="team-item">
					<div class="team-content">
						<i><img src="assets/images/testimonial-icon.png" alt=""></i>
						<p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
						<div class="user-image">
							<img src="http://placehold.it/60x60" alt="">
						</div>
						<div class="team-info">
							<h3 class="user-name">Kelvin Wood</h3>
							<span>Digital Marketer</span>
						</div>
					</div>
				</div>
			</div>
			<!-- ***** Testimonials Item End ***** -->
			
			<!-- ***** Testimonials Item Start ***** -->
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="team-item">
					<div class="team-content">
						<i><img src="assets/images/testimonial-icon.png" alt=""></i>
						<p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
						<div class="user-image">
							<img src="http://placehold.it/60x60" alt="">
						</div>
						<div class="team-info">
							<h3 class="user-name">David Martin</h3>
							<span>Website Manager</span>
						</div>
					</div>
				</div>
			</div>
			<!-- ***** Testimonials Item End ***** -->
		</div>
	</div>
</section>

<section class="section colored" id="pricing-plans">
	<div class="container">
		<!-- ***** Section Title Start ***** -->
		<div class="row">
			<div class="col-lg-12">
				<div class="center-heading">
					<h2 class="section-title">Pricing Plans</h2>
				</div>
			</div>
			<div class="offset-lg-3 col-lg-6">
				<div class="center-text">
					<p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
				</div>
			</div>
		</div>
		<!-- ***** Section Title End ***** -->

		<div class="row">
			<Big />
		</div>
	</div>
</section>

<section class="counter">
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="count-item decoration-bottom">
						<strong>126</strong>
						<span>Projects</span>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="count-item decoration-top">
						<strong>63</strong>
						<span>Happy Clients</span>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="count-item decoration-bottom">
						<strong>18</strong>
						<span>Awards Wins</span>
					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="count-item">
						<strong>27</strong>
						<span>Countries</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section" id="blog">
	<div class="container">
		<!-- ***** Section Title Start ***** -->
			<Artikel />
	</div>
</section>

<!-- <section class="section colored" id="contact-us">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="center-heading">
					<h2 class="section-title">Talk To Us</h2>
				</div>
			</div>
			<div class="offset-lg-3 col-lg-6">
				<div class="center-text">
					<p>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4 col-md-6 col-sm-12">
				<h5 class="margin-bottom-30">Keep in touch</h5>
				<div class="contact-text">
					<p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
					<br>auctor non lorem</p>
					<p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
				</div>
			</div>
			<div class="col-lg-8 col-md-6 col-sm-12">
				<div class="contact-form">
					<form id="contact" action="" method="get">
					  <div class="row">
						<div class="col-lg-6 col-md-12 col-sm-12">
						  <fieldset>
							<input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required="">
						  </fieldset>
						</div>
						<div class="col-lg-6 col-md-12 col-sm-12">
						  <fieldset>
							<input name="email" type="email" class="form-control" id="email" placeholder="E-Mail Address" required="">
						  </fieldset>
						</div>
						<div class="col-lg-12">
						  <fieldset>
							<textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea>
						  </fieldset>
						</div>
						<div class="col-lg-12">
						  <fieldset>
							<button type="submit" id="form-submit" class="main-button">Send Message</button>
						  </fieldset>
						</div>
					  </div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section> -->