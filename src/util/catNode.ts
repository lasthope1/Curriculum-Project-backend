export const catNode = [
    {
        id : '1',
		name : 'General Education',
		filters : [],
		credits : 30,
		keepOverCredits : false,
		refs : [
            {
                id : '10',
                name : 'Language',
                filters: ['F1'],
                courses: [ '101', '201', '301']
            },
            {
                id : '20',
                name : 'Learning though activity',
                filters: [],
                courses: [ '191', '192']
            }
        ]
    },
    {
        id : '2',
        name : 'Free Elective',
        filters : [],
        credits : 30,
        keepOvercredits : false,
        refs : [
            {
                id : '30',
                name : 'Human and Social',
                filters: [],
                courses: [ '101', '201', '301']
            },
            {
                id : '40',
                name : 'Sci and Math',
                filters: [],
                courses: [ '191', '192']
            }
        ]
    }
]