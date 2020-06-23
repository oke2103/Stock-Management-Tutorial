import React,{ Component }  from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing.unit*3,
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

const customers = [{
  'id'        : 1,
  'name'      : '권정환',
  'birthday'  : '930429',
  'gender'    : '남자',
  'job'       : '대학생'
}]

class App extends Component {
  render() {
    debugger;
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>직업</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            { customers.map(c => { return ( <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
