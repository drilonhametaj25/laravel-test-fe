import { Pipe, PipeTransform } from '@angular/core';
import { I18nFieldInterface } from '../interfaces/common.types';

@Pipe({
	name: 'I18nTranslate'
})
export class I18nTranslate implements PipeTransform {
	transform(str: I18nFieldInterface | string): any {
		if (!str) {
			return 'string to parse not found';
		}

		if (typeof str === 'string') {
			return str;
		}

		return str['en'];

	}
}
