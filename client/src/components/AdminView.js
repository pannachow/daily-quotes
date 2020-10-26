import React from "react";
import { SketchPicker } from "react-color";
import "./AdminView.css";
import { Link } from "react-router-dom";

class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.colorRef = React.createRef();
        this.backgroundColorRef = React.createRef();
    }

    async addQuote() {
        await this.props.addQuote({
            text: this.textRef.current.value,
            backgroundColor: this.backgroundColorRef.current.state.hex,
            color: this.colorRef.current.state.hex,
        });
    }

    async deleteQuote(quote) {
        await this.props.deleteQuote(quote);
    }

    render() {
        return (
            <div className="AdminView">
                <Link to="/" className="user-link">user</Link>

                <h1>Daily Quotes</h1>

                {this.props.quotes.map(quote => (
                    <div key={quote.id} className="horizontal-1">
                        <p style={{ color: quote.color, backgroundColor: quote.backgroundColor }}>
                            {quote.text}
                        </p>
                        <button className="center" onClick={() => this.deleteQuote(quote)}>Delete</button>
                    </div>
                ))}
                
                <h1>Add New Quote</h1>

                <div className="horizontal-2">
                    <label>
                        Type Your Quotes Here
                        <textarea ref={this.textRef} />
                    </label>
                    <label>
                        Background Color
                        <SketchPicker ref={this.backgroundColorRef} />
                    </label>
                    <label>
                        Quotes Color
                        <SketchPicker ref={this.colorRef} />
                    </label>
                    <button onClick={() => this.addQuote()}>Add</button>
                </div>
            </div>
        );
    }
}

export default AdminView;
