import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import Detalles from './Detalles'

class Carro extends Component {
    render() {
        const {carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div >
                <span style={styles.bubble}>
                    {console.log(cantidad)}
                    {cantidad !== 0 ? <BubbleAlert value={cantidad}/> : null}
                    
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ? <Detalles carro={carro} /> : null}
            </div>
        )
    }
}

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12, 
        top: 20
    }
}

export default Carro