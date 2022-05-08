import { Component } from "react";

class BubbleAlert extends Component {

    getNumber(n) {
        if(!n) return ''
        return n > 9 ? '9+': n
    }

    render() {
        const {value} = this.props
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: 'white',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '15px'
    }
}

export default BubbleAlert