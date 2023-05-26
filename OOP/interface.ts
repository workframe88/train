interface Approvable {
	Approve(approverName: string): void
}

function confirm(doc: Approvable){
	doc.Approve('Chris')
}

interface Printtable {
	Print() : void
}

class Receipt1 implements Approvable, Printtable {
	Approve(approverName: string): void{
		console.log('Receipt approved')
	}
    Print(){
        console.log('Receipt approved')
    }
}

class Invice implements Approvable{
	Approve(approverName: string): void{
		console.log('Receipt approved')
	}
}

confirm(new Receipt1())
confirm(new Invice())