const main = () => {
	const input =
		"Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.";

	const searchText = input
		.toLocaleLowerCase()
		.match(/(sang gajah|serigala|harimau)/g);

	console.log(searchText.join(" - "));
};

main();
