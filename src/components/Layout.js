import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: 'white',
        alignItems: 'center',
        color: '#0A283E',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        width: '1200px',
        
    }
}

class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}

                </div>
            </div>
        )
    }
}

export default Layout