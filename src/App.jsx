import HeroSection from './Sections/HeroSection';
import FeaturesSection from './Sections/FeaturesSection';
import AnnounceSection from './Sections/AnnounceSection';
import AdsSection from './Sections/AdsSection';
import CardsSection from './Sections/CardsSection';
import GoodCompanySection from './Sections/GoodCompanySection';
import SubscribeSection from './Sections/SubscribeSection';
import Footer from './components/Footer';
import Header from './components/Header';
import ScreenSizeIndicator from './components/ScreenSizeIndicator';

const App = () => {
  return (
    <>
      <Header/>
      <HeroSection />
      <FeaturesSection />
      <AnnounceSection />
      <AdsSection />
      <CardsSection />
      <GoodCompanySection />
      <SubscribeSection />
      {/* <ScreenSizeIndicator /> */}
      <Footer />
    </>
  );
};

export default App;
