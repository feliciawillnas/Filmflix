import HeroSection from '../../components/HeroSection/HeroSection';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import movies from '../../data/movies.json';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className='nav-padding'>
        <h1>HomePage</h1>
        {movies.map((movie, index) => (
          <Thumbnail movie={movie} mode='rec' key={index} />
        ))}
      </div>
    </>
  );
}
