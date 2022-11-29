import React from 'react'

const SliderImg = () => {


    const [index, setIndex] = useState(0)

  return (
    <div className="slider">
      <div className="slider__static">
        <div className="slider__move" style={{transform: `translateX(calc((-${0}/3)*100%));`}}>
          {product.productImg.map((url) => (
            <div className="slider__img-container">
              <img src={url} alt="imagen" className='slider__img' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SliderImg
