import data from '$lib/data/ranked_by_attrs.json';
import type { NFT } from '../data/types';

export const getNFTS = (page = 1, limit = 10) => {
	const off = limit * (page - 1);
	return (data as NFT[]).slice(off, off + limit);
};

export const getOne = (id: number | string) => {
	const one = (data as NFT[]).find((n) => n.id == id);
	return one ? [one] : [];
};
export const getOneFlat = (id: number | string) => {
	const one = getOne(id);
	return one ? one[0] : null;
};
