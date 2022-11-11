const checkPassword = (password) => {
	const min = 8;
	const max = 32;
	let lower = false;
	let upper = false;

	if (password.length < min) {
		console.log("Kata sandi minimal 8 karakter");
		return;
	}

	if (password.length > max) {
		console.log("Kata sandi maksimal 32 karakter");
		return;
	}

	if (!isNaN(password[0])) {
		console.log("Karakter awal tidak boleh angka");
		return;
	}

	// check jika tidak ada angka
	if (!/\d/.test(password)) {
		console.log("Harus memiliki angka");
		return;
	}

	for (let i = 0; i < password.length; i++) {
		if (
			password[i] == password[i].toLowerCase() &&
			password[i] != password[i].toUpperCase()
		) {
			lower = true;
		} else {
			const num = Number(password[i]);
			if (!Number.isInteger(num)) {
				upper = true;
			}
		}
	}

	if (!lower || !upper) {
		console.log("Harus memiliki huruf kapital dan huruf kecil");
		return;
	}

	console.log("Kata sandi valid");
};

checkPassword("5andiwara");
checkPassword("sandiwar4");
checkPassword("Sandiwar4");
