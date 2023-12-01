import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { PostList } from '../../components/PostList'

export const PostListPage = () => {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  )
}
