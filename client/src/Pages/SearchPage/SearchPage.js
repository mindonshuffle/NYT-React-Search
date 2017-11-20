import React, { Component } from 'react';
import SearchCard from '../../Components/SearchCard';
import ResultsCard from '../../Components/ResultsCard';
import API from '../../Utils/API.js';


class SearchPage extends Component {
    state = {
        results: []
    };

    submitSearch = (searchData) => {
        console.log(searchData);

        API.searchArticles(searchData)
          .then(res => {
              this.setState({ results: res.data.response.docs });
              console.log(this.state.results)
            } 
          )
          .catch(err => console.log(err));
      };
    
    render() {
        return (
            <div>
                <SearchCard submitSearch = {this.submitSearch}/>

                <ResultsCard>
                    {this.state.results}
                </ResultsCard>                
            </div>
        );
    };
};

export default SearchPage;