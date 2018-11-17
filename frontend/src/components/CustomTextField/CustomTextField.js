import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

const customTextField = (props) => {
    return (
        <div style={{margin: "10px"}}>
            <h2 style={{float: "left"}}>{props.date}</h2>
            <TextField
                value={props.content}
                placeholder="Let's start writing!"
                multiline={true}
                rows={15}
                rowsMax={20}
                fullWidth={true}
                onChange={props.handleOnChange}
            />
            <Button
                variant="contained"
                color="default"
                style={{float: "right", marginTop: "10px"}}
                onClick={() => props.buttonOnClick()}>
                Save
            </Button>
        </div>
    );
}

export default customTextField;
