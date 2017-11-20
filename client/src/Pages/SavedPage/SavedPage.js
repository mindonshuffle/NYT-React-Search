import React, { Component } from 'react';
import SavedCard from '../../Components/SavedCard';
import API from '../../Utils/API.js';

class SavedPage extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
        .then(res => {
          this.setState({ articles: res.data})
        })
        .catch(err => console.log(err));

    }

    render() {
        return (
            <div>
                <SavedCard loadArticles={this.loadArticles}>
                    {this.state.articles}
                </SavedCard>
            </div>
        );
    };
};

export default SavedPage;