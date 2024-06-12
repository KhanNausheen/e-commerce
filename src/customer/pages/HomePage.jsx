// HomePage.jsx
import React from 'react';
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel';
import MainCarosel from '../components/HomeCarosel/MainCarosel';
import {mens_shoes } from '../../Data/mens_shoes';
import { mens_kurta } from '../../Data/mens_kurta';
import { women_saree } from '../../Data/women_saree';
import { women_dress } from '../../Data/women_dress';




const HomePage = () => {
  return (
    <div>
      <MainCarosel/>
      <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={women_dress}sectionName={"Women's Dress"}/>
        <HomeSectionCarosel data={mens_shoes}sectionName={"Men's shoes"}/>
        <HomeSectionCarosel data={women_saree}sectionName={"Women's Saree"}/>
        
      </div>
    </div>
  );
};

export default HomePage;
