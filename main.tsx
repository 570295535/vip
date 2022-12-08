import { html } from "https://deno.land/x/html/mod.ts";

let languages = ["Rust", "JavaScript", "TypeScript"];

const str = html`
  <div class="list">
    <ul>
      ${languages.map((x) => `<li>${x}</li>`)}
    </ul>
  </div>
`;
