import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href='/about'>Go to About</Link>
      <br/>
      <Link href='/users'>Go to Users</Link>
    </main>
  )
}
