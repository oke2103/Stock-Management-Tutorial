import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// React에 컴포넌트 라이브러리에는 render라는 함수가 포함되어 있다.
class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.ticker}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}
export default Customer;