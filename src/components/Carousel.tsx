import { useState } from 'react'

const imageUrls = [
  'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1701221238491-d5247ff7abcc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1697898008701-e103bd39792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handlePrevClick = (currentIndex: number) => {
    if (currentIndex === 0) {
      setActiveIndex(imageUrls.length - 1)
    } else {
      setActiveIndex(currentIndex - 1)
    }
  }

  const handleNextClick = (currentIndex: number) => {
    if (currentIndex === imageUrls.length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(currentIndex + 1)
    }
  }

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          {imageUrls.map((imageUrl, index) => (
            <>
              <input
                type="radio"
                name="radio-buttons"
                id={`image-${index}`}
                checked={activeIndex === index}
                readOnly
              />
              <li className="carousel__slide-container">
                <div className="carousel__slide-image">
                  <img alt={`scenery ${index}`} src={imageUrl} />
                </div>
                <div className="carousel__controls">
                  <label
                    onClick={() => handlePrevClick(index)}
                    className="carousel__slide-prev"
                  >
                    <span>&lsaquo;</span>
                  </label>
                  <label
                    onClick={() => handleNextClick(index)}
                    className="carousel__slide-next"
                  >
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
            </>
          ))}
          <div className="carousel__dots">
            {imageUrls.map((_, index) => (
              <label
                onClick={() => setActiveIndex(index)}
                className="carousel__dot"
                id={`image-dot-${index}`}
              ></label>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}
