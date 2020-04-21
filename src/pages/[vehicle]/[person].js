import {useRouter} from 'next/router'
export default function person({owners}) {

const router= useRouter();

return <pre>{JSON.stringify(owners, null, 4)}</pre>
}

person.getInitialProps = async () => {
    const response = await fetch(`http://localhost:4001/data?vehicle=CAR`);
    const ownersList = await response.json();
    console.log('ownersList', ownersList);
    return { owners: ownersList }
}