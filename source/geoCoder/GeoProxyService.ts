import { GeoCoderService } from './GeoCoderService';

interface IGeocache {
  [address: string]: string;
}

export class GeoProxyService {
  private static geocache = {} as IGeocache;

  public static getLatLng(address: string): string {
    if (!GeoProxyService.geocache.hasOwnProperty(address)) {
      GeoProxyService.geocache[address] = GeoCoderService.getLatLng(address);
    }
    return GeoProxyService.geocache[address];
  }

  public static getCount(): number {
    return Object.keys(GeoProxyService.geocache).length;
  }
}
