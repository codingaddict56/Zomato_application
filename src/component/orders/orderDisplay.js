import React from 'react';

const OrderView = (props) => {

    const renderTable =  ({orderdata}) => {
        if(orderdata){
            return orderdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.rest_id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.person}</td>
                        <td>Placed</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div>
            <center><h3>Booking List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Rest Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Person</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default OrderView;