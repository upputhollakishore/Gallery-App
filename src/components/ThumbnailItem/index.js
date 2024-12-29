// Write your code here.
import './index.css'
const ThumbnailItem = props => {
  const {imagesList, getUniqueId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList
  const onClickThumbnail = () => {
    getUniqueId(id)
  }
  return (
    <li className="thumbnail-container">
      <button className="thumbnail-button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          className="thumbnail-image"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
