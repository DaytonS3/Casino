
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('busLoads').del()
    .then(function () {
      // Inserts seed entries
      return knex('busLoads').insert([
        {
          id: 1,
          charterCo: 'Test',
          groupName: 'Test',
          arrivalDate: 1,
          busCount: 1,
          arrivalTime: 1,
          departTime: 1,
          cash: 1,
          food: 1,
          conf: 1
          
        },
        
      ]);
    });
};
