// =============Task #0===============
function take(qs) {
    if(typeof qs === 'string') {
        var res = document.querySelectorAll(qs);
        var resNum = res.length;
        if(resNum === 0) {
            return undefined;
        } else if(resNum === 1) {
            return res[0];
        } else {
            return res;
        }
    } else if(qs instanceof Node) {
        var nodeType = qs.nodeType;
        switch(nodeType) {
          case 1:
            return 'ELEMENT_NODE'
            break;
          case 3:
            return 'TEXT_NODE'
            break;
          case 8:
            return 'COMMENT_NODE'
            break;
          case 9:
            return 'DOCUMENT_NODE'
            break;
          case 11:
            return 'DOCUMENT_FRAGMENT_NODE'
            break;
        }
    }
}
//============Task #1 =================
function take(qs) {
  var res = document.querySelectorAll(qs);
  return res.length === 0 ? undefined : res[0];
}


//============Task #2 =================
function insertAfter(elemToInsert, elemInsertAfter) {
    return elemInsertAfter.parentNode.insertBefore(elemToInsert, elemInsertAfter.nextSibling);
}

//============Task #3 =================
function performStyle(key, value) {
    if(value) {
        this.setAttribute(key, value);
    } else {
        this.getAttribute(key);
    }
}
var elem = document.createElement('div');
performStyle.call(elem, 'style', 'background-color: red; color: black');
performStyle.call(elem, 'style');
//============Task #4 =================
function createChess() {
    var TABLE_CELLS = 8,
        TABLE_WIDTH = '640px',
        CELL_WIDTH = '80px',
        CELL_HEIGHT = '80px',
        CELL_FLOAT = 'left',
        CELL_BORDER = '1px solid black',
        CELL_BOX_SIZING = 'border-box';
    var fragment = document.createDocumentFragment();
    var container = document.createElement('div');
    container.style.padding = '10px';
    container.style.border = CELL_BORDER;
    container.style.width = TABLE_WIDTH;
    container.style.fontSize = '0px';
    for(var i = 0; i < TABLE_CELLS; i++) {
        var row = document.createElement('div');
        row.style.display = 'inline-block';
        row.style.fontSize = '10px';
        for(var j = 0; j < TABLE_CELLS; j++) {
            if((i % 2 == 0 && j % 2 == 0) || (i%2!=0 && j%2!=0)) {
                var blackCell = document.createElement('div');
                blackCell.style.backgroundColor = "#000";
                blackCell.style.boxSizing = CELL_BOX_SIZING;
                blackCell.style.height = CELL_HEIGHT;
                blackCell.style.width = CELL_WIDTH;
                blackCell.style.float = CELL_FLOAT;
                blackCell.style.border = CELL_BORDER;
                row.appendChild(blackCell);
            } else {
                var whiteCell = document.createElement('div');
                whiteCell.style.backgroundColor = "fff";
                whiteCell.style.boxSizing = CELL_BOX_SIZING;
                whiteCell.style.height = CELL_HEIGHT;
                whiteCell.style.width = CELL_WIDTH;
                whiteCell.style.float = CELL_FLOAT;
                whiteCell.style.border = CELL_BORDER;
                row.appendChild(whiteCell);
            }
        }
        container.appendChild(row);
    }
    fragment.appendChild(container);
    document.body.appendChild(fragment);
}

//============Task #5 =================
//look 15puzzle.html

//=======Task #6(optional) ============
var attrs = document.querySelectorAll('[base64]');
attrs = Array.prototype.slice.call(attrs);
var baseArray = attrs.map(function(el) { return el.attributes.base64.value });
var encodedString = baseArray.join('');
var decoded = window.atob(encodedString);

function findComments(el) {
  var arr = [];
  for(var i = 0; i < el.childNodes.length; i++) {
    var node = el.childNodes[i];
    if(node.nodeType === 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, findComments(node));
    }
  }
  return arr;
};

var commentNodes = findComments(document);

var n = 0;
var arr = [];
for (n; n < commentNodes.length; n++ ) {
  console.log(commentNodes[n].nodeValue);
  arr.push(commentNodes[n].nodeValue);
}

var transform = arr.join('');

var F = new Function (transform);

F();
