
let index_X = undefined;
let index_Y = undefined;
// let a = [100, 150, 120],
//     b = [130,80, 100, 60],
//     c = [[3,2,5,4],[5,6,2,1],[7,9,10,12]],
//     d = [[3,2,5,4],[5,6,2,1],[7,9,10,12]];
let a = [10, 20, 30],
    b = [15,20, 25],
    c = [[5,3,1],[3,2,4],[4,1,2]],
    d = [[5,3,1],[3,2,4],[4,1,2]],
    save = [],
    v = [],
    u = [];

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
    if (sumA === sumB){
        clone(c);
        for (;Sum(a) > 0;) {
            MinElement(c,a,b);
        }
        END(c);
        Potential();
    }

}

function MinElement(massC, massA, massB){
    let min = 999;
for(let i = 0; i < massA.length; i++){
    for (let j = 0; j < massB.length; j++){
        if (massC[i][j] !==0 &&massC[i][j] < min && massC[i][j] !== -1) {
            min = massC[i][j];
            index_X = i;
            index_Y = j;
        }
    }
}
    //console.log(index_X, index_Y);
    Dell();
}

function Dell() {
   let len = Math.min(a.length, b.length);
    if (a[index_X] < b[index_Y]) {
        save[index_X][index_Y] = Math.min(a[index_X], b[index_Y]);
        b[index_Y] =  b[index_Y] - a[index_X];
        a[index_X] = 0;
        for (let i = 0; i < len.length; i++){
            if (c[index_X][i] !== -1) {
                c[index_X][i] = 0;
            }
        }
        c[index_X][index_Y] = -1;

    }else {
        save[index_X][index_Y] = Math.min(a[index_X], b[index_Y]);
        a[index_X] = a[index_X] - b[index_Y];
        b[index_Y] = 0;
        for (let i = 0; i < len.length; i++){
            if (c[i][index_Y] !== -1) {
                c[i][index_Y] = 0;
            }
        }
        c[index_X][index_Y] = -1;

    }
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

/**
 * @return {number}
 */
function Sum(mass) {
    let sum = 0;
    mass.map((num)=>{
        sum += num;
    });
    return sum;
}
function clone(mass) {
    for (let i = 0; i < mass.length; i++) {
        save.push([]);
        // v.push(0);
        // u.push(0);
        for (let j = 0; j < mass[i].length; j++) {
            save[i].push(0)

        }
    }
   // console.log(save);
}
/**
 * @return {number}
 */
function END(mass) {
    let zSum = 0;
    //console.log(save)
    for (let i = 0; i < d.length; i++){
        for (let j = 0; j < d[i].length; j++){
            if (mass[i][j] === -1) {
               zSum += d[i][j] * save[i][j];
            }
        }
    }
    //console.log(zSum);
    return zSum;
}

function Potential() {


   v = [100,100,100];
     u = [100,100,100];
    u[0]=0;
    for(let i=0;i<d.length;i++)
    {
        for( let j=0;j<d[i].length;j++)
        {
            if((save[i][j]!== 0)&&(v[j]===100)&&(u[i]!==100))
            {
                v[j]=d[i][j]-u[i];
            }
            if((save[i][j]!==0)&&(v[j]!==100)&&(u[i]===100))
            {
                u[i]=d[i][j]-v[j];
            }
        }
    }
    for(let i=0;i<d.length;i++)
    {
        for(let j=0;j<d[i].length;j++)
        {
            if((u[i]===100)&&(v[j]!==100)&&(save[i][j]!==0))
                u[i]=d[i][j]-v[j];
            if((u[i]!==100)&&(v[j]===100)&&(save[i][j]!==0))
                v[j]=d[i][j]-u[i];
        }
    }

    console.log(v);
     console.log(u)
    console.log(d)
// let poz = [];
//     for (let i =0; i < a.length; i++){
//         for (let j = 0; j < b.length; j++){
//             if (save[i][j] === 0) {
//                 poz.push(d[i][j] - (u[i] + v[j]));
//             }
//         }
//     }
//     console.log(poz)
}

CloseOrOpen(a,b);






