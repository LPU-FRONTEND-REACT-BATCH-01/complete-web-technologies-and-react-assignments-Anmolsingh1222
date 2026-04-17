// function addSpices(){
//     let addedSpices = true;

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
            
//             if(addedSpices){
//                 console.log("Spice added");
//                 resolve("Spices step completed ");
//             }
//             else{
//                 reject("Spices not added ");
//             }

//         },1000);
//     });
// }
// function pourOil(){
//     let oilAdded = true;

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
            
//             if(oilAdded){
//                 console.log("Oil added");
//                 resolve("Oil step completed");
//             }
//             else{
//                 reject("Oil not added");
//             }

//         },3000);
//     });
// }


// function fryOnions(){
//     let onionsFried = true;

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
            
//             if(onionsFried){
//                 console.log("Fried onions");
//                 resolve("Onions step completed");
//             }
//             else{
//                 reject("Onions not fried");
//             }

//         },5000);
//     });
// }


// function addRice(){
//     let riceAdded = true;

//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
            
//             if(riceAdded){
//                 console.log("Rice added");
//                 resolve("Rice step completed");
//             }
//             else{
//                 reject("Rice not added");
//             }

//         },4000);
//     });
// }

// // addSpices()
// // .then(()=>{
// //     return pourOil();
// // })
// // .then(()=>{
// //     return fryOnions();
// // })
// // .then(()=>{
// //     return addRice();
// // })
// // .then(()=>{
// //     console.log("Cooking completed");
// // })
// // .catch((error)=>{
// //     console.log(error);
// // });

// // Async and await

// async function cookBiryani(){
//     try{
//         await addSpices();
//         await pourOil();
//         await fryOnions();
//         await addRice();

//         console.log("Cooking completed ");
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// cookBiryani();


// async function fetchData(){
//     try{
//         let res = await fetch("https://dummyjson.com/products");

//         console.log(res);

//         if(res.ok){
//             let data = await res.json();
//             console.log(data);
//         }
//         else{
//             console.log("HTTP error:", res.status);
//         }
//     }
//     catch(error){
//         console.log("Network error:", error);
//     }
// }

// fetchData();


//Data Object Model (DOM)

