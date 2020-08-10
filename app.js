class Product{
    constructor(name,price,year){
        this.name = name
        this. price = price
        this.year = year
    }
    
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto:</strong> ${product.name}
                    <strong>Precio:</strong> ${product.price}
                    <strong>Año:</strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `
        productList.appendChild(element)
        //this.resetForm()
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Producto eliminado satisfactoriamente', 'info')
        }
    }

    showMessage(message,cssClass){
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(message))
        //Mostrar en el DOM
        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(div, app)
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 3000)
    }
}
//DOM events

document.getElementById('product-form').addEventListener('submit',function(e){
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value
    const product = new Product(name,price,year)
    const ui = new UI()

    if(name === '' || price === '' || year ===''){
        return ui.showMessage('Complete los campos por favor', 'danger')
    }
    ui.addProduct(product)
    ui.resetForm()
    ui.showMessage('Producto agregado satisfactoriamente','success')

    //console.log(name,price,year)
    //console.log(new Product(name,price,year))
    //Evento para que no refresque el sitio web, recibir el evento del objeto
    e.preventDefault()
})

document.getElementById('product-list').addEventListener('click',function(e){
    //console.log(e.target)
    const ui = new UI()
    ui.deleteProduct(e.target)
})