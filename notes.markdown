### This massive mistake needs to be addressed!

```js

 handleOneDollar(){
   this.setState({
     request: this.state.request - (this.ones + this.twos*2 + this.fives*5 + this.tens*10 + this.twenties*20),
     register_content: Object.assign({}, this.state.register_content, {
           twenty: this.state.register_content.twenty - this.twenties,
           ten: this.state.register_content.ten - this.tens,
           five: this.state.register_content.five - this.fives,
           two: this.state.register_content.two - this.twos,
           one: this.state.register_content.one - this.ones
       })})
 }
 handleTwoDollar(){
   this.setState({
     request: this.state.request - (this.twos*2 + this.fives*5 + this.tens*10 + this.twenties*20),
     register_content: Object.assign({}, this.state.register_content, {
           twenty: this.state.register_content.twenty - this.twenties,
           ten: this.state.register_content.ten - this.tens,
           five: this.state.register_content.five - this.fives,
           two: this.state.register_content.two - this.twos
       })})
 }
 handleFiveDollar(){
   this.setState({
     request: this.state.request - (this.fives*5 + this.tens*10 + this.twenties*20),
     register_content: Object.assign({}, this.state.register_content, {
           twenty: this.state.register_content.twenty - this.twenties,
           ten: this.state.register_content.ten - this.tens,
           five: this.state.register_content.five - this.fives
       })})
 }
 handleTenDollar(){
   this.setState({
     request: this.state.request - (this.tens*10 + this.twenties*20),
     register_content: Object.assign({}, this.state.register_content, {
           twenty: this.state.register_content.twenty - this.twenties,
           ten: this.state.register_content.ten - this.tens
       })})
 }
 handleTwentyDollar(){
   this.setState({
       request: this.state.request - this.twenties*20,
       register_content: Object.assign({}, this.state.register_content, {
           twenty: this.state.register_content.twenty - this.twenties
       })
   })
 }

 denominations(number) {
    let required_twenties, required_tens, required_fives, required_twos
      required_twenties = Math.floor(number / 20)
     if (required_twenties >= this.state.register_content.twenty) {
         this.twenties = this.state.register_content.twenty
         number -= this.twenties * 20;
        required_tens = Math.floor(number / 10)
         if (number !== 0 && required_tens >= this.state.register_content.ten) {
             this.tens = this.state.register_content.ten
             number -= this.tens * 10
             required_fives = Math.floor(number / 5)
             if (number !== 0 && required_fives >= this.state.register_content.five) {
                 this.fives = this.state.register_content.five
                 number -= this.fives * 5
                 required_twos = Math.floor(number / 2)
                 if (number !== 0 && required_twos >= this.state.register_content.two) {
                     this.twos = this.state.register_content.two
                     number -= this.twos * 2
                   if (number !== 0 && number <= this.state.register_content.one) {
                           this.ones = number
                           number -= this.ones
                           this.handleOneDollar()
                     }else{
                       this.handleTwoDollar()
                     }
                 }else if (number !== 0 && required_twos < this.state.register_content.two) {
                     this.twos = required_twos
                     number -= this.twos * 2
                     this.handleTwoDollar()
                 }else {
                   this.handleFiveDollar()
                 }
             }else if (number !== 0 && required_fives < this.state.register_content.five) {
                 this.fives = required_fives
                 number -= this.fives * 5
                 this.handleFiveDollar()
                 required_twos = Math.floor(number / 2)
                 if (number !== 0 && required_twos >= this.state.register_content.two) {
                     this.twos = this.state.register_content.two
                     number -= this.twos * 2
                   if (number !== 0 && number <= this.state.register_content.one) {
                           this.ones = number
                           number -= this.ones
                           this.handleOneDollar()
                     }else{
                       this.handleTwoDollar()
                     }
                 }else if (number !== 0 && required_twos < this.state.register_content.two) {
                     this.twos = required_twos
                     number -= this.twos * 2
                     this.handleTwoDollar()
                 }else {
                   this.handleFiveDollar()
                 }
             }else {
                 this.handleTenDollar()
             }
         }else if (number !== 0 && required_tens < this.state.register_content.ten) {
             this.tens = required_tens
             number -= this.tens * 10
             this.handleTenDollar()
             required_fives = Math.floor(number / 5)
             if (number !== 0 && required_fives >= this.state.register_content.five) {
                  this.fives = this.state.register_content.five
                  number -= this.fives * 5
                  debugger
                 required_twos = Math.floor(number / 2)
                  if (number !== 0 && required_twos >= this.state.register_content.two) {
                      this.twos = this.state.register_content.two
                      number -= this.twos * 2
                    if (number !== 0 && number <= this.state.register_content.one) {
                            this.ones = number
                            number -= this.ones
                            this.handleOneDollar()
                      }
                   }
       } else if (number !== 0 && required_fives < this.state.register_content.five) {
           this.fives = required_fives
           number -= this.fives * 5
           this.handleFiveDollar()
           required_twos = Math.floor(number / 2)
           if (number !== 0 && required_twos >= this.state.register_content.two) {
               this.twos = this.state.register_content.two
               number -= this.twos * 2
             if (number !== 0 && number <= this.state.register_content.one) {
                     this.ones = number
                     number -= this.ones
                     this.handleOneDollar()
               }else{
                 this.handleTwoDollar()
               }
           }else if (number !== 0 && required_twos < this.state.register_content.two) {
               this.twos = required_twos
               number -= this.twos * 2
               this.handleTwoDollar()
           }else {
             this.handleFiveDollar()
            }
       }else{
           this.handleTenDollar()
     }
 }
     else if (number !== 0 && required_twenties < this.state.register_content.twenty) {
       this.twenties = required_twenties
       number -= this.twenties * 20;
        required_tens = Math.floor(number / 10)
         if (number !== 0 && required_tens >= this.state.register_content.ten) {
             this.tens = this.state.register_content.ten
             number -= this.tens * 10
            required_fives = Math.floor(number / 5)
             if (number !== 0 && required_fives >= this.state.register_content.five) {
                 this.fives = this.state.register_content.five
                 number -= this.fives * 5
                required_twos = Math.floor(number / 2)
                 if (number !== 0 && required_twos >= this.state.register_content.two) {
                     this.twos = this.state.register_content.two
                     number -= this.twos * 2
                   if (number !== 0 && number < this.state.register_content.one) {
                           this.ones = number
                           number -= this.ones
                           this.handleOneDollar()
                     }
                 }else if (number !== 0 && required_twos < this.state.register_content.two) {
                     this.twos = required_twos
                     number -= this.twos * 2
                     if (number !== 0 && number < this.state.register_content.one) {
                             this.ones = number
                             number -= this.ones
                             this.handleOneDollar()
                       }
                   }else{
                     this.handleTwoDollar()
                   }
             }else if (number !== 0 && required_fives < this.state.register_content.five) {
                 this.fives = required_fives
                 number -= this.fives * 5
                 this.handleFiveDollar()
               }else {
                 this.handleFiveDollar()
               }
         }else if (number !== 0 && required_tens < this.state.register_content.ten) {
             this.tens = required_tens
             number -= this.tens * 10
             this.handleTenDollar()
           }else {
             this.handleTenDollar()
           }
         }else {
         this.handleTwentyDollar()
         }
     }
 }
```
