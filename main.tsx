import { 
  HTMLRewriter 
} from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts'

new HTMLRewriter()
  .on("p", {
    element(element) { 
      element.tagName = "h1" 
    },
  })
  .transform(new Response('<p class="red">test</p>'))
  .text().then(x => console.log(x))
