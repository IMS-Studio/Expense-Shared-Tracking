# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create([{name: 'TestAcct', email: 'TestEmail@hmail.com', password: 'abc12345'}, 
            {name: 'Johnny Cash', email: 'dummyEmail@gmail.com', password: 'abc12345'},
            {name: 'Leto', email: 'letoEmail@gmail.com', password: 'abc12345'},
            {name: 'Arnie', email: 'AnieEmail@gmail.com', password: 'abc12345'},
            {name: 'JoJo', email: 'JoEmail@gmail.com', password: 'abc12345'},
            {name: 'Billy Joel', email: 'BillyJ@gmail.com', password: 'abc12345'}
            ])

Friend.destroy_all

Friend.create([{requestor_id: 1, requested_id: 2},
                {requestor_id: 1, requested_id: 3},
                {requestor_id: 1, requested_id: 4},
                {requestor_id: 1, requested_id: 5},
                {requestor_id: 6, requested_id: 1},
                {requestor_id: 2, requested_id: 3},
                ])

Bill.destroy_all
 
Bill.create([
  {author_id: 1, history_id: 1, author_payor: true, recipient_id: 4, description: 'Rent', cost: 750.00},
  {author_id: 1, history_id: 2, author_payor: false, recipient_id: 5, description: 'Dinner', cost: 37.25},
  {author_id: 2, history_id: 3, author_payor: true, recipient_id: 1, description: 'Babysitting', cost: 95.37},
  {author_id: 3, history_id: 4, author_payor: false, recipient_id: 1, description: 'Weekend Trip', cost: 250.00}
])

Comment.destroy_all

Comment.create([
  {author_id: 1 , bill_id: 1, text_body: 'I`ll pay the other $250.00 next week'},
  {author_id: 4, bill_id: 1, text_body: 'That is not okay. I need it ASAP.'},
  {author_id: 1, bill_id: 2, text_body: 'Thanks for dinner!'},
  {author_id: 2, bill_id: 3, text_body: 'Can you also come by tomorrow?'},
  {author_id: 3, bill_id: 4, text_body: 'Cant wait'}
])

