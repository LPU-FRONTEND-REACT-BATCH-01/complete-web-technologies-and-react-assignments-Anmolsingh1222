// let total = arr1.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(total);


// let cart_data = [
//     {
//         id: 1,
//         name:"Watch",
//         price:2999
//     },
//     {
//         id: 2,
//         name: "Shoes",
//         price: 199
//     },
//     {
//         id: 3,
//         name:"Earphone",
//         price:299
//     }
// ]
// let total_amount = cart_data.reduce((prev, value) => {
//     return prev + value.price;
// })

// console.log(total_amount);




// let arr = ["Banana","kiwi","Apple","orange"]
// arr.sort()
// console.log(arr)


// let arr1 = [1,32,2,2,4,23,56,84,34]
// arr1.sort((a,b)=>a-b)
// arr1.sort((a,b)=>b-a)
// console.log(arr1)


/*filter method*/

// let arr = [1,32,2,2,4,23,56,84,34]
// let filtered_arr = arr.filter((ele)=> {
//     return ele>20
// })
// for(let index = 0; index<arr.length;index++){
//     let temp = []
//     if(arr[i]>20){
//         temp.push(arr[i])
//     }
//     return temp
// }


// console.log(arr)
// console.log(filtered_arr)


// let cart_data = [
//     {
//         id: 1,
//         name:"Watch",
//         price:2999
//     },
//     {
//         id: 2,
//         name: "Shoes",
//         price: 199
//     },
//     {
//         id: 3,
//         name:"Earphone",
//         price:299
//     }
// ]

// cart_data.sort((a,b)=>{
//     return a.name.localeCompare(b.name)}
// )
// console.log(cart_data)

// cart_data.sort((a,b)=>{
//     return a.price-b.price}
// )
// console.log(cart_data)


// let filtered_arr = cart_data.filter((item)=> {
//     return item.price>2000
// })
// console.log(filtered_arr)


// let arr = ["Apple","Banana","orange"]
// let res = arr.some(ele => ele === "Apple")
// console.log(res)

// let users = [
//     {
//         id:1,
//         username:"Anmolsingh1222",
//         password:"1234567"
//     },
//     {
//         id:2,
//         username:"bhayansh",
//         password:"bhavya"
//     },
//     {
//         id:3,
//         username:"AkhilRana",
//         password:"akahas"
//     }
// ]
// let input = {
//     username:"AkhilRana",
//     password:"Chutki"
// }

// let results = users.some(ele => ele.username === input.username)
// console.log(results)

// let users = [
//     {
//         id:1,
//         username:"Anmolsingh1222",
//         password:"1234567"
//     },
//     {
//         id:2,
//         username:"bhayansh",
//         password:"bhavya"
//     },
//     {
//         id:3,
//         username:"AkhilRana",
//         password:"akahas"
//     }
// ]
// let input = {
//     username:"AkhilRana",
//     password:"akahas"
// }

// let ch_uname = users.some(ele => ele.username === input.username)
// console.log(ch_uname)


// if(ch_uname){

    
//     let user = users.find(u => u.username === input.username);


//     if(user.password === input.password){
//         console.log("Navigate to Home");
//     } else {
//         console.log("Invalid Password");
//     }

// } else {
//     console.log("User not found");
// }



// let original_Object = {
//     id:1,
//     name:"Nick",
//     city:"pune"
// }
// let duplicate = {...original_Object,state:"maharastra"}
// console.log(duplicate)
// // // let duplicate = original_Object;
// // // let duplicate = structuredClone(original_Object);


// // original_Object.state = "Maharastra"

// console.log(original_Object)





// let arr = [1,2,3,2345,21,53,35,3543]

// let duplicate = [...arr]
// arr.push("hello")
// console.log(duplicate)
// console.log(arr)
// console.log(...arr)