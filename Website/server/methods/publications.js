import {Meteor} from 'meteor/meteor';
// Meteor.methods({
//   foo(arg1, arg2) {
//     check(arg1, String);
//     check(arg2, [Number]);

//     // Do stuff...

//     if (/* you want to throw an error */ false) {
//       throw new Meteor.Error('pants-not-found', "Can't find my pants");
//     }

//     return 'some return value';
//   },

//   bar() {
//     // Do other stuff...
//     return 'baz';
//   }
// });

Meteor.methods({
  'todos.updateText'({ todoId, newText }) {
    new SimpleSchema({
      todoId: { type: String },
      newText: { type: String }
    }).validate({ todoId, newText });

    const todo = Todos.findOne(todoId);

    if (!todo.editableBy(this.userId)) {
      throw new Meteor.Error('todos.updateText.unauthorized',
        'Cannot edit todos in a private list that is not yours');
    }

    Todos.update(todoId, {
      $set: { text: newText }
    });
  },
});