import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersRepoComponent } from './other-users-repo.component';

describe('OtherUsersRepoComponent', () => {
  let component: OtherUsersRepoComponent;
  let fixture: ComponentFixture<OtherUsersRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUsersRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
