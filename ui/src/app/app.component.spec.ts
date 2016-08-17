/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Ui', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'SWD6 Character Cantina!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('SWD6 Character Cantina');
    }));
});