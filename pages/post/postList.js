import Link from 'next/link';
import React from 'react'

function postList({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <Link key={post.id} href={`/post/${post.id}`}><h1>{post.title}</h1></Link>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json()

  return {
    props: {
      posts,
    },
  }

}
export default postList