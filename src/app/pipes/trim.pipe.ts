import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  transform(text: string, length: number = 120): string {
    if (typeof text !== 'string') {
      console.log('no string provided for TrimPipe')
    } else {
      if (text.length > length) {
        return `${text.substring(0, length)}...`
      }
    }
    return text
  }
}
