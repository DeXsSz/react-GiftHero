import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../component/GifGridItem';

describe('Prueba en GifGridItem.jsx', () => {
    const title = 'Hola mundo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('debe de mostrar el componente GifGridItem correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un parrafo con el titulo', () => {
        const parrafo = wrapper.find('p').text().trim();
        expect(parrafo).toBe(title);
    });
    test('debe una imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener la class de animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toEqual(true);
    });
});
