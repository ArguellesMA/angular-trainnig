import { media } from "../media/media";
import { desv_standard } from "./desv_standard";

const proxySize = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
const developmentHours = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

describe("Standard deviation test suite", () => {

it ('Deberia regresar 572.03 si el array X=[160, 591...]', () => {
   const  calculatedMean = media(proxySize);
   const  calculatedStdDev = desv_standard(proxySize, calculatedMean);
   expect(calculatedStdDev).toBe(572.03);
})



it('Deberia regresar 62.26 si el array X=[15.0, 69.9, ..]', () => {
   const  calculatedMean = media(developmentHours);
   const  calculatedStdDev = desv_standard(developmentHours, calculatedMean);
   expect(calculatedStdDev).toBe(62.26);
})



});


