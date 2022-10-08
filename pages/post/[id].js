import React from 'react'
// import {useRouter} from 'next/router'

function Id({ posts }) {
    // const router = useRouter()
    // if(router.isFallback){
    //     return <h1>Loading...</h1>
    // }
    return (
        <ul>
            <h1>Id is : {posts.id} and Post Title is : {posts.title}</h1>
        </ul>
    )
}
export default Id

export async function getStaticPaths() {
    // const res = await fetch(``)
    // const data = await res.json();

    return {
        paths: [{
            params: { id: '1' },
        },
        {
            params: { id: '2' },
        },
        {
            params: { id: '3' },
        } 
        ],
        fallback: 'blocking',
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
const posts = await res.json()
// if(!posts.id){
//     return{
//         notFound : true,
//     }
// }
  return {
    props: {
      posts,
    },
  }
}

