import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import { Card } from '~/components/ui/card/card'
import { Col } from '~/components/ui/col/col'
import { Flex } from '~/components/ui/flex/flex'

export default component$(() => {
  return (
    <div>
      <Flex>
        <Card title="Welcome to Qwik ">
          <p>Mon text</p>
        </Card>

        <Card type="highlight" title="Welcome to Qwik">
          <div class="card-separate">Mon text</div>
          <div class="card-separate">Mon text</div>
          <div class="card-separate">Mon text</div>
          <div class="card-separate">Mon text</div>
          <div class="card-separate">Mon text</div>
        </Card>
        <Card type="info" title="Welcome to Qwik ">
          <p>Mon text</p>
        </Card>
        <Card type="warning" title="Welcome to Qwik ">
          <p>Mon text</p>
        </Card>
      </Flex>

      <br />
      <Col>
        <Card>
          <p>zd</p>
        </Card>

        <Card>
          <ul>
            <li>
              Check out the <code>src/routes</code> directory to get started.
            </li>
            <li>
              Add integrations with <code>npm run qwik add</code>.
            </li>
            <li>
              More info about development in <code>README.md</code>
            </li>
          </ul>
        </Card>

        <Card>
          <table class="commands">
            <tr>
              <td>
                <code>npm run dev</code>
              </td>
              <td>Start the dev server and watch for changes.</td>
            </tr>
            <tr>
              <td>
                <code>npm run preview</code>
              </td>
              <td>Production build and start preview server.</td>
            </tr>
            <tr>
              <td>
                <code>npm run build</code>
              </td>
              <td>Production build.</td>
            </tr>
            <tr>
              <td>
                <code>npm run qwik add</code>
              </td>
              <td>Select an integration to add.</td>
            </tr>
          </table>
        </Card>

        <Card title="Add Integrations">
          <table class="commands">
            <tr>
              <td>
                <code>npm run qwik add cloudflare-pages</code>
              </td>
              <td>
                <a
                  href="https://developers.cloudflare.com/pages"
                  target="_blank"
                >
                  Cloudflare Pages Server
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <code>npm run qwik add express</code>
              </td>
              <td>
                <a href="https://expressjs.com/" target="_blank">
                  Nodejs Express Server
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <code>npm run qwik add netlify-edge</code>
              </td>
              <td>
                <a href="https://docs.netlify.com/" target="_blank">
                  Netlify Edge Functions
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <code>npm run qwik add static</code>
              </td>
              <td>
                <a
                  href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
                  target="_blank"
                >
                  Static Site Generation (SSG)
                </a>
              </td>
            </tr>
          </table>
        </Card>

        <Card title="Community">
          <ul>
            <li>
              <span>Questions or just want to say hi? </span>
              <a href="https://qwik.builder.io/chat" target="_blank">
                Chat on discord!
              </a>
            </li>
            <li>
              <span>Follow </span>
              <a href="https://twitter.com/QwikDev" target="_blank">
                @QwikDev
              </a>
              <span> on Twitter</span>
            </li>
            <li>
              <span>Open issues and contribute on </span>
              <a href="https://github.com/BuilderIO/qwik" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <span>Watch </span>
              <a href="https://qwik.builder.io/media/" target="_blank">
                Presentations, Podcasts, Videos, etc.
              </a>
            </li>
          </ul>
          <Link class="mindblow" href="/flower">
            Blow my mind 🤯
          </Link>
        </Card>
      </Col>
    </div>
  )
})
