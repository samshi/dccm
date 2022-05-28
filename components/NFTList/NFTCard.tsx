import { FC, useEffect } from 'react'
import { Card, Divider } from 'antd'
import s from './index.module.scss'
import { PriceItem } from '../NFTItem/DescItem'
import { PersonItem } from '../Avatar/PersonItem'
import { useRouter } from 'next/router'
import { tokenIdentifier } from '../../utils/token'
import { nftImg } from '../../utils/helper'
import { useNFTOrder } from '../../hooks/useNFTOrder'

import { useAppSelector } from '../../hooks/redux'
import { MyToken, MyUser, queryToken } from '../../services/ic'
import { selectNFOrderByTid } from '../../store/nftOrderSlice'
import { selectBearerByAccount, selectToken } from '../../store/tokenSlice'
import { selectProfileByAid } from '../../store/userSlice'
import { useShikuActor } from '../../hooks/useShikuActor'
import { useSelector } from 'react-redux'
interface INFTProps {
  item: any
  tokenIndex: number
  collectionId: string
  type: string
  Artist: MyUser
  desc: string
}

const NFTCard: FC<INFTProps> = ({ item, tokenIndex, collectionId, type, Artist, desc }) => {
  const router = useRouter()
  useNFTOrder(collectionId, tokenIndex)
  const shikuActor = useShikuActor()
  const bearerInfo = useAppSelector(selectBearerByAccount)(collectionId, tokenIndex)
  // const nftTokenInfo = useAppSelector(selectToken)(collectionId, tokenIndex)
  const ownerProfile = useAppSelector(selectProfileByAid)(bearerInfo as string) as MyUser

  // console.log(bearerInfo, "selectBeare");
  // useEffect(() => {
  //   console.log(bearerInfo, ownerProfile, "ownerProfileownerProfileownerProfileownerProfileownerProfile");
  // }, [bearerInfo, ownerProfile])
  let token = useAppSelector(selectNFOrderByTid)(collectionId, tokenIndex) as MyToken
  // 查platform订单信息
  const nftItem = useSelector(({ nft }: { nft: any }) => {
    return nft.nftOrderMap[Object.keys(nft.nftOrderMap) as any]
      ? nft.nftOrderMap[Object.keys(nft.nftOrderMap) as any][0]
      : 0
  })
  const handleItemClick = () => {
    console.log(collectionId, tokenIndex, item);
    router.push({
      pathname: '/assets/[collectionId]/[tokenId]',
      query: {
        collectionId: collectionId,
        tokenId: tokenIndex,
        headPortrait: Artist.avatar,
        Artist: Artist.userName,
        desc,
        item,
      },
    })
  }

  return (
    <div className={s.itemWrapper}>
      <Card
        bodyStyle={{ paddingTop: 18, paddingBottom: 18, paddingLeft: 20, paddingRight: 20 }}
        headStyle={{ borderRadius: 10 }}
        style={{ borderRadius: 10, border: 0 }}
        cover={
          <img
            alt="example"
            onClick={handleItemClick}
            src={
              item.metadata
                ? item.metadata.url
                : nftImg(collectionId as string, tokenIndex, tokenIdentifier(collectionId as string, tokenIndex))
            }
          />
        }
      >
        <div className={`sub-title ${s.nftName}`}>{item.metadata ? item.metadata.name : '#' + tokenIndex}</div>
        <div className={s.descWrapper}>
          <PriceItem
            key={'listprice' + tokenIndex}
            title={'List price'}
            desc={token?.fixed?.price}
            kkey={'listprice' + tokenIndex}
            pricing={true}
          />
          <PriceItem
            key={'lastprice' + tokenIndex}
            title={'Last sale price'}
            desc={token?.lastPrice}
            kkey={'lastprice' + tokenIndex}
            pricing={true}
          />
        </div>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} className={'divider'} plain />
        <div className={s.descWrapper}>
          <div className={s.like}>
            <img src="/images/ic_favorites.png" alt="" />
            <span>{nftItem?.favoriteUserIds?.length}</span>
          </div>
          {/* <div className={s.action}>
            <button>BUY NOW</button>
          </div> */}
        </div>
      </Card>
    </div>
  )
}
export default NFTCard
