import React from 'react';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../GifExpertApp'

describe('GifExpert Component', () => {
    
    test('Snapshot test', () => {
        
        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('should ', () => {
        let programs = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaulCategories = {programs}/>);

        expect(wrapper).toMatchSnapshot(); // creo el snapshot para la prueba
        expect(wrapper.find('GifGrid').length).toBe( programs.length); // compara si renderizara 
        //lo esperado con los programs que se le pase
        
    });

});