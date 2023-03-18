<script lang="ts">
	import { keyup } from '$lib/common';
	import Attrs from '$lib/components/attrs/attrs.svelte';
	import Loader from '$lib/loader/loader.svelte';
	import { showOverlay, slowFadeOut } from '$lib/stores/store';

	import '../app.css';
	import { getNFTS, getOne } from '../lib/api/api';
	import type { NFT } from '../lib/data/types';
	let page = 1;
	let limit = 10;
	let data: NFT[];
	// simplest way to react and show bar passing callable
	const showLoader = (p: number) => showOverlay.set(true);
	$: showLoader(page);
	let selectedAttrs: [string, string][] | undefined;
	$: {
		data = getNFTS(page, limit);
		slowFadeOut(500);
	}

	const search = (tid: string) => {
		showOverlay.set(true);
		if (tid == '') {
			data = getNFTS();
			slowFadeOut(500);
			return;
		}

		data = getOne(parseInt(tid)) as NFT[];
		slowFadeOut(500);
	};
</script>

<div class="navbar bg-base-100 shadow-lg">
	<div class="flex-1">
		<span class="font-bold">Ranks By Attr Rarity</span>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
				/></svg
			>
		</button>
	</div>
</div>

<div class="flex justify-center flex-wrap">
	<div class="form-control w-full max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Search Tokens</span>
		</label>
		<input
			type="text"
			on:keyup={(e) => keyup(e, search)}
			placeholder="Enter Token ID"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
</div>
<div class=" flex flex-col items-center">
	{#if data?.length}
		<Attrs attrs={selectedAttrs} />
		{#each data as d}
			<div class="card card-side bg-base-100 shadow-xl m-6">
				<figure><img src={d.img} alt="NFT" /></figure>
				<div class="card-body">
					<h2 class="card-title">Rank: {d.rank}</h2>

					<div class="card-actions justify-end">
						<button class="btn btn-secondary" on:click={() => (selectedAttrs = d.attributes)}
							>View Attrs</button
						>
						<a class="btn btn-primary" href={d.url} target="_blank">View on OS</a>
					</div>
				</div>
			</div>
		{/each}
	{/if}
	<div class="btn-group grid grid-cols-2 mt-2 mb-8">
		<button class="btn btn-outline" disabled={page === 1} on:click={() => page--}
			>Previous page</button
		>
		<button
			class="btn btn-outline"
			disabled={!data?.length || data.length < limit}
			on:click={() => {
				page++;
			}}>Next</button
		>
	</div>
</div>
<Loader />

<style>
</style>
