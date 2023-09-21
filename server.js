function server(){
	
	let result = target([1,2,3,4,5,6,7,7,8,9],11)
	for (let i = 0; i<result.length;i+=2){
			console.log(result[i], result[i+1])
	}
}

function target (arr, target){
let result = []
	for (let i = 0; i < arr.length; i++){
		for (let j= i +1 ; j < arr.length; j++){
			if(arr[i]+arr[j]=== target){
			result.push(arr[i],arr[j])
			}
		}

	}
	return result
}

server()
// tidak ada, hanya test aja ygy
