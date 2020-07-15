import { useFetchGifs } from"../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";


describe('Pruebas en el hook Usefetch', () => {
    
    test('Debe retornar el estado inicial ', async () => {

        // instalamos la libreria  npm install --save-dev @testing-library/react-hooks
        
        // const { data, loading } = useFetchGifs('One Punch');

        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));

        // current extraeria el valor actual de ese custom hook
        const { data, loading} = result.current;
        // reinicia el hook 
        await waitForNextUpdate();

        // validamos la data
        expect(data).toEqual([]);
        //Validamos el loading
        expect(loading).toBe(true);

    });

    test('Debe retornar un arreglos de img y loading false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
        // waitForNextUpdate retorna una promesa que nos dice cuando hubo un cambio en nuestro custom hook
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        //Validamos el loading
        expect(loading).toBe(false);

    });

});