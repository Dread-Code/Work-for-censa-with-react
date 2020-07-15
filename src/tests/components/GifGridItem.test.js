import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';


describe('GifGridItem Component', () => {

        const title = "Un titulo";
        const url = "https://localhost/algo.jpg"
        const wrapper = shallow( <GifGridItem title = { title} url = {url}/>);

    test('Show the component correctly', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Should have a P with the text', () => {
        const p = wrapper.find('p').text();
        expect(p).toBe(title);
    });

    test('Should have a img equal to url and alt from props', () => {
        const img = wrapper.find('img');
        // prop() toma las props de la etiqueta que estemos evaluando
        // esto imprimiria un objeto de los props de la misma
        // se le pude pasar como argumento la propiedad que necesitamos
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    });

    test('should have animate__fadein ', () => {
        const div = wrapper.find('div').prop('className');
        // Recuerda la funcion includes evalua que contenga en la variable lo que se le pasa
        expect(div.includes('animate__fadeIn')).toBe(true);
        
    });

});


