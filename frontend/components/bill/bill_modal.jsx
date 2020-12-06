import React from 'react';



class BillPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        description: '',
        author_payor: true,
        cost: '',
        name: '',
        // recipient_id: '',
        group_id: ''
      };

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
    const bill = Object.assign({}, this.state);
    this.props.addBill(bill).then(this.props.closeModal);
  };

  toggleBoolean(e) {
    e.preventDefault();
    
    switch (this.state.author_payor) {
      case true:
        this.setState({author_payor: false})
        break;
      case false:
        this.setState({author_payor: true})
        break;
      default:
        break;
    }
  }




  render () {
    const { friends, closeModal } = this.props;
    
    
      return (
        <form className='bill-modal-container' onSubmit={this.handleSubmit}>
          <p className='bill-modal-title'>Add an expense</p>
          <div className='bill-modal-body'>
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
                placeholder='Enter a description' 
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

            <button className='bill-modal-cancel-btn' onClick={closeModal}>Cancel</button>
            <button className='bill-modal-submit-btn' >Save</button>
          </div>
        </form>

    );

      }



}




export default BillPage;