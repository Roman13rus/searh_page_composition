import React from 'react'
import FooterCinema from './FooterCinema ';
import FooterMap from './FooterMap';
import FooterWeatherWidget from './FooterWeatherWidget';
import FooterTopSearches from './FooterTopSearches';
import FooterTelevision from './FooterTelevision ';
/**Компонент, отвечающий за отображение элементов footer**/
const Footer = () => {
  return (

    <div className="footer">
        <FooterWeatherWidget />
        <FooterMap />
        <FooterCinema />
        <FooterTopSearches />
        <FooterTelevision />
    </div>
    );
}

export default Footer