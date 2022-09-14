class hinhChuNhat1 {
    width;
    height;
    cv;
    dt;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        // this.cv = cv;
        // this.dt = dt;
    }
    setWidth(width){
        this.width=width;
    }
    getWidth(){
        return this.width
    }
    setHeight(height){
        this.height = height;
    }
    getHeight(){
        return this.height;
    }
    getCv(){
        return (this.width + this.height) *2
    }
    getDt(){
        return (this.width * this.height)
    }
}