
import Link from 'next/link';
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export default function List({ owners }) {

    // const [owners, setOwners] = useState([]);

    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch('http://localhost:4001/data');
    //         const ownersList = await response.json();
    //         setOwners(ownersList);
    //     }
    //     loadData();
    // }, []);

    return (
        <div>
            {owners.map((e, index) => (
                <div key={index}>
                    <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                        <a>
                            Navigate to {e.ownerName}'s {e.vehicle}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

List.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/data');
    const ownersList = await response.json();
    console.log('ownersList', ownersList);
    return { owners: ownersList }
}