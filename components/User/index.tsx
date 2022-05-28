import s from './index.module.scss'

const User = () => {
  return (
    <img
      src="/images/user.png"
      className={s.user_logo}
      // onClick={() => router.push('/home')}
    />
  )
}
export default User
