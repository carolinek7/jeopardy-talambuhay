<script lang="ts">
	// displays a timer that counts down from a given time and emits an event when the time is up
	let { secondsLeft } = $props();
</script>

<div class="time-widget">
	{#each Array(11).fill(0) as _, i}
		<div class="box" class:red={secondsLeft > Math.abs(i - 5)}> </div>
	{/each}
</div>

<style>
    .red {
        background-color: red;  
    }
	.time-widget {
        display: flex;
        justify-content: center;
    }
    .box {
        width: 30px;
        height: 30px;
        border: 2px solid grey;
    }
	
</style>
