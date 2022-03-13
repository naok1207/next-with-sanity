import { urlFor } from '@/lib/sanity'
import { blockToString, getSlugPost } from '@/lib/sanityFunctions'
import { GetServerSideProps } from 'next'

type Params = { slug: string }

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const { slug } = params as Params
  const post = await getSlugPost({slug})
  return {
    props: {
      post: post
    }
  }
}

type Props = {
  post: any
}

const Page = ({ post }: Props) => {
  console.log(post)

  return (
    <div>
      <h1>{post.title}</h1>
      {post.mainImage &&
        <img src={urlFor(post.mainImage).url()} />}
        <div>{blockToString(post.body)}</div>
    </div>
  )
}

export default Page;
