<script>
		import {fade,fly} from "svelte/transition"
  import * as animateScroll from "svelte-scrollto";

  export let domainBox
	export let isDomainFound
	$: isDomainFound
</script>

 
	<input transition:fade type="text" bind:value={domainBox} 
		on:change={()=>{
				isDomainFound = domainBox?.includes(".com")
				isDomainFound = isDomainFound
			}
		} 
	/><button on:click={()=>{ animateScroll.scrollToBottom()}}>search</button>
{#if domainBox !== "undefined"}
	{#if isDomainFound}
		<p>the domain is avaible!  it costs ${Math.trunc(Math.random(100)*10,1)} per year</p>
	{:else}
		<p>the domain is not avaible, =</p>
	{/if}
{/if}
