/**
 * @return {boolean}
 */
let index_X = undefined;
let index_Y = undefined;
let a = [100, 150, 120],
    b = [130,80, 100, 60],
    c = [[3,2,5,4],[5,6,2,1],[7,9,10,12]];
function CloseOrOpen(massA, massB) {
    let sumA = 0;
    let sumB = 0;
    massA.map((num)=>{
     sumA += num;
    });

    massB.map((num)=>{
        sumB += num;
    });
    console.log(sumA === sumB);
    return sumA === sumB;

}

function MinElement(massC, massA, massB){
    let min = 999;
for(let i = 0; i < massA.length; i++){
    for (let j = 0; j < massB.length; j++){
        if (massC[i][j] !==0 &&massC[i][j] < min) {
            min = massC[i][j];
            index_X = i;
            index_Y = j;
        }
    }
}
Dell();
console.log(min)

}

function Dell() {
    c[index_X][index_Y] = 0;
    let el = Math.min(a[index_X], b[index_Y]);
    if (el === b[index_Y]) {
        for (let j = 0; j < a.length; j++ ) {
            c[index_X][j] = 0;
        }
    }
    a[index_X] = a[index_X] - b[index_Y];
    console.log(a);
}

CloseOrOpen(a,b);
MinElement(c, a, b);
MinElement(c, a, b);
MinElement(c, a, b);
MinElement(c, a, b);
MinElement(c, a, b);

