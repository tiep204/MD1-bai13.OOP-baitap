class Temperature {
    doC;

    constructor(doC) {
        this.doC = doC;
    }
    setDoC(doC){
        this.doC=doC;
    }
    getDoC(){
        return this.doC
    }
    getDof(){
        return 1.8*this.doC + 32
    }
    getKenvin(){
        return this.doC + 273
    }

}
