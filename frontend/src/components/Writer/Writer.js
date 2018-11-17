import React, {Component} from 'react';
import FileExpansionPanel from '../FileExpansionPanel/FileExpansionPanel'
import CustomTextField from '../CustomTextField/CustomTextField'

class Writer extends Component {
    state = {
        data: [
            {date: '20181101', count: 159, content: "asdfafasdfasfdasdf"},
            {date: '20181102', count: 123, content: "cvxbxcbxcvbxcvbxcvbxcvb"},
            {date: '20181103', count: 356, content: "asdfasdfafdadfasdfv"},
            {date: '20181104', count: 345, content: "rewtwertwertwetrwert"},
            {date: '20181105', count: 0, content: ""},
        ],
        selectFileIndex: this.state.data.length - 1,
        content: ""
    };

    fileSelectHandler = (id) => {
        this.setState({ selectFileIndex: id})
    };

    saveBtnHandler = (text) => {
        console.log('[Writer.js] text', text);
        const tempData = [...this.state.data];
        tempData[this.state.selectFileIndex].content = text;

        this.setState({
            data: tempData
        })
    };

    render() {

        return (
            <div>
                <FileExpansionPanel data={this.state.data} selected={this.fileSelectHandler}/>
                <CustomTextField
                    date={this.state.data[this.state.selectFileIndex].date}
                    content={this.state.data[this.state.selectFileIndex].content}
                    buttonOnClick={this.saveBtnHandler}/>
            </div>
        )
    }
}

export default Writer;