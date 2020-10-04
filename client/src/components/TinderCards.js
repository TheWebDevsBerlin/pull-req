import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import axios from 'axios';
import "./TinderCards.css";

import { Icon, InlineIcon } from '@iconify/react';
import gitPullRequest from '@iconify/icons-octicon/git-pull-request';

class TinderCards extends Component {
  constructor(props){
    super();
    this.state = {
      labels: [],
      page: 1
    }
  }

  loadNextPage = () => {
    const q = 'help-wanted'
    axios.get(`/api/labels/${q}/3/${this.state.page}`)
      .then(response => {
        const labels = [...response.data.data, ...this.state.labels];
        this.setState(state => ({ labels, page: ++state.page }));
      })
      .catch(err=>this.setState({message: `Error fetching labels. \n ${err}`}));
  }

  componentDidMount() {
    this.loadNextPage();
    this.props.setBackButton('')
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.labels !== this.state.labels){
      if(this.state.labels.length <= 2) {
        console.log('loading some more...')
        this.loadNextPage();
      }
    }
  }
  
  onCardLeftScreen = (msg) => {
    const newLabels = this.state.labels.filter(label => label._id !== msg);
    this.setState({labels: newLabels})
  }

  render() {
    return (
      <>
        {this.state.message && <h2>{this.state.message}</h2>}
        <div className="cards__cardcontainer">
          {this.state.labels.map((label) => (
            <TinderCard
              className="swipe"
              key={label._id}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={() => this.onCardLeftScreen(label._id)} 
            >
              <div
                style={{ backgroundImage: `url(${label.image})` }}
                className="card">
                <h2>
                  <span><Icon icon={ gitPullRequest } /> </span>
                  <span>{ label.repo_id.repo.toString() }</span>
                </h2>
                <p>Last updated on { label.updated_at }</p>
              </div>
              <p>{ label.repo_id.owner }</p>
              <p>{ label.repo.about }</p>
              <p>{ label.description } style={ 'visibility: hidden' }</p>
            </TinderCard>
          ))}
        </div>
      </>
    );
  }
}

export default TinderCards;
