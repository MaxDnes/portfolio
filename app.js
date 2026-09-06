/* ------------------------------------------------------------------
   Workspace — a small window server, a column browser, and the content.
   No dependencies. Everything here runs on load.
   ------------------------------------------------------------------ */

/* ---------- icons ---------- */

const ICON = {
  dir: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M1.5 3.5h6l1.6 2h9.4v11h-17z" fill="#dcdcdc" stroke="#000"/><path d="M1.5 7.5h17" stroke="#000"/></svg>`,
  doc: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 1.5h9l4 4v13h-13z" fill="#fff" stroke="#000"/><path d="M12.5 1.5v4h4" fill="none" stroke="#000"/><g stroke="#777"><path d="M6 9.5h8M6 12h8M6 14.5h5"/></g></svg>`,
  pdf: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 1.5h9l4 4v13h-13z" fill="#fff" stroke="#000"/><path d="M12.5 1.5v4h4" fill="none" stroke="#000"/><rect x="5.5" y="10.5" width="9" height="6" fill="#c9c9c9" stroke="#000" stroke-width=".8"/></svg>`,
  me: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 1.5h9l4 4v13h-13z" fill="#fff" stroke="#000"/><path d="M12.5 1.5v4h4" fill="none" stroke="#000"/><circle cx="10" cy="11" r="2.2" fill="#9a9a9a" stroke="#000" stroke-width=".8"/><path d="M6.4 16.5c.5-2 1.9-3 3.6-3s3.1 1 3.6 3" fill="none" stroke="#000" stroke-width=".8"/></svg>`,
};

/* ---------- content ---------- */

const doc = (html) => html;

