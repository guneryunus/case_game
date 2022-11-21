import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase('tr-TR');

    return items.filter(it => {        
      return it.game.toLocaleLowerCase('tr-TR').includes(searchText);
    });
  }
}