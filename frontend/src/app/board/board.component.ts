import { Component, Input } from "@angular/core";
import { Board } from "../../model/lobby";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  @Input() board!: Board;
  board2: number[][] = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [1, 0, 0, 0, 2, 0, 0, 0, 1],
    [1, 1, 2, 2, 3, 2, 2, 1, 1],
    [1, 0, 0, 0, 2, 0, 0, 0, 1],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
  ];
}
