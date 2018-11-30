import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[tagComplete]'
})
export class TagcompleteDirective {

  @Input('tagComplete') tagValue: any;

  listwords: string[];

  @HostListener('keydown', ['$event', '$event.keyCode', '$event.target.value']) keyDown(
    event: any, keycode: number , inputValue: string): void{

    if(keycode === 9){
      let listValues = inputValue.split(' ');
      const input = event.target as HTMLInputElement;
      this.listwords = [];

      listValues.forEach((value) => {
        if(value.startsWith('#')){
          let vart = this.searchTerm(value);
          this.listwords.push(vart);
        } else {
          this.listwords.push(value);
        }
      })

      input.value = this.listwords.join(' ');
      event.preventDefault();
    }
  }
  
  searchTerm(term: string): string {

    let termReplaced = term.replace('#', '');
    let reg = new RegExp(/[.,;:!?]/g);
    let itemRegex = '';
    let listSplited = [];

    if(reg.test(termReplaced)){

      listSplited = termReplaced.split('');

      listSplited.filter((value: string, index: number) => {
        if(reg.test(value)){
          itemRegex = value;
          listSplited.splice(index);
          termReplaced = listSplited.join('');
        }
      })
    }
    
    let valueCode = '';
    
    this.tagValue.map((obj) => {

      let item = Object.values(obj);
      let initials = item[0].toString();

      if(initials.toLowerCase() === termReplaced.toLowerCase()){
        if(itemRegex != ''){
          valueCode = item[1].toString() + itemRegex;
        } else {
          valueCode = item[1].toString();
        }
      }
    })
    
    if(valueCode != '')
      return valueCode;

    return term;
  }
}