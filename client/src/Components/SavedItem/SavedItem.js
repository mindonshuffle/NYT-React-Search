import React from 'react';

const SavedItem = () =>
    <div className="card saved-card">
        <div className="card-body d-flex justify-content-between">
            <h4>This is a Saved Headline</h4>
            <h5>Saved: 11/19/2017</h5>
            <button className="btn btn-primary">Remove</button>
        </div>
    </div>;

export default SavedItem;