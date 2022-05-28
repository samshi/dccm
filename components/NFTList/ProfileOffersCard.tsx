import { FC, useEffect } from 'react'
import { Card, Divider } from 'antd'
import s from './index.module.scss'
import { PriceItem } from '../NFTItem/DescItem'
import { PersonItem } from '../Avatar/PersonItem'
import { useRouter } from 'next/router'
import { tokenIdentifier } from '../../utils/token'
import { Button } from 'antd'
interface IProfileCardProps {
  item: { [key: string]: string }
  // canister: string
  // name: string
  // url: string
  // description: string
}

const ProfileOffersCard: FC<IProfileCardProps> = ({ item }) => {
  const router = useRouter()
  const priceItems = [
    {
      name: 'List price',
      key: 'price',
    },
    {
      name: 'Last sale price',
      key: 'lastPrice',
    },
  ]
  const ownerItems = [
    {
      name: 'Artist',
      key: 'creater',
    },
    {
      name: 'Owner',
      key: 'owner',
    },
  ]
  const handleItemClick = () => {
    // router.push({
    //   pathname: '/assets/[collectionId]/[tokenId]',
    //   query: { collectionId: collectionId, tokenId: tokenIndex },
    // })
  }

  return (
    <div className={s.offerBox}>
      <div className={s.button}>
        <div className={s.owner}>
          <Button type="primary" size={'large'} className={s.buy}>
            <img src="/images/ic_buy.png" alt="" />
            BUY NOW
          </Button>
        </div>
        <div className={s.owner}>
          <Button type="primary" size={'large'} className={s.MakeOfferW}>
            <img src="/images/ic_offer.png" alt="" />
            MAKE OFFER
          </Button>
        </div>
      </div>
    </div>
  )
}
export default ProfileOffersCard