const TREE = [
  {
    name: "Read Me", kind: "doc", icon: "me", body: doc(`
      <h1>Maxim Dnestreanschii</h1>
      <p class="kicker">Software engineer · Sønderborg, Denmark</p>
      <p>I study software engineering at the University of Southern Denmark and work part-time as an engineer at 2ai. I build AI systems that go into production and stay there: agents with real tools, the pipelines that feed them, and the web and backend services around them.</p>
      <p>Most of what I ship is the unglamorous half. Which tool an agent is allowed to call. The evaluation run that catches a bad answer before a customer reads it. The container that has to come back up on its own at three in the morning. I run the deployments for the services I own, so I find out quickly when I got that wrong.</p>
      <p>In June 2026 my team was one of four named by the Council of Europe at its Democracy Hackathon in Strasbourg, out of twenty teams from sixteen countries. We built <a href="#" data-open="agnospeech">AgnoSpeech</a>, and the Council published a <a href="https://www.coe.int/en/web/new-democratic-pact-for-europe/2026-hackathon" target="_blank" rel="noopener">write-up of it</a>. That week moved what I want to work on: systems where the interesting constraint is what the software must refuse to do.</p>
      <h2>Right now</h2>
      <ul>
        <li>Agent tooling and the company data discovery service at 2ai</li>
        <li>Second year of a BSc in Software Engineering at SDU, 2025–2028</li>
        <li>Open to summer internships, research assistantships and thesis collaborations in applied AI, privacy engineering and information integrity</li>
      </ul>
      <p><a class="btn" href="#" data-open="contact">Get in touch</a><a class="btn" href="cv/Maxim-Dnestreanschii-CV.pdf" target="_blank" rel="noopener">Read the CV</a></p>
    `)
  },
  {
    name: "Work", kind: "dir", children: [
      {
        name: "2ai", kind: "doc", body: doc(`
          <h1>2ai</h1>
          <p class="kicker">Software Engineer, part-time · Sønderborg · April 2026 – present</p>
          <p>2ai builds AI products for companies in southern Denmark. I work across the stack, mostly on the parts that have to survive contact with a customer.</p>
          <h2>What I own</h2>
          <ul>
            <li><b>Company data discovery.</b> A service that reads company websites and public registries and fills in customer records. It is measured on how often it returns the right company rather than a plausible namesake, because that is where this kind of tool actually breaks.</li>
            <li><b>Agent tooling.</b> Which tools exist, what belongs in a skill, and the MCP integrations that connect an agent to systems that can change something.</li>
            <li><b>Evaluation harnesses.</b> An agent that is right most of the time is a support ticket generator. The eval run is what tells us which of the two we shipped.</li>
            <li><b>Deployment.</b> Docker on Coolify and Vercel, secrets, health checks, error reporting — for every service I put my name on.</li>
          </ul>
          <h2>Working with</h2>
          <div class="rows">
            <div><b>Interfaces</b><span>Next.js, React, TypeScript, Tailwind CSS</span></div>
            <div><b>Services</b><span>NestJS, Node.js, Python, REST APIs, background jobs</span></div>
            <div><b>Data</b><span>PostgreSQL, Supabase, Prisma</span></div>
            <div><b>Delivery</b><span>Docker, Coolify, Vercel, GitHub Actions</span></div>
          </div>
        `)
      },
      {
        name: "AIFustion", kind: "doc", body: doc(`
          <h1>AIFustion</h1>
          <p class="kicker">Backend Developer, intern · June – November 2024</p>
          <p>The first job where other people's work depended on code I had written. A C# and ASP.NET backend, and the database underneath it.</p>
          <ul>
            <li>Wrote and maintained backend services in C# and ASP.NET: the API endpoints and the data access layer under them.</li>
            <li>Designed MSSQL schemas and wrote the queries against them, using Entity Framework for persistence and for the migration that came with every schema change.</li>
            <li>Worked in an agile team and learned how a change gets from a code review onto a server — the half of the job that a course does not cover.</li>
          </ul>
        `)
      },
    ]
  },
  {
    name: "Projects", kind: "dir", children: [
      {
        name: "AgnoSpeech", kind: "doc", body: doc(`
          <span class="flag">Council of Europe · recognised team, 2026 Democracy Hackathon</span>
          <h1>AgnoSpeech</h1>
          <p class="kicker">Team ALL FOR ONE, Moldova · Palais de l'Europe, Strasbourg · 17–19 June 2026</p>
          <p>Hate speech detectors read raw text, and raw text hands them a shortcut. Dialect and writing style predict harm well enough that a model quietly starts scoring who wrote something instead of what it says. The same text also fingerprints its author, which is why the records a helpline collects cannot simply be handed to a researcher — the tools built to defend a community end up exposing it.</p>
          <p>AgnoSpeech takes the identity out and leaves the evidence in. Most tools stop at deleting names; writing style alone still re-identifies an author. So it redacts identifiers, reduces each message to the content that carries the harm, checks that the meaning survived, and then runs an attacker against its own output to measure how much identity signal is left. The result is a number you can argue with rather than a promise you have to trust. All of it runs on a laptop CPU: no cloud call, no raw text leaving the machine.</p>
          <h2>My part</h2>
          <ul>
            <li>Owned the backend pipeline — the transformation, the attacker that scores it, and everything between them.</li>
            <li>Built and deployed the workbench the jury used to run it live.</li>
          </ul>
          <h2>The result</h2>
          <p>Out of 20 teams from 16 countries, four were named by the Council of Europe at the close of the hackathon. ALL FOR ONE was one of them, on the privacy-preserving hate speech detection challenge mentored by a researcher from the Technical University of Munich. The Council published a write-up of the project.</p>
          <p><a class="btn" href="https://www.coe.int/en/web/new-democratic-pact-for-europe/2026-hackathon" target="_blank" rel="noopener">Read it on coe.int</a></p>
        `)
      },
      {
        name: "Tom", kind: "doc", body: doc(`
          <h1>Tom</h1>
          <p class="kicker">An internal AI colleague with a physical body · 2ai</p>
          <p>Tom's memory lives in a git repository. Anything he believes is a diff a person can read, review and revert — which sounds like an odd design decision right up until the first time an agent quietly learns something wrong and nobody can find where.</p>
          <p>The same Tom answers in chat, in a dashboard, and out of a small desk robot. His tools unlock by role, so what he is able to do depends on who is asking.</p>
          <h2>My part</h2>
          <p>Deployment and remote access: getting one agent reachable from three surfaces without ending up with three slightly different Toms.</p>
        `)
      },
      {
        name: "Entity discovery", kind: "doc", body: doc(`
          <h1>Entity discovery</h1>
          <p class="kicker">Structured company records from open public sources · 2ai</p>
          <p>The service reads company websites and public registries and turns them into structured records. Easy to describe, and it fails in one specific place: name collisions. "Nordic Systems" is nine companies, and eight of them are the wrong answer.</p>
          <p>So it is benchmarked on the thing that breaks — how often it picks the correct company rather than a convincing namesake — instead of on how many fields it managed to fill in.</p>
        `)
      },
      {
        name: "Lead engine", kind: "doc", body: doc(`
          <h1>Lead generation engine</h1>
          <p class="kicker">Research tooling for a non-technical operator</p>
          <p>Someone who does not write code runs this to research a company, find the right person inside it, and file the result in the CRM.</p>
          <p>It calls paid APIs, so it has a spending limit it will not cross and it reports what a run cost. An autonomous tool with access to a company card is a bug report waiting to be written.</p>
        `)
      },
    ]
  },
  {
    name: "Skills", kind: "dir", children: [
      {
        name: "AI engineering", kind: "doc", body: doc(`
          <h1>AI engineering</h1>
          <p class="kicker">The half of the work that decides whether a demo becomes a product</p>
          <p>Designing what an agent can reach and how it is judged: tool surfaces, skills, MCP servers and clients, and the evaluation runs that make a regression visible before a user finds it. Comfortable with models that have to run on the machine in front of you.</p>
          <div class="rows">
            <div><b>Agents</b><span>LLM agents, tool design, agent skills, prompt and context engineering</span></div>
            <div><b>Integration</b><span>MCP servers and clients, retrieval, structured output</span></div>
            <div><b>Quality</b><span>Evaluation harnesses, regression suites, cost and spend limits</span></div>
            <div><b>On device</b><span>CPU-only inference, local pipelines with no network egress</span></div>
          </div>
        `)
      },
      {
        name: "Web & services", kind: "doc", body: doc(`
          <h1>Web and services</h1>
          <p class="kicker">Interfaces, and the servers behind them</p>
          <div class="rows">
            <div><b>Frontend</b><span>Next.js, React, TypeScript, Tailwind CSS</span></div>
            <div><b>Backend</b><span>Node.js, NestJS, Python, C#, ASP.NET</span></div>
            <div><b>Patterns</b><span>REST APIs, background jobs, microservices, auth</span></div>
          </div>
        `)
      },
      {
        name: "Data", kind: "doc", body: doc(`
          <h1>Data</h1>
          <p class="kicker">Schemas I have had to change after they were in production</p>
          <div class="rows">
            <div><b>Postgres</b><span>PostgreSQL, Supabase, Prisma</span></div>
            <div><b>SQL Server</b><span>MSSQL, T-SQL, Entity Framework migrations</span></div>
          </div>
        `)
      },
      {
        name: "Infrastructure", kind: "doc", body: doc(`
          <h1>Infrastructure</h1>
          <p class="kicker">I deploy what I write and I get the page when it breaks</p>
          <div class="rows">
            <div><b>Runtime</b><span>Docker, Coolify, Vercel</span></div>
            <div><b>Pipelines</b><span>GitHub Actions, Git</span></div>
            <div><b>Systems</b><span>Linux administration, secrets, health checks, error reporting</span></div>
          </div>
        `)
      },
    ]
  },
  {
    name: "Education", kind: "doc", body: doc(`
      <h1>Education</h1>
      <p class="kicker">University of Southern Denmark · Sønderborg</p>
      <div class="rows">
        <div><b>Degree</b><span>BSc in Software Engineering, September 2025 – May 2028</span></div>
        <div><b>Certification</b><span>Certiport IT Specialist — Device Configuration, Databases, Python (2024)</span></div>
        <div><b>English</b><span>C1 · IELTS 8.0</span></div>
        <div><b>Romanian</b><span>Native</span></div>
        <div><b>Russian</b><span>Native</span></div>
      </div>
      <h2>Outside the curriculum</h2>
      <p>Council of Europe Democracy Hackathon, Strasbourg, June 2026 — finalist. Working part-time at 2ai since April 2026, which is where most of what I know about running software actually came from.</p>
    `)
  },
  {
    name: "CV", kind: "dir", children: [
      {
        name: "CV — engineering", kind: "file", icon: "pdf", body: doc(`
          <h1>CV — engineering</h1>
          <p class="kicker">One page · PDF · for software and AI engineering roles</p>
          <p>Experience at 2ai and AIFustion, the projects, and the full stack list.</p>
          <p><a class="btn" href="cv/Maxim-Dnestreanschii-CV.pdf" target="_blank" rel="noopener">Open PDF</a><a class="btn" href="cv/Maxim-Dnestreanschii-CV.pdf" download>Download</a></p>
        `)
      },
      {
        name: "CV — privacy & policy", kind: "file", icon: "pdf", body: doc(`
          <h1>CV — privacy and information integrity</h1>
          <p class="kicker">One page · PDF · for policy, research and seminar applications</p>
          <p>The same work, told from the side that matters to a policy audience: what the systems refuse to do, and how that is verified.</p>
          <p><a class="btn" href="cv/Maxim-Dnestreanschii-CV-Policy.pdf" target="_blank" rel="noopener">Open PDF</a><a class="btn" href="cv/Maxim-Dnestreanschii-CV-Policy.pdf" download>Download</a></p>
        `)
      },
    ]
  },
  {
    name: "Contact", kind: "doc", body: doc(`
      <h1>Contact</h1>
      <p class="kicker">Sønderborg, Denmark · answers within a day</p>
      <div class="rows">
        <div><b>Email</b><span><a href="mailto:dnestreanschiimaxim780@gmail.com">dnestreanschiimaxim780@gmail.com</a></span></div>
        <div><b>LinkedIn</b><span><a href="https://www.linkedin.com/in/maxim-dnestreanschii-2b09b3387/" target="_blank" rel="noopener">maxim-dnestreanschii</a></span></div>
        <div><b>Phone</b><span>+45 71 42 28 42</span></div>
      </div>
      <h2>What I am looking for</h2>
      <ul>
        <li>Summer internships in applied AI, privacy engineering or information integrity</li>
        <li>Research assistantships and thesis collaborations, at a university or a lab</li>
        <li>Seminars, hackathons and programmes where the work is building something rather than talking about it</li>
      </ul>
      <p><a class="btn" href="mailto:dnestreanschiimaxim780@gmail.com?subject=Hello%20Maxim">Write to me</a></p>
    `)
  },
];

