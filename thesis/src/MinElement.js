//module.exports = class Min {
 class Min {
    constructor(){
                this.a = null;
                this.b = null;
                this.c = null;
                this.index_X = undefined;
                this.index_Y = undefined;
                this.save = [];
                this.v = [];
                this.u = [];
                this.d = null,
                    this.oldX = null,
                    this.oldY = null
    }
    getting(a,b,c,d){
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
    }
     CloseOrOpen() {
        let add = [];
        let sumA = 0;
        let sumB = 0;
        this.a.map((num)=>{
            sumA += num;
        });
        this.b.map((num)=>{
            sumB += num;
        });
        console.log(sumA === sumB);
     if (sumA !== sumB) {
             if (sumA > sumB){
                 console.log(2)
                 this.b.push(sumB - sumA);
                 for (let i = 0; i < this.a.length; i++) {
                     add.push(0)
                 }
                 this.c = this.Upend(this.c);
                 this.c.push(add);
                 this.c = this.Upend(this.c);
                 this.d = this.Upend(this.d);
                 this.d.push(add);
                 this.d = this.Upend(this.d);
                 console.log(this.c, this.d);
                 //  this.CloseOrOpen();
             }
             else {
                 console.log(1)
                 this.a.push(sumB - sumA);
                 for (let i = 0; i < this.b.length; i++) {
                     add.push(0)
                 }
                 this.c.push(add);
                 this.d.push(add);
                 console.log(this.c, this.d);
                 this.CloseOrOpen();
             }
         }
        if (sumA === sumB){
            this.a.map(()=>{
                this.u.push(100);
            });
            this.b.map(()=>{
                this.v.push(100);
            });
                this.clone(this.c);
            for (;this.Sum(this.a) > 0;) {
                this.MinElement(this.c,this.a,this.b);
               this.Dell();
        }
            this.Potential();
        }

    }
    Upend(mass){
        let m = mass.length, n = mass[0].length, AT = [];
        for (let i = 0; i < n; i++)
        { AT[ i ] = [];
            for (let j = 0; j < m; j++) AT[ i ][j] = mass[j][ i ];
        }
        return AT;
    }

    MinElement(massC){
        let min = 999;
        for(let i = 0; i < this.a.length; i++){
            for (let j = 0; j < this.b.length; j++){
                if (massC[i][j] !==0 && massC[i][j] < min && massC[i][j] !== -1) {
                    min = massC[i][j];
                    this.index_X = i;
                    this.index_Y = j;
                }
            }
        }
        console.log(min);
        console.log(this.index_X, this.index_Y);
    }

     Dell() {
        let len = Math.min(this.a.length, this.b.length);

       //  console.log(this.a[this.index_X] , this.b[this.index_Y])

         if (this.oldX === this.index_X && this.oldY === this.index_Y) {
             let x, y;
             for (let i = 0; i < this.a.length; i++) {
                 if (this.a[i] !== 0) {
                     x = i;
                 }
             }
             for (let i = 0; i < this.b.length; i++) {
                 if (this.b[i] !== 0 ) {
                     y = i;
                 }
             }
             this.a[x] = 0;
             this.b[y] = 0;
             this.c[x][y] = -1;
             this.save[x][y] = 0;
         }
         else
         if (this.a[this.index_X] < this.b[this.index_Y]) {

            this.save[this.index_X][this.index_Y] = Math.min(this.a[this.index_X], this.b[this.index_Y]);
            this.b[this.index_Y] =  this.b[this.index_Y] - this.a[this.index_X];
            this.a[this.index_X] = 0;

            for (let i = 0; i < len; i++){
              //  console.log(false)
                if (this.c[this.index_X][i] !== -1) {

                    this.c[this.index_X][i] = 0;
                }
            }
            this.c[this.index_X][this.index_Y] = -1;

        }else {
            this.save[this.index_X][this.index_Y] = Math.min(this.a[this.index_X], this.b[this.index_Y]);
            this.a[this.index_X] = this.a[this.index_X] - this.b[this.index_Y];
            this.b[this.index_Y] = 0;
            // console.log(true)
            for (let i = 0; i < len; i++){
               // console.log(true)
                if (this.c[i][this.index_Y] !== -1) {

                    this.c[i][this.index_Y] = 0;
                }
            }
            this.c[this.index_X][this.index_Y] = -1;

        }
         this.oldX = this.index_X;
         this.oldY = this.index_Y;

         // console.log(this.a);
         // console.log(this.b);
         // console.log(this.c);
         //console.log(this.save);
    }

     Sum(mass) {
        let sum = 0;
        mass.map((num)=>{
            sum += num;
        });
        return sum;
    }

    clone(mass) {
        for (let i = 0; i < mass.length; i++) {
            this.save.push([]);
            for (let j = 0; j < mass[i].length; j++) {
                this.save[i].push(-1)
            }
        }
         console.log(this.save);
    }

     END(mass) {
        let zSum = 0;
        //console.log(save)
        for (let i = 0; i < this.d.length; i++){
            for (let j = 0; j < this.d[i].length; j++){
                if (mass[i][j] === -1) {
                    zSum += this.d[i][j] * this.save[i][j];
                }
            }
        }
        console.log(zSum);
        return zSum;
    }

     Potential() {
            console.log(this.save)
        this.u[0] = 0;
        for (let i = 0; i < this.a.length; i++) {
            for (let j = 0; j < this.b.length; j++) {
                if ((this.save[i][j] !== -1) && (this.v[j] === 100) && (this.u[i] !== 100)) {
                    this.v[j] = this.d[i][j] - this.u[i];
                }
                if ((this.save[i][j] !== -1) && (this.v[j] !== 100) && (this.u[i] === 100)) {
                    this.u[i] = this.d[i][j] - this.v[j];
                }
            }
        }

        for (let i = 0; i < this.a.length; i++) {
            for (let j = 0; j < this.b.length; j++) {
                if ((this.u[i] === 100) && (this.v[j] !== 100) && (this.save[i][j] !== -1))
                    this.u[i] = this.d[i][j] - this.v[j];
                if ((this.u[i] !== 100) && (this.v[j] === 100) && (this.save[i][j] !== -1))
                    this.v[j] = this.d[i][j] - this.u[i];
            }
        }
         console.log(this.u);
        console.log(this.v);

        // let poz = [];
        // let pot = 0;
        //
        // for (let i = 0; i < this.a.length; i++) {
        //     poz.push([]);
        //     for (let j = 0; j < this.b.length; j++) {
        //         if (this.save[i][j] === -1) {
        //             pot = this.d[i][j] - (this.u[i] + this.v[j]);
        //             poz[i].push(pot)
        //         } else {
        //             poz[i].push(0)
        //         }
        //     }
        // }
        //
        // console.log(poz);
        // let min = 0;
        //
        // for (let i = 0; i < this.a.length; i++) {
        //     for (let j = 0; j < this.b.length; j++) {
        //         min = Math.min(poz[i][j], min);
        //         if (min === poz[i][j]) {
        //             this.index_X = i;
        //             this.index_Y = j;
        //         }
        //     }
        // }
        // console.log(min);
        // console.log(this.index_X, this.index_Y);
        //
        // if (min >= 0) {
        //     this.END(this.c);
        // } else {
        //     let refresh = [];
        //     refresh.push(this.save[this.index_X][this.index_Y]);
        //     for (let i = this.index_X; i < this.a.length; i++) {
        //         for (let j = this.index_Y; j < this.b.length; j++) {
        //             if (poz[i][j] === 0 && refresh.length < 4) {
        //                 refresh.push(this.save[i][j]);
        //                 i++;
        //                 j = this.b.length;
        //             }
        //         }
        //     }
        //     min = 1000;
        //     for (let i = 0; i < refresh.length; i++) {
        //         if (refresh[i] !== 0) {
        //             min = Math.min(refresh[i], min);
        //         }
        //     }
        //     console.log(min);
        //     let q = 0;
        //     for (let i = this.index_X; i < poz.length; i++) {
        //         for (let j = this.index_Y; j < poz[i].length; j++) {
        //             if (q === 0 || q === 3) {
        //                 this.save[i][j] = this.save[i][j] + min
        //             }else {
        //                 this.save[i][j] = this.save[i][j] - min
        //             }
        //
        //             //      j = poz[i].length;;
        //             q++;
        //         }
        //
        //     }
        //
        //     console.log(this.save);
        //
        //     this.Potential();
        // }
    }
      Over(){
        return {mass: this.save, zfunc:this.END(this.c) }
        }
};
// const a = [23, 25, 17],
//     b = [14,10, 16, 10, 15],
//     c = [[4,9,2, 5, 3],[4,6,2,1,8],[6,2,3,4,5]],
//     d = [[4,9,2, 5, 3],[4,6,2,1,8],[6,2,3,4,5]];
// const a = [10, 20, 30],
//     b = [15,20, 25],/*true*/
//     c = [[5,3,1],[3,2,4],[4,1,2]],
//     d = [[5,3,1],[3,2,4],[4,1,2]];
// const a = [35, 30],
//     b = [15,20, 30],/*true*/
//     c = [[3,8,2],[7,4,8]],
//     d = [[3,8,2],[7,4,8]];

const a = [6, 8, 10],
    b = [4,6, 8, 8],
    c = [[1,2,4,3],[4,3,8,5],[2,7,6,3]],
    d = [[1,2,4,3],[4,3,8,5],[2,7,6,3]];
let el = new Min();
el.getting(a,b,c,d);
 el.CloseOrOpen();

//export default Min;
