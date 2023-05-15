import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chesswrite } from './chesswrite';

describe('ChesswriteComponent', () => {
  let component: Chesswrite;
  let fixture: ComponentFixture<Chesswrite>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chesswrite]
    });
    fixture = TestBed.createComponent(Chesswrite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
