import React from 'react';
import Banner from '../components/banner';
import OfferBanner from '../components/offerBanner';
import CategoryHighlight from '../components/categoryHighlight';
import Category from '../components/category';
import { WithHeaderFooter } from '../HOC/HeaderAndFooter';
const Home: React.FC = () => {
    return (
        <>
            <Banner />
            <OfferBanner />
            <Category />
            <CategoryHighlight />
        </>
    );
}

export default WithHeaderFooter(Home);
