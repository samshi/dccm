import s from './index.module.scss'
import {FC, useEffect, useState} from 'react'
import NftCard from './NftCard'

// import {Select, Spin} from 'antd'

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
    total_trading_volume: 300,
  })

  let [collectionDesc, setCollectionDesc] = useState({
    collection_title: 'Sichuan Biogas Stove Development Programme',
    content: [
      {
        subtitle: 'How does it work',
        text: 'The project team visits the low-income rural households to build biogas digesters and efficient biogas cookstoves for them. The digester tanks are fed with animal manure, previously just discharged into open pits, and convert it into clean and affordable biogas to be used conveniently for cooking, heating, or lighting instead of coal and firewood.',
      },
      {
        subtitle: 'Why did we choose this project?',
        text: 'The installation of a biogas digester to handle animal manure does not only reduce carbon dioxide emissions, but it also helps to improve rural living conditions in many different ways. After switching to biogas, the households’ disposable savings increased 40% due to saved energy and fertilizer expenditures, higher agricultural output, etc.',
      },
      {
        subtitle: 'What is my impact?',
        text: 'Each cookstove system built will be able to reduce 2 tons of carbon emission per year, with an average lifetime over 10 years with proper use and care. To date, this project has built cookstoves for 395,435 rural households and have reduced over 6 million tons of carbon emissions.',
      },
      {
        subtitle: 'How do we verify the impact?',
        text: 'This project has been independently verified in accordance with the Gold Standard for Global Goals. You can view at anytime the public project page and offset credit retirement history here. The Gold Standard is the globally recognized verification body that was established in 2003 by WWF and other international NGOs to ensure projects that reduced carbon emissions featured the highest levels of environmental integrity and also contributed to sustainable development.',
      }
    ]
  })

  let [nfts, setNfts] = useState([
    {
      Name: 'Actor',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '01.png'
    }, {
      Name: 'Bed',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '02.png'
    }, {
      Name: 'Cat',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '03.png'
    }, {
      Name: 'Dog',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '04.png'
    }, {
      Name: 'Eat',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '05.png'
    }, {
      Name: 'Fat',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '06.png'
    }, {
      Name: 'Google',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '07.png'
    }, {
      Name: 'Hat',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '08.png'
    }, {
      Name: 'III',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '09.png'
    }, {
      Name: 'Jack',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '10.png'
    }, {
      Name: 'Fat',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '06.png'
    }, {
      Name: 'Google',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '07.png'
    }, {
      Name: 'Hat',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '08.png'
    }, {
      Name: 'III',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '09.png'
    }, {
      Name: 'Jack',
      Price: '0.01 DAI',
      COT: '210t',
      Trading_times: 7,
      action: 'BUY NOW',
      watchlist: 100,
      zan: 21,
      img: '10.png'
    }
    ])

  return (
    <div className={s.boxmagin}>
      <div className={s.topImage}>
        <img src='/images/collection-head.jpeg'/>
      </div>
      <div className={s.collectionImage}>
        <img src={url}/>
      </div>
      <div className={s.collectionName}>Collection {collectionName}</div>
      <div className={s.createBy}>Created by
        <span className={s.auther}> {auther}</span>
      </div>
      <div className={s.collectionTitle}>{collectionDesc.collection_title}
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
          <div className={s.statusText}>Listed Items</div>
          <div className={s.statusValue}>{status.listed_items}</div>
        </div>
        <div>
          <div className={s.statusText}>Owners</div>
          <div className={s.statusValue}>{status.owners}</div>
        </div>
        <div>
          <div className={s.statusText}>Total Trading Volume</div>
          <div className={s.statusValue}>{status.total_trading_volume}</div>
        </div>
      </div>

      <div className={s.collectionContent}>
        <div>{collectionDesc.collection_title}</div>
        {collectionDesc.content.map((item, index) => {
          return (
            <div>
              <br/>
              <div className={s.subtitle}>{item.subtitle}</div>
              <br/>
              <div className={s.text}>{item.text}</div>
            </div>
          )
        })}
      </div>

      <div className={s.inputArea}>
        <input placeholder='items, collections, COTs, accounts, etc.'/>
      </div>


      <div className={s.wrapper}>
        {nfts.slice(0, 100)
          .map(nft => (
            <NftCard
              collectName={collectionName}
              nft={nft}
            />
          ))}
      </div>
    </div>
  )
}

export default NftList
