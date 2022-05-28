import s from './index.module.scss'
import React from 'react'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

const MenuItem: React.FC<{ name: string }> = ({name}) => {
  const router = useRouter()
  let [nav, setNav] = useState('/Home')
  useEffect(() => {
    setNav(router.pathname)
  }, [router])

  let focus = nav === '/' + name.toLowerCase() ? s.focus : ''

  return (
    <span
      className={`${s.item} ${s[name]} ${focus}`}
      onClick={() => {
        // router.push(`/${name.toLowerCase()}`)
      }}
    >
      {name}
    </span>
  )
}
export default MenuItem
