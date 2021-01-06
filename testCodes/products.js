function twoProduct(arr, n) {
	for (let i = 1; i < arr.length; i++) {
		let v = arr[i], t = n / arr[i];
		if (arr.slice(0, i).includes(t)) return [t, v];
	}
	return undefined;
}
module.exports = twoProduct;