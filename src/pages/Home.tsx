import React from 'react';
import Banner from '../components/Banner';
import OfferBanner from '../components/OfferBanner';
import CategoryHighlight from '../components/CategoryHighlight';
import Category from '../components/Category'
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
