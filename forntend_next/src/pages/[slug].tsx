import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { urlFor } from '@/lib/sanity'
import { sanityClient } from '@/lib/sanity.server'

const Page = () => {
  const router = useRouter()
  const { slug } = router.query
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<any>('');

  useEffect(() => {
    if (!slug) return;
    console.log(slug)
    const query = `*[_type == 'post' && slug.current == '${slug}']`
    sanityClient.fetch(query).then((data) => {
      setIsLoading(false)
      setPost(data[0])
    })
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    console.log(post)
  }, [post])

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>{slug}</h1>
      <p>{post.title}</p>
      {post.mainImage && <img src={urlFor(post.mainImage).url()} />}
    </div>
  )
}

export default Page;
