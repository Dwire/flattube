import React from 'react'


class AddReview extends React.Component {
  state = {
    title: "",
    review: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitForm(this.state)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({title: "", review: ""})
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
          <label>Review</label>
          <input type="text" name="review" value={this.state.review} onChange={this.handleChange}></input>
          <input type="submit" className="btn"></input>
        </form>
      </div>
    )
  }
}

export default AddReview
