const checkBilanganCacah = (datas) => {
	const maxValue = Math.max(...datas);
	const minValue = Math.min(...datas);
	const result = [];

	for (let i = minValue; i <= maxValue; i++) {
		if (!datas.includes(i)) {
			result.push(i);
		}
	}

	console.log(`[${datas}] = ${Math.min(...result)}`);
};

checkBilanganCacah([5, 2, 8, 4, 3, 10]);
checkBilanganCacah([2, 3, 4, 6]);
checkBilanganCacah([8, 6, 7, 12]);
