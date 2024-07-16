<script lang="ts">
  import me from "./images/me.jpg"
  import svelte from "./images/svelte.png"
  import bulma from "./images/bulma.png"
  import ts from "./images/ts.png"
  import apple_touch from "./images/apple-touch-icon.png"
  import favicon32 from "./images/favicon-32x32.png"
  import favicon16 from "./images/favicon-16x16.png"
  import manifest from "./images/site.webmanifest"

  import {onMount} from "svelte"
  import {getRepos, repos} from "./stores/hub"

  import theme from "svelte-highlight/styles/stackoverflow-dark"
  import {go, elixir} from "svelte-highlight/languages"
  import gleam from "@gleam-lang/highlight.js-gleam"

  import Project from "./lib/Project.svelte"
  import Skills from "./lib/Skills.svelte"
  import Experience from "./lib/Experience.svelte"
  import Ripple from "./lib/Ripple.svelte"
  import Using from "./lib/using.svelte"
  import {UAParser} from "ua-parser-js"
  import {general} from "./stores/general"
  let showRipple = false

  onMount(async () => {
    const parserResults = new UAParser(window.navigator.userAgent).getResult()
    general.set({isMobile: parserResults.device.type === "mobile"})
    setTimeout(() => (showRipple = true), 500)
    const reposPromise = getRepos("bwireman")

    repos.set(await reposPromise)
  })
</script>

<svelte:head>
  {@html theme}
  <link rel="apple-touch-icon" sizes="180x180" href={apple_touch} />
  <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
  <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
  <link rel="manifest" href={manifest} />
</svelte:head>

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
          <div id="self-intro" class="media-content is-size-4">
            I'm a Software Engineer, Kubernetes skeptic and D&D nerd, interested in functional programming, cyber
            security and distributed systems. I received a BS in Computer Science from the University of Michigan.
          </div>
        </div>
      </div>
      <footer class="card-footer lang-footer dark">
        <a target="_blank" href="https://www.linkedin.com/in/benjamin-wireman-1342bb127/" class="card-footer-item">
          <span class="icon is-size-2 has-text-dark"><i class="fab fa-linkedin" /></span>
        </a>
        <a target="_blank" href="https://github.com/bwireman" class="card-footer-item">
          <span class="icon is-size-2 has-text-dark"><i class="fab fa-github" /></span>
        </a>
        <a
          target="_blank"
          class="card-footer-item"
          href="https://docs.google.com/presentation/d/1N2xrT2oJJWhOVBrwjDFTDvo2qAC_D4nKvfQhBIt_Oqo/edit#slide=id.p1"
        >
          <span class="icon is-size-2 has-text-dark"><i class="fa-solid fa-file-export" /></span>
        </a>
      </footer>
    </div>
  </div>
</div>

