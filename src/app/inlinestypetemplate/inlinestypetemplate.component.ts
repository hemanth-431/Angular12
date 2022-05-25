import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinestypetemplate',
  template: `
    <h3 class="red">
      inlinestypetemplate works!
</h3>
  `,
  styles: [
    `.red{color:red;
    text-align: center;}
    `
  ]
})
export class InlinestypetemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
