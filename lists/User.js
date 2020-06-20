const { Text, Password, Checkbox, Relationship } = require('@keystonejs/fields')

module.exports = {
    fields: {
        name: { type: Text },
        email: {
            type: Text,
            isUnique: true,
        },
        isAdmin: { type: Checkbox },
        password: {
            type: Password,
        },
        task: {
            type: Relationship,
            ref: 'Todo.assignee',
        }
    }
}