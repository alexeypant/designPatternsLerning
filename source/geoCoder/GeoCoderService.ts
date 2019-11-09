import { ECities } from './ECities';

export class GeoCoderService {

  static getLatLng(address: string): string {
    if (address === ECities.Amsterdam) {
      return "52.3700° N, 4.8900° E";
    } else if (address === ECities.London) {
      return "51.5171° N, 0.1062° W";
    } else if (address === ECities.Paris) {
      return "48.8742° N, 2.3470° E";
    } else if (address === ECities.Berlin) {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  };
}
