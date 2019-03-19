import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworksPage } from './artworks.page';

describe('ArtworksPage', () => {
  let component: ArtworksPage;
  let fixture: ComponentFixture<ArtworksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
