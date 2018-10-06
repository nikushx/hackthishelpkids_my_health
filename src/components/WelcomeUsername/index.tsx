import * as React from 'react';

const welcomeStyles: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '30px'
}

type Props = {
    username: string;
}
class WelcomeUsername extends React.Component<Props>{
    render() {
        return(
            <p style={welcomeStyles}>Welcome {this.props.username}.</p>
        )
    }
}
export default WelcomeUsername;