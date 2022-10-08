

// export async function getStaticPaths() {
//     if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//         return {
//           paths: [],
//           fallback: 'blocking',
//         }
//       }
    
      // Call an external API endpoint to get posts
      // const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      // const posts = await res.json()
    
      // Get the paths we want to prerender based on posts
      // In production environments, prerender all pages
      // (slower builds, but faster initial page load)
      // const paths = posts.map((post) => ({
      //   params: { id: post.id },
      // }))
    
      // { fallback: false } means other routes should 404
//       return { paths, fallback: false }
// }

// export default 



import { useRouter } from 'next/router'

const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <h1>Slug : {id}</h1>
}

export default Id