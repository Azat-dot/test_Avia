const url = "http://localhost:3000/tickets";
// const axios = require('axios');
// const { get } = require('server/router');
const stopsNumbers = 0
const ticketsNumbers = 5





/////// get all tickets by fetch

async function getTodo() {
    let response = await fetch(url);
  
    return await response.json()
  }

// getTodo().then(response => console.log(priceFilter (response, ticketsNumbers)))
// getTodo().then(response => console.log(stops(response, stopsNumbers)))

/////// Fastest //////////////////////////////////////////////////////////////////

let fastest = getTodo().then(response => {

  
  // console.log(response.slice(0, 5));

    return response.filter(item => {

      item.segments.reduce((acc, currTicket) => acc + currTicket.duration, 0)

      // item.sort((a, b) => a.duration - b.duration)

       return 
      })
    })


    fastest.then(response => (response));




    // const topSix = {[
    //   {[
    //   { name: "Nigeria", position: "1st", points: 43 },
    //   { name: "England", position: "2nd", points: 37 },
    //   { name: "USA", position: "3rd", points: 35 },
    // ]},
    // {[
    //   { name: "Nigeria", position: "1st", points: 4 },
    //   { name: "England", position: "2nd", points: 3 },
    //   { name: "USA", position: "3rd", points: 3 },
    // ]}
    // ]}

    const topSix = [[
      { name: "Nigeria", position: "1st", points: 43 },
      { name: "England", position: "2nd", points: 37 },
      { name: "USA", position: "3rd", points: 35 },
    ],
    [
      { name: "Nigeria", position: "1st", points: 43 },
      { name: "England", position: "2nd", points: 37 },
      { name: "USA", position: "3rd", points: 35 },
    ]
  ]
  

    const totalPoints = topSix.reduce((acc, currTeam) => acc + currTeam.points, 0);


    console.log(totalPoints)




    //     function sumDuration(a, b) {
    //       return a.duration + b.duration
    //     }
    // let duration = item.segments.reduce(sumDuration, )
    // response.sort((a, b) => a.segment.duration - b.segment.duration)

    // segments.sort((a, b) => a.duration - b.duration)
    // let duration = response.filter(segments => console.log(segments.duration))
  
    // response.sort( (a, b) => a.segment.duration - b.segment.duration)
  
  
  
  
  

/////////// Cheppest //////////////////////////////////////////////////////////////////

function priceFilter (response, ticketsNumbers ) {
  response.sort( (a, b) => a.price - b.price )

  return response.slice(0, ticketsNumbers)
} 

////////////////////    Sort    //////////////////////////////////////////////////////////////////

// function stops(response, stopsNumbers) {
//   return response.filter(item => {

//     let segments = item.segments.filter(segment => segment.stops.length === stopsNumbers);

//     return segments.length === item.segments.length
//    })

// }
 










/////////// Cheppest //////////////////////////////////////////////////////////////////

  // let priceFilter = getTodo().then(response => {
  //   response.sort( (a, b) => a.price - b.price )

  //     return response.slice(0, 5)
  //   })

    // priceFilter.then(response => console.log(response));




////////////////////    Sort    //////////////////////////////////////////////////////////////////

  let stops = getTodo().then(response => {
    return response.filter(item => {

      let segments = item.segments.filter(segment => segment.stops.length === stopsNumbers);

      return segments.length === item.segments.length
   })
   })
  // stops.then(response => console.log(response));


 let noStops = getTodo().then(response => {
     return response.filter(item => {

     let segments = item.segments.filter(segment => segment.stops.length === 0);

     return segments.length === item.segments.length
    })
    })
  //  noStops.then(response => console.log(response));


  let oneStop = getTodo().then(response => {
    return response.filter(item => {

     let segments = item.segments.filter(segment => segment.stops.length === 1);
     return segments.length === item.segments.length
   })
   })
  // oneStop.then(response => console.log(response));


  let twoStops = getTodo().then(response => {
    return response.filter(item => {

    let segments = item.segments.filter(segment => segment.stops.length === 2)
    
    return segments.length === item.segments.length
  })
  })
  // twoStops.then(response => console.log(response));



let threeStops = getTodo().then(response => {
  return response.filter(item => {

   let segments = item.segments.filter(segment => segment.stops.length === 3)
   
   return segments.length === item.segments.length
 })
 })
//  threeStops.then(response => console.log(response));


// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/////// get all tickets by axios   ////////////////////////////////////////////////////////////////


// async function getUser() {
//     const response = await axios.get(url);
//     console.log(response);
// }

// getUser()


// axios.get("http://localhost:3000/tickets?price=42564")
//   .then(function (response) {
//     console.log(response.data);
//   })
  