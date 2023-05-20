import { Component } from '@angular/core';
import {
  BOTTOMBARCALCULATOR,
  DIGITALCOLUMNONE,
  DIGITALCOLUMNTHREE,
  DIGITALCOLUMNTWO,
  TOPBARCALCULATOR,
} from './common/general.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topBar = TOPBARCALCULATOR;
  columnOne = DIGITALCOLUMNONE;
  columnTwo = DIGITALCOLUMNTWO;
  columnThree = DIGITALCOLUMNTHREE;
  bottomBar = BOTTOMBARCALCULATOR;
  digitEnter: string = '';
  restotal: string = '';
  getoperator(oprs: string) {
    if (oprs === 'C') {
      this.allClear1();
    } else if (oprs === 'x') {
      this.clear();
    } else {
      this.pressOperator(oprs);
    }
  }
  pressNumber(pressdigit: string) {
    if (pressdigit === '*' || pressdigit === '-' || pressdigit === '+') {
      this.pressOperator(pressdigit);
    } else if (pressdigit === '=') {
      this.displayAnswer();
    } else {
      this.pressNum(pressdigit);
    }
  }
  pressNum(num: string) {
    //Do Not Allow . more than once
    if (num == '.') {
      if (this.digitEnter != '') {
        const lastNum = this.getLastOperand();
        console.log(lastNum.lastIndexOf('.'));
        if (lastNum.lastIndexOf('.') >= 0) return;
      }
    }

    //Do Not Allow 0 at beginning.
    //Javascript will throw Octal literals are not allowed in strict mode.
    if (num == '0') {
      if (this.digitEnter == '') {
        return;
      }
      const PrevKey = this.digitEnter[this.digitEnter.length - 1];
      if (
        PrevKey === '/' ||
        PrevKey === '*' ||
        PrevKey === '-' ||
        PrevKey === '+'
      ) {
        return;
      }
    }

    this.digitEnter = this.digitEnter + num;
    this.calcAnswer();
  }

  getLastOperand() {
    let pos: number;
    pos = this.digitEnter.toString().lastIndexOf('+');
    if (this.digitEnter.toString().lastIndexOf('-') > pos)
      pos = this.digitEnter.lastIndexOf('-');
    if (this.digitEnter.toString().lastIndexOf('*') > pos)
      pos = this.digitEnter.lastIndexOf('*');
    if (this.digitEnter.toString().lastIndexOf('/') > pos)
      pos = this.digitEnter.lastIndexOf('/');
    return this.digitEnter.substring(pos + 1);
  }

  pressOperator(op: string) {
    //Do not allow operators more than once
    const lastKey = this.digitEnter[this.digitEnter.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+'
    ) {
      return;
    }

    this.digitEnter = this.digitEnter + op;
    this.calcAnswer();
  }

  clear() {
    if (this.digitEnter != '') {
      this.digitEnter = this.digitEnter.substring(
        0,
        this.digitEnter.length - 1
      );
    }
  }

  allClear1() {
    this.restotal = '';
    this.digitEnter = '';
  }

  calcAnswer() {
    let formula = this.digitEnter;
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.') {
      formula = formula.substring(0, formula.length - 1);
    }

    lastKey = formula[formula.length - 1];
    if (
      lastKey === '/' ||
      lastKey === '*' ||
      lastKey === '-' ||
      lastKey === '+' ||
      lastKey === '.'
    ) {
      formula = formula.substring(0, formula.length - 1);
    }

    this.restotal = eval(formula);
  }

  displayAnswer() {
    this.calcAnswer();
    this.digitEnter = this.restotal;
    if (this.digitEnter == '0') this.digitEnter = '';
  }
}
