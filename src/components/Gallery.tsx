import { UnsplashImage } from '../types';

const Gallery: React.FC<{ images: UnsplashImage[] }> = ({ images }) => {
  return (
    <div className='image-container'>
      {images.map((item: UnsplashImage) => (
        <a
          href={item.links.html}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-lg transition-all duration-300  hover:shadow-md hover:shadow-gray-400'
          key={item.id}
        >
          <img
            src={item.urls.small}
            alt={item.alt_description}
            title={item.alt_description}
            className='block w-full h-[260px] object-cover rounded-lg '
          />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
