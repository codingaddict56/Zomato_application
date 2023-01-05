import React,{Component} from 'react';
import QuickSearchDisplay from './quickSearchDisplay';

const Murl="http://localhost:8900/mealtype"

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
           mealType:''
        }
    }

    render(){
        return(
            <QuickSearchDisplay mealData={this.state.mealType}/>
        )
    }

    componentDidMount(){
        fetch(Murl,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch