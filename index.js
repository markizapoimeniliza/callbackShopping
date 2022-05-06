// promises + callbacks (3 and 3) 

// promises
// 1)cars' race +
// 2)cakes order at hand
// 3)promise of a father abt entertainment

// callbacks
// 1)order on the Internet shop(clothes)+
// 2)buy alcoin
// 3)run a business



let order = (ms,callback) => {
    setTimeout(()=>{
        console.log("Start shopping")
        callback()
    },ms)
}

function callback(){
  setTimeout(()=> {
      console.log("Do you like this good?")
      setTimeout(()=>{
          console.log("Buy it!")
          setTimeout(()=>{
              console.log("It is ready to be sent!")
              setTimeout(()=> {
                  console.log("Wait it on 8th May!")
              },5000)
          },5000)
      },5000)
  },5000)
}

order(4000,callback)