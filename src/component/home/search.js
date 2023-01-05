import React,{Component} from 'react';
import './search.css';

const lurl = "http://localhost:8900/location";
const Rurl = "http://localhost:8900/restaurant?city="

class Search extends Component{
    constructor(){
        super()

        this.state={
            title:"Find the best restaurants,cafes, bars",
            location:'',
            restaurents:''
        }
    }

    renderCity=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                       {item.city_name}-{item.name}
                    </option>
                )
            })
        }
    }

    renderRestaurents=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                       {item.name}|{item.locality}
                    </option>
                )
            })
        }
    }

    handleCity=(event)=>{
        console.log(event.target.value)
        fetch(`${Rurl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurents:data})
        })

    }

    handleRestaurent =(event) => {
        console.log(event.target.value)
        this.props.restid(Number(event.target.value))
    }
    
    render(){
        console.log(">location>>>",this.state.location)
        return(
            <div className="imageContainer">
                <div id="logo">
                    e!
                </div>
                <div className="heading">
                   {this.state.title}
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown"
                    onChange={this.handleCity}>
                      <option>------Select City-----------</option>
                      {this.renderCity(this.state.location)}
                    </select>
                    <select className="locationDropDown" onChange={this.handleRestaurent}>
                      <option>------Select Restaurent-----------</option>
                      {this.renderRestaurents(this.state.restaurents)}
                    </select>
                   
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}


export default Search