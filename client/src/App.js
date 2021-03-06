import React, { Component } from 'react';
import Customer from './components/Customter';
import CustomerAdd from './components/CustomerAdd'; 
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


/* 
1) constructor()

2) componentWillMount()

3) render()

4) componentDidMount()


props or state => shouldComponentUpdate()

*/






const styles =theme => (
  {
    root : {
      width: '100%',
      marginTop: theme.spacing(0.33),
      overflowX: "auto"
    },
    table:{
      minWidth: 1080
    },
    progress: {
      morgin: theme.spacing(0.5)
    }
  }
)


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed : 0
    }
  } 

  stateRefresh = () =>{
    this.setState({
      customers: '',
      completed : 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20); // 0.02 초마다 progress 수행

    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress =() => {
    const {completed} = this.state;
    this.setState({completed: completed >100 ? 0: completed +1});
  }

  render(){
    const { classes } =this.props;
    return(
      <div>
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>설정</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>         
            {this.state.customers ? this.state.customers.map( c => { 
              return(<Customer stateRefresh={this.stateRefresh}key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender}/> ); 
            }) : 
            <TableRow>
              <TableCell colSpan = "5" align= "center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>              
            </TableRow>
            }
        </TableBody>
      </Table> 
      </Paper>
      <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }    
}

export default withStyles(styles)(App);
