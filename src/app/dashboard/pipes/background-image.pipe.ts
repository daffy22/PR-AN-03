import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage'
})
export class BackgroundImagePipe implements PipeTransform {

  transform(value: string | undefined): string {
    const basicProfielImg = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    if (value) {
      value = value.trim();
      console.log(value);
      return value.length > 0 ? value : basicProfielImg;
    } else {
      return basicProfielImg;
    }
  }

}
