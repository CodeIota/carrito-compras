import { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button {...this.props} style={styles.button}/>
                
        )
    }
}

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

export default Button