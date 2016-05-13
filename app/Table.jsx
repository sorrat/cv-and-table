import React from 'react';

import {upperFirst} from 'lodash'


const Header = (props) => <th>{props.text}</th>

const Cell = (props) => <td dangerouslySetInnerHTML={{__html: props.text}}></td>

const Row = (props) => {
  let cells = props.headers.map(
    (header) => <Cell text={props.row[header]} key={header} />
  );
  return <tr>{cells}</tr>;
}

const Table = (props) => (
  <div>
  <table>
    <thead>
      <tr>
        {props.headers.map(
          (header, i) => <Header text={upperFirst(header)} key={i} />
        )}
      </tr>
    </thead>
    <tbody>
      {props.rows.map(
        (row, i) => <Row row={row} headers={props.headers} key={i} />
      )}
    </tbody>
  </table>
  </div>
)

export {Table};
