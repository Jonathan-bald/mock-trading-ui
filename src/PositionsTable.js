import React, { Component } from 'react'
import MaterialTable from 'material-table'

class PositionsTable extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: '', field: 'checkbox', },
            { title: 'Ticker Symbol', field: 'symbol' },
            { title: 'Quantity Owned', field: 'quantity' },
            { title: 'Purchase Price', field: 'price'}
          ]}
          data={[{ symbol: 'AAPL', quantity: 2, price: 2050.23, currentPrice: 2500.38 },
          { symbol: 'AMZN', quantity: 439, price: 1300.99, currentPrice: 1323.43 }]}
          title="Current Positions Held"
          actions={[
            {
              icon: 'attach_money',
              tooltip: 'Sell Position',
              onClick: (event, rowData) => {
                alert('You clicked symbol ' + rowData.symbol)
              },
            }
          ]}
        />
      </div>
    )
  }
}

export default PositionsTable;