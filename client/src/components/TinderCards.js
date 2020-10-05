import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

import { Icon } from '@iconify/react';
import gitPullRequest from '@iconify/icons-octicon/git-pull-request';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

class TinderCards extends Component {

  componentDidMount() {
    this.props.loadNextPage();
    this.props.setBackButton('');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.labels !== this.props.labels) {
      if (this.props.labels.length <= 2) {
        this.props.loadNextPage();
      }
    }
  }

  render() {
    return (
      <>
        {this.props.message && <h2>{ this.props.message }</h2> }
        <div className="cards__cardcontainer">
          { this.props.labels.map((label) => (
            <TinderCard
              className="swipe"
              key={label._id}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={ () => this.props.handleCardLeftScreen(label._id) } 
            >
              <div
                style={{ backgroundImage: `url(${label.image})` }}
                className="card">
                <header>
                  <h2>
                    <span><Icon icon={ gitPullRequest } /> </span>
                    <span>{ label.repo_id.repo }</span>
                  </h2>
                  <p>Last updated on { label.updated_at }</p>
                </header>
                <footer>
                  { label.labels.map(tag => {
                    return (
                      <Chip
                        key={ tag.name + ' ' + tag.color }
                        label={ tag.name }
                        style={ { backgroundColor: '#' + tag.color } }
                        size="small" />
                    )
                  }) }
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit">
                      { label.repo_id.owner }
                    </Link>
                    <Link color="inherit" href={ label.owner.url }>
                      { label.owner.login }
                    </Link>
                    {/* <Typography color="textPrimary">Breadcrumb</Typography> */ }
                  </Breadcrumbs>
                </footer>
              </div>
              { label.repo && (
                <>
                  <p>{ label.repo.about }</p>
                  <p>{ label.repo.title }</p>
                </>
              ) }
            </TinderCard>
          ))}
        </div>
      </>
    );
  }
}

export default TinderCards;
