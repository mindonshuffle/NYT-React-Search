import React, { Component } from 'react';
import API from '../../Utils/API.js';

class ResultsItem extends Component {

    saveClick = (event) => {
        const articleData = {
            headline: this.props.headline,
            date: this.props.date,
            url: this.props.url
        }

        console.log('To Save:', articleData);
        API.saveArticle(articleData);
    } 
    
    render(){
        return(
            <div className="card result-item">
                <div className="card-body d-flex align-items-center justify-content-between">
                    {this.props.headline}
                    <button onClick={this.saveClick} className="btn btn-primary">Save</button>
                </div>
            </div>
        )
    }
}

export default ResultsItem;