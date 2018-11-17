import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

class CustomTextField extends Component{
    state = {
        content: ""
    };

    handleOnChange = (event) => {
        this.setState({
            content: event.target.value
        })
    };

    render() {
        return (
            <div style={{margin: "10px"}}>
                <h2 style={{float: "left"}}>{this.props.date}</h2>
                <TextField
                    value={this.props.content}
                    placeholder="Let's start writing!"
                    multiline={true}
                    rows={15}
                    rowsMax={20}
                    fullWidth={true}
                    onChange={this.handleOnChange}
                />
                <Button
                    variant="contained"
                    color="default"
                    style={{float: "right", marginTop: "10px"}}
                    onClick={() => this.props.buttonOnClick(this.state.content)}>
                    Save
                </Button>
            </div>
        );
    }
}

export default CustomTextField;
