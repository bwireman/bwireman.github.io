<script lang="ts">
  import me from "./me.jpg";
  import { onMount } from "svelte";
  import { getRepos, repos } from "./assets/hub";
  import Project from "./lib/Project.svelte";
  import { go, typescript, elixir } from "svelte-highlight/languages";

  onMount(async () => {
    repos.set(await getRepos("bwireman"));
  });
</script>

<section class="hero is-dark">
  <div class="hero-body">
    <p class="title">Ben Wireman</p>
    <p class="subtitle">Software Engineer</p>
  </div>
</section>

<br />
<div class="columns enter is-centered">
  <div class="column is-four-fifths">
    <div class="card">
      <div class="card-image mobile-image">
        <figure class="image">
          <img src={me} alt="Me" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="desktop-image media-left">
            <figure class="image is-128x128">
              <img class="is-rounded" src={me} alt="Me" />
            </figure>
          </div>
          <div class="media-content is-size-4">
            I'm a Software Engineer, Kubernetes skeptic and D&D nerd, interested
            in functional programming, cyber security and distributed systems. I
            received a BS in Computer Science from the University of Michigan.
          </div>
        </div>
      </div>
      <footer class="card-footer lang-footer dark">
        <a
          href="https://www.linkedin.com/in/benjamin-wireman-1342bb127/"
          class="card-footer-item"
        >
          <span class="icon is-size-2 has-text-dark"
            ><i class="fab fa-linkedin" /></span
          >
        </a>
        <a href="https://github.com/bwireman" class="card-footer-item">
          <span class="icon is-size-2 has-text-dark"
            ><i class="fab fa-github" /></span
          >
        </a>
      </footer>
    </div>
  </div>
</div>

<div class="columns enter-b is-centered">
  <div class="column is-two-fifths">
    <section class="section">
      <h1 class="title">
        <span class="icon is-large has-text-dark"
          ><i class="fas fa-briefcase" /></span
        >
        Work Experience
      </h1>

      <div class="card hoverable">
        <div class="card-content">
          <p class="title">Alertmedia</p>
          <p class="subtitle">
            Senior Software Engineer<span class="small"
              ><br />April 2022 - Now</span
            ><br />
            Software Engineer II<span class="small"
              ><br />June 2021 - April 2022</span
            >
          </p>
          <p>
            Doing full stack development for our saas product, using React and
            Django.
          </p>
        </div>
      </div>

      <br />
      <div class="card hoverable">
        <div class="card-content">
          <p class="title">Censys, Inc</p>
          <p class="subtitle">
            Software Engineer<span class="small"
              ><br />August 2019 - June 2021</span
            >
          </p>
          <p>
            Worked to develop micro-services and ETL pipelines to ingest and
            process our data. Developed custom schema generation and helped to
            maintain our search engine.
          </p>
        </div>
      </div>

      <br />
      <div class="card hoverable">
        <div class="card-content">
          <p class="title">Censys, Inc</p>
          <p class="subtitle">
            Software Engineer Intern<span class="small"
              ><br />May 2019 - August 2019</span
            >
          </p>
          <p>Helped develop scanners for the Censys search engine.</p>
        </div>
      </div>

      <br />
      <div class="card hoverable">
        <div class="card-content">
          <p class="title">University Of Michigan, College of Engineering</p>
          <p class="subtitle">
            Introduction to Computer Security IA, EECS 388<span class="small"
              ><br />August 2018 - April 2019</span
            >
          </p>
          <p>
            I worked as an Instructional Aide for the University’s intro Cyber
            Security course. The class was an overview of several security
            topics, including: Web Security, Cyber Forensics, and Shell
            Injection.
          </p>
        </div>
      </div>

      <br />
      <div class="card hoverable">
        <div class="card-content">
          <p class="title">Bank Of America</p>
          <p class="subtitle">
            Global Markets Operations Technology Intern<span class="small"
              ><br />June 2018 - August 2018</span
            >
          </p>
          <p>
            I used 'sci-kit learn' to help develop machine learning models, &
            worked to develop tools to more easily get models trained in the
            future.
          </p>
        </div>
      </div>

      <br />
      <div class="card hoverable">
        <div class="card-content">
          <p class="title">Tyler Technologies, Courts & Justice</p>
          <p class="subtitle">
            Development Intern<span class="small"
              ><br />August 2017 - April 2017</span
            >
          </p>
          <p>
            Helped to rebuild the company's internal project tracking site,
            using .NET, Angular.JS & Elasticsearch.
          </p>
        </div>
      </div>
    </section>
  </div>

  <div class="column is-two-fifths">
    <section class="section">
      <h1 class="title">λ Programming Languages</h1>
      <div class="content is-size-5">
        <ul>
          <li>Python</li>
          <li>Elixir</li>
          <li>Javascript</li>
          <li>GO</li>
          <li>Java</li>
          <li>Scala</li>
          <li>C/C++</li>
        </ul>
      </div>

      <h1 class="title">
        <span class="icon is-large has-text-dark"
          ><i class="fas fa-server" /></span
        >
        Technologies
      </h1>
      <div class="content is-size-5">
        <ul>
          <li>React & Svelte</li>
          <li>Django & Django Rest Framework</li>
          <li>Linux</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Phoenix</li>
          <li>ElasticSearch</li>
          <li>AWS & Google Cloud Platform</li>
          <li>Apache Beam & Airflow</li>
          <li>Bash</li>
        </ul>
      </div>
      <h1 class="title">
        <span class="icon is-large has-text-dark"
          ><i class="fas fa-code-branch" /></span
        >
        Personal Projects
      </h1>

      <Project
        title="gleam_pb"
        description="Protobuf support for Gleam ✨, written in GO"
        lang="golang"
        repo="gleam_pb"
        star_count_fallback={14}
        language={go}
        snippetStart={92}
        snippetEnd={465}
        snippet="main/pkg/gleam/gpb.go"
      />

      <br />

      <Project
        title="censys_ex"
        description="Elixir ⚗️ wrapper for Censys Search V2 API"
        lang="elixir"
        repo="censys_ex"
        packageUrl="https://hex.pm/packages/censys_ex/"
        star_count_fallback={4}
        language={elixir}
        snippet="main/lib/api/paginate.ex"
        snippetStart={1000}
        snippetEnd={1500}
      />

      <br />

      <Project
        title="esgleam"
        description="esbuild plugin for gleam 🌸"
        lang="gleam"
        repo="esgleam"
        packageUrl="https://www.npmjs.com/package/esgleam"
        star_count_fallback={7}
        language={typescript}
        snippet="main/index.ts"
        snippetStart={1050}
        snippetEnd={1495}
      />
    </section>
  </div>
</div>