/* ---------- window manager ---------- */

const desktop = document.getElementById("desktop");
const dock = document.getElementById("dock");
const winSub = document.getElementById("sub-windows");
const workSub = document.getElementById("sub-work");

const wins = new Map();
let zTop = 100;
let miniSlot = 0;

function bringToFront(w) {
  zTop += 1;
  w.el.style.zIndex = zTop;
  for (const other of wins.values()) other.el.classList.toggle("front", other === w);
}

function makeWindow(id, opts) {
  const existing = wins.get(id);
  if (existing) {
    if (opts.title) existing.el.querySelector(".tb-title").textContent = opts.title;
    if (opts.content) {
      existing.body.innerHTML = "";
      existing.body.append(opts.content);
    }
    restore(existing);
    bringToFront(existing);
    return existing;
  }

  const el = document.createElement("section");
  el.className = "win opening";
  el.style.left = opts.x + "px";
  el.style.top = opts.y + "px";
  el.style.width = opts.w + "px";
  el.style.height = opts.h + "px";

  const bar = document.createElement("div");
  bar.className = "titlebar";
  bar.innerHTML =
    `<button class="tb-btn close" title="Close" aria-label="Close window"><i></i></button>` +
    `<span class="tb-title"></span>` +
    `<button class="tb-btn mini" title="Miniaturize" aria-label="Miniaturize window"><i></i></button>`;
  bar.querySelector(".tb-title").textContent = opts.title;

  const body = document.createElement("div");
  body.className = "win-body";
  if (opts.content) body.append(opts.content);

  const grip = document.createElement("div");
  grip.className = "resizebar";
  grip.title = "Resize";

  el.append(bar, body, grip);
  desktop.append(el);

  const w = { id, el, body, bar, dock: opts.dock || null };
  wins.set(id, w);

  bar.querySelector(".close").addEventListener("click", (e) => { e.stopPropagation(); closeWindow(id); });
  bar.querySelector(".mini").addEventListener("click", (e) => { e.stopPropagation(); miniaturize(w); });
  el.addEventListener("pointerdown", () => bringToFront(w), true);
  dragBy(bar, el, false);
  dragBy(grip, el, true);

  bringToFront(w);
  syncChrome();
  return w;
}

