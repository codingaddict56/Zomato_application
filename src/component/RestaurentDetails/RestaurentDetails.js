import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "http://localhost:8900/restaurantDetails";

class RestaurentDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            rest:''
        }
    }

    onBack = () => {
        let mealid= sessionStorage.getItem('type');
        this.props.history.push(`/list/${mealid}`)
    }

    render(){
        var {rest} = this.state;
        return(
            <div className="container">
                <div className="panel panel-primary">
                   <div className="panel-heading">
                       <h2>{rest.name}</h2>
                   </div>
                   <div className="panel-body">
                       <div className="row">
                           <div className="col-md-12">
                           <div id="myCarousel" class="carousel slide" data-ride="carousel">

                               <ol class="carousel-indicators">
                                   <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                   <li data-target="#myCarousel" data-slide-to="1"></li>
                                   <li data-target="#myCarousel" data-slide-to="2"></li>
                               </ol>

                               <div class="carousel-inner">
                                   <div class="item active">
                                   <img src={rest.thumb}/>
                                   </div>

                                   <div class="item">
                                   <img src={rest.thumb}/>
                                   </div>

                                   <div class="item">
                                   <img src={rest.thumb}/>
                                   </div>
                               </div>


                               <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                   <span class="glyphicon glyphicon-chevron-left"></span>
                                   <span class="sr-only">Previous</span>
                               </a>
                               <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                   <span class="glyphicon glyphicon-chevron-right"></span>
                                   <span class="sr-only">Next</span>
                               </a>
                               </div>
                               
                           </div>
                           <div className="col-md-12">
                               <h3>{rest.name}</h3>
                               <h4>{rest.locality}</h4>
                               <h4>{rest.address}</h4>
                           </div>
                       </div>
                       <br/>
                       <div>
                           <Tabs>
                               <TabList>
                                   <Tab>Overview</Tab>
                                   <Tab>Contact</Tab>
                               </TabList>
                               <TabPanel>
                                   <div>
                                       <div>About This Place</div>
                                       <br/>
                                       <div>Cuisine</div>
                                       <div>North Indain</div>
                                       <div>Cost For 2 :  Rs. {rest.cost}</div>
                                   </div>
                               </TabPanel>
                               <TabPanel>
                               <div>
                                       <div>Conatct</div>
                                       <br/>
                                       <div>Phone</div>
                                       <div>465465436456 </div>
                                       <div>Locality :  {rest.locality}</div>
                                   </div>
                               </TabPanel>
                           </Tabs>
                       </div>
                       <br/><br/>
                       <div>
                           <button className="btn btn-danger btn-lg" onClick={this.onBack}>Back</button>
                           &nbsp;
                           <Link className="btn btn-success btn-lg" to={`/order/${this.props.match.params.id}`}>Place Order</Link>
                       </div>
                   </div>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        let restid=this.props.match.params.id;
        axios.get(`${url}/${restid}`)
        .then((response) => { this.setState({rest:response.data[0]})})
    }
}

export default RestaurentDetails;