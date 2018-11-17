import React, {Component} from 'react';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import FileTable from '../Table/FileTable';

class FileExpansionPanel extends Component {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h3>All files</h3>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FileTable data={this.props.data} selected={this.props.selected}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default FileExpansionPanel;