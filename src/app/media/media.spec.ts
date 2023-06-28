import { media } from "./media";

describe (" media test suite", () => {

 it ('Deberia regresar 550.6 si el array X = [150, 591...] ', () => {
    const resultado = media([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(resultado).toBe(550.6);
 })

 it('Deberia regresar 60.32 si el array X=[ 15.0, 69.9...] ', () => {
    const resultado = media([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(resultado).toBe(60.32);
 })


});
