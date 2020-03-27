<template>
    <section>
            <h2 class="section">
              Personal projects
            </h2>
            <div>
              <div class="flex">
                <p class="font-bold mt-2 underline text-md mb-1">
                  Chewpy
                </p>
                <a
                  class="icon-text"
                  href="https://github.com/oscarteg/update-forked-repos"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    class="fas fa-home text-black mr-1"
                    data-fa-transform="shrink-1"
                  ></i>
                </a>
              </div>
              <p class="flex justify-between">
                <span class="italic">Fullstack&nbsp; (Laravel/VueJS)</span>
              </p>
              <div class="mt-4">
                <p class="paragraph">
                  Chewpy is an solution for people that want to eat vegetarian
                  but don't know where to start. For that reason I helped the
                  co-founder create a REST API and a a Oscar was responsible for
                  developing the backend application and the REST API for the
                  CMS system and the two mobile applications.
                </p>

                <ul class="ml-4 mb-2">
                  <li>
                    Developing the backend application, Oscar has developed the
                    REST Api together with the team to provide information to
                    the various applications.
                  </li>
                  <li>
                    Setting up the server, Oscar has set up the server on which
                    the core application runs.
                  </li>
                  <li>
                    Designing and implementing the CMS system, Oscar designed
                    the CMS systems and the CMS from the design made with
                    Boostrap.
                  </li>
                </ul>
              </div>

              <p class="paragraph italic">
                <strong>Skills</strong>: Machine Learning, VueJS, Laravel,
                Bootstrap, Clean Architecture, Clean Code, TDD.
              </p>
            </div>

            <div>
              <div class="flex">
                <p class="font-bold mt-2 underline text-md mb-1">
                  Update forked repos
                </p>

                <a
                  class="icon-text"
                  href="https://github.com/oscarteg/update-forked-repos"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    class="fab fa-github-alt text-black mr-1"
                    data-fa-transform="shrink-1"
                  ></i>
                </a>
              </div>

              <p class="paragraph">
                On my Github account, I make frequent use of “forking”
                repositories to save the repository for my own use. Updating a
                forked repository can be quite tedious so I wanted to make a CLI
                tool that automates this process. I have created a CLI tool in
                Go that uses the Graphql API of Github to create and accept pull
                request to update the repository with the latest commits of the
                original maintainer.
              </p>
              <p class="paragraph">
                This was the first time that I used Go to create a tool and that
                I used a Graphql API. With this, I wanted to learn about how to
                create a project in Go and how to use a Graphql API. There are
                still a lot of things that can improve.
              </p>
              <p class="paragraph italic">
                <strong>Skills</strong>: Git, Go, Graphql
              </p>
            </div>

            <div>
              <div class="flex">
                <p class="font-bold mt-2 underline text-md mb-1">
                  Kanban (WIP)
                </p>

                <a
                  class="icon-text"
                  href="https://github.com/oscarteg/kanban-client"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    class="fab fa-github-alt text-black mr-1"
                    data-fa-transform="shrink-1"
                  ></i>
                </a>
                <a
                  class="icon-text"
                  href="https://github.com/oscarteg/kanban-backend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    class="fab fa-github-alt text-black mr-1"
                    data-fa-transform="shrink-1"
                  ></i>
                </a>
              </div>
              <div>
                <p class="paragraph">
                  I am always trying to improve my own productivity by changing
                  how I work and maintain my own life. For this purpose, I
                  wanted to create an application that I can easily use to
                  create boards with tasks to see what I have to do. I could
                  have used Trello but I wanted to create something for myself.
                  In the future also wanted to integrate it with Toggle and
                  Google Calendar for a better overview. The technologies I used
                  are:
                </p>
                <ul class="ml-4 mb-2">
                  <li>
                    React with typescript, styled-components, Apollo,
                    react-beautiful-dnd and hooks. As for the design I use the
                    utility CSS library
                    <span class="italic">
                      <a href="https://tailwindcss.com">TailwindCSS</a> </span
                    >and
                    <span class="italic"
                      ><a href="https://ant.design">Ant Design</a></span
                    >
                  </li>
                  <li></li>
                  <li>
                    The backend is an Apollo Graphql server in
                    <span class="italic">Typescript</span>. Created with
                    <a href="https://prisma.io">Prisma</a> as an ORM and Graphql
                    resolver generator.
                  </li>
                  <li>
                    Deployment is done through Kubernetes and Gitlab-CI and
                    hosted in the cloud. (WIP)
                  </li>
                </ul>
              </div>
              <p class="paragraph italic">
                <strong>Skills</strong>: Git, TailwindCSS, React, Typescript,
                Graphql, Prisma, Kubernetes, styled-components,
                react-beautiful-dnd, react hooks, Gitlab-CI, AWS
              </p>
            </div>
            <div>
              <div class="flex">
                <p class="font-bold mt-2 underline text-md mb-1">
                  Blackjack (WIP)
                </p>

                <a
                  class="icon-text"
                  href="https://github.com/oscarteg/blackjack-client"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    class="fab fa-github-alt text-black mr-1"
                    data-fa-transform="shrink-1"
                  ></i>
                </a>
                <a
                  class="icon-text"
                  href="https://github.com/oscarteg/blackjack-backend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    class="fab fa-github-alt text-black mr-1"
                    data-fa-transform="shrink-1"
                  ></i>
                </a>
              </div>
              <div>
                <p class="paragraph">
                  Sometimes I am a bit bored and want to take my mind off
                  things. I came across a simple minimal application to play
                  blackjack and I wanted to build my own. It is a rather simple
                  minimal blackjack application. It uses the following
                  technologies:
                </p>
                <ul class="ml-4 mb-2">
                  <li>
                    Frontend in svelte with Apollo Client to fetch the data.
                  </li>
                  <li>
                    The backend is a Graphql in Go with Prisma as ORM and
                    Graphql resolver generator. It uses Apollo Server which uses
                    Express beneath.
                  </li>
                  <li>
                    The frontend is deployed to Netlify and the backend is
                    deployed to a Kubernetes cluster in the AWS Cloud
                  </li>
                </ul>
              </div>
              <p class="paragraph italic">
                <strong>Skills</strong>: Svelte, Apollo, Graphql, Kubernetes,
                Prisma, Git, MongoDB
              </p>
            </div>

            <div>
              <div class="flex">
                <p class="font-bold mt-2 underline text-md mb-1">
                  Cronjob monitor (WIP)
                </p>
              </div>
              <div>
                <p class="paragraph">
                  This is an application that monitors your cronjob with simple
                  HTTP requests. You can make an HTTP request to an endpoint to
                  verify that your cronjob has started and another HTTP request
                  to verify that your cronjob has ended. If the cronjob is not
                  started or not ended you can receive a notification. This
                  application is created with the following technologies:
                </p>
                <ul class="ml-4 mb-2">
                  <li>
                    The backend is created in Laravel with the utility CSS
                    library TailwindCSS with Postgresql as database. The
                    application is server-side rendered with a little bit of
                    VueJS.
                  </li>
                  <li>
                    The deployment and testing is done with Gitlab CI to an EC2
                    instance om AWS. (WIP)
                  </li>
                </ul>
              </div>
              <p class="paragraph italic">
                <strong>Skills</strong>: PHP, Laravel, Redis, Postgresql,
                TailwindCSS, Gitlab CI, AWS, Linux
              </p>
            </div>
          </section>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>