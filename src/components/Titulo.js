import { Component } from "react"

class Titulo extends Component {
    render() {
        return(
            <h1 style={styles.titulo}>
                Tienda
            </h1>
        )
    }
}

const styles = {
    titulo: {
        marginBottom: '30px'
    }
}

export default Titulo