const bilanganCacah = (n) => {
	const temp = [];

	for (let i = 1; i <= n; i++) {
		if (i % 3 == 0 && i % 7 == 0) {
			temp.push("Z");
		} else if (i % 3 == 0 || i % 7 == 0) {
			temp.push(i);
		}
	}

	console.log(temp);
};

bilanganCacah(30);
