import {trim, orderBy} from 'lodash'


export function highlightString(string, subString) {
  if (subString === "")
    return {result: string, count: 0};

  let n = 0;
  let newOccurence = 0;
  let pos = 0;
  let step = subString.length;
  let replacement = `<mark>${subString}</mark>`;
  let highlightedString = "";

  while (true) {
    newOccurence = string.indexOf(subString, pos);
    if (newOccurence < 0) {
      highlightedString += string.slice(pos, string.length);
      break;
    }
    else {
      highlightedString += string.slice(pos, newOccurence);
      highlightedString += replacement;
      n += 1;
      pos = newOccurence + step;
    }
  }
  return {result: highlightedString, count: n};
}

export function highlightRow(object, subString) {
  let totalCount = 0;
  let result = {};

  for (let key in object) {
    let highlighted = highlightString(object[key], subString);
    result[key] = highlighted['result'];
    totalCount += highlighted['count'];
  }
  return {result: result, count: totalCount};
}

export function sortRows(rows, sortKey) {
  sortKey = trim(sortKey);

  if (sortKey) {
    rows = rows.map(row => highlightRow(row, sortKey));
    rows = orderBy(rows, 'count', 'desc').map(row => row['result']);
  }
  return rows;
}

export function loadJSON(filepath, callback) {
  let req = new XMLHttpRequest();
  req.overrideMimeType("application/json");
  req.open('GET', filepath, true);
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == "200") {
      callback(req.responseText);
    }
  };
  req.send(null);
}
