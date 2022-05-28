// import NFTCard from './NFTCard'
import s from './index.module.scss'
import {FC, useEffect, useState} from 'react'
import {Select, Spin} from 'antd'

const {Option} = Select

interface INftList {
  collectionName: string,
  auther: string,
  url: string,
}

const NftList: FC<INftList> = ({collectionName, auther, url}) => {
  let [status, setStatus] = useState({
    market_cap: '100000$',
    hightst_sale: '100DAI',
    floor_price: '10DAI',
    items: 100,
    listed_items: 60,
    owners: 50,
    total_tranding_valume: 300,
  })

  return (
    <div className={s.boxmagin}>
      <div className={s.topImage}>
        <img  src='/images/collection-head.png' />
      </div>
      <div className={s.collectionImage}>
        <img  src={url} />
      </div>
      <div className={s.collectionTitle}>Collection {collectionName}</div>
      <div className={s.createBy}>Created by
        <span className={s.auther}> {auther}</span>
      </div>
      <div className={s.status}>
          <div>
            <div className={s.statusText}>Market Cap</div>
            <div className={s.statusValue}>{status.market_cap}</div>
          </div>
          <div>
            <div className={s.statusText}>Hightst Sale</div>
            <div className={s.statusValue}>{status.hightst_sale}</div>
          </div>
          <div>
            <div className={s.statusText}>Floor Price</div>
            <div className={s.statusValue}>{status.floor_price}</div>
          </div>
          <div>
            <div className={s.statusText}>Items</div>
            <div className={s.statusValue}>{status.items}</div>
          </div>
          <div>
            <div className={s.statusText}>Owners</div>
            <div className={s.statusValue}>{status.owners}</div>
          </div>
          <div>
            <div className={s.statusText}>Total Tranding Valume</div>
            <div className={s.statusValue}>{status.total_tranding_valume}</div>
          </div>
      </div>
        {/*<div className={s.wrapper}>*/}
        {/*  {collectionId in nftToken.tokens &&*/}
        {/*  nftToken.tokens[collectionId]*/}
        {/*    .slice(0, 100)*/}
        {/*    .map((token: any) => (*/}
        {/*      <NFTCard*/}
        {/*        Artist={Artist as MyUser}*/}
        {/*        collectionId={collectionId}*/}
        {/*        item={token[1]}*/}
        {/*        tokenIndex={token[0] as number}*/}
        {/*        key={token[0] as number}*/}
        {/*        type={type}*/}
        {/*        desc={desc?.name}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*</div>*/}
    </div>
  )
}

export default NftList
