import "./style.css";

interface Project {
  name: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    name: "Json Master",
    description: "JSON viewer — format, validate, and explore JSON with a tree view.",
    url: "https://orikedar.github.io/jsonview/",
  },
];

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <header class="hero">
    <h1>Ori Kedar</h1>
    <p class="tagline">PLACEHOLDER — edit this: a few words about you.</p>
    <div class="links">
      <a href="https://github.com/OriKedar" target="_blank" rel="noopener">GitHub</a>
    </div>
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
              <h3>${p.name}</h3>
              <p>${p.description}</p>
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
