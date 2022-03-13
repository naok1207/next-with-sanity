import type { GetServerSideProps, NextPage } from 'next'
import Footer from '@/containers/layouts/Footer/Footer'
import Header from '@/containers/layouts/Header/Header'
import styles from '@/styles/Home.module.css'
import Posts from '@/components/Posts'
import { getAllPosts } from '@/lib/sanityFunctions'

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts: posts
    }
  }
}

const Home: NextPage = ({posts}: any) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>記事一覧</h1>
        <Posts posts={posts} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
