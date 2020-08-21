import React from "react";
import "./UserView.css";

class UserView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const quote = this.props.quotes[0];
        return (
            <div className="UserView" style={{ backgroundColor: quote.backgroundColor }}>
                <h1>{quote.text}</h1>
            </div>
        );
    }
}

export default UserView;
