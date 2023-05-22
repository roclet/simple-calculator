import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it(`should have as title 'simple-calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Simple Calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content .container h1')?.textContent).toContain('Simple Calculator');
  });
  it("SpyOn method allClear1 when delete all C", () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
     spyOn(component,'allClear1');
     component.getoperator('C');
     expect(component.allClear1).toHaveBeenCalled();
  })
  it("SpyOn method clear when delete input", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component,'clear');
    component.getoperator('x');
    expect(component.clear).toHaveBeenCalled();
  })
  it("SpyOn method pressOperator when it divide", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component,'pressOperator');
    component.getoperator('/');
    expect(component.pressOperator).toHaveBeenCalled();
  })
  it("SpyOn method pressOperator when it substration", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component,'pressOperator');
    component.pressNumber('-');
    expect(component.pressOperator).toHaveBeenCalled();
  })
  it("Method calcAnswer if addition", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement } = fixture;
    const component = fixture.componentInstance;
    component.pressNum('4');
    component.pressNum('+');
    component.pressNum('2');
    expect(component.restotal).toEqual(eval('6'))
  })
  it("Method calcAnswer if division", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.pressNum('4');
    component.pressNum('/');
    component.pressNum('2');
    expect(component.restotal).toEqual(eval('2'))
  })
  it("Method calcAnswer if Subtraction", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.pressNum('4');
    component.pressNum('-');
    component.pressNum('2');
    expect(component.restotal).toEqual(eval('2'))
  })
  it("SpyOn method displayAnswer when it equal", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component,'displayAnswer');
    component.pressNumber('=');
    expect(component.displayAnswer).toHaveBeenCalled();
  })
  it("SpyOn method pressNum when it others", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component,'pressNum');
    component.pressNumber('4');
    expect(component.pressNum).toHaveBeenCalled();
  })
  it("Method pressNum if pressNum pass dot", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.digitEnter = '4.78'
    component.pressNumber('.');
    expect(component.digitEnter).toBe('4.78')
  })
  it("Method pressNum num is 0 and digitEnter empty string ", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.pressNum('0');
    expect(component.digitEnter).toBe('')
  })
  it("Method pressNum num is 0 and digitEnter not empty string ", ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.digitEnter = '3';
    component.pressNum('0');
    expect(component.digitEnter).toBe('30');
  })
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('simple-calculator app is running!');
  // });
});
