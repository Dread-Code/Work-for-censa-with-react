import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
// este componente es un poco complejo por todo lo que contiene
// como recibe una funcion de argumento se le puede pasar una funcion vacia
// Por el momoento para que pase el snapshot

describe('AddCategory Component', () => {
    
    const setCategories = jest.fn(); // establece una funcion para saber si fue llamada
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('Should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should change the text box', () => {
        const input = wrapper.find('input');
        //Simulando un input  recibe el tipo de evento que simula 
        // y como segundo parametro la variable que se va simular en este caso el target
        //de lo contrario sacar un lo contrario sacara un error por el evento
        const value = 'Hola Mundo';
        input.simulate('change', {target: value});

    });

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('Debe llamar el setcategories y limpiar la caja de texto', () => {
        //1 simular el inputchange
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change', {target: {value}});
        //2 simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3 setCategories se tuvo que haber llamado
        expect(setCategories).toHaveBeenCalled(); // evalua que se llama la funcion
        expect(setCategories).toHaveBeenCalledTimes(1); // evalua que se llame una vez la funcion
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) ); // espera que se haya llamdo
                                                                            // con una funcion 
        //4 el valor del input debe ser ''
        expect(input.prop('value')).toBe(''); // recuerda que aca accedemos al prop de la etiqueta


    });

});