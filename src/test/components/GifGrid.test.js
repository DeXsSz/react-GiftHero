import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import GifGrid from '../../component/GifGrid';
import { useFecthGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
describe('pruebas en GifGrid.js', () => {
    const category = 'One Punch';

    test('debe mostrar el componente de GifGrid correctamente', () => {
        useFecthGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar items cuando se carguen las img useFecthGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Cualquier Cosa',
                url: 'https://localhost/cualquier/cosa.jpg',
            },
        ];
        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
