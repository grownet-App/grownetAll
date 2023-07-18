import NavigationMobile from "../components/NavigationMobile";
export default function ProvidersPage() {
    return (
        <>
            <div>
                <h1>
                    Pedidos page
                </h1>
            </div>
          
                <div className="hola"> 
                <div className="card-categories"> <img src="https://img.freepik.com/fotos-premium/brocoli-aislado-trazado-recorte-fondo-blanco_26628-295.jpg"></img> </div>
                <div className="card-invoices">
                    <h3>Factura</h3> </div>
                </div>
                <button className="bttn-categ">
                    <div className="text-categ">
                        <h1>Restaurant</h1>
                        <p>Address restaurant</p> 
                    </div>
                    <img src="http://placekitten.com/200/200" alt="logo-restaurant" className="img-categ"></img>
                </button>
                <div className="card-chat"> <p className="p-chat">hola soy Grownet como estas me gustaria atenderte</p> </div>
                <div className="card-chat-user"> <p className="p-chat">hola necesito ayuda</p> </div>
                
                <button className="bttn btn-primary">Restaurants</button>
                <button className="bttn btn-secundary">Suppliers</button>
                <button className="bttn btn-outline">Outline</button>
                <button className="bttn btn-success">Success</button>
                <button className="bttn btn-danger">Danger</button>
            <NavigationMobile />
        </>
    )
}