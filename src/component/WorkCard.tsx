import React from 'react';

interface WorkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  theme: 'blue' | 'orange'; // Controls the border color
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, imageSrc, tags, theme }) => {
  return (
    <div className={`work-card work-card--theme-${theme}`}>
      <div className="work-card__image-wrapper">
        <img src={imageSrc} alt={title} className="work-card__image" />
      </div>
      <div className="work-card__content">
        <div className="work-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="work-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="work-card__title">{title}</h3>
        <p className="work-card__description">{description}</p>
        <a href="#" className="work-card__link">
          {/* You might use an SVG or an icon font for the arrow */}
          <span className="work-card__link-icon">&rarr;</span> {/* Right arrow character */}
        </a>
      </div>
    </div>
  );
};

export default WorkCard;