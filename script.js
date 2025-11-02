const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = [];
	let i = 0;
	while(i < arr.length) {
		let newarr = [];
		let sum = 0;
		while(i < arr.length && sum+arr[i] <= n) {
			newarr.push(arr[i]);
			sum+=arr[i];
			i++;
		}
		result.push(newarr);
	}
	return result;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
