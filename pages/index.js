import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Link href={`/post/postList`}><h1><a>UserLists</a></h1></Link>
      </main>      
    </div>
  )
}