function closeWindow(id) {
  const w = wins.get(id);
  if (!w) return;
  w.mini?.remove();
  w.el.remove();
  wins.delete(id);
  syncChrome();
}

function miniaturize(w) {
  if (w.mini) return;
  w.el.style.display = "none";
  const tile = document.createElement("button");
  tile.className = "tile";
  tile.style.position = "absolute";
  tile.style.left = 16 + miniSlot * 68 + "px";
  tile.style.bottom = "34px";
  tile.style.zIndex = 7000;
  tile.innerHTML = ICON.doc + `<span></span>`;
  tile.querySelector("span").textContent = w.el.querySelector(".tb-title").textContent.slice(0, 10);
  tile.addEventListener("click", () => restore(w));
  desktop.append(tile);
  w.mini = tile;
  miniSlot += 1;
}

function restore(w) {
  if (!w.mini) return;
  w.mini.remove();
  w.mini = null;
  miniSlot = Math.max(0, miniSlot - 1);
  w.el.style.display = "";
}

/* keep the dock lights and the Windows menu honest */
function syncChrome() {
  for (const btn of dock.querySelectorAll(".tile")) {
    const id = (btn.dataset.act || "").split(":")[1];
    btn.classList.toggle("running", wins.has(id));
  }
  winSub.innerHTML = "";
  if (!wins.size) {
    const li = document.createElement("li");
    li.textContent = "No open windows";
    li.style.color = "#4a4a4a";
    winSub.append(li);
    return;
  }
  for (const [id, w] of wins) {
    const li = document.createElement("li");
    li.textContent = w.el.querySelector(".tb-title").textContent;
    li.addEventListener("click", () => { restore(w); bringToFront(w); });
    winSub.append(li);
  }
}

