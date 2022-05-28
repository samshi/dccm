import NFTCard from './NFTCard'
import s from './index.module.scss'
import { FC, useEffect, useState } from 'react'
import { useNFTToken } from '../../hooks/useNFTToken'
import { collectionStats, queryUser, MyUser } from '../../services/ic'
import { useAnonymousShikuActor } from '../../hooks/useAnonymousShikuActor'
import { Select, Spin } from 'antd'
import { useNFTTokenActor } from '../../hooks/useNFTTokenActor'
import { queryMinter } from '../../services/ic/erc721'
import { principalToAccountIdentifier } from '../../utils/principal'
import { useNFTOrder } from '../../hooks/useNFTOrder'
const { Option } = Select

interface INFTList {
  collectionId: string
  type: string
  desc: any
}

const NFTList: FC<INFTList> = ({ desc, collectionId, type }) => {
  const nftToken = useNFTToken(collectionId)
  const anonymousShikuActor = useAnonymousShikuActor()
  const collectionActor = useNFTTokenActor(collectionId)
  const [Artist, setArtist] = useState<MyUser>()

  let [status, setStatus] = useState({
    avgPrice: 0,
    floorPrice: 0,
    listings: 0,
    volumeTrade: 0,
    tradeCount: 0,
  })
  // useNFTOrder(collectionId, token[0]).queryNFTOrder()
  const getMint = async () => {
    if (collectionActor && anonymousShikuActor) {
      let mint = await queryMinter(collectionActor)()
      let query = await queryUser(anonymousShikuActor)(mint)
      setArtist(query.payload as MyUser)
    }
  }

  useEffect(() => {
    nftToken.updateAll()
    getMint()

    if (anonymousShikuActor && collectionId) {
      ;(async () => {
        const status = await collectionStats(anonymousShikuActor)(collectionId)
        let d: any = status[0]
        if (d) {
          setStatus({
            avgPrice: isNaN(d.tradeCount) ? 0 : d.tradeCount,
            floorPrice: d.floorPrice,
            listings: d.listings.length,
            volumeTrade: d.volumeTrade,
            tradeCount: d.tradeCount,
          })
        }
      })()
    }
  }, [collectionActor])

  // useEffect(() => {
  //   // nftToken.updateAll()
  //   // console.log(nftToken, 'nfTToken')
  //   // getMint()
  // }, [nftToken.updateAll, nftToken])

  // useEffect(() => {
  //   if (anonymousShikuActor && collectionId) {
  //     ;(async () => {
  //       const status = await collectionStats(anonymousShikuActor)(collectionId)
  //       console.log(status, 'status')

  //       let d = status[0]
  //       if (d) {
  //         setStatus({
  //           avgPrice: d.avgPrice,
  //           floorPrice: d.floorPrice,
  //           listings: d.listings.length,
  //           volumeTrade: d.volumeTrade,
  //         })
  //       }
  //     })()
  //   }
  // }, [anonymousShikuActor, collectionId])

  return (
    <div className={s.boxmagin}>
      <div className={s.topNav}>
        <div className={s.NavLeft}>
          <div>
            <div className={s.topTableNbr}>{status.listings}</div>
            <div className={s.topTableText}>Listings</div>
          </div>
          <div>
            <div className={s.topTableNbr}>{status.volumeTrade}</div>
            <div className={s.topTableText}>Volumn</div>
          </div>
          <div>
            <div className={s.topTableNbr}>{status.floorPrice}</div>
            <div className={s.topTableText}>Floor Price（ICP）</div>
          </div>
          <div className={s.topTablelast}>
            <div className={s.topTableNbr}>
              {isNaN(Number(status.volumeTrade) / Number(status.tradeCount))
                ? 0
                : Number(status.volumeTrade) / Number(status.tradeCount) / 100000000}
            </div>
            <div className={s.topTableText}>Avg Price（ICP）</div>
          </div>
        </div>
        <div className={s.NavCenter}>
          <span className={s.userName}>{desc?.name}</span>&emsp;
          <span className={s.coverSnd}>create by</span>&emsp;
          <span className={s.coverThd}>@{Artist?.userName}</span>
        </div>
        <div className={s.NavRight}>
          <img
            onClick={() => {
              let url = ''
              if (desc.links[0][0]?.twitter.length === 1) {
                url = desc.links[0][0].twitter[0]
              } else {
                url = 'https://mobile.twitter.com/'
              }
              window.open(url)
            }}
            src="/images/ic_w.png"
            alt=""
            style={{ cursor: 'pointer', width: 28, height: 25, marginRight: 34 }}
          />
          <img
            onClick={() => {
              let url = ''
              if (desc.links[0][0]?.discord.length === 1) {
                url = desc.links[0][0].discord[0]
              } else {
                url = 'https://discord.onl/'
              }
              window.open(url)
            }}
            src="/images/ic_d.png"
            alt=""
            style={{ cursor: 'pointer', width: 25, height: 28 }}
          />
        </div>
      </div>
      <div className={s.main}>
        <p>{desc?.description}</p>
      </div>
      <div className={s.dropdownMenu}>
        <div>
          <Select defaultValue="Artwork" className={s.workSelect}>
            <Option value="on sale">on sale</Option>
            <Option value="on bid">Lucy</Option>
          </Select>
        </div>
        <div>
          <Select defaultValue="Sort by" className={s.workSelect}>
            <Option value="on sale">on sale</Option>
            <Option value="on bid">Lucy</Option>
          </Select>
        </div>
      </div>
      {nftToken.fetching ? (
        <div className={s.loading}>
          <span>Loading...</span>
          <Spin size="large" />
        </div>
      ) : (
        <div className={s.wrapper}>
          {collectionId in nftToken.tokens &&
            nftToken.tokens[collectionId]
              .slice(0, 100)
              .map((token: any) => (
                <NFTCard
                  Artist={Artist as MyUser}
                  collectionId={collectionId}
                  item={token[1]}
                  tokenIndex={token[0] as number}
                  key={token[0] as number}
                  type={type}
                  desc={desc?.name}
                />
              ))}
        </div>
      )}
    </div>
  )
}

export default NFTList
