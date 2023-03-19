<script lang="ts">
	import { keyup } from '$lib/common';
	import Attrs from '$lib/components/attrs/attrs.svelte';
	import Loader from '$lib/loader/loader.svelte';
	import { showOverlay, slowFadeOut } from '$lib/stores/store';

	import { getNFTS, getOne } from '$lib/api/api';
	import type { NFT } from '$lib/data/types';
	import { onMount } from 'svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Nft from '$lib/components/nft/nft.svelte';

	const options = { intro: { x: 256 }, duration: 2000, classes: ['z-100'] };
	let page = 1;
	let limit = 10;
	let nfts: NFT[];
	let inputField: HTMLInputElement;

	// simplest way to react and show bar passing callable
	const showLoader = (p: number) => showOverlay.set(true);
	$: showLoader(page);
	let selectedAttrs: [string, string, number][] | undefined;

	$: {
		nfts = getNFTS(page, limit);
		slowFadeOut(500);
	}

	const search = (tid: string) => {
		showOverlay.set(true);
		if (tid == '') {
			nfts = getNFTS();
			slowFadeOut(500);
			return;
		}
		nfts = getOne(parseInt(tid)) as NFT[];
		slowFadeOut(500);
	};
	const get = () => {
		nfts = getNFTS(page, limit);
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

<div class="flex overflow-y-auto  justify-center flex-wrap">
	<div class="form-control w-full max-w-xs">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text">Search Tokens</span>
		</label>
		<div class="flex">
			<input
				bind:this={inputField}
				type="text"
				on:keyup={(e) => keyup(e, search)}
				placeholder="Enter Token ID"
				class="input mb-4 input-bordered w-full max-w-xs"
			/>
			<button
				class="btn  ml-4"
				on:click={() => {
					inputField.value = '';
					get();
				}}>Reset</button
			>
		</div>
	</div>
</div>
<div class=" flex flex-col items-center">
	{#if nfts?.length}
		<Attrs attrs={selectedAttrs} />
		{#each nfts as d}
			<Nft nft={d} bind:selectedAttrs />
		{/each}
	{/if}
	<div class="btn-group grid grid-cols-2 mt-2 mb-8">
		<button class="btn btn-outline" disabled={page === 1} on:click={() => page--}
			>Previous page</button
		>
		<button
			class="btn btn-outline"
			disabled={!nfts?.length || nfts.length < limit}
			on:click={() => {
				page++;
			}}>Next</button
		>
	</div>
</div>
<Loader />
<SvelteToast {options} />

<style>
	:root {
		--toastBackground: #000;
	}
</style>
