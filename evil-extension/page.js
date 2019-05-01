const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(root, level) {
  // TODO(you): Implement this function! See HW spec for details.
  if (root.nodeType === Node.TEXT_NODE) {
    console.log(level + root.textContent);
    if(root.textContent.match(MATCH_LIST) != null ){
      var string = root.textContent
      root.textContent = string;
      string = string.replace(/there|their|they\'re|Their|They\'re|THERE|THEIR|THEY\'RE/g, function(matched){
        return MATCH_LIST[matched];
      });
      root.textContent = string;
    }
    console.log('wow');
  } 
  else {
    console.log(level + root.nodeName);
  }
  for (const child of root.childNodes) {
    transformTextNodes(child, level + "    ");
  }
}
transformTextNodes(document.body,"");
// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Evil extension updated!');
