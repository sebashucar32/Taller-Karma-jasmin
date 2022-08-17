import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*
  it(`should have as title 'rickandmorty'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rickandmorty');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('rickandmorty app is running!');
  }); */

  it('Probando ngModel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const componente = fixture.componentInstance;   // fixture.componentInstance = new AppComponent()
    const htmlElemento: DebugElement = fixture.debugElement.query(By.css('h2'));

    componente.title = 'Casa sofka';
    fixture.detectChanges();
    expect(htmlElemento.nativeElement.innerHTML).toBe('Casa sofka');
    
    componente.title = 'estoy en casa';
    fixture.detectChanges();
    expect(htmlElemento.nativeElement.innerHTML).toBe('estoy en casa');
  });
});
