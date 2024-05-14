import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'FindItem'
})
export class FindItemPipe implements PipeTransform {
	transform(items: any[], labelKey: string, value: string): any {
		if (!items || !labelKey) {
			return 'cannot find item';
		}

		return items.find((res) => res._id === value) || null
	}
}
