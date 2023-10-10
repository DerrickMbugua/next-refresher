import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import getAllUsers from "@/lib/getAllUsers"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { userId: string } }): Promise<Metadata> {
  const userData: Promise<User> = getUser(params.userId)
  const user = await userData

  return{
    title: user.name
  }
}

export default async function UserPage({ params }: { params: { userId: string } }) {
  const userData: Promise<User> = getUser(params.userId)
  const userPostsData: Promise<Post[]> = getUserPosts(params.userId)

  const user = await userData
  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  // console.log(user)
  return (
    <div>
      <h2>User details</h2>
      <p>Name: {user.name}</p>

      <Suspense fallback={<div>Loading...</div>}>
        <UserPosts promise={userPostsData} />
      </Suspense>

    </div>
  )
}

export async function generateStaticParams() {
 const usersData: Promise<User[]> = getAllUsers()
 const users = await usersData

 return users.map(user => ({
  userId: user.id.toString()
 }))
}
