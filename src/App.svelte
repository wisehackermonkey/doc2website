<script>
	import fileSize from "filesize";
	import FileDrop from "filedrop-svelte"
  import * as animateScroll from "svelte-scrollto";

	import {filedrop} from 'filedrop-svelte'
	import {fade,fly} from "svelte/transition"
	import SearchDomain from "./SearchDomain.svelte"
	import CreateWebsite from "./CreateWebsite.svelte"
	import SelectStyle from "./SelectStyle.svelte"
	let files
	let isAvaible = false
	let domainBox 
	let options = {}
	let selected
	let customizeselect
	let isDomainFound
	let isDomainBaught = false
	let doneEmoji  = false
	let isSiteLive = false
</script>
<h1>
	<a href="https://github.com/chanced/filedrop-svelte">Make your own website</a> 
</h1>
<h3>
	Upload a word doc with a photo and some text you would like on your website and get it hosted!
</h3>

 
<FileDrop on:filedrop={(e) => files = e.detail.files} />
{#if files}
			{#each files.accepted as file}

	<h5>Accepted files</h5>
	<ul>
			<li>{file.name} - {fileSize(file.size)}</li>
	</ul>
			{/each}

	{#each files.rejected as rejected}
	<h5>Rejected files</h5>
	<ul>
		
			<li>{rejected.file.name} - {rejected.error.message}</li>
		
	</ul>
	{/each}
	<h1>First decision!</h1>
	<h3>What do you want your website's link to look like?</h3> 
	<h2>Too options:</h2>
	<h4> EX: <em>oran.com</em> (paid) </h4>
	<h3>or</h3>
	<h4>EX: <em>oran.hostingmenis.app.dev.com</em> (free)</h4>

	<select bind:value={customizeselect} on:click={()=>{ animateScroll.scrollToBottom()}}>
		<option value="none"> Choose which option you want</option>
		<option value="paid"  >Paid custom website link (paid monthly)</option>
		<option value="custom" >Free Custom website link ($10 once for hosting)</option>
		<option value="non-custom">non Custom website link & free hosting but no custom domain allowed</option>
	</select>
	
	
	
	{#if customizeselect === "paid"}
	<div transition:fly="{{y:200,duration:1000}}">
		<p> Search to see if the website link name is avaible></p>
		<SearchDomain bind:domainBox={domainBox} bind:isDomainFound={isDomainFound}/>
		{#if isDomainFound}
	  	<h3>Great! you found your kickass website name, now lets buy it (also in webspeak called domain registration)</h3>
			<button on:click={()=>{confirm(`do you really want to buy ${domainBox}?`);alert("k, im buying it now."); alert("done!"); doneEmoji = true; isDomainBaught= true ; animateScroll.scrollToBottom()}}>Buy domain {domainBox}	</button> <span>{doneEmoji?"":""}</span>
			{#if isDomainBaught}
			<h1>Next Step</h1>
			<h3> Choose what style you want your site to look like</h3>
			<select bind:value={selected} on:click={()=>{ animateScroll.scrollToBottom()}}>
				<option value="">Select Style</option>
				<option>Caviler</option>
				<option>Velvet</option>
				<option>Buroke</option>
			</select>
			{#if selected} 
		<div transition:fly="{{y:500,duration:1000}}">
			
				<h3>Awesome you selected {selected}, great choice!</h3>
				<h3>Here's a preview of what your site looks like</h3>
				<img alt="preview of website" width="400" src="https://i.imgur.com/mmBjBQz.png" />
				<button
														 href="https://orancollins.com/" 
target="popup" 
on:click={()=>
				 {window.open('https://orancollins.com/','popup','width=600,height=600'); return false;}}
								>Preview {domainBox}.app.com</button>
				
				<h1>Next Step</h1>
				<h3>Pay for site</h3>
				<button on:click={()=>{prompt("Credit card number");confirm("Do you want to pay $14 bucks?"); alert("paid!"); isSiteLive = true}}>Pay now</button>

			 <button  disabled={!isSiteLive}  transition:fly="{{x:500,duration:1000}}"
							 href="https://orancollins.com/" 
target="popup" 
on:click={()=>
				 {window.open('https://orancollins.com/','popup','width=600,height=600'); return false;}}
				 >View Live Site!</button>
			<h1> Congraduations! you now are the proud owner of {domainBox}</h1>
			<h3> Click Copy button to add your website link to your clipboard </h3>
				 <input value={domainBox}> <button on:click={()=>{
navigator.clipboard.writeText({domainBox})

}}><img alt="copy text icon"  height="30" src="https://www.svgrepo.com/show/3110/copy.svg"/></button>
 				</div>
				{/if}
		
			{/if}
					

	  {/if}
	</div>
	{:else}
		<p>Please select a choice</p>
	{/if}
	
	
	 
	
{/if}
	
 	
	<style>
	
	</style>
	

