import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeSectionCard = ({data,sectionName}) => {
  

  const groupedItems = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedItems.push(data.slice(i, i + 4));
  }

  return (
    <>

    <h2 className='fw-bold py-3 text-color-gray' >{sectionName}</h2>
    <Carousel  indicators={false}>
      {groupedItems.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around">
            {group.map((kurtaPage, i) => (
              <div key={i} className='card cursor-pointer my-5 shadow-lg' style={{ width: '15rem', margin: '0 auto' }}>
              <a href='/Detail'>
                <img className='card-img-top' src={kurtaPage.image} alt='im'style={{height:'200px'}} />
                <div className='card-body'>
                  <h3 className='card-title fw-bold'>{kurtaPage.brand}</h3>
                  <p className='card-text text-dark'>{kurtaPage.title}</p>
                
                </div>
                </a>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default HomeSectionCard;
