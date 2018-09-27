showdown.subParser('makeMarkdown.br', function () {
  'use strict';

  if (!globalOptions.simpleLineBreaks) {
    return '  ';
  }
  return '';
});
