angular.module('noServerApp')
.service('teamService', function(){

var rslData = [
  {
    name: 'Nick Rimando',
    age: 36,
    number: 18,
    position: 'GoalKeeper',
    img: 'http://img.deseretnews.com/images/article/mcontentimage/1340179/1340179.jpg'
  },
  {
    name: 'Chris Wingert',
    age: 33,
    number: 16,
    position: 'Defender',
    img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=Wz_2QuHGA924eMtZ3CtDoc$daE2N3K4ZzOUsqbU5sYtRQGjbjHqSrMZe0KWSPDyhWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
  },
  {
    name: 'Aaron Maund',
    age: 25,
    number: 21,
    position: 'Defender',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/ac/1e/83/ac1e83d7e92807aad8d1c3d62adc0a8b.jpg'
  },
  {
    name: 'Justen Glad',
    age: 19,
    number: 15,
    position: 'Defender',
    img: 'http://img.deseretnews.com/images/article/midres2/1680733/1680733.jpg'
  },
  {
    name: 'Tony Beltran',
    age: 28,
    number: 2,
    position: 'Defender',
    img: 'http://img.deseretnews.com/images/article/mcontentimage/1555716/1555716.jpg'
  },
  {
    name: 'Kyle Beckerman',
    age: 34,
    number: 5,
    position: 'Midfielder',
    img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=1pTwuFKqVhQaSnISbUIm2M$daE2N3K4ZzOUsqbU5sYtUqTDila9NkzkSfhi4I2oVWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
  },
  {
    name: 'Luke Mulholland',
    age: 27,
    number: 19,
    position: 'Midfielder',
    img: 'http://espn700sports.com/wp-content/uploads/2016/04/Luke-Mulholland-shot.jpg'
  },
  {
    name: 'Sunday Stephen',
    age: 27,
    number: 8,
    position: 'Midfielder',
    img: 'http://img.deseretnews.com/images/article/midres2/1669723/1669723.jpg'
  },
  {
    name: 'Joao Plata',
    age: 24,
    number: 10,
    position: 'Forward',
    img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=8pHqFFR3wqJPhvDy4r28_M$daE2N3K4ZzOUsqbU5sYtsg$V3H0D8TNypKwNfAtU1WCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
  },
  {
    name: 'Yura Movsisyan',
    age: 28,
    number: 14,
    position: 'Forward',
    img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=r09lLzGE4wZ_DiftbmcIkc$daE2N3K4ZzOUsqbU5sYvtUFvVBbOZ1FlKQqyQpzLzWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg&pid=3362540'
  },
  {
    name: 'Juan Burrito Martinez',
    age: 30,
    number: 7,
    position: 'Forward',
    img: 'http://img.ksl.com/slc/2571/257172/25717272.jpg?filter=ksl/img614'
  },
  {
    name: 'Jeff Antinella',
    age: 27,
    number: 24,
    position: 'GoalKeeper',
    img: 'https://s-media-cache-ak0.pinimg.com/236x/8a/a2/b1/8aa2b1b164f798553629c7a2d81fedef.jpg'
  },
  {
    name: 'Javier Morales',
    age: 36,
    number: 11,
    position: 'Midfielder',
    img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=TQOmGlS5gv4mnlmkw_bvps$daE2N3K4ZzOUsqbU5sYt9ZdUVLPzXl5ykxox$rf9RWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
  },
  {
    name: 'Jordan Allen',
    age: 21,
    number: 70,
    position: 'Midfielder',
    img: 'http://realsoccernation.com/wp-content/uploads/wppa/1235.jpg'
  },
  {
    name: 'Demar Phillips',
    age: 32,
    number: 17,
    position: 'Defender',
    img: 'http://www.gannett-cdn.com/-mm-/c963ae5ed33bc74adbd780d132159d74504734a3/c=8-0-1808-2400&r=537&c=0-0-534-712/local/-/media/StGeorge/2015/04/20/B9317054303Z.1_20150420201530_000_GTMAIGLPE.1-0.jpg'
  },
  {
    name: 'Jamison Olave',
    age: 35,
    number: 4,
    position: 'Defender',
    img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=6Ch52C$6pd3mvwQ4T7X_Os$daE2N3K4ZzOUsqbU5sYv9Pj1qtr9l8gB9AAyeG6ZAWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
  },
  {
    name: 'Devon Sandoval',
    age: 24,
    number: 49,
    position: 'Forward',
    img: 'https://s-media-cache-ak0.pinimg.com/236x/77/7f/27/777f27c880657756cfd6a80752205ddd.jpg'
  },
  {
    name: 'John Stertzer',
    age: 27,
    number: 25,
    position: 'Midfielder',
    img: 'http://www.ottawacitizen.com/sports/cms/binary/11276931.jpg?size=640x420'
  }
];

var monarchsData = [

{
  name: 'Eric Osswald',
  age: 24,
  number: 24,
  position: 'GoalKeeper',
  img: 'https://pbs.twimg.com/profile_images/630037135626649600/UueV9KOJ.jpg'
},
{
  name: 'Max Lachowecki',
  age: 23,
  number: 18,
  position: 'Defender',
  img: 'http://cdn2.sportngin.com/attachments/roster_player_info/6254/6365/18_Max_Lachowecki_medium.jpg'
},
{
  name: 'Emilio Orozco',
  age: 24,
  number: 12,
  position: 'Defender',
  img: 'http://realsoccernation.com/wp-content/uploads/wppa/1162.jpg'
},
{
  name: 'Chris Schuler',
  age: 28,
  number: 28,
  position: 'Defender',
  img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=qSFuGXB5x5Jzh902VT_vhs$daE2N3K4ZzOUsqbU5sYvtjHFBScsYSxuIQ139dRALWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
},
{
  name: 'Tyler Arnone',
  age: 24,
  number: 19,
  position: 'Defender',
  img: 'https://pbs.twimg.com/media/CZR5uRoUYAAULy-.jpg'
},
{
  name: 'Elder Torres',
  age: 21,
  number: 15,
  position: 'Midfielder',
  img: 'http://cdn3.sportngin.com/attachments/roster_player_info/6254/6343/15_Elder_Torres_medium.jpg'
},
{
  name: 'Alec Sundly',
  age: 23,
  number: 6,
  position: 'Midfielder',
  img: 'http://realsoccernation.com/wp-content/uploads/wppa/1316.jpg'
},
{
  name: 'Ricardo Velazco',
  age: 23,
  number: 10,
  position: 'Midfielder',
  img: 'http://saltcityfc.com/wp-content/uploads/2015/07/AJ8T4581.jpg'
},
{
  name: 'Andrew Brody',
  age: 21,
  number: 17,
  position: 'Forward',
  img: 'http://cdn4.sportngin.com/attachments/roster_player_info/6254/6361/17_Andrew_Brody_medium.jpg'
},
{
  name: 'Maikon Orellana',
  age: 22,
  number: 11,
  position: 'Forward',
  img: 'http://realsoccernation.com/wp-content/uploads/wppa/1292.jpg'
},
{
  name: 'Eti Tavares',
  age: 22,
  number: 7,
  position: 'Forward',
  img: 'http://cdn3.sportngin.com/attachments/roster_player_info/6254/6246/7_Etiandro_Tavares_medium.jpg'
},
{
  name: 'Connor Sparrow',
  age: 22,
  number: 30,
  position: 'GoalKeeper',
  img: 'http://cdn3.sportngin.com/attachments/roster_player_info/6254/6465/30_Connor_Sparrow_medium.jpg'
},
{
  name: 'Amass Amankona',
  age: 20,
  number: 16,
  position: 'Midfielder',
  img: 'http://realsoccernation.com/wp-content/uploads/wppa/1317.jpg'
},
{
  name: 'Riley mcGovern',
  age: 24,
  number: 4,
  position: 'Defender',
  img: 'http://www.sltrib.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=812Qzo1Hs6MtM5WNBcsl2c$daE2N3K4ZzOUsqbU5sYvdvZ7$gmSZy$jfXfTRwA28WCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg'
},
{
  name: 'Darion Copeland',
  age: 23,
  number: 22,
  position: 'Defender',
  img: 'https://pbs.twimg.com/profile_images/715785446182227969/xradp4K-.jpg'
},
{
  name: 'Colin Rolfe',
  age: 26,
  number: 14,
  position: 'Forward',
  img: 'http://cdn4.sportngin.com/attachments/roster_player_info/6254/6334/14_Colin_Rolfe_medium.jpg'
},
{
  name: 'Kevaughn Frater',
  age: 21,
  number: 9,
  position: 'Forward',
  img: 'http://cdn4.sportngin.com/attachments/roster_player_info/6254/6269/9_Kevaughn_Frater_medium.jpg'
}]

this.getData= function(team){
  if(team === 'rsl') {
    return rslData;
  }
  if(team === 'monarchs') {
    return monarchsData;
  }
}

})
