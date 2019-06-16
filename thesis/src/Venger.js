function FindMaxElement(mass) {
    mass.map((num)=>{
       maxElements.push(Math.max.apply(null,num));
    });
    saveMass = venger;
    TakeAway(venger, maxElements);
    Upend(venger);
    FindMinElement();

}

function FindMinElement() {

    if(massCollZero < venger.length && massRowZero < venger[0].length) {
        minElementsRow = 0;
        minElementsRow = [];
        venger.map((num)=>{
            minElementsRow.push(Math.min.apply(null, num));
        });
        //  console.log(minElementsRow);
        TakeAway(venger, minElementsRow);
        massRowZero =  FindZero(venger);
        Upend(venger);
        minElementsColl = 0;
        minElementsColl = [];
        venger.map((num)=>{
            minElementsColl.push(Math.min.apply(null, num));
        });
        //  console.log(minElementsColl);

        massCollZero =  FindZero(venger);

        TakeAway(venger, minElementsColl);
        Upend(venger);
        FindMinElement();

    }
    else {
        massCollZero =  FindZero(venger);
        Upend(venger);
   //     console.log(venger);
        massRowZero =  FindZero(venger);
       // console.log( massRowZero);
      //  console.log( massCollZero);
        Dell();
    }

}
function TakeAway(mass, takeaway){
 //   console.log(takeaway);
    for (let i = 0; i < mass.length; i++ ){
        for (let j = 0; j < mass[i].length; j++){
            mass[i][j] = mass[i][j] - takeaway[i];
            if (mass[i][j] < 0) {
                mass[i][j] = -mass[i][j]
            }
        }
    }
   // console.log(mass)
}

function FindZero(mass){
    let zero = [];
    for (let i = 0; i< mass.length; i++){
        for (let j = 0; j < mass[0].length; j++){
            if (mass[i][j] === 0){
                zero.push([i, j]);
            }
        }
    }
   // console.log(zero);
    return zero;
}

function Upend(mass){
    let m = mass.length, n = mass[0].length, AT = [];
    for (let i = 0; i < n; i++)
    { AT[ i ] = [];
        for (let j = 0; j < m; j++) AT[ i ][j] = mass[j][ i ];
    }
    venger = AT;
}

function Dell() {
    //  Upend(venger);
    console.log(venger);
    let zero = 0;
    let mass = [];

    for (let i = 0; i < venger.length; i++) {
        for (let j = 0; j < venger.length; j++) {
            if (venger[i][j] === 0) {
                zero++;
             }
            if (j === venger[j].length - 1 ) {
                if (zero >= 2) {
                    mass.push(zero);
                }
                else {
                    mass.push(0);
                }
            }
        }
        zero = 0;

    }

    //console.log(venger);
    //console.log(mass);

     Upend(venger);

     zero = 0;
    let mass2 = [];
    for (let i = 0; i < venger.length; i++) {
        for (let j = 0; j < venger.length; j++) {
            if (venger[i][j] === 0) {
                zero++;
            }
            if (j === venger[j].length - 1) {
                if (zero >= 2) {
                    mass2.push(zero);
                } else {
                    mass2.push(0);
                }
            }
        }
            zero = 0;

    }

    Upend(venger);
    console.log(venger);
    console.log(mass2);
    let k = 0;
    let maxRow = Math.max.apply(null,mass);
    for (let i = 0; i < mass.length; i++){
        if (mass[i] === maxRow){
            venger.splice(i - k, 1);
            k++;
        }
    }
    Upend(venger);
    console.log(venger);
    let maxColl = Math.max.apply(null,mass2);
    k = 0;

    for (let i = 0; i < mass2.length; i++){
        if (mass2[i] === maxColl){
            venger.splice(i - k, 1);
            k++;
        }
    }


console.log(mass2);

console.log(venger)
}
let venger = [[7,3,6,9,5], [7,5,7,5,6], [7,6,8,8,9], [3,1,6,5,7], [2,4,9,9,5]];
//let venger = [[6, 15, 3 ,12, 4, 2], [14, 3, 3 ,7, 2, 1], [3, 2, 8, 15, 8, 12], [3, 14, 3, 15, 11, 10], [3, 13, 1, 9, 6, 6], [15, 10, 3, 4, 5, 10]];
let maxElements = [];
let minElementsRow = [];
let minElementsColl = [];
let saveMass = [];
let massRowZero = [];
let massCollZero = [];
 FindMaxElement(venger);

