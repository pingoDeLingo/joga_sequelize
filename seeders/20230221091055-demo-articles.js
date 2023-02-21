'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return Promise.all([
        queryInterface.bulkInsert('Articles', [
            {
              name: "Introduction to Ashtanga",
              slug: "introduction-to-ashtanga",
              image: "ashtanga.jpg",
              body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem. </p>',
              published: '2020-01-08 15:02:30',
              createdAt: new Date(),
              updatedAt: new Date()
            }]),
            queryInterface.bulkInsert('Articles', [
                {
                    name: "Morning vinyasa flow routine",
                    slug: "morning-vinyasa-flow-routine",
                  image: "morning.jpg",
                    body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem. </p>',
                    published: '2020-04-14 15:02:41',
                    createdAt: new Date(),
                    updatedAt: new Date()

                }]),
                  queryInterface.bulkInsert('Articles', [
                        {
                          name: "Secrets of a yoga teacher",
                          slug: "secrets-of-a-yoga-teacher",
                          image: "yoga-teacher.jpg",
                            body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem. </p>',
                            published: '2020-05-28 15:02:55',
                            createdAt: new Date(),
                            updatedAt: new Date()
                        }]),
      ])
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('Articles', null, {});
  }
};
