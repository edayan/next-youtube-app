
import Link from 'next/link';

const owners = [
    {vehicle: 'Car', ownerName: 'Saju'},
    {vehicle: 'Bike', ownerName: 'John'},
    {vehicle: 'Airplane', ownerName: 'Mick'},
]
export default function List() {


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