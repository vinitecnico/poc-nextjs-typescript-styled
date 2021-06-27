import { Card, Container, Content, Footer, Grid, Head } from '../src/components'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Head title="title test" />

      <Content>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>

        <Grid>
          <Card>
            <a href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Card>

          <Card>
            <Link href="/info">
              info page
            </Link>
          </Card>
        </Grid>

      </Content>
      <Footer />
    </Container>
  )
}
