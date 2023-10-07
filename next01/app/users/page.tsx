import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users',
  description: 'Users Page',
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()

  const users = await usersData
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}

    </div>
  )
}
