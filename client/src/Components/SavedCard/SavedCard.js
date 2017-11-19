import React from 'react';

const SavedCard = ({children}) =>
    <div className="row">
        <div className="col-md">    
            <div id="savedArticlesCard" className="card">
                <h4 className="card-header text-center">Saved Articles</h4>
                
                <div className="card-body">
                
                    { children }
                                          
                </div> 
            </div>
        </div>
    </div>;

export default SavedCard;