import {MarkedOptions, MarkedRenderer} from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  let headers = [];
  let cellIndex = 0;

  renderer.table = (header: string, body: string) => {
    headers = [];
    return '<div class="table"><div class="header">' + header + '</div><div class="table-body">' + body + '</div></div>';
  };

  renderer.tablerow = (content: string) => {
    cellIndex = 0;
    return '<div class="row">' + content + '</div>';
  };

  renderer.tablecell = (content: string, flags) => {
    let title = null;
    if (flags.header) {
      headers.push(content);
    } else {
      title = headers[cellIndex];
      cellIndex++;
    }
    return '<div class="cell" ' + ((title !== null) ? 'data-title="' + title + '"' : '') + '>' + content.replace(/,/g, '') + '</div>';
  };

  return {renderer};
}
