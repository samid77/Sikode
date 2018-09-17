import React, { Component } from 'react'

export default class coba2 extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
        <label>Multiple</label>
        <select className="form-control select2" autoComplete="off" multiple="multiple" data-placeholder="Select a State" style={{width: '100%' }}>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>California</option>
            <option>Delaware</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Washington</option>
        </select>
        </div>

      </div>
    )
  }
}
