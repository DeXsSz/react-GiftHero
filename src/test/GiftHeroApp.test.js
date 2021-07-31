import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import GiftHeroApp from '../GiftHeroApp';

describe('Pruebas con el GiftHeroApp.jsx', () => {
    test('debe hacer match con el snapshot de GiftHeroApp', () => {
        const wrapper = shallow(<GiftHeroApp />);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe mostrar una lista de categoria', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GiftHeroApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
