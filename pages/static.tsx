import Head from 'next/head'
import Navigation from '../src/components/navigation/Navigation';

export default function HelloFromServer(props) {
    const { listOfPersons } = props;

    return (
        <div className="container">
            <Head>
                <title>SSG</title>
            </Head>

            <main className="main">
                <Navigation />
                <h1 className="title">
                    Who is online now:
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

export async function getStaticProps() {
    const data = await fetch('https://633f1cfd83f50e9ba3bffdee.mockapi.io/api/v1/users');
    const listOfPersons = await data.json();

    return {
        props: { listOfPersons },
    }
}
