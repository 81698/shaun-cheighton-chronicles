import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-strands',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './strands.component.html',
  styleUrl: './strands.component.scss',
})
export class StrandsComponent {
  noButtonPressed = true;
  clickedRows = new Array();
  clickedCols = new Array();
  wordsFound = 0;
  selectedColor = '#e1e5e8';
  unselectedColor = 'white';

  puzzle: string[][] = [
    ['B', 'I', 'L', 'E', 'S', 'C'],
    ['P', 'R', 'A', 'D', 'K', 'A'],
    ['R', 'T', 'C', 'N', 'A', 'E'],
    ['N', 'E', 'H', 'D', 'H', 'Y'],
    ['O', 'S', 'S', 'E', 'Y', 'A'],
    ['L', 'O', 'T', 'N', 'P', 'P'],
    ['L', 'F', 'S', 'T', 'I', 'E'],
    ['A', 'B', 'I', 'F', 'H', 'T'],
  ];
  answers = [
    {
      name: 'birthday',
      color: '#f5d164',
      row: [0, 0, 1, 2, 3, 3, 2, 3],
      col: [0, 1, 1, 1, 2, 3, 4, 5],
    },
    {
      name: 'cake',
      color: '#bee2fa',
      row: [0, 1, 1, 2],
      col: [5, 5, 4, 5],
    },
    {
      name: 'candles',
      color: '#bee2fa',
      row: [2, 1, 2, 1, 0, 0, 0],
      col: [2, 2, 3, 3, 2, 3, 4],
    },
    {
      name: 'balloons',
      color: '#bee2fa',
      row: [7, 7, 6, 5, 5, 4, 3, 4],
      col: [1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: 'presents',
      color: '#bee2fa',
      row: [1, 2, 3, 4, 4, 5, 5, 6],
      col: [0, 0, 1, 2, 3, 3, 2, 2],
    },
    {
      name: 'happy',
      color: '#bee2fa',
      row: [3, 4, 5, 5, 4],
      col: [4, 5, 5, 4, 4],
    },
    {
      name: 'fiftieth',
      color: '#bee2fa',
      row: [6, 7, 7, 6, 6, 6, 7, 7],
      col: [1, 2, 3, 3, 4, 5, 5, 4],
    },
  ];
  clickButton(row: number, col: number) {
    if (!this.checkLegalClick(row, col)) {
      return;
    }

    //check if we are clicking where we last clicked
    if (
      row === this.clickedRows.slice(-1)[0] &&
      col === this.clickedCols.slice(-1)[0]
    ) {
      this.undoLastClick();
    } else {
      this.clickedRows.push(row);
      this.clickedCols.push(col);
      document.getElementById(row + '-' + col)!.style.backgroundColor =
        this.selectedColor;
      this.checkWords();
    }
  }

  checkLegalClick(row: number, col: number) {
    if (this.noButtonPressed) {
      this.noButtonPressed = false;
    } else {
      if (
        Math.abs(row - this.clickedRows.slice(-1)[0]) > 1 ||
        Math.abs(col - this.clickedCols.slice(-1)[0]) > 1
      ) {
        return false;
      }
    }
    return true;
  }

  undoLastClick() {
    let row = this.clickedRows.pop();
    let col = this.clickedCols.pop();
    document.getElementById(row + '-' + col)!.style.backgroundColor = 'white';
    if (this.clickedCols.length == 0) {
      this.noButtonPressed = true;
    }
  }
  checkWords() {
    this.answers.forEach((answer) => {
      if (
        JSON.stringify(answer.col) === JSON.stringify(this.clickedCols) &&
        JSON.stringify(answer.row) === JSON.stringify(this.clickedRows)
      ) {
        while (this.clickedCols.length > 0) {
          let row = this.clickedRows.pop();
          let col = this.clickedCols.pop();
          let button = <HTMLInputElement>(
            document.getElementById(row + '-' + col)!
          );
          button.disabled = true;
          button.style.backgroundColor = answer.color;
          button.style.color = 'black';
        }
        this.noButtonPressed = true;
        this.wordsFound++;
      }
    });
  }

  clearSelected() {
    this.noButtonPressed = true;
    this.clickedCols = [];
    this.clickedRows = [];

    let selectedColorString = 'rgb(225, 229, 232)';
    for (let row = 0; row < this.puzzle.length; row++) {
      for (let col = 0; col < this.puzzle[row].length; col++) {
        let button = <HTMLInputElement>(
          document.getElementById(row + '-' + col)!
        );
        if (button.style.backgroundColor == selectedColorString) {
          button.style.backgroundColor = this.unselectedColor;
        }
      }
    }
  }
}
