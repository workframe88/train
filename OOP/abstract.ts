abstract class AbstractDocument {
	public View(){
		console.log('Document Viewed')
	}

	abstract Print(): void
}

class Invoice extends AbstractDocument {
    Print(){
        console.log('Invoice printed')
    }
}

class Receipt extends AbstractDocument {
    Print(){
        console.log('Receipt printed')
    }
}

const myDocument = new Invoice();
myDocument.View()

function myFunc(doc: AbstractDocument) {
    doc.View()
    doc.Print()
}

myFunc(myDocument)
myFunc(new Receipt)