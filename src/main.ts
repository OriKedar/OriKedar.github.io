import "./style.css";

interface Project {
  name: string;
  description: string;
  url: string;
  kind: string;
  preview: string;
}

interface ChatMessage {
  from: "user" | "bot";
  text: string;
}

const codePreview = (html: string) => `
  <div class="preview preview-code"><pre>${html}</pre></div>
`;

const chatPreview = (messages: ChatMessage[]) => `
  <div class="preview preview-chat">
    ${messages.map((m) => `<span class="bubble bubble-${m.from}">${m.text}</span>`).join("")}
  </div>
`;

const projects: Project[] = [
  {
    name: "Json Master",
    description: "JSON viewer — format, validate, and explore JSON with a tree view.",
    url: "https://orikedar.github.io/jsonview/",
    kind: "Web app",
    preview: codePreview(
      `{
  <span class="tok-key">"toolbox"</span>: [
    <span class="tok-str">"json-master"</span>,
    <span class="tok-str">"texex"</span>
  ]
}`,
    ),
  },
  {
    name: "texex",
    description: "Telegram expense bot — log spending in a few taps, straight into a Google Sheet you own.",
    url: "https://texex.pages.dev/",
    kind: "Telegram bot",
    preview: chatPreview([
      { from: "user", text: "/expense" },
      { from: "bot", text: "What was it for?" },
      { from: "user", text: "Coffee with Dana" },
      { from: "bot", text: "How much? (e.g. 12.50)" },
    ]),
  },
];

const githubIcon = `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
`;

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <header class="hero">
    <div class="hero-text">
      <h1>Ori Kedar</h1>
      <p class="tagline">PLACEHOLDER — edit this: a few words about you.</p>
    </div>
    <a class="github-link" href="https://github.com/OriKedar" target="_blank" rel="noopener">
      ${githubIcon}
      GitHub
    </a>
  </header>

  <main>
    <section class="toolbox">
      <h2>My Toolbox</h2>
      <ul class="project-list">
        ${projects
          .map(
            (p) => `
          <li class="project-card">
            <a href="${p.url}" target="_blank" rel="noopener">
              ${p.preview}
              <div class="project-body">
                <div class="project-title">
                  <h3>${p.name}</h3>
                  <span class="project-kind">${p.kind}</span>
                </div>
                <p>${p.description}</p>
              </div>
            </a>
          </li>
        `,
          )
          .join("")}
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; ${new Date().getFullYear()} Ori Kedar</p>
  </footer>
`;
