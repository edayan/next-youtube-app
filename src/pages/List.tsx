import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {VehiclePerson} from '../../Api/VehiclePerson';


export interface ListProps {
    ownersList: VehiclePerson[]
}

export default function List({ownersList}: ListProps) {

    return (
        <div>
            {ownersList?.map((e: VehiclePerson, index: number) => (
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
    const ownersList: VehiclePerson[] | undefined = await response.json();
    return {ownersList: ownersList}
}