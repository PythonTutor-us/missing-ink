import React, {Component} from 'react';
import FileExpansionPanel from '../FileExpansionPanel/FileExpansionPanel'
import CustomTextField from '../CustomTextField/CustomTextField'

class Writer extends Component {
    state = {
        data: null,
        selectFileIndex: null,
    };

    componentDidMount = () => {
        const d = [
            {date: '20181101', count: 159, content: "asdfafasdfasfdasdf"},
            {date: '20181102', count: 123, content: "cvxbxcbxcvbxcvbxcvbxcvb"},
            {date: '20181103', count: 356, content: "asdfasdfafdadfasdfv"},
            {date: '20181104', count: 345, content: "rewtwertwertwetrwert"},
            {date: '20181105', count: 0, content: ""},
        ];
        this.setState({
            data: d,
            selectFileIndex: d.length - 1
        })
    };

    fileSelectHandler = (id) => {
        this.setState({selectFileIndex: id})
    };

    saveBtnHandler = () => {
    };

    contentOnChange = (event) => {
        console.log(event.target.value);
        const tempData = {...this.state};
        tempData.data[this.state.selectFileIndex].content = event.target.value;

        this.setState({
            ...tempData
        })
    };

    render() {
        return (
            <div>
                {this.state.data === null ? (
                    <p>Loading</p>
                ) : (
                    <div>
                        <FileExpansionPanel data={this.state.data} selected={this.fileSelectHandler}/>
                        <CustomTextField
                            date={this.state.data[this.state.selectFileIndex].date}
                            content={this.state.data[this.state.selectFileIndex].content}
                            buttonOnClick={this.saveBtnHandler}
                            handleOnChange={this.contentOnChange}/>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Writer;