import Head from 'next/head'

export default function HelloFromServer(props) {
    const { listOfPersons } = props;

    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <h1 className="title">
                    Hello from server!
                </h1>
                <ul className="list">
                    {listOfPersons.map(person => (
                        <li key={person.id} className="list--item">
                            <img src={person.avatar} alt={person.name} />
                            {person.name}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await fetch('https://5f56996832f56200168bd7d1.mockapi.io/api/names');
    const listOfPersons = await data.json();

    return {
        props: { listOfPersons },
    }
}
