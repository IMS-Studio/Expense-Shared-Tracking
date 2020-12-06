import React from 'react'



class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author_id: this.props.curUser,
      bill_id: this.props.billId,
      text_body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({text_body: ''});
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })

  }

  render () {
    const {billId, addComment, curUser} = this.props;


    if (!billId || !addComment || !curUser) {
      return null
    }


    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.text_body}
          onChange={this.update('text_body')}
        
        />
        <br />
        
        <input  className='comment-submit-btn' type='submit'/>
      </form>

    )
  }



}

export default CommentForm;