
import React from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import TopBanner from './components/Topbanner';
import Carousel from './components/Carousel';

import Divider from './components/Divider';
import SecondCarousel from './components/SecondCarousel';
import ChatBotMessage from './components/ChatBotMessage';

function App() {
  return (
    <div className="bg-pink-50 min-h-screen">
    <TopBanner/>
      <Header />
      <Divider/>
      <CategoryNav />
      <main className="container mx-auto px-4 py-8">
        <Carousel />
      </main>
      <SecondCarousel/>
      <ChatBotMessage/>
    </div>
  );
}

export default App;
