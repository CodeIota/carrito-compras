import { Component } from "react";
import Producto from "./Producto";

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props
        return(
            <div style={styles.productos}>
                {productos.map(producto => 
                <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    producto={producto}
                /> )}
            </div>
        )
    }
}

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default Productos