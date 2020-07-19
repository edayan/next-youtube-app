import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

export default function person({ownersList}) {

    const [owners, setOwners] = useState(ownersList)
    const router = useRouter();

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`http://localhost:4001/data?ownerName=${router.query.person}&vehicle=${router.query.vehicle}`);
            const ownersList = await response.json();
            setOwners(ownersList);
        }

        if (ownersList.length == 0) {
            loadData();
        }

    }, []);



    return <pre>{JSON.stringify(owners, null, 4)}</pre>
}

person.getInitialProps = async (ctx) => {
    if(!ctx.req) {
        return {ownersList: []}
    }
    const {query} = ctx;

    const response = await fetch(`http://localhost:4001/data?ownerName=${query.person}&vehicle=${query.vehicle}`);
    const ownersList = await response.json();
    return {ownersList: ownersList}
}