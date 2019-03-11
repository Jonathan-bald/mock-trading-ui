import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class BuyPositionForm extends Component {
    render() {
        return (
          <div>
            <form noValidate autoComplete="off">
            
            <TextField
              id="outlined-name"
              label="Ticker Symbol"
            //   onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
             <TextField
              id="outlined-name"
              label="Quantity"
            //   onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
              type="number"
            />
                  <Button style={{}} color="primary">
        Purchase
      </Button>
            </form>
            </div>
        );
    }
}

export default BuyPositionForm;