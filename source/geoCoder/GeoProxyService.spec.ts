import 'mocha';
import { GeoProxyService } from './GeoProxyService';
import { ECities } from './ECities';
import * as assert from 'assert';

describe('getting geoCodes', () => {
  it('counting locations in geochache', () => {
    GeoProxyService.getLatLng(ECities.Amsterdam);
    assert.strictEqual(GeoProxyService.getCount(), 1);
    GeoProxyService.getLatLng(ECities.Amsterdam);
    assert.strictEqual(GeoProxyService.getCount(), 1);
    GeoProxyService.getLatLng(ECities.Berlin);
    assert.strictEqual(GeoProxyService.getCount(), 2);
    GeoProxyService.getLatLng(ECities.London);
    assert.strictEqual(GeoProxyService.getCount(), 3);
    GeoProxyService.getLatLng(ECities.Berlin);
    assert.strictEqual(GeoProxyService.getCount(), 3);
  });


});
