import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // para crear mocks 

describe('GifGrid Component', () => {
    
    const category = 'One Punch'

    test('Carga del compoente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category = { category }/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes', () => {
        
        // crear un mock
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualguiercosa.jpg',
            title: 'cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category = { category }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(true); // evalua si el componente existe 
        expect( wrapper.find('GifGridItem').length).toBe( gifs.length); // evalua el componente 
        //con respecto a la data que le llegue

    });

});