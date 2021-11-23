import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChatPageComponent } from './global-chat-page.component';

describe('GlobalChatPageComponent', () => {
  let component: GlobalChatPageComponent;
  let fixture: ComponentFixture<GlobalChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalChatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
