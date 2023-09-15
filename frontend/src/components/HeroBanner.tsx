
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroContent } from '../actions/heroActions';
import './HeroBanner.css'; 
import React, { useEffect, useState } from 'react';
const HeroBanner: React.FC = () => {
  const dispatch = useDispatch();
  const heroContent = useSelector((state: RootState) => state.heroContent);
  const HeroBanner: React.FC = () => {
    const [heroContent, setHeroContent] = useState({
      title: '',
      description: '',
      imageUrl: '',
    });
  useEffect(() => {

    fetch('/api/hero-content')
      .then((response) => response.json())
      .then((data) => setHeroContent(data))
      .catch((error) => console.error('Error fetching hero content:', error));
  }, []);

  return (
    <div className="hero-banner">
      <div className="hero-image">
        <img src={heroContent.imageUrl} alt="Hero" />
      </div>
      <div className="hero-text">
        <h1 className="hero-title">{heroContent.title}</h1>
        <p className="hero-description">{heroContent.description}</p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroBanner;