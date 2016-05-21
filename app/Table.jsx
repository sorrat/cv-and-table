import React from 'react';

import {upperFirst} from 'lodash'


function Header(props) {
  return <th>{props.text}</th>
}

function Cell(props) {
  return <td dangerouslySetInnerHTML={{__html: props.text}}></td>
}

function Row(props) {
  let cells = props.headers.map(
    (header) => <Cell text={props.row[header]} key={header} />
  );
  return <tr>{cells}</tr>;
}

function Table(props) {
  return (
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
}

export {Table};
