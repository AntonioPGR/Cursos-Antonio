// DATA
import slidesJson from 'data/slides.json';

// STYLE
import styles from './slides.module.scss';

// EXTERNAL
import { BsArrowRightCircleFill as RightArrow, BsArrowLeftCircleFill as LeftArrow  } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export function SlidesContainer(){

  // index do slide atual
  const [currentIndex, setIndex] = useState(0);
  // slide atual, alterado conforme o index é alterado
  const [currentSlide, setCurrentSlide] = useState(slidesJson[currentIndex]);

  useEffect(()=>{
    setCurrentSlide(slidesJson[currentIndex]);
    console.log(currentIndex);
  }, [currentIndex]);

  const increaseSlide = () => {
    let newSlide = currentIndex + 1;
    if( newSlide >= slidesJson.length){
      newSlide = 0;
    }
    setIndex(newSlide);
  };

  const decreaseSlide = () => {
    let newSlide = currentIndex - 1;
    if(newSlide < 0){
      newSlide = slidesJson.length - 1;
    }
    setIndex(newSlide);
  };

  return(
    <>
      <div className={styles.slidesContainer}>
        {
          slidesJson.map((value, index)=>{
            return (
              <div key={index}>
                <img className={styles.slide} alt={value.alt} src={value.src} />
              </div>
            );
          })
        }
      </div>
      <div>
        <LeftArrow onClick={decreaseSlide} />
        <RightArrow onClick={increaseSlide}/>
      </div>
    </>
  );
}