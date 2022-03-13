import { sanityClient } from '@/lib/sanity.server'

type Props = {
  slug: string | string[]
}

export const getSlugPost = async ({ slug }: Props) => {
  const query = `*[_type == 'post' && slug.current == '${slug}']`
  const data = await sanityClient.fetch(query)
  return data[0]
}

export const getAllPosts = async () => {
  const query = `*[_type == 'post']`
  const data = await sanityClient.fetch(query)
  return data
}

export const blockToString = (block: any) => {
  return block.map((block: any) => block.children.map((child: any) => child.text).join(''))
}
