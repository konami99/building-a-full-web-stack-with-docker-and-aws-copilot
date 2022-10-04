import Head from 'next/head'

export default function Home() {
  const url = process.env.NEXT_PUBLIC_EXPRESS_ENDPOINT;

  const trigger = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_ENDPOINT}/api/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={ trigger }>Trigger an email event</button>
      </main>
    </div>
  )
}
