import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import axios from 'axios';
import "./TinderCards.css";

class TinderCards extends Component {
  constructor(props){
    super();
    this.state = {
      labels: [],
      page: 1
    }
  }

  loadNextPage = () => {
    axios.get(`/api/labels/help-wanted/3/${this.state.page}`)
      .then(response => {
        const labels = [...response.data.data.map(label => {
          return {
            ...label,
            status: null
          }
        }), ...this.state.labels];
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
                className="card"
              >
                <h3>{label.title}</h3>
                {/* <p>{label.description}</p> */}
              </div>
            </TinderCard>
          ))}
        </div>
      </>
    );
  }
}

export default TinderCards;
