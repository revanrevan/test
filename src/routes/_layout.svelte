<script>
	import Nav from '../components/Nav.svelte';
	import Foot from '../components/Footer.svelte';
	import { onMount } from "svelte"
	export let segment;
	// $("#preloader").animate({
	// 		'opacity': '0'
	// 	}, 600, function(){
	// 		setTimeout(function(){
	// 			$("#preloader").css("visibility", "hidden").fadeOut();
	// 		}, 300);
	onMount(function(){
		setTimeout(()=>{
			document.querySelector("div#preloader").style.visibility = "hidden"
		}, 200)
	})
</script>

<style>

</style>

<div id="preloader">
	<div class="jumper">
		<div></div>
		<div></div>
		<div></div>
	</div>
</div> 

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Foot />