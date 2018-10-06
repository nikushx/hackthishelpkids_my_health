import * as React from 'react';

type Props = {
    username: string;
}
class WelcomeUsername extends React.Component<Props>{
    render() {
        return(
            <p>Welcome {this.props.username}</p>
        )
    }
}
export default WelcomeUsername;