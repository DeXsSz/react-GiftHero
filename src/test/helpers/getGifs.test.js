import { getGifs } from '../../helpers/getGifs';
describe('pruebas con getGifs.js', () => {
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
    test('no debe tener categoria', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
