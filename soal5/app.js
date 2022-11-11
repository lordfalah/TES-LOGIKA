const bilangan = (numb) => {
	let str = "";
	if (numb % 2 == 0) {
		console.log("Harus bilangan ganjil");
		return;
	}

	for (let i = 1; i <= numb; i++) {
		for (let j = numb; j >= 1; j--) {
			if (j % i == 1) {
				if (i % j == 0) {
					str += "X";
				} else {
					str += "O";
				}
			} else {
				str += "X";
			}
		}
		str += "\n";
	}

	console.log(str);
};

bilangan(5);
bilangan(7);
bilangan(10);
