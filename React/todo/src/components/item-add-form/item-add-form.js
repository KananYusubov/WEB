import React, {Component} from "react";
import "./item-add-form.css";

class ItemAddForm extends Component {
    state = {
        text: "",
    };

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    resetInput = (e) => {
        this.setState({
            text: "",
        });
    };

    render() {
        const {text} = this.state;
        const {onAdded} = this.props;

        return (
            <form
                className={" form-inline mt-2"}
                onSubmit={(i) => {
                    i.preventDefault();
                    if (text.length <= 0) return;
                    onAdded(text);
                    this.resetInput();
                }}
            >
                <input
                    id={"addInput"}
                    name={"text"}
                    className={"form-control w-75"}
                    placeholder={"Type here..."}
                    type="text"
                    value={text}
                    onChange={this.changeInput}
                />

                <button className="btn  btn-outline-primary ml-2" type="submit">
                    Add item
                </button>
            </form>
        );
    }
}

export default ItemAddForm;
