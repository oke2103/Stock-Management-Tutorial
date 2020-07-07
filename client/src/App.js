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

class App extends Component {

  state = {
    customers : ""
  }

  // 컴포넌트가 마운트 된 직후
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err))
  }

  // async await : 비동기 구현
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
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
            { this.state.customers ? this.state.customers.map(c => {
               return ( <Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); 
            }) : ""}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