/* ---------- drag and resize ---------- */

function dragBy(handle, el, resize) {
  handle.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".tb-btn")) return;
    if (window.matchMedia("(max-width: 860px)").matches) return;
    e.preventDefault();
    handle.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
    const r = el.getBoundingClientRect();
    const ox = e.clientX - r.left;
    const oy = e.clientY - r.top;
    const dockW = dock.getBoundingClientRect().width;

    const move = (ev) => {
      if (resize) {
        el.style.width = Math.max(280, Math.min(ev.clientX - r.left, window.innerWidth - r.left - dockW - 6)) + "px";
        el.style.height = Math.max(160, Math.min(ev.clientY - r.top, window.innerHeight - r.top - 6)) + "px";
      } else {
        el.style.left = Math.max(-r.width + 90, Math.min(ev.clientX - ox, window.innerWidth - dockW - 40)) + "px";
        el.style.top = Math.max(0, Math.min(ev.clientY - oy, window.innerHeight - 30)) + "px";
      }
    };
    const up = () => {
      el.classList.remove("dragging");
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
  });
}

/* ---------- column browser ---------- */

let path = [];              // selected nodes, root-first
let cascade = true;         // stagger the columns once, on first paint

function childrenAt(depth) {
  if (depth === 0) return TREE;
  const parent = path[depth - 1];
  return parent && parent.kind === "dir" ? parent.children : null;
}

