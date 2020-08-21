import React from "react";
import { SketchPicker } from "react-color";
import "./AdminView.css";

class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.colorRef = React.createRef();
    }

    addQuote() {
        this.props.addQuote({
            text: this.textRef.current.value,
            backgroundColor: this.colorRef.current.color,
        });
    }

    deleteQuote(quote) {
        this.props.deleteQuote(quote);
    }

    render() {
        return (
            <div className="AdminView">
                <h1>Daily Quotes</h1>

                {this.props.quotes.map(quote => (
                    <div className="horizontal-1">
                        <p>{quote.text}</p>
                        <button onClick={() => this.deleteQuote(quote)}>Delete</button>
                    </div>
                ))}

                <br />

                <div className="horizontal-2">
                    <textarea ref={this.textRef} />
                    <SketchPicker ref={this.colorRef} />
                    <button onClick={() => this.addQuote()}>Add</button>
                </div>
            </div>
        );
    }
}

export default AdminView;
