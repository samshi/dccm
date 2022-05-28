import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useMemo, useEffect } from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/antd.min.css'
import '../styles/globals.scss'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname.split('/')[1] !== router.asPath.split('?')[0].split('/')[1]) router.push(router.asPath)
  }, [router])

  return (
    <div className={'light'} style={{ minHeight: '700px' }}>
      <Nav />
      <div className={`${'main-layout'}`}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default MyApp
