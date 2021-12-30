<script>
	import {fade,fly} from "svelte/transition"
</script>
<h2 transition:fade> Lets create your website!</h2>
<button transition:fly="{{y:200,duration:1000}}">
	Create website
</button>