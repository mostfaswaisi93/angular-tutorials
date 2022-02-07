import { Component, Input, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit,OnDestroy {
  checkoutSub:Subscription
  modalRef: BsModalRef | any;
  cartData:any
  customizePrice: number
  customizeSize: string
  customizePriceAndSize: object
  customizeAmount: number
  CustomizeExtraToppingPrice: number = 0
  customizeChosenToppings: Array<any>
  customizeAdditionPrice: number = 0
  customizeChosenAddition: Array<any>
  checkoutForm: FormGroup
  checkoutLoading=false
  @Input() cartDataFomParent:any
  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
    public cartservice: CartService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private dashboard:DashboardService,
    private fb: FormBuilder,
    private authservice:AuthService) {
    if (this.route.snapshot.data.cart) {
      this.cartData = this.route.snapshot.data.cart
    }
   if(this.authservice.isLogin()) {
     this.authservice.prepearUserData()
   }
  }
  ngOnInit(): void {
  }

  openCustomizeModal(template: TemplateRef<any>, cart:any, i:any) {
    this.modalRef = this.modalService.show(template);
    this.customizePrice = cart.chosenSize.price
    this.customizeSize = cart.chosenSize.size
    this.customizeAmount = cart.quantity
    this.customizePriceAndSize = cart.chosenSize
    this.customizeChosenToppings = JSON.parse(JSON.stringify(cart.toppings))
    this.customizeChosenAddition = JSON.parse(JSON.stringify(cart.specialAdditions))
    this.getCustomizeToppingAndAdditionPrice(i)
  }
  openModal(template:any) {
    this.modalRef = this.modalService.show(template);
  }
  changeSIze(cart:any, sizeIndex:any) {
    this.customizePriceAndSize = cart.chosenProduct.sizes[sizeIndex]
  }

  getCustomizeToppingAndAdditionPrice(i:any) {


    this.customizeAdditionPrice = 0
    this.CustomizeExtraToppingPrice = 0
    for (let topingIndex = 0; topingIndex < this.cartData[i].toppings.length; topingIndex++) {
      if (this.cartData[i].toppings[topingIndex].quantity == "plus") {

        this.CustomizeExtraToppingPrice += this.cartData[i].chosenProduct.toppings[topingIndex].sizes[0].price

      }
    }
    for (let adtionIndex = 0; adtionIndex < this.cartData[i].specialAdditions.length; adtionIndex++) {
      if (this.cartData[i].specialAdditions[adtionIndex].quantity == "plus") {

        this.customizeAdditionPrice += this.cartData[i].chosenProduct.specialsAdditions[adtionIndex].sizes[1].price

      } else if (this.cartData[i].specialAdditions[adtionIndex].quantity == "with") {
        this.customizeAdditionPrice += this.cartData[i].chosenProduct.specialsAdditions[adtionIndex].sizes[0].price
      }
    }

  }
  addExtraToppingPrice(toppingPrice:any, toppingIndex:any) {
    this.CustomizeExtraToppingPrice += toppingPrice
    this.toastr.success('topping added succesfuly', 'success', {
      timeOut: 2000,
    });
    this.customizeChosenToppings[toppingIndex].showToppingPrice = true
  }
  removeExtraToppingPrice(toppingPrice:any, toppingIndex:any, e:any) {

    if (this.customizeChosenToppings[toppingIndex].showToppingPrice) {
      this.CustomizeExtraToppingPrice -= toppingPrice
    }
    this.customizeChosenToppings[toppingIndex].showToppingPrice = false
    if (e.value == "with") {
      this.toastr.success('topping added succesfuly', 'success', {
        timeOut: 2000,
      })
    } else {
      this.toastr.success('topping removed succesfuly', 'success', {
        timeOut: 2000,
      })
    }
  }

  addAddtionPrice(additionSizes:any, additionIndex:any, e:any) {
    let withOrExtraAddition = this.customizeChosenAddition[additionIndex].withOrExtra
    if (e.value == "with") {
      if (!withOrExtraAddition.extra) {
        this.customizeAdditionPrice += additionSizes[0].price
      } else {
        this.customizeAdditionPrice = (this.customizeAdditionPrice + additionSizes[0].price) - additionSizes[1].price
      }
      withOrExtraAddition.with = true
      withOrExtraAddition.extra = false
    }
    else {
      if (!withOrExtraAddition.with) {
        this.customizeAdditionPrice += additionSizes[1].price
      } else {
        this.customizeAdditionPrice = (this.customizeAdditionPrice + additionSizes[1].price) - additionSizes[0].price
      }
      withOrExtraAddition.extra = true
      withOrExtraAddition.with = false
    }
    this.toastr.success('topping added succesfuly', 'success', {
      timeOut: 2000,
    });
  }
  removeExtraAdditionPrice(additionSizes:any, additionIndex:any) {
    let withOrExtraAddition = this.customizeChosenAddition[additionIndex].withOrExtra
    if (withOrExtraAddition.with) {
      this.customizeAdditionPrice -= additionSizes[0].price
      withOrExtraAddition.with = false
    } else if (withOrExtraAddition.extra) {
      this.customizeAdditionPrice -= additionSizes[1].price
      withOrExtraAddition.extra = false
    }


    this.toastr.success('topping removed succesfuly', 'success', {
      timeOut: 2000,
    })
  }
  customizeCartItem(i:any) {
    this.cartData[i].quantity = this.customizeAmount
    this.cartData[i].size = this.customizeSize
    this.cartData[i].toppings = this.customizeChosenToppings
    this.cartData[i].toppingsPrice = this.CustomizeExtraToppingPrice
    this.cartData[i].specialAdditions = this.customizeChosenAddition
    this.cartData[i].additionPrice = this.customizeAdditionPrice
    this.cartData[i].chosenSize = this.customizePriceAndSize
    localStorage.setItem("cart", JSON.stringify(this.cartData))
    this.modalRef.hide()
    this.toastr.success('product updated succesfuly', 'success', {
      timeOut: 2000,
    });
    this.cartservice.getCartData()
  }
  chickOut(template:any) {
    this.modalRef = this.modalService.show(template);
    this.checkoutForm = this.fb.group({
      cardNumber: ["", [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expMonth: ["", [Validators.required, Validators.pattern(/^([1-9]|1[0-2])$/)]],
      expYear: ["", [Validators.required, Validators.pattern(/^(202[0-9]|203[0-9]|204[0-9]|205[0-9]|206[0-9]|207[0-9]|208[0-9]|209[0-9])$/)]],
      cvv: ["", [Validators.required, Validators.pattern(/\d{3}/)]],
      phone: ["", [Validators.required,Validators.pattern(/^1\d{9}$/)]],
      recieve: ["pick up", Validators.required],
      address: this.fb.group({
        city: ["", Validators.required],
        zone: ["", Validators.required],
        house: ["", Validators.required]
      })
    });
  }


  payNow() {
    this.checkoutLoading=true
    let value = this.checkoutForm.value;
    (<any>window).Stripe.card.createToken({
      number: value.cardNumber,
      exp_month: value.expMonth,
      exp_year: value.expYear,
      cvc: value.cvv,
    }, (status:any, response:any) => {
      if (status == 200) {
        for (let i = 0; i < this.cartData.length; i++) {
          if (this.cartData[i].hasOwnProperty("price")) {
            this.cartData[i].price *= this.cartData[i].quantity
            delete this.cartData[i].size
            delete this.cartData[i].toppings
            delete this.cartData[i].specialAdditions
          } else {
            if (this.cartData[i].category == 'pizza') {
              this.cartData[i].price=(this.cartData[i].chosenSize.price * this.cartData[i].quantity) + 
              (this.cartData[i].additionPrice * this.cartData[i].quantity) +
              (this.cartData[i].toppingsPrice * this.cartData[i].quantity)
              if ( this.cartData[i].toppings.length) {
                for (let topping = 0; topping < this.cartData[i].toppings.length; topping++) {
                  delete this.cartData[i].toppings[topping].showToppingPrice
                  if (this.cartData[i].toppings[topping].quantity == "without") {
                    this.cartData[i].toppings.splice(topping, 1)
                    --topping
                  }
    
                }
              } 
              if (this.cartData[i].specialAdditions.length) {
                for (let addition = 0; addition < this.cartData[i].specialAdditions.length; addition++) {
                  delete this.cartData[i].specialAdditions[addition].withOrExtra
                  if (this.cartData[i].specialAdditions[addition].quantity == "without") {
                    this.cartData[i].specialAdditions.splice(addition, 1)
                    --addition
                  }
                }
              } 
            } else {
              this.cartData[i].price=(this.cartData[i].chosenSize.price * this.cartData[i].quantity)
              delete this.cartData[i].toppings
              delete this.cartData[i].specialAdditions
            }
          }
          delete this.cartData[i].chosenProduct
          delete this.cartData[i].chosenSize
          delete this.cartData[i].category
          delete this.cartData[i].additionPrice
          delete this.cartData[i].toppingsPrice
        }
        let result = {
          "token": response.id, 
          "products":   this.cartData,
           "adress": value.address,
           "amount": this.cartservice.totalPrice + 19,
           "recieve": value.recieve,
           "email": `${this.authservice.userProfile?.profile?.email || 'any@any.com'}`,
           "phone": `0${value.phone}`,
        }
    this.checkoutSub =  this.cartservice.checkout(result).subscribe((res:any) => {
         this.checkoutLoading=false
      this.toastr.success('your order added succesfuly', 'success', {
        timeOut: 2000,
      });
        this.modalRef.hide() 
      if(this.authservice.isLogin() && this.authservice.userProfile?.profile?.role != 'admin') {
        this.zone.run(() => {
          this.router.navigate(['/profile/orders']) 
      });
      } else {
        this.zone.run(() => {
          this.router.navigate(['/home']) 
      });
      }
        this.cartservice.cartData=[]
        localStorage.setItem("cart", JSON.stringify([]))
        this.cartservice.totalAmount=0   
       }, err => {
        this.checkoutLoading=false
          this.router.navigate(['notFound'])
       })
      } else {
        this.checkoutLoading=false
        alert(response.error.message)
      }
    })
  }


ngOnDestroy() {
 if(this.checkoutSub) this.checkoutSub.unsubscribe()
}
}
