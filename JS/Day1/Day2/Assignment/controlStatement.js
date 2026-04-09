// // let a = 3;
// // if(a>0){
// //     console.log("a is +ve");
// // }
// // else if(a<0){
// //     console.log("a is -ve");
// // }
// // else{
// //     console.log("a is zero");
// // }

// // let a =Number(prompt("E#nter your value : "))
// // console.log(typeof a)

// // let a = Number(prompt("Enter the value of a :"));
// // if(a<8){
// //     for(let i = 0;i < a;i ++){
// //         console.log(a);
// //     }
// // }
// // else{
// //     for(let i = 0;i < a*a;i ++){
// //         console.log(a);
// //     }
// // }

// //String Methods

// // let age =32
// // let name = `your age is  $(age), you are eligible to voye `
// // console.log("your age is"+age)
// // let names = "  chhota bheem"

// // console.log(names.toUpperCase())
// // console.log(names.toLowerCase())
// // console.log(names.trim())

// // console.log(names.split(","))

// // console.log(names.split(''))

// // console.log(names.length)

// // console.log(names.replace('a','k'))

// // console.log(names.charAt(2))

// // console.log(names.slice(3))


// // console.log(names.includes('q'))

// // write a function which accept username and pwd and email,,in username remove spaces and thgen convert to lowercase 
// // for email convert to lc and then separate domain and username in arraylist
// // fowr pwd check include if length greater that 8 and consist of @,* /
// // and at the last return 

// // let username = prompt("Enter username : ");
// // let email = prompt("Enter email : ");
// // let password = prompt("Enter password: ");

// // function Check(username, email, password) {
// //     console.log(username.trim().toLowerCase());

// //     console.log(email.toLowerCase().split("@"));

// //     if (password.length > 8 && (password.includes('@','*','/'))) {
// //         console.log("password is correct");
// //     } else {
// //         console.log("password is wrong");
// //     }
// // }

// // Check(username, email, password);


// let user_data = {
//     id: 1,
//     name: "Jhon",
//     "age":12
// }

// // Object.freeze(user_data);
// Object.seal(user_data);
// user_data.city = "Delhi";
// // console.log(user_data);
// // console.log(user_data.id);
// // console.log(user_data.name);
// // console.log(user_data.age);
// // console.log(user_data["age"]);

// let keys = Object.keys(user_data);
// console.log(keys);

// let values = Object.values(user_data);
// console.log(values);

// let pairs = Object.entries(user_data);
// console.log(pairs);




let username = prompt("Enter username: ");
let email = prompt("Enter email: ");
let password = prompt("Enter password: ");
function objectCreator(username, email, password) {
    return {
        username:username,
        email:email,
        password:password
    };
}
console.log(objectCreator(username,email,password));