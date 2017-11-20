import React from 'react';
import ResultsItem from '../ResultsItem'

const ResultsCard = ({children}) =>
    <div className="row">
        <div className="col-md">    
            <div id="resultsCard" className="card">
                <h4 id="resultsCardHeader" className="card-header text-center">Results</h4>
                
                <div className="card-body">

                { children[0] ?                 
                    children.map(article => {
                        return (
                            <ResultsItem key={article._id} url={article.web_url} headline={article.headline.main}/>
                        )             
                    })

                    :
                    <h4>Please Enter a Search</h4>
                }

                </div> 
            </div>
        </div>
    </div>;

export default ResultsCard;