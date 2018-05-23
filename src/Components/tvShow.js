import React from 'react';
import {Card, Col} from 'react-materialize'
import Adapter from '../Adapter'

import AddReview from './AddReview'

class TvShow extends React.Component {

  state = {
    episodes: [],
    toggle: false,
    reviews: [],
    toggleReviewForm: false,
    toggleReviewShow: false
  }

  componentDidMount() {
    Adapter.getShowEpisodes(this.props.show.id)
    .then(json => this.setState({episodes: json}))
  }

  episodeList = () => {
    return this.state.episodes.map(sode =>  <li><b>season {sode.season}:</b> {sode.name} </li>)
  }


  handleClick = () => {
    const onOff = !this.state.toggle
    this.setState({toggle: onOff})
  }

  addReview = () => {
    const tog = !this.state.toggleReviewForm
    this.setState({toggleReviewForm: tog})
  }

  submitForm = (review) => {
    this.setState({reviews: [...this.state.reviews, review]})
  }

  showReviews = () => {
      const onOff = !this.state.toggleReviewShow
      this.setState({toggleReviewShow: onOff})
  }

  showAllReviews = () => {
    return this.state.reviews.map(rev => <li>{rev.title}: {rev.review}</li>)
  }

  render() {
    return (
      <Col m={6} s={12}>
        <Card className='blue-grey darken-1'
          textClassName='white-text'
          title={this.props.show.name}
        >
          <h6 onClick={this.handleClick}>{this.state.toggle ? "Hide Episodes" : "Show Episodes"}</h6>
          <ul>
            {this.state.toggle ? this.episodeList() : null}
          </ul>
          <button className="btn" onClick={this.addReview}>Leave a Review</button>
          <button className="btn" onClick={this.showReviews}>Show Reviews</button>
          { this.state.toggleReviewForm ? <AddReview submitForm={this.submitForm}/> : null}
          { this.state.toggleReviewShow ? <div><h5>All Reviews</h5><ul>{this.showAllReviews()}</ul></div> : null}

        </Card>
      </Col>
    );
  }

}

export default TvShow;
