const productos = [ 
    { id: "01", name: "producto1" , descripcion: "Descripcion del producto",precio: 10, img: "https://picsum.photos/200",stock: 5},
    { id: "02", name: "producto2" , descripcion: "Descripcion del producto",precio: 20, img: "https://picsum.photos/300",stock: 10},
    { id: "03", name: "producto3" , descripcion: "Descripcion del producto",precio: 30, img: "https://picsum.photos/400",stock: 15},
    { id: "04", name: "producto4" , descripcion: "Descripcion del producto",precio: 40, img: "https://picsum.photos/100",stock: 20},
    { id: "05", name: "producto5" , descripcion: "Descripcion del producto",precio: 50, img: "https://picsum.photos/150",stock: 25},
    ]

    
    export const data = new Promise ((resolve,reject) => {
        let condition = true
        setTimeout(()=>{
          if (condition) {
            resolve(productos)
          } else {
            reject("hubo un error")
          }
        },2000)
      })