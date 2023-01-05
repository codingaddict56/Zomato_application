import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay'




const lurl="http://localhost:8900/restaurant?mealtype=";

class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            restListing:''
        }
    }

    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                   
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay restdata={this.state.restListing}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var mealId=this.props.match.params.id;
        sessionStorage.setItem('type',mealId);
        axios.get(`${lurl}${mealId}`)
        .then((response) => {this.setState({restListing:response.data})})
    }
}

export default Listing;