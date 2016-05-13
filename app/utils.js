export function randomDate() {
  const start = new Date(2012, 0, 1).getTime();
  const end = new Date().getTime();
  const randomTimestamp = start + Math.random() * (end - start);
  return new Date(randomTimestamp).toISOString().slice(0, 19);
}

export function randomInt(start=100, end=10000) {
  return Math.floor(Math.random() * (end - start)) + start;
}

export function randomStatus() {
  const statuses = [
    'open',
    'in progress',
    'resolved',
  ];
  return statuses[randomInt(0, statuses.length)];
}

/*
export function highlight(string, subString) {
  let replacement = `<span class="highlight">${subString}</span>`;
  let pattern = new RegExp(subString, 'g');
  let count = (string.match(pattern) || []).length;
  let highlightedString = string.replace(pattern, replacement);
  return [highlightedString, count];
}
*/

export function highlight(string, subString) {
  if (subString === "") return [string, 0];

  let n = 0;
  let newOccurence = 0;
  let pos = 0;
  let step = subString.length;
  let replacement = `<span class="highlight">${subString}</span>`;
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
  return {text: highlightedString, count: n};
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
