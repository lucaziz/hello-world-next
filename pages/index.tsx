import Head from 'next/head'

export default function Home() {
  return (
      <div className="container">
          <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="main">
              <h1 className="title">
                  Olá React Salvador!
              </h1>
          </main>
      </div>
  )
}
