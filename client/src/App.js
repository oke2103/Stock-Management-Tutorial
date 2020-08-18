import React,{ Component }  from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog } from '@material-ui/core';


class App extends Component {

  state = {
    customers : "",
    table : "testPage"
  }

  handleClickOpen = () => {
    this.setState({
      open : true
    });
  }

  handleClickClose = () => {
    this.setState({
      open : false
    })
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
    debugger;
    const body = await response.json();
    return body;
  }

  render(){
    const { classes } = this.props;
    console.log( {classes} );
    return (
      <div>
            <Button onClick={this.handleClickOpen} color = "primary">
              Hello World
            </Button>
            <Paper>
              <Table>
              {/* <Table className = { classes.table }> */}
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
                  <TableCell>Test</TableCell>
                </TableBody>
              </Table>
           </Paper>
            <Dialog open={this.state.open} onClose={this.handleClickClose}>
              <Button onClick={this.handleClickClose}>테스트</Button>
            </Dialog>
      </div>
    )
  }
}

export default App;