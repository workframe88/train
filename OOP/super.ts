class MyspecialFormulaCalculator {

    protected a: number
    protected b: number
   
    constructor(a: number, b: number) {
        this.a = a
        this.b = b
    }
   
    calculate(): number{
        return this.a * this.b
    }
    
}

class FormulaAndLog extends MyspecialFormulaCalculator {
	calculate(): number {
        console.log('Calculateting this special formula')
        return super.calculate()
    }
}

const f = new FormulaAndLog(1, 2)
console.log(f.calculate())