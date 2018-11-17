import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";

class Writer extends Component {
    state = {
        content: ""
    };

    render() {
        return (
            <TextField
                placeholder="Type here"
                multiline={true}
                rows={20}
                rowsMax={20}
                fullWidth={true}
            />
        )
    }
}

export default Writer;