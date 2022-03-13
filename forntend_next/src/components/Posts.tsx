import { blockToString } from "@/lib/sanityFunctions"
import Link from "next/link"

type Post = {
  id: string
  title: string
  slug: {
    current: string
  }
  body: string
  createdAt: Date
}

type Props = {
  posts: Post[]
}

const Posts = ({posts}: Props) => {
  return (
    <div>
      <ul>
        {posts.map((post: Post) => {
          return (
            <li key={post.id} >
              <Link href="/[slug]" as={`/${post.slug.current}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{blockToString(post.body)}</p>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts
function blocksToHtml(arg0: { blocks: string }) {
  throw new Error("Function not implemented.")
}
