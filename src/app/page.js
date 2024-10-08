import Image from "next/image";
import styles from "./page.module.css";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>image optimization</h1> 
       {/* <h1 style={{fontFamily:"Roboto", fontWeight:100}}>font with link tag</h1>  */}
       <h1 className={roboto.className}>Font family with next js</h1>
      </main>
      
    </div>
  );
}
