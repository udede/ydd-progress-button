import {MarkedOptions, MarkedRenderer} from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  let headers: string[] = [];
  let cellIndex = 0;

  renderer.table = (token: any) => {
    headers = [];
    const header = token.header;
    const body = token.rows;
    return '<div class="table"><div class="header">' + this.parser.parse(header) + '</div><div class="table-body">' + this.parser.parse(body) + '</div></div>';
  };

  renderer.tablerow = (token: any) => {
    cellIndex = 0;
    return '<div class="row">' + this.parser.parse(token.tokens) + '</div>';
  };

  renderer.tablecell = (token: any) => {
    let title = null;
    const content = this.parser.parseInline(token.tokens);
    if (token.header) {
      headers.push(content);
    } else {
      title = headers[cellIndex];
      cellIndex++;
    }
    return '<div class="cell" ' + ((title !== null) ? 'data-title="' + title + '"' : '') + '>' + content.replace(/,/g, '') + '</div>';
  };

  return {renderer};
}
