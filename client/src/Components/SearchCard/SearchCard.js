import React from 'react';

const SearchCard = () =>
<div className="row">
    <div className="col-md">    
        <div id="searchCard" className="card">
            <h4 className="card-header text-center">Search</h4>
            
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label for="inputSearchTerm">Search Topic</label>
                        <input type="text" className="form-control" id="inputSearchTerm" placeholder="Enter a topic to search for" />
                    </div>
                    <div className="form-group">
                        <label for="inputStartYear">Start Year</label>
                        <input type="text" className="form-control" id="inputStartingYear" placeholder="Start Year" />
                    </div>
                    <div className="form-group">
                        <label for="inputEndYear">End Year</label>
                        <input type="text" className="form-control" id="inputEndYear" placeholder="End Year" />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div> 
        </div>
    </div>
</div>;

export default SearchCard;