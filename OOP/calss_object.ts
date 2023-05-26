class Greeting{
    name = 'Tis is just a placeholder'

    constructor(initialName:string){
        this.name = initialName
    }

    greetingmessage(): void {
        console.log(`Hello, ${this.name}`)
    }

    changNameToCelebrity(to : string){
        this.name = to
    }
}

class Main{
    public run(){
        const g1 = new Greeting("Kowit")
        g1.greetingmessage()
        g1.changNameToCelebrity('Frame')
        g1.greetingmessage()

        const g2 = new Greeting("Frame")
        g2.changNameToCelebrity('KMUTNB')
        g2.greetingmessage()

        g1.greetingmessage()
        
    }
}

new Main().run()