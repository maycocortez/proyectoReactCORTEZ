const productos = [ 
    { id: "01", name: "Linkin Park" , descripcion: "Hybrid Theory",precio: 10, img: "/img/linkinpark.jpg", category: "rock",stock: 5},
    { id: "02", name: "Metallica" , descripcion: "Hardwired",precio: 20, img: "/img/metallica.jpeg", category: "rock",stock: 10},
    { id: "03", name: "Dua Lipa" , descripcion: "Future Nostalgia",precio: 30, img: "/img/dualipa.jpg",category: "pop",stock: 15},
    { id: "04", name: "Billie Eilish" , descripcion: "Happier Than Ever",precio: 40, img: "/img/billieeilish.jpg",category: "pop",stock: 20},
    { id: "05", name: "Wos" , descripcion: "Oscuro Extasis",precio: 50, img: "/img/wos.jpg",category: "rap",stock: 25},
    { id: "06", name: "Eminem" , descripcion: "The Marshall Matters LP 2",precio: 50, img: "/img/eminem.jpg",category: "rap",stock: 30},

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

      export const getItem = new Promise ((resolve) => {
        setTimeout(()=>{
         resolve(productos)
        },2000)
      })

