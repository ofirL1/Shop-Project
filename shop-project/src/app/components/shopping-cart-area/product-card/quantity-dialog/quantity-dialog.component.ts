import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-quantity-dialog',
  templateUrl: './quantity-dialog.component.html',
  styleUrls: ['./quantity-dialog.component.scss']
})
export class QuantityDialogComponent implements OnInit {

  public productQuantity: number = 1;
  constructor(
    public dialogRef: MatDialogRef<QuantityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {}

  ngOnInit(): void {
  }

}