function renderBrowser(host) {
  host.innerHTML = "";

  const crumb = document.createElement("div");
  crumb.className = "crumb";
  const rootBtn = document.createElement("button");
  rootBtn.textContent = "Workspace";
  rootBtn.addEventListener("click", () => { path = []; renderBrowser(host); });
  crumb.append(rootBtn);
  path.forEach((n, i) => {
    if (n.kind !== "dir") return;
    const sep = document.createElement("span");
    sep.className = "sep";
    sep.textContent = "›";
    const b = document.createElement("button");
    b.textContent = n.name;
    b.addEventListener("click", () => { path = path.slice(0, i + 1); renderBrowser(host); });
    crumb.append(sep, b);
  });

  const cols = document.createElement("div");
  cols.className = "browser";

  let depth = 0;
  while (true) {
    const items = childrenAt(depth);
    if (!items) break;
    cols.append(makeColumn(items, depth, host));
    depth += 1;
    if (depth > 6) break;
  }

  host.append(crumb, cols);
  cols.scrollLeft = cols.scrollWidth;
  cascade = false;
}

function makeColumn(items, depth, host) {
  const col = document.createElement("div");
  col.className = "col" + (cascade || depth === path.length ? " cascade" : "");
  if (cascade) col.style.animationDelay = depth * 90 + "ms";
  const ul = document.createElement("ul");
  ul.setAttribute("role", "listbox");

  items.forEach((node) => {
    const li = document.createElement("li");
    li.tabIndex = 0;
    li.setAttribute("role", "option");
    li.innerHTML =
      (ICON[node.icon] || (node.kind === "dir" ? ICON.dir : ICON.doc)) +
      `<span class="nm"></span>` +
      (node.kind === "dir" ? `<span class="chev"></span>` : "");
    li.querySelector(".nm").textContent = node.name;
    if (path[depth] === node) { li.classList.add("sel"); li.setAttribute("aria-selected", "true"); }

    const choose = () => {
      path = path.slice(0, depth);
      path.push(node);
      renderBrowser(host);
      if (node.kind !== "dir") openDoc(node);
    };
    li.addEventListener("click", choose);
    li.addEventListener("keydown", (e) => {
      const sibs = [...ul.children];
      const i = sibs.indexOf(li);
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); sibs[Math.min(i + 1, sibs.length - 1)].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sibs[Math.max(i - 1, 0)].focus(); }
      else if (e.key === "ArrowRight" && node.kind === "dir") { e.preventDefault(); choose(); host.querySelectorAll(".col")[depth + 1]?.querySelector("li")?.focus(); }
      else if (e.key === "ArrowLeft" && depth > 0) { e.preventDefault(); host.querySelectorAll(".col")[depth - 1]?.querySelector("li.sel")?.focus(); }
    });
    ul.append(li);
  });

  col.append(ul);
  return col;
}

/* ---------- launchers ---------- */

function room() {
  const dockW = window.innerWidth > 860 ? 76 : 0;
  return { w: window.innerWidth - dockW, h: window.innerHeight };
}

function openViewer() {
  const r = room();
  const host = document.createElement("div");
  host.style.cssText = "flex:1;min-width:0;display:flex;flex-direction:column";
  renderBrowser(host);
  makeWindow("viewer", {
    title: "Workspace",
    x: Math.max(20, 176), y: 54,
    w: Math.min(672, r.w - 200), h: Math.min(432, r.h - 120),
    content: host,
  });
}

function openDoc(node) {
  const r = room();
  const wrap = document.createElement("div");
  wrap.className = "scroller";
  const d = document.createElement("div");
  d.className = "doc";
  d.innerHTML = node.body;
  wrap.append(d);
  const w = Math.min(560, r.w - 60);
  makeWindow("doc", {
    title: node.name,
    x: Math.max(20, Math.min(176 + 690, r.w - w - 24)), y: 116,
    w, h: Math.min(456, r.h - 170),
    content: wrap,
  });
}

