import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgxTagComplete';

  shortcuts: any[] = [
    {shortcut: 'adm', value: 'administrator'}, 
    {shortcut: 'ilj', value: 'i love javascript'},
    {shortcut: 'bib', value: 'Batman is the best'}]
}
