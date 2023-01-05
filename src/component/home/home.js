import React from 'react';
import Search from './search';
import QuickSearch from './quicksearchApi';

const Home = (props) => {

    const handleRestaurent = (data) => {
        props.history.push(`/rest/${data}`)
    }
    

    return(
        <div>
            <Search restid={(data) => {handleRestaurent(data)}}/>
            <QuickSearch/>
        </div>
    )
}

export default Home