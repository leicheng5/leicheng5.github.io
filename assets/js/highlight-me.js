(function(){
  function highlightNameIn(selector, name){
    // allow flexible whitespace, case-insensitive
    const re = new RegExp(name.replace(/\s+/g, '\\s+'), 'gi');

    function walk(node){
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        if (!re.test(text)) return;
        re.lastIndex = 0;

        const frag = document.createDocumentFragment();
        let last = 0, m;
        while ((m = re.exec(text)) !== null) {
          if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          const span = document.createElement('span');
          span.className = 'me';
          span.textContent = m[0];
          frag.appendChild(span);
          last = m.index + m[0].length;
        }
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.classList && node.classList.contains('me')) return; // skip already-highlighted
        for (let i = 0; i < node.childNodes.length; i++) walk(node.childNodes[i]);
      }
    }

    document.querySelectorAll(selector).forEach(el => walk(el));
  }

  function run(){
    highlightNameIn('.pubs .authors', 'Lei Cheng');
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  // If your theme injects content later, you can also listen to visibility
  document.addEventListener('pageshow', run);
})();
