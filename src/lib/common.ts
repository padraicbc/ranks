let timer: any;
export const debounce = (v: string, func: Function) => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		func(v);
	}, 1000);
};

export const arrow = (r: string) => {
	return `<svg class="inline-block" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20Z"/></svg>`;
};

export const keyup = (e: Event, search: Function) => {
	const target = e.target as HTMLInputElement;
	console.log(target);
	debounce(target.value, (value: string) => search(value));
};
