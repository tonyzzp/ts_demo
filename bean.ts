export class Human {
    public walk() {
        console.log("human.walk")
    }
}

export class SuperMan extends Human {

    public fly() {
        console.log("superman.fly")
    }

    public isSuper(): boolean {
        return true
    }
}