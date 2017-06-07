
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifieds').del()
    .then(function () {
      // Inserts seed entries
      return knex('classifieds').insert(
        {
              id:1,
              title:'NES Classic',
              description:'I got lucky and found it, and decided to charge 10x what it was worth.',
              price:600,
              item_image:'http://www.nintendo.com/images/page/nes-classic/nes-classic-edition-box.png',
              created_at: new Date('2016-06-26 14:26:16 UTC'),
              updated_at: new Date('2016-06-26 14:26:16 UTC')
        });
      }).then(function () {
        return knex('classifieds').insert(
          {
              id:2,
              title:'Pikachu 9" Plush Stuffed Toy',
              description:'Polyester fiber construction Officially licensed.',
              price:10,
              item_image:'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg',
              created_at: new Date('2016-06-26 14:26:16 UTC'),
              updated_at: new Date('2016-06-26 14:26:16 UTC')
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:3,
          title:"Above and Beyond concert tickets",
          description:"Above and Beyond at the Hollywood Bowl this Fall, get your tickets",
          price:298,
          item_image:"http://viralpirate.com/wp-content/uploads/2016/12/CQ18TstVEAAG183.jpg",
          created_at:"2017-06-04T22:22:53.738Z",
          updated_at:"2017-06-04T22:22:53.738Z"
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:4,
          title:"Deadmau5 Electric Family Bracelet",
          description:"Limited edition Deadmau5 Electric Family Bracelet",
          price:18,
          item_image:"https://pbs.twimg.com/media/BsJSky-CUAACZP6.jpg",
          created_at:"2017-06-06T00:26:37.702Z",
          updated_at:"2017-06-06T00:26:37.702Z"
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:4,
          title:"Seven Lions",
          description:"Seven Lions concert tickets at the Heat nightclub in Orange County, California on November 25th",
          price:36,
          item_image:"https://cdn.vor.us/event/309663/og/0bd265d7276a48eca092367b8482975e.image!jpeg.483782.jpg.Seven_Lions_Heat_11-25-15.jpg",
          created_at:"2017-06-06T16:52:41.040Z",
          updated_at:"2017-06-06T16:52:41.040Z"
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:5,
          title:"Illenium concert tickets",
          description:"Illenium concert tickets for the midwest; Cleveland, Milwaukee, Minneapolis, Kansas City; Featuring 'Said The Sky'",
          price:39,
          item_image:"http://www.theuntz.com/media/events/3/9/4/39497/illenium-at-the-midland_raw.jpg",
          created_at:"2017-06-06T17:08:13.299Z",
          updated_at:"2017-06-06T17:08:13.299Z"
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:6,
          title:"Coachella Tickets: Week 2",
          description:"Tickets to the Southern California Coachella music and arts festival, weekend 2",
          price:450,
          item_image:"http://travelgrom.wpengine.netdna-cdn.com/wp-content/uploads/coachella-ticket-1050x500.jpg",
          created_at:"2017-06-06T08:46:23.448Z",
          updated_at:"2017-06-06T08:46:23.448Z"
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:7,
          title:"2017 Bonnaroo Tickets",
          description:"2017 Bonnaroo Tickets: June 16th to 18th in Manchester, Tennessee",
          price:425,
          item_image:"https://c1.staticflickr.com/1/44/158835493_487e07128b_b.jpg",
          created_at:"2017-06-06T06:54:14.674Z",
          updated_at:"2017-06-06T06:54:14.674Z"
        })
      }).then(function () {
        return knex('classifieds').insert(
        {
          id:8,
          title: "Madeon X Family Bracelet",
          description: "Madeon X Family Bracelet",
          price:16,
          item_image:"http://orig04.deviantart.net/06b8/f/2015/160/1/7/madeon_electric_family_bracelet_by_geekycreeper-d8wp7cf.png",
          created_at: "2017-06-06T00:18:31.877Z",
          updated_at: "2017-06-06T00:18:31.877Z"
        })
      }).then(function() {
          return knex.raw("SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds));")
    })
};
