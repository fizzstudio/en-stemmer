export interface GroupObject {
	[key:string]:string
}

export interface SuffixList{
	group1:GroupObject,
	group2:GroupObject
}

export const suffixList =<SuffixList> {
	group1:{
		'ational': 'ate',
		'tional': 'tion',
		'enci': 'ence',
		'anci': 'ance',
		'izer': 'ize',
		'bli': 'ble',
		'alli': 'al',
		'entli': 'ent',
		'eli': 'e',
		'ousli': 'ous',
		'ization': 'ize',
		'ation': 'ate',
		'ator': 'ate',
		'alism': 'al',
		'iveness': 'ive',
		'fulness': 'ful',
		'ousness': 'ous',
		'aliti': 'al',
		'iviti': 'ive',
		'biliti': 'ble',
		'logi': 'log'
	},
	group2:{
		'icate': 'ic',
		'ative': '',
		'alize': 'al',
		'iciti': 'ic',
		'ical': 'ic',
		'ful': '',
		'ness': ''
	}
};