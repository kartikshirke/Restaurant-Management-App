import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class BurgerDeal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.burgerList= [];
  }

  componentDidMount() {    
    const apiUrl= 'https://my-json-server.typicode.com/kartikshirke/Restaurant-Management-App/Burgers';
    axios
    .get(apiUrl)
    .then(response => {        
        this.setState({
          burgerList: response.data
        })
    })
}
render() {
  const getDeal=()=>{
    return  _.get(this.state.burgerList,['0','name'])
  }
  return (
    <div>
      <ul>
        Today's Burger of the day: <span className="blink">
        {getDeal()}
        </span>
      </ul>
    </div>
  );
  }
 
}

export default BurgerDeal;