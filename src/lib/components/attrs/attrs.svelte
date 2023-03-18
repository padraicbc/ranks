<script lang="ts">
	export let attrs: [string, string][] | undefined;
</script>

{#if attrs}
	<div class="wrapper z-40  top-0 left-0 right-0 bottom-0 mx-auto justify-center items-center">
		<div class="flex   p-8  rounded-2xl flex-col card shadow-md bg-white max-w-fit mx-auto">
			<button
				class="btn btn-circle btn-primary btn-sm shadow-md"
				on:click={() => (attrs = undefined)}>X</button
			>
			{#each attrs as at}
				<div class="p-1 text-left font-normal">{at[0]}: {at[1]}</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.wrapper {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
