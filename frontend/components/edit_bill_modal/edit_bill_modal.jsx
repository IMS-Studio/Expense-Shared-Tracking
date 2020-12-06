import React from 'react';


class EditBillPage extends React.Component {
  constructor(props) {
    super(props);
  
      // this.state = {
      //   description: this.props.bills[this.props.billInfo].description,
      //   author_payor: this.props.bills[this.props.billInfo].author_payor,
      //   cost: this.props.bills[this.props.billInfo].cost,
      //   recipient_id: this.props.bills[this.props.billInfo].recepient_id,
      //   group_id: this.props.bills[this.props.billInfo].group_id
      // };

      this.state = this.props.bills[this.props.billInfo];

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleBoolean = this.toggleBoolean.bind(this);
  };



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBill(this.state, this.props.billInfo).then(this.props.closeModal);
  };

  toggleBoolean(e) {
    e.preventDefault();
    switch (this.state.author_payor) {
      case true:
        this.setState({author_payor: false});
        break;
      case false:
        this.setState({author_payor: true});
        break;
      default:
        break;
    }
  }

  render () {
    const { friends, closeModal, billInfo} = this.props;
    
    if (!friends || !billInfo) {
      return null;
    }
     
      return (

      <form className='bill-modal-container' onSubmit={this.handleSubmit}>
      <p className='bill-modal-title'>Add an expense</p>
      <label>With you and:
        <input 
          type='text'
          value={this.state.name}
          onChange={this.update('name')}
          />
      </label>
      <br />
      <label>
        <input 
          type='text'
          value={this.state.description}
          onChange={this.update('description')}
          />
      </label>
      <br />
      <label>$
        <input 
          type='text'
          value={this.state.cost}
          onChange={this.update('cost')}
          />
      </label>
      <br />
  <p>Paid by <button className='payor-btn' onClick={this.toggleBoolean}>{this.state.author_payor ? 'You' : (this.state.name != '' ? this.state.name : 'No Name Provided')}</button></p>
      {/* <label>Enter a group, if any:
        <input 
          type='text'
          value={this.state.group_id}
          onChange={this.update('group_id')}
          />
      </label> */}

      <button onClick={closeModal}>Cancel</button>
      <button>Save</button>
    </form>

    );

      }



}




export default EditBillPage;