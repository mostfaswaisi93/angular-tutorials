import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData:any
totalPrice=0
totalAmount=0
alreadyExist=false
sameTopping=false
sameToppingCounter=0
sameAdditionCounter=0
sizesCounter:number=0
breakouter:boolean
  constructor(private http:HttpClient,
    private router:Router,
    private toastr: ToastrService,
    private dashboard:DashboardService) {
    if(localStorage.getItem("cart") == null) this.cartData=[]
    else this.cartData = JSON.parse(localStorage.getItem("cart"))
    
  }
  addToCart(cartItem:any) {
    this.alreadyExist=false
    this.sameTopping=false
    this.sameToppingCounter=0
    this.sameAdditionCounter=0
    if(localStorage.getItem("cart") == null) this.cartData=[]
    else this.cartData = JSON.parse(localStorage.getItem("cart"))
    if(this.cartData.length==0) {
      this.cartData.push(cartItem)
      localStorage.setItem("cart",JSON.stringify(this.cartData))
    } else {
      outer:
       for(let i = 0;i<this.cartData.length;i++) {
        this.sameAdditionCounter=0
        this.sameToppingCounter=0
       this.sameTopping=false
          if(this.cartData[i].product == cartItem.product && this.cartData[i].size == cartItem.size &&  cartItem.category!=='pizza') {
             this.alreadyExist=true
               this.cartData[i].quantity+=cartItem.quantity
               localStorage.setItem("cart",JSON.stringify(this.cartData))
               break
          } 
          if(this.cartData[i].product == cartItem.product && this.cartData[i].size == cartItem.size &&  cartItem.category=='pizza'){ 
         
            for (let chosenTopping=0;chosenTopping<cartItem.toppings.length;chosenTopping++) {
              
              if(cartItem.toppings[chosenTopping].topping == this.cartData[i].toppings[chosenTopping].topping &&cartItem.toppings[chosenTopping].quantity == this.cartData[i].toppings[chosenTopping].quantity) {
                this.sameToppingCounter+=1
                  if(this.sameToppingCounter==cartItem.toppings.length) {
                  this.sameTopping=true
               
                  }
               }
                else {
                   this.sameTopping=false
                   break
                 }
           
            }
            if(this.sameTopping) {
              for (let chosenAdditionInedx=0;chosenAdditionInedx<cartItem.specialAdditions.length;chosenAdditionInedx++) {
                   
                if(cartItem.specialAdditions[chosenAdditionInedx].addition == this.cartData[i].specialAdditions[chosenAdditionInedx].addition &&cartItem.specialAdditions[chosenAdditionInedx].quantity == this.cartData[i].specialAdditions[chosenAdditionInedx].quantity) {
                   this.sameAdditionCounter+=1
                   if(this.sameAdditionCounter==cartItem.specialAdditions.length) {
                    this.cartData[i].quantity+=cartItem.quantity
            localStorage.setItem("cart",JSON.stringify(this.cartData))
                    this.sameTopping=true
                    break outer
                   }
                }
                  else {
                     this.sameTopping=false
                     break
                   }
             
            }
            }
             
         } 
          
      }
      if(cartItem.category=="pizza") {
        if(!this.sameTopping) {
          this.cartData.push(cartItem)
          localStorage.setItem("cart",JSON.stringify(this.cartData))
         } 
      }      
       if(cartItem.category!="pizza") {
        if(!this.alreadyExist) {
          this.cartData.push(cartItem)
          localStorage.setItem("cart",JSON.stringify(this.cartData))
        }
       }
    }
  }
  getCartData() {
    this.totalAmount=0
   this.totalPrice=0
   this.sizesCounter=0
   this.breakouter=false 
      outer: 
      if(this.cartData.length) {                   
      for (let i = 0 ;i<this.cartData.length;i++) {
        if(this.breakouter) break
      this.totalAmount+=this.cartData[i].quantity
      this.cartData[i].toppingsPrice=0
      this.cartData[i].additionPrice=0
      this.sizesCounter=0
        this.http.get(`${environment.apiUrl}/api/products/product/${this.cartData[i].product}`).subscribe(res => {
          this.cartData[i].chosenProduct = res
           if( this.cartData[i].chosenProduct.sizes.length) {
          for (let ii=0;ii<this.cartData[i].chosenProduct.sizes.length;ii++) {
            if(this.cartData[i].size == this.cartData[i].chosenProduct.sizes[ii].size) {
              this.cartData[i].chosenSize = this.cartData[i].chosenProduct.sizes[ii]
              break
            } else {
              this.sizesCounter++
              if(this.sizesCounter==this.cartData[i].chosenProduct.sizes.length) {
                this.breakouter=true
                
                this.cartData=[]
                localStorage.setItem("cart",JSON.stringify(this.cartData));
                if(this.dashboard.categoriesNames.length) {
                 this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`])
               } else {
                this.router.navigate([`../products/empty`])
               }
                this.toastr.success('there is an update occurred', '', {
                 timeOut: 2000,
               });
               break 
              }
            }
          }
        }
          if(this.cartData.length) {
            this.getToppingAndAdditionPrice(i)
          }
          if(this.cartData.length) {
            this.getTotalPrice(i)
          }
        } , err => {
           this.cartData=[]
           localStorage.setItem("cart",JSON.stringify(this.cartData));
           this.breakouter=true
           this.getCartData()
           if(this.dashboard.categoriesNames.length) {
            this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`])
          } else {
           this.router.navigate([`../products/empty`])
          }
           this.toastr.success('there is an update occurred', '', {
            timeOut: 2000,
          });
           return this.cartData
           
        })
       
      }
    }
      return this.cartData
        }
  
  updateAmount(quantity:any,i:any) {
    this.totalAmount=0
    this.totalPrice=0
    this.cartData[i].quantity = quantity
    localStorage.setItem("cart",JSON.stringify(this.cartData))
    for (let i = 0 ;i<this.cartData.length;i++) {
      this.cartData[i].toppingsPrice=0
      this.cartData[i].additionPrice=0
      this.getToppingAndAdditionPrice(i)
      this.totalAmount+=this.cartData[i].quantity
      this.getTotalPrice(i)
  }

}
  deleteItem(i:any) {
    this.totalAmount=0
    this.totalPrice=0
    for (let i = 0 ;i<this.cartData.length;i++) {
      this.cartData[i].toppingsPrice=0
      this.cartData[i].additionPrice=0
      
    }
    this.cartData.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(this.cartData))
if(this.cartData.length==0) {
  if(this.dashboard.categoriesNames.length) {
    this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`])
  } else {
   this.router.navigate([`../products/empty`])
  }
}
   for (let i = 0 ;i<this.cartData.length;i++) {
    this.getToppingAndAdditionPrice(i)
    this.totalAmount+=this.cartData[i].quantity
    this.getTotalPrice(i)
  }
    
  }
  getToppingAndAdditionPrice(i:any) {
    let toopingAndAdditionUpdated = false
    let counter = 0 
    if(this.cartData[i]?.chosenProduct.toppings.length && this.cartData[i]?.toppings.length) { 
       toppingsOuter:
       for (let topping of this.cartData[i].toppings) {
          counter=0
          for (let storedTopping of this.cartData[i]?.chosenProduct.toppings) {
            if(topping.topping == storedTopping.topping)  {
              toopingAndAdditionUpdated=false
                break
            } else {
              counter++
              if(counter==this.cartData[i]?.chosenProduct.toppings.length) {
                toopingAndAdditionUpdated = true
                break toppingsOuter
              }
            }
          } 
        }
    }
    if(this.cartData[i]?.chosenProduct.specialsAdditions.length &&  this.cartData[i].specialAdditions && !toopingAndAdditionUpdated) {
      counter=0
      additionOuter:
      for (let addition of this.cartData[i].specialAdditions) {
        counter=0
         for (let storedAddition of this.cartData[i]?.chosenProduct.specialsAdditions ) {
           if(addition.addition == storedAddition.addition)  {
              toopingAndAdditionUpdated=false
               break
           } else {
             counter++
              if(counter==this.cartData[i]?.chosenProduct.specialsAdditions.length) {
                toopingAndAdditionUpdated = true
                break additionOuter
              }
           }
         }
         
      }
 
    }
    if(!toopingAndAdditionUpdated) {
      if(this.cartData[i]?.chosenProduct.toppings.length && this.cartData[i]?.toppings.length) {
        for(let tpngIndex = 0 ;tpngIndex<this.cartData[i].toppings.length;tpngIndex++) {
          if( this.cartData[i].toppings[tpngIndex].quantity=="plus"){
    
            this.cartData[i].toppingsPrice+=this.cartData[i].chosenProduct.toppings[tpngIndex].sizes[0].price
           
          }
        }
      }
      if(this.cartData[i]?.chosenProduct.specialsAdditions.length &&  this.cartData[i].specialAdditions) {
        for(let adtionIndex = 0 ;adtionIndex<this.cartData[i].specialAdditions.length;adtionIndex++) {
          if( this.cartData[i].specialAdditions[adtionIndex].quantity=="plus"){
    
            this.cartData[i].additionPrice+=this.cartData[i].chosenProduct.specialsAdditions[adtionIndex].sizes[1].price
           
          } else if (this.cartData[i].specialAdditions[adtionIndex].quantity=="with") {
           this.cartData[i].additionPrice+=this.cartData[i].chosenProduct.specialsAdditions[adtionIndex].sizes[0].price
          }
        }
      }
        
    } else {
      this.breakouter=true
                
      this.cartData=[]
      localStorage.setItem("cart",JSON.stringify(this.cartData));
      if(this.dashboard.categoriesNames.length) {
       this.router.navigate([`../products/${this.dashboard.categoriesNames[0]}`])
     } else {
      this.router.navigate([`../products/empty`])
     }
      this.toastr.success('there is an update occurred', '', {
       timeOut: 2000,
     });
    }
  }
  getTotalPrice(i:any) {
    if(this.cartData[i].chosenProduct.sizes.length) {
      this.totalPrice+= (this.cartData[i].toppingsPrice*this.cartData[i].quantity) + (this.cartData[i].additionPrice*this.cartData[i].quantity) + (this.cartData[i].chosenSize.price*this.cartData[i].quantity)
    } else {
      this.totalPrice+=this.cartData[i].chosenProduct.price*this.cartData[i].quantity
    }
  }
checkout(body:any) {
  return this.http.post(`${environment.apiUrl}/api/orders/add`,body)
}

}
