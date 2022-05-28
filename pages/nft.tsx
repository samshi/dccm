import NftList from '../components/NftList'

const Nft = () => {
  return (
    <div>
      <NftList
        collectionName={'A'}
        auther={'F'}
        url={'/images/collection-logo.png'}
      />
    </div>
  )
}

export default Nft
