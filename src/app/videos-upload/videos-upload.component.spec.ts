import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosUploadComponent } from './videos-upload.component';

describe('VideosUploadComponent', () => {
  let component: VideosUploadComponent;
  let fixture: ComponentFixture<VideosUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
