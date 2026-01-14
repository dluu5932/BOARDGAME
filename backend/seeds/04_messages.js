// seeds/04_messages.js
exports.seed = async function(knex) {
  await knex('messages').del();

  await knex('messages').insert([
    { sender_id: 1, receiver_id: 2, content: 'Hello Linh, welcome to the game!' },
    { sender_id: 2, receiver_id: 1, content: 'Thanks Đức, let’s play caro!' },
    { sender_id: 3, receiver_id: 4, content: 'Hoa, have you tried Snake yet?' },
    { sender_id: 4, receiver_id: 3, content: 'Yes Nam, it’s fun!' },
    { sender_id: 5, receiver_id: 1, content: 'Admin Đức, please enable Tic-tac-toe.' },
  ]);
};
