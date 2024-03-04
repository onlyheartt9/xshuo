import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/Header'
import Recommend from '../../components/Recommend'
import Notice from '../../components/Notice'
import Rank from '../../components/Rank'
import layout from './layout.css'

export default function Home() {
  return (
    
  <div>
     <Header></Header>
     <Recommend></Recommend>
     <Notice></Notice>   
     <Rank></Rank>
    
  </div>
  )
}
