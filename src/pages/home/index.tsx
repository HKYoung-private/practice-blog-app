import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { PostList } from '../../components/PostList'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  )
}
