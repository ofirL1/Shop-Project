import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-remove-cart-dialog',
  templateUrl: './remove-cart-dialog.component.html',
  styleUrls: ['./remove-cart-dialog.component.scss']
})
export class RemoveCartDialogComponent implements OnInit {
  public productQuantity: number = 1;

  constructor(
    public dialogRef: MatDialogRef<RemoveCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {}

  ngOnInit(): void {
  }

}
