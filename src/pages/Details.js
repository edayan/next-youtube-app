import Link from 'next/link'

export default function Details() {

    const people = [{v: 'car', name: 'saju'},
        {v: 'bike', name: 'edayan',},
        {v: 'aeroplane', name: 'paul'}];
    return (<div>
        {people.map(person => {
            return (
                <div>
                    <Link as={`${person.v}/${person.name}`} href="/[vehicle]/[person]">
                        <a>Naviagate to {`${person.name}'s ${person.v}`}</a>
                    </Link>
                </div>)
        })}

    </div>)
}