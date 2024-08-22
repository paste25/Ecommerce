const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
  const lastSlideIndex = totalItems - slidesToShow;
  return (
    <div className="carousel-button-group flex items-end justify-end pr-9 mb-6 mt-2">
      <button className={`border p-3 rounded-3xl bg-[#f6f6f6] hover:bg-[#c4c4c4] mr-2 ${currentSlide === 0 ? 'disable invisible' : ''}`} onClick={() => previous()} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
      </svg></button>
      <button onClick={() => next()} className={`border p-3 rounded-3xl bg-[#f6f6f6] hover:bg-[#c4c4c4]  ${currentSlide === lastSlideIndex ? 'invisible' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
      </svg></button>
    </div>
  );
};


export default ButtonGroup;