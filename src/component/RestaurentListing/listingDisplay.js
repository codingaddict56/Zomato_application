import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) => {

    const renderRest = ({restdata}) => {
        if(restdata){
            return restdata.map((item) => {
                return(
                    <div className="Item" id={item.id}>
                        <div className="row">
                            <div className="col-md-3">
                                <img className="Image" src={item.thumb}/>
                            </div>
                            <div className="col-md-9">
                                <div className="rest_name">
                                    <Link to={`/rest/${item._id}`}>{item.name}</Link>
                                    <div className="city_name">{item.city_name}</div>
                                    <div className="address-text">{item.locality}</div>
                                    <div className="address-text">{item.address}</div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="col-md-3">
                            <div class="CUISINES-COST-FOR-TWO">Cuisine Type</div>
                            <div class="CUISINES-COST-FOR-TWO">Cost For Two</div>
                        </div>
                        <div className="col-md-9">
                            <div class="Bakery-700">{item.Cuisine[0].name},{item.Cuisine[1].name}</div>
                            <div class="Bakery-700">Rs {item.cost}</div>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }

    return(
        <div className="container">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-11">
                        {renderRest(props)}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListingDisplay