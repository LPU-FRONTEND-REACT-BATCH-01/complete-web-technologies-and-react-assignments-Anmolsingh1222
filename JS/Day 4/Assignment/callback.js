function addSpices(){
    let addedSpices = true;

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(addedSpices){
                console.log("Spice added");
                resolve("Spices step completed ");
            }
            else{
                reject("Spices not added ");
            }

        },1000);
    });
}
function pourOil(){
    let oilAdded = true;

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(oilAdded){
                console.log("Oil added");
                resolve("Oil step completed");
            }
            else{
                reject("Oil not added");
            }

        },3000);
    });
}


function fryOnions(){
    let onionsFried = true;

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(onionsFried){
                console.log("Fried onions");
                resolve("Onions step completed");
            }
            else{
                reject("Onions not fried");
            }

        },5000);
    });
}


function addRice(){
    let riceAdded = true;

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(riceAdded){
                console.log("Rice added");
                resolve("Rice step completed");
            }
            else{
                reject("Rice not added");
            }

        },4000);
    });
}

addSpices()
.then(()=>{
    return pourOil();
})
.then(()=>{
    return fryOnions();
})
.then(()=>{
    return addRice();
})
.then(()=>{
    console.log("Cooking completed");
})
.catch((error)=>{
    console.log(error);
});