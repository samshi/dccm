import s from './header.module.scss'
import Menu from '../Menu'
import User from '../User'
import Wallet from '../Wallet'
// import Wallet from '../Wallet'
import { useRouter } from 'next/router'
const Nav = () => {
  const router = useRouter()
  return (
    <div className={s.header}>
      <img
        src="/images/dccm.jpeg"
        className={s.logo}
        onClick={() => router.push('/home')}
      />

      <Menu />
      <User />
      <Wallet />
    </div>
  )
}
export default Nav
