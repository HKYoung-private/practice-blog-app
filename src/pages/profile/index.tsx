import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { PostList } from 'components/PostList'
import { Profile } from 'components/Profile'

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <Profile />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  )
}
