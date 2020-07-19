import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {VehiclePerson} from '../../../Api/VehiclePerson';
import {NextPageContext} from "next";

export interface PersonProps {
    ownersList?: VehiclePerson[]
}

export default function person({ownersList}: PersonProps) {

    const [owners, setOwners] = useState(ownersList)
    const router = useRouter();

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`http://localhost:4001/data?ownerName=${router.query.person}&vehicle=${router.query.vehicle}`);
            const ownersList: VehiclePerson[] | undefined = await response.json();
            setOwners(ownersList);
        }

        if (ownersList?.length == 0) {
            loadData();
        }

    }, []);

    if (!owners?.[0]) {
        return <div>Loading...</div>
    }

    return <pre>{JSON.stringify(owners, null, 4)}</pre>
}

person.getInitialProps = async ({req, query}: NextPageContext) => {
    if (!req) {
        return {ownersList: []}
    }

    const response = await fetch(`http://localhost:4001/data?ownerName=${query.person}&vehicle=${query.vehicle}`);
    const ownersList = await response.json();
    return {ownersList: ownersList}
}