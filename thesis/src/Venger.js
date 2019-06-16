let venger = [[7,3,6,9,5], [7,5,7,5,6], [7,6,8,8,9], [3,1,6,5,7], [2,4,9,9,5]];
let SaveMass  = [[7,3,6,9,5], [7,5,7,5,6], [7,6,8,8,9], [3,1,6,5,7], [2,4,9,9,5]];
console.log(SaveMass);
//let venger = [[6, 15, 3 ,12, 4, 2], [14, 3, 3 ,7, 2, 1], [3, 2, 8, 15, 8, 12], [3, 14, 3, 15, 11, 10], [3, 13, 1, 9, 6, 6], [15, 10, 3, 4, 5, 10]];
let maxElements = [];
let minElementsRow = [];
let minElementsColl = [];

let massRowZero = [];
let massCollZero = [];

FindMaxElement(venger);

function FindMaxElement(mass) {
    mass.map((num)=>{
       maxElements.push(Math.max.apply(null,num));
    });

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
        TakeAway(venger, minElementsRow);
        massRowZero =  FindZero(venger);
        Upend(venger);
        minElementsColl = 0;
        minElementsColl = [];
        venger.map((num)=>{
            minElementsColl.push(Math.min.apply(null, num));
        });

        massCollZero =  FindZero(venger);

        TakeAway(venger, minElementsColl);
        Upend(venger);
        FindMinElement();

    }
    else {
        massCollZero =  FindZero(venger);
        Upend(venger);
        massRowZero =  FindZero(venger);
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
    let save = [];
    //  Upend(venger);
    save = venger;
   // console.log(venger);
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
let zx = [];
    console.log(mass2);
    let k = 0;
    let maxRow = Math.max.apply(null,mass);
    for (let i = 0; i < mass.length; i++){
        if (mass[i] === maxRow){
            zx.push(1);
            venger.splice(i - k, 1);
            k++;
        }else {
            zx.push(0)
        }
    }
  //  console.log(mass);
    console.log(zx);
    Upend(venger);
  //  console.log(venger);
    let maxColl = Math.max.apply(null,mass2);
    k = 0;

    for (let i = 0; i < mass2.length; i++){
        if (mass2[i] === maxColl){
            venger.splice(i - k, 1);
            k++;
        }
    }


//console.log(mass2);
let max = [];
    venger.map((num)=>{
        max.push(Math.min.apply(null, num));
    });
    Upend(venger);
    venger.map((num)=>{
        max.push(Math.min.apply(null, num));
    });
    let min = (Math.min.apply(null, max));


    //console.log(min);
    //console.log(venger);
    for (let i = 0; i < venger.length; i++){
        for (let j = 0; j < venger[i].length; j++){
          venger[i][j] -= min;
        }
    }
  //  Upend(venger);
for (let i = 0; i < save.length; i++) {
    //for (let j = 0; j < venger[0].length; j ++) {
        if (zx[i] !== 0 ) {
            venger.splice(i, 0, 0);
       // }
    }
}
    for (let i = 0; i < venger.length; i++){
        for (let j = 0; j < venger[i].length; j++){
            if (venger[i] !== 0) {
                save[i][j] = venger[i][j];
            }
        }
    }
    console.log(save);
      Upend(save);

let end = [];
    for (let i = 0; i < save.length; i++){
        for (let j = 0; j < save[i].length; j++){
            if (save[i][j] === 0 ){
                end.push(j);
                j = save[i].length;
            }
        }
    }
    console.log(save);
    console.log(end);
    if (end.length === save.length){
        Sum(end, SaveMass);
    }
}


/**
 * @return {number}
 */
function Sum(mass, save){
    let sum = 0;
 // console.log(save);
    for (let i = 0; i < save.length; i++) {
        for (let j = 0; j < save[i].length; j++){
            if (j === mass[i]){
                console.log(save[i][j]);
                sum += save[i][j];
            }
        }
    }
   console.log(sum);
    console.log(save);
    return sum;
}




