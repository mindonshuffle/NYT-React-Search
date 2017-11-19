import React, { Component } from 'react';
import SearchCard from '../../Components/SearchCard';
import ResultsCard from '../../Components/ResultsCard';




class SearchPage extends Component {
    render() {
        return (
            <div>
                <SearchCard />

                <ResultsCard>
                </ResultsCard>                
            </div>
        );
    };
};

export default SearchPage;