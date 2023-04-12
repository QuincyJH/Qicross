import { Component } from '@angular/core';

@Component({
  selector: 'app-fill-pass',
  templateUrl: './fill-pass.component.html',
  styleUrls: ['./fill-pass.component.scss']
})
export class FillPassComponent {

  row1: number[] = [3]
  row2: number[] = [1,1]
  row3: number[] = [1,1,1]
  row4: number[] = [1,1]
  row5: number[] = [2,1]

  col1: number[] = [3]
  col2: number[] = [1,1]
  col3: number[] = [1,1,1]
  col4: number[] = [1,1]
  col5: number[] = [2,1]

  board: string[][] = [['U','U','U','U','U'],['U','U','U','U','U'],['U','U','U','U','U'],['U','U','U','U','U'],['U','U','U','U','U']]

  constructor(){
    this.horzFillPass(this.board[0], this.row1)
  }

  horzFillPass(row: string[], hints: number[]){
    console.log("hello")
    row.forEach((space) => {
      console.log(space)
    })
  }

  vertFillPAss(col: string[]){}
}
