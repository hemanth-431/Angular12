import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinetemplate',
  template: `
    <h2 class="red">
      inlinetemplate works!
</h2>
  `,
  styleUrls: ['./inlinetemplate.component.css']
})
export class InlinetemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
