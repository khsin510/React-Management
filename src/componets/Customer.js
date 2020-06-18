import React, {Component} from 'react'
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

export default class Customer extends Component {

    render() {
        console.log(this.props);
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.image}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.age}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

