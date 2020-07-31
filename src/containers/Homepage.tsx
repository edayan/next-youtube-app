import Link from "next/link";

export default function HomePage() {
return <h1>
    <Link href="people">
        <a> People</a>
    </Link>
    <hr></hr>
    <Link href="vehicles">
        <a> Vehicles</a>
    </Link>
</h1>
}