<script lang="ts">
  import me from "./me.jpg";
  import { onMount } from "svelte";
  import { getRepos, repos } from "./stores/hub";
  import { go, typescript, elixir } from "svelte-highlight/languages";
  import Project from "./lib/Project.svelte";
  import Skills from "./lib/Skills.svelte";
  import Experience from "./lib/Experience.svelte";

  onMount(async () => repos.set(await getRepos("bwireman")));
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

      <Experience
        company="Alertmedia"
        roles={[
          {
            title: "Senior Software Engineer",
            span: "April 2022 - Now",
          },
          {
            title: "Software Engineer II",
            span: "June 2021 - April 2022",
          },
        ]}
        description="Doing full stack development for our saas product & managing our authentication/authorization implementations, using React, Django & Phoenix."
      />

      <br />

      <Experience
        company="Censys, Inc"
        roles={[
          {
            title: "Software Engineer",
            span: "August 2019 - June 2021",
          },
          {
            title: "Software Engineer Intern",
            span: "May 2019 - August 2019",
          },
        ]}
        description="Worked to develop micro-services, web scanners and ETL pipelines to ingest and process our data. Developed custom schema generation and helped to maintain our search engine."
      />

      <br />

      <Experience
        company="University Of Michigan, College of Engineering"
        roles={[
          {
            title:
              "Introduction to Computer Security Instructional Aide, EECS 388",
            span: "August 2018 - April 2019",
          },
        ]}
        description="I worked as an Instructional Aide for the University's intro Cyber Security course. The class was an overview of several security topics, including: Web Security, Cyber Forensics, and Shell Injection."
      />

      <br />

      <Experience
        company="Bank Of America"
        roles={[
          {
            title: "Global Markets Operations Technology Intern",
            span: "June 2018 - August 2018",
          },
        ]}
        description="I used 'sci-kit learn' to help develop machine learning models, & worked to develop tools to more easily get models trained in the future."
      />

      <br />

      <Experience
        company="Tyler Technologies, Courts & Justice"
        roles={[
          {
            title: "Development Intern",
            span: "August 2017 - April 2017",
          },
        ]}
        description="Helped to rebuild the company's internal project tracking site, using .NET, Angular.JS & Elasticsearch."
      />
    </section>
  </div>

  <div class="column is-two-fifths">
    <section class="section">
      <h1 class="title">λ Programming Languages</h1>
      <Skills
        skills={[
          "Python",
          "Elixir",
          "Javascript",
          "GO",
          "Java",
          "Scala",
          "C/C++",
        ]}
      />

      <h1 class="title">
        <span class="icon is-large has-text-dark"
          ><i class="fas fa-server" /></span
        >
        Technologies
      </h1>
      <Skills
        skills={[
          "React & Svelte",
          "Django & Django Rest Framework",
          "Linux",
          "Docker",
          "Kubernetes",
          "Phoenix",
          "ElasticSearch",
          "AWS & Google Cloud Platform",
          "Apache Beam & Airflow",
          "Bash",
        ]}
      />
      <h1 class="title">
        <span class="icon is-large has-text-dark"
          ><i class="fas fa-code-branch" /></span
        >
        Personal Projects
      </h1>

      <Project
        title="genus"
        description="Elixir macros for generating TypeScript interfaces"
        lang="genus"
        repo="genus"
        starCountFallback={3}
        language={elixir}
        snippet="main/lib/example.ex"
        snippetStart={510}
        snippetEnd={1090}
      />

      <br />

      <Project
        title="gleam_pb"
        description="Protobuf support for Gleam ✨, written in GO"
        lang="golang"
        repo="gleam_pb"
        starCountFallback={14}
        language={go}
        snippetStart={92}
        snippetEnd={465}
        snippet="main/pkg/gleam/gpb.go"
      />

      <br />

      <Project
        title="censys_ex"
        description="Elixir ⚗️ wrapper for Censys Search V2 API"
        lang="censys_ex"
        repo="censys_ex"
        packageUrl="https://hex.pm/packages/censys_ex/"
        starCountFallback={4}
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
        starCountFallback={8}
        language={typescript}
        snippet="main/index.ts"
        snippetStart={1050}
        snippetEnd={1495}
      />
    </section>
  </div>
</div>
