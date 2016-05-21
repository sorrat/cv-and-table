import React from 'react';
import {trim, orderBy} from 'lodash'

import {Table} from './Table.jsx'
import {highlight} from './utils'


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
    this.sortRows = this.sortRows.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({rows: nextProps.rows});
  }

  render() {
    return (
      <div className="content">
        <SortInput
          onChange={this.sortRows}
        />
        <Table
          headers={this.props.headers}
          rows={this.state.rows}
        />
      </div>
    );
  }

  sortRows(key) {
    let rows;
    key = trim(key);

    if (key == "") {
      rows = this.props.rows;
    }
    else {
      rows = this.props.rows.map(row => this.highlightRow(row, key));
      rows = orderBy(rows, 'count', 'desc').map(row => row['row']);
    }
    this.setState({rows: rows});
  }

  highlightRow(row, key) {
    let highlighted;
    let totalCount = 0;
    let highlightedRow = [];

    for (let column in row) {
      highlighted = highlight(row[column], key);
      highlightedRow[column] = highlighted['text'];
      totalCount += highlighted['count'];
    }
    return {row: highlightedRow, count: totalCount};
  }
}

export {SortableTable};
