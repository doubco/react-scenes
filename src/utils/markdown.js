import marked from "marked";

export default function(md) {
  // set markdown renderer
  let renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
  };

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true,
    linksInNewTab: true
  });

  return marked(md || "", {
    renderer: renderer
  });
}
