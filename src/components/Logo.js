import { Component } from "react";

class Logo extends Component {
    render() {
        return(
            <div style={styles.logo}>Shop</div>
        )
    }
}

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem'
    }
}

export default Logo