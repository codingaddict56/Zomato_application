import React,{Component} from 'react';
import axios from 'axios';
import OrderView from './orderDisplay';

const url ="http://localhost:8900/orders";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <OrderView orderdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await  axios.get(`${url}`)
        this.setState({booking:response.data})
    }

}

export default Booking;