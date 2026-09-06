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
      <img class="portrait" src="img/maxim.png" alt="Maxim Dnestreanschii" width="308" height="308">
      <h1>Maxim Dnestreanschii</h1>
      <p class="kicker">Software engineer · Sønderborg, Denmark</p>
      <p>I study software engineering at the University of Southern Denmark and work part-time as an engineer at 2ai. I build AI systems that go into production and stay there: agents with real tools, the pipelines that feed them, and the web and backend services around them.</p>
      <p>Most of what I ship is the unglamorous half. Which tool an agent is allowed to call. The evaluation run that catches a bad answer before a customer reads it. The container that has to come back up on its own at three in the morning. I run the deployments for the services I own, so I find out quickly when I got that wrong.</p>
      <p>In June 2026 I went to Strasbourg with <b>team ALL FOR ONE</b> from Moldova for <i>Hack the Hate, Renew Democracy</i>, the Council of Europe's democracy hackathon. We were named a finalist — one of four teams out of twenty, from sixteen countries — for <a href="#" data-open="agnospeech">AgnoSpeech</a>, and the Council published a <a href="https://www.coe.int/en/web/new-democratic-pact-for-europe/2026-hackathon" target="_blank" rel="noopener">write-up of it</a>. That week moved what I want to work on: systems where the interesting constraint is what the software must refuse to do.</p>
      <h2>Right now</h2>
      <ul>
        <li>Agent tooling and the company data discovery service at 2ai</li>
        <li>Second year of a BSc in Software Engineering at SDU, 2025–2028</li>
        <li>Open to summer internships, research assistantships and thesis collaborations in applied AI, privacy engineering and information integrity</li>
      </ul>
      <p><a class="btn" href="#" data-open="contact">Get in touch</a><a class="btn" href="#" data-open="cv">Read the CV</a></p>
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
          <span class="flag">Council of Europe finalist · 4 of 20 teams</span>
          <h1>AgnoSpeech</h1>
          <p class="kicker">Team ALL FOR ONE, Moldova · Hack the Hate, Renew Democracy · Palais de l'Europe, Strasbourg · 17–19 June 2026</p>
          <p>Hate speech detectors read raw text, and raw text hands them a shortcut. Dialect and writing style predict harm well enough that a model quietly starts scoring who wrote something instead of what it says. The same text also fingerprints its author, which is why the records a helpline collects cannot simply be handed to a researcher — the tools built to defend a community end up exposing it.</p>
          <p>AgnoSpeech takes the identity out and leaves the evidence in. Most tools stop at deleting names; writing style alone still re-identifies an author. So it redacts identifiers, reduces each message to the content that carries the harm, checks that the meaning survived, and then runs an attacker against its own output to measure how much identity signal is left. The result is a number you can argue with rather than a promise you have to trust. All of it runs on a laptop CPU: no cloud call, no raw text leaving the machine.</p>
          <h2>My part</h2>
          <ul>
            <li>Owned the backend pipeline — the transformation, the attacker that scores it, and everything between them.</li>
            <li>Built and deployed the workbench the jury used to run it live.</li>
          </ul>
          <h2>The result</h2>
          <p>Twenty teams from sixteen countries competed across four challenges at <i>Hack the Hate, Renew Democracy</i>. Team ALL FOR ONE was named a finalist — one of the four teams the Council of Europe singled out — on the privacy-preserving hate speech detection challenge, mentored by a researcher from the Technical University of Munich. The Council published a write-up of the project on its own site.</p>
          <h2>The code</h2>
          <div class="rows">
            <div><b>AgnoSpeech</b><span><a href="https://github.com/AllForOne-md/AgnoSpeech" target="_blank" rel="noopener">AllForOne-md/AgnoSpeech</a> — the PrivHSD implementations</span></div>
            <div><b>Workbench</b><span><a href="https://github.com/AllForOne-md/AgnoSpeech-deployed" target="_blank" rel="noopener">AgnoSpeech-deployed</a> — the on-device privatization workbench I built and shipped</span></div>
            <div><b>Core</b><span><a href="https://github.com/AllForOne-md/agnospeech-core" target="_blank" rel="noopener">agnospeech-core</a> — the lexicon-free tiered privatization mechanism</span></div>
          </div>
          <p><a class="btn" href="https://www.coe.int/en/web/new-democratic-pact-for-europe/2026-hackathon" target="_blank" rel="noopener">Read it on coe.int</a><a class="btn" href="https://github.com/AllForOne-md" target="_blank" rel="noopener">All the repos</a></p>
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
          <p class="kicker">Research tooling for a non-technical operator · 2ai</p>
          <p>Someone who does not write code runs this to research a company, find the right person inside it, and file the result in the CRM.</p>
          <p>It calls paid APIs, so it has a spending limit it will not cross and it reports what a run cost. An autonomous tool with access to a company card is a bug report waiting to be written.</p>
        `)
      },
      {
        name: "HPO", kind: "doc", body: doc(`
          <h1>Heat Production Optimiser</h1>
          <p class="kicker">Second-semester project · SDU group 14 · C# and Avalonia · February – June 2026</p>
          <p>A desktop application that plans how a district heating grid should run. It reads the grid and its production units, takes a demand time series, and works out which units to fire when so the heat gets made for the least money.</p>
          <p>Built as five modules with a clear seam between them — asset manager, source data manager, optimiser, result data manager, and the visualisation on top — each with its own interface and its own unit tests. That structure was the actual point of the semester: the optimiser can be rewritten without touching anything that reads a CSV.</p>
          <div class="rows">
            <div><b>Stack</b><span>C#, .NET, Avalonia UI, MVVM, xUnit</span></div>
            <div><b>Source</b><span><a href="https://github.com/MaxDnes/HPO" target="_blank" rel="noopener">github.com/MaxDnes/HPO</a></span></div>
          </div>
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
        name: "Curriculum vitae", kind: "doc", body: doc(`
          <h1>Curriculum vitae</h1>
          <p class="kicker">Maxim Dnestreanschii · Software engineer · Sønderborg, Denmark</p>

          <p>Software engineering student at the University of Southern Denmark, part-time engineer at 2ai since April 2026. I build AI systems that go into production and stay there: agents with real tools and MCP integrations, the data pipelines that feed them, and the web and backend services around them. In June 2026 my team was a finalist at the Council of Europe Democracy Hackathon in Strasbourg.</p>

          <h2>Experience</h2>

          <div class="entry">
            <div class="top"><span class="role">Software Engineer, part-time</span><span class="when">April 2026 – present</span></div>
            <p class="org">2ai · Sønderborg, Denmark · hybrid</p>
            <ul>
              <li>Build across the web platform and the services behind it: Next.js dashboards, NestJS microservices, Docker deployments on Coolify and Vercel.</li>
              <li>Design the tooling the agents use in production — which tools exist, what belongs in a skill, and the evaluation runs that catch a bad answer before a customer sees it.</li>
              <li>Own the company data discovery service that fills customer records from public sources.</li>
              <li>Run the deployments for the services I own: containers, secrets, health checks, error reporting.</li>
            </ul>
          </div>

          <div class="entry">
            <div class="top"><span class="role">Backend Developer, intern</span><span class="when">June – November 2024</span></div>
            <p class="org">AIFustion</p>
            <ul>
              <li>Wrote and maintained backend services in C# and ASP.NET, including the API endpoints and the data access layer under them.</li>
              <li>Designed MSSQL schemas and the queries against them, using Entity Framework for persistence and for the migration that came with each schema change.</li>
              <li>Worked in an agile team and learned how a change gets from code review onto a server.</li>
            </ul>
          </div>

          <h2>Selected projects</h2>

          <div class="entry">
            <div class="top"><span class="role">AgnoSpeech</span><span class="when">Strasbourg, June 2026</span></div>
            <p class="org">Council of Europe Democracy Hackathon · finalist, 4 of 20 teams · Team ALL FOR ONE, Moldova</p>
            <ul>
              <li>Takes the identity out of hate speech records and leaves the evidence in, so a helpline or a researcher can share the data without exposing the people inside it.</li>
              <li>Runs an attacker against its own output to measure the identity signal that survived. CPU only — nothing leaves the machine.</li>
              <li>I owned the backend pipeline and the deployed workbench. <a href="https://www.coe.int/en/web/new-democratic-pact-for-europe/2026-hackathon" target="_blank" rel="noopener">Council of Europe write-up</a>.</li>
            </ul>
          </div>

          <div class="entry">
            <div class="top"><span class="role">Tom, an AI colleague with a physical body</span><span class="when">2ai</span></div>
            <ul>
              <li>An internal agent whose memory lives in a git repository, so anything it believes is a diff a person can read and revert.</li>
              <li>Answers in chat, in a dashboard and out of a small desk robot; tools unlock by role. I worked on deployment and remote access.</li>
            </ul>
          </div>

          <div class="entry">
            <div class="top"><span class="role">Entity discovery from public sources</span><span class="when">2ai</span></div>
            <ul>
              <li>Reads company websites and public registries and turns them into structured records.</li>
              <li>Benchmarked on how often it picks the right company instead of a namesake, which is where this kind of tool usually breaks.</li>
            </ul>
          </div>

          <div class="entry">
            <div class="top"><span class="role">Lead generation engine</span><span class="when">2ai</span></div>
            <ul>
              <li>A tool a non-technical operator runs to research companies, find the right contact and file the result in a CRM.</li>
              <li>Enforces a spending limit on the paid APIs it calls, and reports what a run cost.</li>
            </ul>
          </div>

          <h2>Skills</h2>
          <div class="rows">
            <div><b>AI engineering</b><span>LLM agents, MCP servers and clients, agent skills, tool design, evaluation harnesses, on-device models</span></div>
            <div><b>Frontend</b><span>Next.js, React, TypeScript, Tailwind CSS</span></div>
            <div><b>Backend</b><span>Node.js, NestJS, Python, C#, ASP.NET, REST APIs, background jobs</span></div>
            <div><b>Databases</b><span>PostgreSQL, Supabase, Prisma, MSSQL, T-SQL, Entity Framework</span></div>
            <div><b>Tools and platforms</b><span>Docker, Vercel, Coolify, GitHub Actions, Git, Linux administration</span></div>
          </div>

          <h2>Education</h2>
          <div class="entry">
            <div class="top"><span class="role">BSc in Software Engineering</span><span class="when">September 2025 – May 2028</span></div>
            <p class="org">University of Southern Denmark (SDU), Sønderborg</p>
          </div>

          <h2>Languages and certifications</h2>
          <div class="rows">
            <div><b>Romanian</b><span>Native</span></div>
            <div><b>Russian</b><span>Native</span></div>
            <div><b>English</b><span>C1 · IELTS 8.0</span></div>
            <div><b>Certification</b><span>Certiport IT Specialist — Device Configuration, Databases, Python (2024)</span></div>
          </div>

          <h2>Contact</h2>
          <div class="rows">
            <div><b>Email</b><span><a href="mailto:dnestreanschiimaxim780@gmail.com">dnestreanschiimaxim780@gmail.com</a></span></div>
            <div><b>Phone</b><span>+45 71 42 28 42</span></div>
            <div><b>LinkedIn</b><span><a href="https://www.linkedin.com/in/maxim-dnestreanschii-2b09b3387/" target="_blank" rel="noopener">maxim-dnestreanschii</a></span></div>
          </div>

          <h2>As a PDF</h2>
          <p>Two versions of the same career, aimed at different readers.</p>
          <p><a class="btn" href="#" data-open="pdf-eng">Engineering CV</a><a class="btn" href="#" data-open="pdf-policy">Privacy &amp; policy CV</a></p>
        `)
      },
      {
        name: "Engineering CV.pdf", kind: "pdf", icon: "pdf",
        href: "cv/Maxim-Dnestreanschii-CV.pdf",
        note: "One page, for software and AI engineering roles.",
      },
      {
        name: "Privacy CV.pdf", kind: "pdf", icon: "pdf",
        href: "cv/Maxim-Dnestreanschii-CV-Policy.pdf",
        note: "The same work told for a policy, research or seminar reader.",
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
      if (node.kind === "pdf") openPdf(node);
      else if (node.kind !== "dir") openDoc(node);
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

const clamp = (lo, v, hi) => Math.max(lo, Math.min(v, hi));

/* One layout, computed once, so the three windows land as a composition
   rather than a pile. */
function layout() {
  const dockW = window.innerWidth > 860 ? 76 : 0;
  const w = window.innerWidth - dockW;
  const h = window.innerHeight;
  const wide = w >= 1300;            // two columns of windows, still clear of the menu
  const tall = h >= 760;             // room for the terminal underneath

  const colW = wide ? 576 : clamp(320, w - 120, 620);
  const docW = wide ? 576 : clamp(340, w - 160, 600);
  const groupW = wide ? colW + 16 + docW : Math.max(colW, docW);
  const left = clamp(wide ? 176 : 20, Math.round((w - groupW) / 2), 520);

  const vH = tall ? clamp(300, h - 460, 460) : clamp(260, h - 140, 460);
  const tH = clamp(200, h - 130 - vH, 340);
  const groupH = tall ? vH + 16 + tH : vH;
  const top = clamp(54, Math.round((h - groupH) / 2) - 20, 130);

  const viewer = { x: left, y: top, w: colW, h: vH };
  const term = { x: left, y: top + vH + 16, w: colW, h: tH };
  const docX = wide ? left + colW + 16 : clamp(20, left + 44, w - docW - 20);
  const doc = { x: docX, y: top + (wide ? 24 : 54), w: docW, h: clamp(300, groupH - 48, 700) };

  return { viewer, term, doc, wide, tall, w, h };
}

function openViewer() {
  const L = layout();
  const host = document.createElement("div");
  host.style.cssText = "flex:1;min-width:0;display:flex;flex-direction:column";
  renderBrowser(host);
  makeWindow("viewer", { title: "Workspace", ...L.viewer, content: host });
}

function openDoc(node) {
  const wrap = document.createElement("div");
  wrap.className = "scroller";
  const d = document.createElement("div");
  d.className = "doc";
  d.innerHTML = node.body;
  wrap.append(d);
  makeWindow("doc", { title: node.name, ...layout().doc, content: wrap });
}

/* The PDF opens inside a window rather than throwing the visitor at a download. */
function openPdf(node) {
  const L = layout();
  const view = document.createElement("div");
  view.className = "pdfview";

  const bar = document.createElement("div");
  bar.className = "pdfbar";
  bar.innerHTML =
    `<span class="pdfname"></span>` +
    `<a class="btn" href="${node.href}" target="_blank" rel="noopener">Open in a new tab</a>` +
    `<a class="btn" href="${node.href}" download>Download</a>`;
  bar.querySelector(".pdfname").textContent = node.note || "";

  const frame = document.createElement("iframe");
  frame.src = node.href + "#view=FitH";
  frame.title = node.name;

  const note = document.createElement("p");
  note.className = "pdfnote";
  note.textContent = "Your browser is showing this one in its own tab instead. Use the buttons above.";

  view.append(bar, frame, note);

  const w = clamp(340, Math.min(760, L.w - 80), 760);
  makeWindow("preview", {
    title: node.name,
    x: clamp(20, Math.round((L.w - w) / 2) + 40, L.w - w - 20),
    y: 60,
    w,
    h: clamp(320, L.h - 120, 900),
    content: view,
  });
}

function openNamed(key) {
  const flat = [];
  const walk = (list) => list.forEach((n) => { flat.push(n); if (n.children) walk(n.children); });
  walk(TREE);
  const map = {
    readme: "Read Me",
    contact: "Contact",
    cv: "Curriculum vitae",
    agnospeech: "AgnoSpeech",
    "pdf-eng": "Engineering CV.pdf",
    "pdf-policy": "Privacy CV.pdf",
  };
  const node = flat.find((n) => n.name === map[key]);
  if (node) {
    path = pathTo(TREE, node) || [node];
    const host = wins.get("viewer")?.body.firstChild;
    if (host) renderBrowser(host);
    if (node.kind === "pdf") openPdf(node);
    else openDoc(node);
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
  ["cmd", "whoami"],
  ["out", "Maxim Dnestreanschii — software engineer. SDU, and 2ai part-time."],
  ["out", ""],
  ["cmd", "what --do-you-build"],
  ["out", "Agents with real tools, the pipelines that feed them,"],
  ["out", "the interfaces on top and the deployments underneath."],
  ["out", ""],
  ["cmd", "ls open-to/"],
  ["out", "summer-internship/   research-assistant/   thesis-collaboration/"],
  ["out", ""],
  ["cmd", "cat contact"],
  ["out", "dnestreanschiimaxim780@gmail.com   ·   +45 71 42 28 42"],
];

function openTerminal() {
  const shell = document.createElement("div");
  shell.className = "term";
  const pre = document.createElement("div");
  pre.className = "term-in";
  shell.append(pre);
  makeWindow("terminal", { title: "Terminal", ...layout().term, content: shell });

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
    shell.scrollTop = shell.scrollHeight;
    setTimeout(write, reduce ? 0 : (kind === "cmd" ? 260 : 90));
  };
  write();
}

/* ---------- desktop patterns ---------- */

const PATTERNS = [
  ["slate", "Slate"],
  ["weave", "Weave"],
  ["grid", "Grid"],
  ["night", "Night"],
  ["blueprint", "Blueprint"],
  ["hatch", "Hatch"],
];

function setPattern(id) {
  document.body.dataset.pattern = id;
  try { localStorage.setItem("pattern", id); } catch (e) { /* private window */ }
  for (const s of document.querySelectorAll(".swatch")) s.setAttribute("aria-pressed", String(s.dataset.pattern === id));
}

function openPrefs() {
  const L = layout();
  const wrap = document.createElement("div");
  wrap.className = "scroller";
  const d = document.createElement("div");
  d.className = "doc prefs";
  d.innerHTML = `<h1>Preferences</h1><p class="kicker">The desktop, and the sound it makes</p><h2>Desktop pattern</h2>`;

  const grid = document.createElement("div");
  grid.className = "swatches";
  for (const [id, label] of PATTERNS) {
    const b = document.createElement("button");
    b.className = "swatch";
    b.dataset.pattern = id;
    b.type = "button";
    b.innerHTML = `<span class="sw sw-${id}"></span><span class="lb"></span>`;
    b.querySelector(".lb").textContent = label;
    b.addEventListener("click", () => setPattern(id));
    grid.append(b);
  }
  d.append(grid);

  const rest = document.createElement("div");
  rest.innerHTML =
    `<h2>Sound</h2><p>The Workspace theme is generated in the browser, note by note, so there is no audio file to load. It never starts on its own.</p>` +
    `<p><a class="btn" href="#" data-act="open:sound">Open the player</a></p>`;
  d.append(rest);

  wrap.append(d);
  makeWindow("prefs", {
    title: "Preferences",
    x: clamp(20, Math.round(L.w / 2) - 200, L.w - 420), y: 120,
    w: 400, h: clamp(300, Math.min(470, L.h - 180), 520),
    content: wrap,
  });
  setPattern(document.body.dataset.pattern || "slate");
}

/* ---------- sound: generated, never automatic ---------- */

const Sound = {
  ctx: null, gain: null, timer: null, playing: false, level: 0.5,
  scale: [0, 3, 5, 7, 10, 12, 15, 19],   // minor pentatonic-ish, two octaves
  root: 146.83,                           // D3

  start() {
    if (this.playing) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = this.ctx || new AC();
    this.ctx.resume();

    this.gain = this.ctx.createGain();
    this.gain.gain.value = this.level * 0.5;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1800;
    filter.Q.value = 0.7;
    this.gain.connect(filter).connect(this.ctx.destination);

    this.playing = true;
    const step = () => {
      if (!this.playing) return;
      this.voice(this.root * Math.pow(2, this.scale[Math.floor(Math.random() * this.scale.length)] / 12), 2.6);
      if (Math.random() < 0.4) this.voice(this.root / 2, 4.5, 0.35);
      this.timer = setTimeout(step, 900 + Math.random() * 1100);
    };
    step();
    this.sync();
  },

  voice(freq, dur, amp = 0.22) {
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    env.gain.setValueAtTime(0.0001, t);
    env.gain.exponentialRampToValueAtTime(amp, t + 0.35);
    env.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(env).connect(this.gain);
    osc.start(t);
    osc.stop(t + dur + 0.1);
  },

  stop() {
    this.playing = false;
    clearTimeout(this.timer);
    if (this.gain) this.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
    this.sync();
  },

  setLevel(v) {
    this.level = v;
    if (this.gain) this.gain.gain.setTargetAtTime(v * 0.5, this.ctx.currentTime, 0.05);
  },

  sync() {
    const btn = document.querySelector(".player .toggle");
    if (btn) btn.textContent = this.playing ? "Stop" : "Play";
    const led = document.querySelector(".player .led");
    if (led) led.classList.toggle("on", this.playing);
    document.querySelector('.tile[data-act="open:sound"]')?.classList.toggle("lit", this.playing);
  },
};

function openSound() {
  const L = layout();
  const box = document.createElement("div");
  box.className = "player";
  box.innerHTML =
    `<div class="face">` +
      `<span class="led" aria-hidden="true"></span>` +
      `<div class="meta"><b>Workspace theme</b><span>Generated live · no file, no autoplay</span></div>` +
    `</div>` +
    `<div class="controls">` +
      `<button class="btn toggle" type="button">Play</button>` +
      `<label class="vol">Volume<input type="range" min="0" max="100" value="50" aria-label="Volume"></label>` +
    `</div>`;

  box.querySelector(".toggle").addEventListener("click", () => (Sound.playing ? Sound.stop() : Sound.start()));
  box.querySelector("input").addEventListener("input", (e) => Sound.setLevel(e.target.value / 100));

  makeWindow("sound", {
    title: "Sound",
    x: clamp(20, L.w - 360, L.w - 320), y: clamp(60, L.h - 220, L.h - 160),
    w: 300, h: 132,
    content: box,
  });
  Sound.sync();
}

/* ---------- wiring ---------- */

function act(name) {
  const [verb, key] = name.split(":");
  if (verb !== "open") return;
  if (key === "viewer") return openViewer();
  if (key === "terminal") return openTerminal();
  if (key === "prefs") return openPrefs();
  if (key === "sound") return openSound();
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

try { setPattern(localStorage.getItem("pattern") || "slate"); }
catch (e) { setPattern("slate"); }

openViewer();
path = [TREE[0]];
renderBrowser(wins.get("viewer").body.firstChild);
openDoc(TREE[0]);
if (layout().tall && window.innerWidth > 860) openTerminal();
bringToFront(wins.get("viewer"));
syncChrome();
