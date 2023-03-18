<!-- <script lang="ts">
	export let attrs: [string, string, number][] | undefined;
</script>

{#if attrs}
	<div class="wrapper  z-40  top-0 left-0 right-0 bottom-0 mx-auto justify-center items-center">
		<div
			class="flex z-50 overflow-y-auto h-full p-8 rounded-2xl flex-col card shadow-md bg-white max-w-fit mx-auto"
		>
			<button
				class="btn btn-circle btn-primary btn-sm shadow-md"
				on:click={() => (attrs = undefined)}>X</button
			>
			<div class="header p-1 mt-4 grid font-extrabold">
				<span>Trait</span>
				<span>Value</span>
				<span>Occurrence</span>
			</div>
			{#each attrs as at}
				<div class="p-1 text-left font-normal grid font">
					<span>{at[0]}</span>
					<span>{at[1]}</span>
					<span>{(at[2] * 100).toFixed(2)}%</span>
				</div>
			{/each}<script lang="ts">
	export let attrs: [string, string, number][] | undefined;
</script>

{#if attrs}
	<div class="wrapper z-40  top-0 left-0 right-0 bottom-0 mx-auto justify-center items-center">
		<div class="flex  p-8  rounded-2xl flex-col card shadow-md bg-white max-w-fit mx-auto">
			<button
				class="btn btn-circle btn-primary btn-sm shadow-md"
				on:click={() => (attrs = undefined)}>X</button
			>
			<div class="header grid">
				<span>Trait</span>
				<span>Value</span>
				<span>Occurrence</span>
			</div>
			{#each attrs as at}
				<div class="p-1 text-left font-normal grid">
					<span>{at[0]}</span>
					<span>{at[1]}</span>
					<span>{(at[2] * 100).toFixed(2)}%</span>
				</div>
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

		</div>
	</div>
{/if}

<style>
	.wrapper {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style> -->
<script lang="ts">
	export let attrs: [string, string, number][] | undefined;
</script>

{#if attrs}
	<div class="wrapper z-40  top-0 left-0 right-0 bottom-0 mx-auto justify-center items-center">
		<div
			class="flex overflow-x-auto h-full    p-8  rounded-2xl flex-col card shadow-md bg-white max-w-fit mx-auto"
		>
			<button
				class="btn btn-circle btn-primary btn-sm shadow-md"
				on:click={() => (attrs = undefined)}>X</button
			>
			<table
				class="table table-zebra table-compact  p-8  rounded-2xl flex-col card shadow-md bg-white max-w-fit mx-auto"
			>
				<!-- head -->
				<thead>
					<tr>
						<th>Trait</th>
						<th>Value</th>
						<th>%</th>
					</tr>
				</thead>
				<tbody>
					{#each attrs as at}
						<tr class="p-1 text-left font-normal">
							<td>{at[0]}</td>
							<td>{at[1]} </td>
							<td> {(at[2] * 100).toFixed(2)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<!-- <div class="wrapper z-40  top-0 left-0 right-0 bottom-0 mx-auto justify-center items-center">
		<div class="flex   p-8  rounded-2xl flex-col card shadow-md bg-white max-w-fit mx-auto"> -->
	<!-- <button class="btn btn-circle btn-primary btn-sm shadow-md" on:click={() => (attrs = undefined)}
		>X</button
	> -->
	<!-- {#each attrs as at}
				<div class="p-1 text-left font-normal">{at[0]}: {at[1]} {(at[2] * 100).toFixed(2)}%</div>
			{/each} -->
	<!-- </div>
	</div> -->
{/if}

<style>
	.wrapper {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
