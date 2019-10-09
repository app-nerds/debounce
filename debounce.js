export default function (fn, delay) {
	let id = null;

	return () => {
		let args = arguments;
		clearTimeout(id);

		id = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};

