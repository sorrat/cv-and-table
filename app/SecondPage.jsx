import React from 'react';

import {NavigationBar} from './NavigationBar.jsx'
import {SortableTable} from './SortableTable.jsx'
import {loadJSON} from './utils'


class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headers: [], rows: []};
  }

  componentDidMount() {
    document.title = "2. Таблица";

    loadJSON('data/table.json', data => {
      let {headers, rows} = JSON.parse(data);
      this.setState({headers: headers, rows: rows});
    });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <SortableTable
          headers={this.state.headers}
          rows={this.state.rows}
        />
      </div>
    );
  }
}

export {SecondPage};
