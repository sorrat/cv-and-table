import React from 'react';

import {Table} from './Table.jsx'
import {sortRows} from '../utils'


function SortInput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Sort by"
        className="sort-input"
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  )
}


class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rows: props.rows};
    this.reorderRows = this.reorderRows.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({rows: nextProps.rows});
  }

  render() {
    return (
      <div className="content">
        <SortInput
          onChange={this.reorderRows}
        />
        <Table
          headers={this.props.headers}
          rows={this.state.rows}
        />
      </div>
    );
  }

  reorderRows(sortKey) {
    this.setState({rows: sortRows(this.props.rows, sortKey)});
  }
}

export {SortableTable};
