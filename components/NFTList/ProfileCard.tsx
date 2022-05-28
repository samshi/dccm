import { FC, useEffect, useState } from 'react'
import { Card, Divider } from 'antd'
import s from './index.module.scss'
import { PriceItem } from '../NFTItem/DescItem'
import { PersonItem } from '../Avatar/PersonItem'
import { useRouter } from 'next/router'
import { usePrincipal } from '../../hooks/usePrincipal'
import { useLoginModal } from '../../hooks/useLoginModal'
import { useNFTOrder } from '../../hooks/useNFTOrder'
import { useAppSelector } from '../../hooks/redux'
import { selectNFOrderByTid } from '../../store/nftOrderSlice'
import { MyToken, queryUser, MyUser } from '../../services/ic'
import { queryMinter } from '../../services/ic/erc721'
import { useShikuActor } from '../../hooks/useShikuActor'
import { useNFTTokenActor } from '../../hooks/useNFTTokenActor'
import { principalToAccountIdentifier } from '../../utils/principal'
interface IProfileCardProps {
  item: any
  // tokenIndex:any
  // canister: string
  // name: string
  // url: string
  // description: string
}

const ProfileCard: FC<IProfileCardProps> = ({ item }) => {
  // console.log('!!!!!!!!!ProfileCard', item)
  const router = useRouter()
  const shikuActor = useShikuActor()
  const collectionActor = useNFTTokenActor(item.canisterId)
  const principal = usePrincipal()
  const loginModal = useLoginModal()
  useNFTOrder(item.canisterId as string, item.tokenIndex as number)
  const token = useAppSelector(selectNFOrderByTid)(item.canisterId as string, item.tokenIndex as number) as MyToken
  const [Artist, setArtist] = useState<MyUser>()
  const getMint = async () => {
    if (collectionActor && shikuActor) {
      let mint = await queryMinter(collectionActor)()
      let aid = principalToAccountIdentifier(mint as string, 0)
      let query = await queryUser(shikuActor)(mint)
      setArtist(query.payload as MyUser)
    }
  }
  useEffect(() => {
    getMint()
  }, [collectionActor])
  useEffect(() => {
    if (principal.principal === null) {
      loginModal.setVisible(true)
      return
    }
  }, [principal.principal])

  // 查platform订单信息

  const handleItemClick = () => {
    router.push({
      pathname: '/assets/[collectionId]/[tokenId]',
      query: { collectionId: item.canisterId, tokenId: item.tokenIndex, Artist: item.name, headPortrait: item.url },
    })
  }

  return (
    <div className={s.itemWrapper} onClick={handleItemClick}>
      <Card
        hoverable
        bodyStyle={{ paddingTop: 18, paddingBottom: 18, paddingLeft: 20, paddingRight: 20 }}
        headStyle={{ borderRadius: 10 }}
        style={{ borderRadius: 10, border: 0 }}
        cover={<img alt="example" src={item.url} />}
      >
        <div className={`sub-title ${s.nftName}`}>{item.name}</div>
        <div className={s.descWrapper}>
          <PriceItem
            key={'listprice' + item.tokenIndex}
            title={'List price'}
            desc={token?.fixed?.price}
            kkey={'listprice' + item.tokenIndex}
            pricing={true}
          />
          <PriceItem
            key={'lastprice' + item.tokenIndex}
            title={'Last sale price'}
            desc={token?.lastPrice}
            kkey={'lastprice' + item.tokenIndex}
            pricing={true}
          />
        </div>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} className={'divider'} plain />
        <div className={s.descWrapper}>
          <PersonItem
            key={'creater' + item.tokenId}
            title={'Artist'}
            userId={Artist?.userName ? Artist.userName : ''}
            kkey={'creater' + item.tokenId}
            headPortrait={Artist?.avatar as string}
          />
          <PersonItem
            key={'owner' + item.tokenId}
            title={'Owner'}
            userId={item.name}
            kkey={'owner' + item.tokenId}
            headPortrait={item.url}
          />
        </div>
      </Card>
    </div>
  )
}
export default ProfileCard
