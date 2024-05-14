import { Pipe, PipeTransform } from '@angular/core';
import { Locales } from '../constants';

@Pipe({
	name: 'filter',
})
export class FilterPipe implements PipeTransform {

	transform(
		items: any[],
		searchTerm: string,
		labelKey: string
	): any {

		if (!items || !searchTerm) {
			return items;
		}

		return items.filter((item) => {
			let ret = false;
			if (item[labelKey] && item[labelKey]._i18n) {
				const locales = Locales;
				for (const locale of locales) {
					if (
						item[labelKey][locale] &&
						item[labelKey][locale]
							?.toLowerCase()
							?.includes(searchTerm.toLowerCase())
					) {
						ret = true;
						break;
					}
				}
			} else {
				ret = item[labelKey].toLowerCase().includes(searchTerm.toLowerCase());
			}
			return ret;
		});
	}
}
