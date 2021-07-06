import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getter-setter',
  templateUrl: './getter-setter.component.html',
  styleUrls: ['./getter-setter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetterSetterComponent implements OnInit {

  @Input() set rating(value: number) {
    console.log("SET rating called");
      this._rating = value;
  }

  get rating(): number {
    console.log("GET rating called");
    return this._rating;
  }
  private _rating: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
