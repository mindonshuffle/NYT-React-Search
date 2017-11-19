import React from 'react';

const ResultsCard = ({children}) =>
    <div className="row">
        <div className="col-md">    
            <div id="resultsCard" className="card">
                <h4 id="resultsCardHeader" className="card-header text-center">Results</h4>
                
                <div className="card-body">
                
                    {children}
                                                                
                </div> 
            </div>
        </div>
    </div>;

export default ResultsCard;