import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Create';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const simpleTable = (props) => {
    const {classes} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell numeric>Total word Count</TableCell>
                        <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell numeric>{row.count}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => props.selected(index)}>
                                        <EditIcon color="primary"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default withStyles(styles)(simpleTable);