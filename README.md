# NgxTagComplete

- A simple shortcuts facilitator.
- Enter '#' key and the desired shortcut and press 'Tab'.

# Installation

 Npm i ngx-tag-complete

# Usage

> In your module
>  import { TagcompleteDirective } from 'node_modules/ngx-tag-complete';
```javascript
import { TagcompleteDirective } from 'node_modules/ngx-tag-complete';

declarations: [
    TagcompleteDirective
]
```

> In your component

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<input [tagComplete]="shortcuts" />`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autocomplete-fu';

  shortcuts: any[] = [{shortcut: 'adm', value: 'administrator'}, {shortcut: 'ilj', value: 'i love javascript'}]
}
```
> In input(or textarea) element, press # and type it shortcut, done this, press the tab key
