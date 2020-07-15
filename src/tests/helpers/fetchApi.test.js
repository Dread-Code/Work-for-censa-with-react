import { fetchApi } from "../../helpers/fetchApi";

describe('fetchApi  test', () => {
    
    test('should have to get 10 elemnts', async () => {   
        
        const getElements = await fetchApi('One punch');

        expect(getElements.length).toBe(10);

    });

    test('should return undefined', async () => {   
        
        const getElements = await fetchApi('');

        expect(getElements.length).toBe(0);

    });

});