<div class="columns enter-body is-centered">
  <div class="column is-two-fifths">
    <section class="section">
      <h1 class="title">
        <span class="icon is-large has-text-dark"><i class="fas fa-briefcase" /></span>
        Work Experience
      </h1>

      <Experience
        company="Splunk"
        roles={[
          {
            title: "Senior Software Engineer",
            span: "April 2024 - Now"
          }
        ]}
        description="Working to improve Splunk Cloud infrastructure & reliability."
      />

      <br />

      <Experience
        company="Alertmedia"
        roles={[
          {
            title: "Senior Software Engineer",
            span: "April 2022 - April 2024"
          },
          {
            title: "Software Engineer II",
            span: "June 2021 - April 2022"
          }
        ]}
        description="Doing full stack development for our saas product & managing our authentication/authorization implementations, using React, Django & Phoenix."
      />

      <br />

      <Experience
        company="Censys, Inc"
        roles={[
          {
            title: "Software Engineer",
            span: "August 2019 - June 2021"
          },
          {
            title: "Software Engineer Intern",
            span: "May 2019 - August 2019"
          }
        ]}
        description="Worked to develop micro-services, web scanners and ETL pipelines to ingest and process our data. Developed custom schema generation and helped to maintain our search engine."
      />

      <br />

      <Experience
        company="University Of Michigan, College of Engineering"
        roles={[
          {
            title: "Introduction to Computer Security Instructional Aide, EECS 388",
            span: "August 2018 - April 2019"
          }
        ]}
        description="I worked as an Instructional Aide for the University's intro Cyber Security course. The class was an overview of several security topics, including: Web Security, Cyber Forensics, and Shell Injection."
      />

      <br />

      <Experience
        company="Bank Of America"
        roles={[
          {
            title: "Global Markets Operations Technology Intern",
            span: "June 2018 - August 2018"
          }
        ]}
        description="I used 'sci-kit learn' to help develop machine learning models, & worked to develop tools to more easily get models trained in the future."
      />

      <br />

      <Experience
        company="Tyler Technologies, Courts & Justice"
        roles={[
          {
            title: "Development Intern",
            span: "June 2017 - August 2017"
          }
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
          {name: "Python"},
          {name: "Elixir"},
          {name: "Javascript"},
          {name: "Go"},
          {name: "Java"},
          {name: "Scala"},
          {name: "C"},
          {name: "C++"}
        ]}
      />

      <h1 class="title">
        <span class="icon is-large has-text-dark"><i class="fas fa-server" /></span>
        Technologies
      </h1>
      <Skills
        skills={[
          {icon: "fa-solid fa-server", name: "Django & Django Rest Framework"},
          {icon: "fa-solid fa-server", name: "Phoenix"},
          {icon: "fa-brands fa-js", name: "React"},
          {icon: "fa-brands fa-js", name: "Svelte"},
          {icon: "fa-solid fa-cloud", name: "Kubernetes"},
          {icon: "fa-solid fa-cloud", name: "AWS"},
          {icon: "fa-solid fa-cloud", name: "Google Cloud Platform"},
          {icon: "fa-solid fa-cloud", name: "GCP Pub Sub"},
          {icon: "fa-solid fa-cloud", name: "Terraform"},
          {icon: "fa-solid fa-server", name: "ElasticSearch"},
          {icon: "fa-solid fa-angles-right", name: "Apache Beam"},
          {icon: "fa-solid fa-angles-right", name: "Apache Airflow"},
          {icon: "fa-solid fa-terminal", name: "Docker"},
          {icon: "fa-solid fa-terminal", name: "Linux"},
          {icon: "fa-solid fa-terminal", name: "Bash"},
          {icon: "fa-solid fa-vector-square", name: "Protobuf"},
          {icon: "fa-solid fa-vector-square", name: "Avro"},
          {icon: "fa-solid fa-vector-square", name: "GRPC"},
          {icon: "fa-solid fa-database", name: "Postgres"},
          {icon: "fa-solid fa-database", name: "Big Query"},
          {icon: "fa-solid fa-database", name: "Redis"}
        ]}
      />
      <h1 class="title">
        <span class="icon is-large has-text-dark"><i class="fas fa-code-branch" /></span>
        Personal Projects
      </h1>
      <Project
        title="🕵️‍♂️ go-over"
        description="A tool to audit Erlang & Elixir dependencies, to make sure your ✨ gleam projects really sparkle!"
        lang="gleam"
        repo="go-over"
        packageName="go_over"
        hex={true}
        packageUrl="https://hex.pm/packages/go_over/"
        starCountFallback={1}
        header={false}
        language={{name: "gleam", register: gleam}}
        snippet="main/src/go_over/util/cache.gleam"
        snippetStart={625}
        snippetEnd={1500}
      />

      <br />

      <Project
        title="dreamy 😴"
        description="Dreamy provides useful macros, functions, types & operators to make elixir even dreamier"
        lang="dreamy"
        repo="dreamy"
        hex={true}
        packageUrl="https://hex.pm/packages/dreamy/"
        starCountFallback={0}
        language={elixir}
        snippet="main/lib/dreamy/monodic.ex"
        snippetStart={1355}
        snippetEnd={1721}
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
        title="🌵 cactus"
        description="A tool for managing git lifecycle hooks with ✨ gleam! Pre commit, Pre push and more!"
        lang="gleam"
        repo="cactus"
        hex={true}
        packageUrl="https://hex.pm/packages/cactus/"
        starCountFallback={5}
        language={{name: "gleam", register: gleam}}
        snippet="main/src/cactus/write.gleam"
        header={false}
        snippetStart={635}
        snippetEnd={2000}
      />
    </section>
  </div>
</div>
<footer class="footer">
  <div class="content">
    This site was built using
    <Using name="Svelte" link="https://svelte.dev/" image={svelte} />,
    <Using name="TypeScript" link="https://www.typescriptlang.org/" image={ts} /> &
    <Using name="Bulma" link="https://bulma.io/" image={bulma} />
  </div>
</footer>

{#if showRipple}
  <Ripple />
{/if}

<style lang="scss">
  @media screen and (min-width: 769px) {
    .mobile-image {
      display: none;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    .desktop-image {
      display: none;
      visibility: hidden;
    }
  }

  .enter {
    overflow: hidden;
    position: relative;

    animation: enter 1.2s ease;

    @keyframes enter {
      0% {
        opacity: 30%;
        transform: translateY(70%);
      }

      100% {
        transform: translateY(0%);
      }
    }
  }

  .enter-body {
    @extend .enter;
    animation-duration: 1350ms;
  }
</style>
