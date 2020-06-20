const { Text, Checkbox } = require('@keystonejs/fields')

module.exports = {
    fields: {
        description: {
            type: Text,
            isRequired: true
        },
        isComplete: {
            type: Checkbox,
            defaultValue: false
        },
        // add fields
        deadline: {
            type: CalendarDay,
            format: 'Do MMMM YYYY',
            yearRangeFrom: '2019',
            yearRangeTo: '2029',
            isRequired: false,
            defaultValue: new Date().toISOString('YYYY-MM-DD').substring(0, 10),
        },
        assignee: {
            type: Text,
            isRequired: true,
        },    
    }
}