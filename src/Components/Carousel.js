import React, { useEffect, useState } from 'react'
import styles from "./component.module.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
const Carousel = () => {
  const[trendingcoin,settrendingcoin] =useState([]);
  useEffect(()=>{
    fetchtrendingcoindata();
  },[])
  const fetchtrendingcoindata =async()=>{
  let url =   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  let res = await fetch(url)
  res = await res.json();  
  settrendingcoin([...res])
}

const items = trendingcoin.map((coin)=>{
  return(
    <Link to={`/coin/${coin?.id}`}>
    <img src={coin?.image} alt={coin?.name} height="80"/>
    </Link>
  )
})
const responsive ={
  0:{
    items:2
  },
  512:{
    items:4
  }
}
  return (
    <div className={styles.carousel}>
      <AliceCarousel mouseTracking infinite autoPlayInterval={1000} animationDuration={1500} disableDotsControls autoPlay items={items} responsive={responsive} disableButtonsControls />
    </div>
  )
}

export default Carousel