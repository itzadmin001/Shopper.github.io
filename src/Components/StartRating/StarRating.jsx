import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './StarRating.css'; // Import your CSS file for styling

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render filled stars
    for (let i = 0; i < floorRating; i++) {
      stars.push(<FaStar key={i} />);
    }

    // Render half star if needed
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    // Render unfilled stars to complete the 5-star rating
    for (let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={i} />);
    }

    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars().map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
