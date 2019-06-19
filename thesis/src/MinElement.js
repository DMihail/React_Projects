module.exports = class Min {
    constructor(){
                this.a = null;
                this.b = null;
                this.c = null;
                this.index_X = undefined;
                this.index_Y = undefined;
                this.save = [];
                this.v = [];
                this.u = [];
                    this.d = null;
    }
    getting(a,b,c,d){
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
    }
     CloseOrOpen() {
        let sumA = 0;
        let sumB = 0;
        this.a.map((num)=>{
            sumA += num;
        });
        this.b.map((num)=>{
            sumB += num;
        });
        console.log(sumA === sumB);
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
    MinElement(massC, massA, massB){
        let min = 999;
        for(let i = 0; i < massA.length; i++){
            for (let j = 0; j < massB.length; j++){
                if (massC[i][j] !==0 &&massC[i][j] < min && massC[i][j] !== -1) {
                    min = massC[i][j];
                    this.index_X = i;
                    this.index_Y = j;
                }
            }
        }
        //console.log(index_X, index_Y);
    }

     Dell() {
        let len = Math.min(this.a.length, this.b.length);
        if (this.a[this.index_X] < this.b[this.index_Y]) {
            this.save[this.index_X][this.index_Y] = Math.min(this.a[this.index_X], this.b[this.index_Y]);
            this.b[this.index_Y] =  this.b[this.index_Y] - this.a[this.index_X];
            this.a[this.index_X] = 0;
            for (let i = 0; i < len.length; i++){
                if (this.c[this.index_X][i] !== -1) {
                    this.c[this.index_X][i] = 0;
                }
            }
            this.c[this.index_X][this.index_Y] = -1;

        }else {
            this.save[this.index_X][this.index_Y] = Math.min(this.a[this.index_X], this.b[this.index_Y]);
            this.a[this.index_X] = this.a[this.index_X] - this.b[this.index_Y];
            this.b[this.index_Y] = 0;
            for (let i = 0; i < len.length; i++){
                if (this.c[i][this.index_Y] !== -1) {
                    this.c[i][this.index_Y] = 0;
                }
            }
            this.c[this.index_X][this.index_Y] = -1;

        }
        // console.log(a);
        // console.log(b);
        // console.log(c);
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
                this.save[i].push(0)
            }
        }
        // console.log(save);
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
        this.u[0] = 0;
        for (let i = 0; i < this.d.length; i++) {
            for (let j = 0; j < this.d[i].length; j++) {
                if ((this.save[i][j] !== 0) && (this.v[j] === 100) && (this.u[i] !== 100)) {
                    this.v[j] = this.d[i][j] - this.u[i];
                }
                if ((this.save[i][j] !== 0) && (this.v[j] !== 100) && (this.u[i] === 100)) {
                    this.u[i] = this.d[i][j] - this.v[j];
                }
            }
        }
        for (let i = 0; i < this.d.length; i++) {
            for (let j = 0; j < this.d[i].length; j++) {
                if ((this.u[i] === 100) && (this.v[j] !== 100) && (this.save[i][j] !== 0))
                    this.u[i] = this.d[i][j] - this.v[j];
                if ((this.u[i] !== 100) && (this.v[j] === 100) && (this.save[i][j] !== 0))
                    this.v[j] = this.d[i][j] - this.u[i];
            }
        }

        console.log(this.v);
        console.log(this.u);
        let poz = [];
        let pot = 0;

        for (let i = 0; i < this.a.length; i++) {
            poz.push([]);
            for (let j = 0; j < this.b.length; j++) {
                if (this.save[i][j] === 0) {
                    pot = this.d[i][j] - (this.u[i] + this.v[j]);
                    poz[i].push(pot)
                } else {
                    poz[i].push(0)
                }
            }
        }

        console.log(poz);
        let min = 0;

        for (let i = 0; i < poz.length; i++) {
            for (let j = 0; j < poz[i].length; j++) {
                min = Math.min(poz[i][j], min);
                if (min === poz[i][j]) {
                    this.index_X = i;
                    this.index_Y = j;
                }
            }
        }
        console.log(min);
        console.log(this.index_X, this.index_Y);

        if (min >= 0) {
            this.END(this.c);
        } else {
            let refresh = [];
            refresh.push(this.save[this.index_X][this.index_Y]);
            for (let i = this.index_X; i < poz.length; i++) {
                for (let j = this.index_Y; j < poz[i].length; j++) {
                    if (poz[i][j] === 0 && refresh.length < 4) {
                        refresh.push(this.save[i][j]);
                        i++;
                        j = poz[i].length;;
                    }
                }
            }
            min = 1000;
            for (let i = 0; i < refresh.length; i++) {
                if (refresh[i] !== 0) {
                    min = Math.min(refresh[i], min);
                }
            }
            console.log(min);
            let q = 0;
            for (let i = this.index_X; i < poz.length; i++) {
                for (let j = this.index_Y; j < poz[i].length; j++) {
                    if (q === 0 || q === 3) {
                        this.save[i][j] = this.save[i][j] + min
                    }else {
                        this.save[i][j] = this.save[i][j] - min
                    }

                    //      j = poz[i].length;;
                    q++;
                }

            }

            console.log(this.save);

            this.Potential();
        }
    }
      Over(){
        return {mass: this.save, zfunc:this.END(this.c) }
        }
};

// const a = [10, 20, 30],
//     b = [15,20, 25],
//     c = [[5,3,1],[3,2,4],[4,1,2]],
//     d = [[5,3,1],[3,2,4],[4,1,2]];
// let el = new Min();
// el.getting(a,b,c,d)
//  el.CloseOrOpen()

//export default Min;
