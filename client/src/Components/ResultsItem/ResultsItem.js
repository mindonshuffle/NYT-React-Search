import React from 'react';

const ResultsItem = (props) =>
    <div className="card result-item">
        <div className="card-body d-flex align-items-center justify-content-between">
            {props.headline}
            <button className="btn btn-primary">Save</button>
        </div>
    </div>;

export default ResultsItem;