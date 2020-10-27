import React from "react";
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";
import "./AdminView.css";

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

                <div className="grid">
                    <h1 className="grid-item-4" >Daily Quotes</h1>

                    {this.props.quotes.map(quote => (
                        <>
                            <div key={quote.id} className="grid-item-3" style={{ backgroundColor: quote.backgroundColor, padding: "10px" }}>
                                <p style={{ color: quote.color }} >
                                    {quote.text}
                                </p>
                            </div>
                            <div className="grid-item-1">
                                <button className="center" onClick={() => this.deleteQuote(quote)}>Delete</button>
                            </div>
                        </>
                    ))}

                    <br />
                    <br />
                    <br />

                    <h1 className="grid-item-4">Add New Quote</h1>

                    <label className="grid-item-1">
                        Type Your Quotes Here
                            <textarea ref={this.textRef} />
                    </label>
                    <label className="grid-item-1">
                        Background Color
                            <SketchPicker className="center" ref={this.backgroundColorRef} />
                    </label>
                    <label className="grid-item-1">
                        Quotes Color
                            <SketchPicker className="center" ref={this.colorRef} />
                    </label>
                    <button className="grid-item-1 center" onClick={() => this.addQuote()}>Add</button>
                </div>
            </div>
        );
    }
}

export default AdminView;
