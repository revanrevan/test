<script>
	export let segment;
	let show = false
	const toggle = () =>{
		show = !show;
	}
</script>

<style>

</style>

<header class="header-area header-sticky">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<nav class="main-nav">
					<a href=" " class="logo">
						<img src="/assets/images/logo.png" alt="Softy Pinko"/>
					</a>
					<ul class="nav" style='display : {show ? "block" : "none"}'>
						<li><a aria-current="{segment === undefined ? 'page' : undefined}" href="#welcome">Home</a></li>
						<li><a aria-current="{segment === 'caritoko' ? 'page' : undefined}" href="caritoko">Cari Toko Bangunan</a></li>
						<li><a aria-current="{segment === 'caritukang' ? 'page' : undefined}" href="caritukang">Cari Tukang</a></li>
						<li><a aria-current="{segment === 'artikel' ? 'page' : undefined}" href="artikel">Artikel</a></li>
						<!-- <li><a aria-current="{segment === '#work-process' ? 'page' : undefined}" href="#work-process">Work Process</a></li>
						<li><a aria-current="{segment === '#testimonials' ? 'page' : undefined}" href="#testimonials">Testimonials</a></li>
						<li><a aria-current="{segment === '#pricing-plans' ? 'page' : undefined}" href="#pricing-plans">Pricing Tables</a></li>
						<li><a aria-current="{segment === '#blog' ? 'page' : undefined}" href="#blog">Blog Entries</a></li>
						<li><a rel=prefetch aria-current="{segment === '#contact-us' ? 'page' : undefined}" href="#contact-us">Contact Us</a></li> -->
					</ul>
					<a href=' ' class='menu-trigger {show ? "active" : ""}' on:click={toggle}>
						<span>Menu</span>
					</a>
				</nav>
			</div>
		</div>
	</div>
</header>