let x = [0, 0, 1, 2, 1, 3, 3, 5, 5] //gets 2
let y = [1, 1, 1, 2, 2, 3, 3, 4, 4, 9]//gets 9




for (let i=0; i<x.length; i++){
    let get = []

    for (let j=0; j<x.length; j++){
        if (x[i] === x[j]){
            get.push(1)
        }
    }

    if (get.length < 2){
        console.log(x[i])
    }
    
}

for (let i=0; i<y.length; i++){
    let get = []

    for (let j=0; j<y.length; j++){
        if (y[i] === y[j]){
            get.push(1)
        }
    }

    if (get.length < 2){
        console.log(y[i])
    }
    
}