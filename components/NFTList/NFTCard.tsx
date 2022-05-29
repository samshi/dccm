import { FC, useEffect } from 'react'
import { Card, Divider } from 'antd'
import s from './index.module.scss'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../hooks/redux'
import { useSelector } from 'react-redux'

interface INftProps {
  collectName: string,
  nft: {
    Name: string,
    Price: string,
    COT: string,
    Trading_times: number,
    action: string,
    watchlist: number,
    zan: number,
    img: string
  }
}

const NftCard: FC<INftProps> = ({collectName, nft}) => {
  return (
    <div className={s.itemWrapper}>
      <Card
        bodyStyle={{ paddingTop: 18, paddingBottom: 18, paddingLeft: 20, paddingRight: 20}}
        headStyle={{ borderRadius: 10 }}
        style={{ borderRadius: 10, border: 1}}
        cover={
          <img
            alt="example"
            style={{ marginTop: 5}}
            // onClick={handleItemClick}
            src={'/images/'+nft.img}
          />
        }
      >
        <div className={s.nft_project}>Project {collectName}</div>
        <div className={s.nft_name}>Name {nft.Name}</div>
        <div className={s.nft_price}>Price</div>
        <div className={s.nft_price_value}>{nft.Price}</div>
        <div className={s.nft_cot}>COT</div>
        <div className={s.nft_cot_value}>{nft.COT}</div>
        <div className={s.nft_action}>{nft.action}</div>
        <div className={s.nft_trading_time}>Trading times</div>
        <div className={s.nft_trading_time_value}>{nft.Trading_times}</div>

        <Divider style={{ marginTop: 20, marginBottom: 20 }} className={'divider'} plain />
        <div className={s.watchlist}>watchlist : {nft.watchlist}</div>

        <div className={s.zan}>{nft.zan}</div>
      </Card>
    </div>
  )
}
export default NftCard
