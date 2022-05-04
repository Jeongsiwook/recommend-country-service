import React from 'react';
import './style.css';

const Badge = () => {
  const fileName = 'CH';
  return (
    <div>
      <div className="textContainer"></div>
      <img
        src={`https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${fileName}-flag.gif`}
        className="badgeImage"
      />
    </div>
  );
};

export default Badge;