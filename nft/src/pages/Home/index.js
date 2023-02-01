import HomeBanner from './Banner/Banner';
import HomeContent from './Content';
import Recommend from './Recommend';

function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <HomeBanner />
      <HomeContent />
      <Recommend />
    </div>
  );
}

export default Home;
