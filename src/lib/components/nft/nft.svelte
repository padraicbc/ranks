<script lang="ts">
	import type { NFT } from '$lib/data/types';
	import { toast } from '@zerodevx/svelte-toast';
	export let nft: NFT;
	export let selectedAttrs: [string, string, number][] | undefined;
</script>

<div class="card card-side bg-base-100 shadow-xl m-2 relative">
	<figure><img src={nft.img} alt="NFT" /></figure>
	<div class="card-body">
		<h2 class="card-title">Rank: {nft.rank}</h2>

		<div class="card-actions justify-end">
			<button class="btn btn-secondary" on:click={() => (selectedAttrs = nft.attributes)}
				>View Attrs</button
			>
			<a class="btn btn-primary" href={nft.url} target="_blank">View on OS</a>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="absolute sp top-4"
				on:click={() =>
					navigator.clipboard.writeText(nft.url).then(() => toast.push('OS Link Copied'))}
			>
				<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"
					><path
						d="M24.167 24.708q1.25 0 2.145-.896.896-.895.896-2.145t-.896-2.146q-.895-.896-2.145-.896-.625 0-1.167.229t-1 .646l-4.792-2.417v-.833L22 13.833q.458.417 1 .646.542.229 1.167.229 1.25 0 2.145-.895.896-.896.896-2.146t-.896-2.146q-.895-.896-2.145-.896t-2.146.896q-.896.896-.896 2.146v.416L16.333 14.5q-.458-.417-1-.646-.541-.229-1.166-.229-1.25 0-2.146.896-.896.896-.896 2.146t.896 2.145q.896.896 2.146.896.625 0 1.166-.229.542-.229 1-.646l4.792 2.417v.417q0 1.25.896 2.145.896.896 2.146.896ZM3.333 36.667V6.125q0-1.125.834-1.958.833-.834 1.958-.834h27.75q1.125 0 1.958.834.834.833.834 1.958v21.083q0 1.125-.834 1.959Q35 30 33.875 30H10Zm2.792-6.709 2.708-2.75h25.042V6.125H6.125Zm0-23.833v23.833Z"
					/></svg
				>
			</span>
		</div>
	</div>
</div>