function openNamed(key) {
  const flat = [];
  const walk = (list) => list.forEach((n) => { flat.push(n); if (n.children) walk(n.children); });
  walk(TREE);
  const map = {
    readme: "Read Me",
    contact: "Contact",
    cv: "CV — engineering",
    agnospeech: "AgnoSpeech",
  };
  const node = flat.find((n) => n.name === map[key]);
  if (node) {
    path = pathTo(TREE, node) || [node];
    const host = wins.get("viewer")?.body.firstChild;
    if (host) renderBrowser(host);
    openDoc(node);
  }
}

function pathTo(list, target, acc = []) {
  for (const n of list) {
    if (n === target) return [...acc, n];
    if (n.children) {
      const hit = pathTo(n.children, target, [...acc, n]);
      if (hit) return hit;
    }
  }
  return null;
}

/* ---------- terminal ---------- */

const SCRIPT = [
  ["out", "Workspace 4.2 — Sønderborg. Last login from a train."],
  ["out", ""],
  ["cmd", "whoami"],
  ["out", "Maxim Dnestreanschii — software engineer. SDU, and 2ai part-time."],
  ["out", ""],
  ["cmd", "what --do-you-build"],
  ["out", "Agents with real tools. The pipelines that feed them."],
  ["out", "The interfaces on top and the deployments underneath."],
  ["out", ""],
  ["cmd", "ls open-to/"],
  ["out", "summer-internship/   research-assistant/   thesis-collaboration/"],
  ["out", ""],
  ["cmd", "cat contact"],
  ["out", "dnestreanschiimaxim780@gmail.com   ·   +45 71 42 28 42"],
];

function openTerminal() {
  const r = room();
  const pre = document.createElement("div");
  pre.className = "term";
  const w = Math.min(520, r.w - 60);
  makeWindow("terminal", {
    title: "Terminal",
    x: Math.max(20, r.w - w - 40), y: Math.min(300, r.h - 260),
    w, h: 258,
    content: pre,
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0;
  const write = () => {
    if (i >= SCRIPT.length) {
      pre.insertAdjacentHTML("beforeend", `<span class="p">~ %</span> <span class="caret"></span>`);
      return;
    }
    const [kind, text] = SCRIPT[i++];
    if (kind === "cmd") pre.insertAdjacentHTML("beforeend", `<span class="p">~ %</span> <span class="c">${text}</span>\n`);
    else pre.insertAdjacentText("beforeend", text + "\n");
    pre.scrollTop = pre.scrollHeight;
    setTimeout(write, reduce ? 0 : (kind === "cmd" ? 260 : 90));
  };
  write();
}

/* ---------- wiring ---------- */

function act(name) {
  const [verb, key] = name.split(":");
  if (verb !== "open") return;
  if (key === "viewer") return openViewer();
  if (key === "terminal") return openTerminal();
  return openNamed(key);
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-act]");
  if (trigger) { act(trigger.dataset.act); return; }
  const link = e.target.closest("[data-open]");
  if (link) { e.preventDefault(); openNamed(link.dataset.open); }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  let front = null, z = -1;
  for (const w of wins.values()) {
    const wz = parseInt(w.el.style.zIndex || 0, 10);
    if (w.el.style.display !== "none" && wz > z) { z = wz; front = w; }
  }
  if (front) closeWindow(front.id);
});

/* Work submenu: every folder in the tree, one click away */
for (const node of TREE) {
  if (node.kind !== "dir") continue;
  for (const child of node.children) {
    const li = document.createElement("li");
    li.textContent = child.name;
    li.addEventListener("click", () => {
      path = pathTo(TREE, child);
      const host = wins.get("viewer")?.body.firstChild;
      if (host) renderBrowser(host);
      else openViewer();
      openDoc(child);
    });
    workSub.append(li);
  }
}

/* Bottom-left hint, desktop only */
const hint = document.createElement("div");
hint.id = "boot";
hint.textContent = "Click a folder to open its column · drag a title bar to move a window · esc closes the front one";
document.getElementById("screen").append(hint);

/* ---------- first paint ---------- */

openViewer();
path = [TREE[0]];
renderBrowser(wins.get("viewer").body.firstChild);
openDoc(TREE[0]);
bringToFront(wins.get("viewer"));
syncChrome();
