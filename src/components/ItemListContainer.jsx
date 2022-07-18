const ItemListContainer = (greetings) => {
    return (
        <div className="itemList" style={{marginTop: 30}}>
<h1>Hola {greetings.nombre}!</h1>
<h2>Bienvenido a mi primera app</h2>
<h3>Este es el desafio de la clase 4</h3>
</div>
    )
}

export default ItemListContainer