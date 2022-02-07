import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit , OnDestroy {
  categoriesLoading=true
  modalRef: BsModalRef | any;
  products: any=[]
  price: any
  size: any=" "
  amount: number | any = 1
  seeMoreIndex: number = -1
  cartData:any
  choosenToppings:any=[]
  chosenSpeciialAdditions:any=[]
  extraToppingPrice=0
  additionPrice=0
  dataSub:Subscription
  constructor(private modalService: BsModalService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService,
    private dashboard: DashboardService,
    private activatedroute: ActivatedRoute,
    public authservice:AuthService) {
  
 this.dataSub =  this.activatedroute.params.subscribe(data => {
      if (this.activatedroute.snapshot.data.categories.hasOwnProperty("categories")) {
        this.categoriesLoading=false
        let category = this.activatedroute.snapshot.data.categories.categories
        
        if(category) {
          for (let i = 0; i < category.length; i++) {
            if (category[i].name == data.categoryName) {
              this.products = category[i].products
              this.cartData= this.cartService.getCartData()
              break
            }
          }
        }
     
      } 
    })

  }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>, product: any) {
    this.modalRef = this.modalService.show(template);
 this.choosenToppings.length=product.toppings.length
 this.chosenSpeciialAdditions.length=product.specialsAdditions.length
 if(product.toppings.length) {
  for(let i =0;i<product.toppings.length;i++) {
    this.choosenToppings.fill({topping:`${product.toppings[i].topping}`,quantity:"with",showToppingPrice:false},i,i+1)
   }
 }
 if(product.specialsAdditions.length) {
  for(let i =0;i<product.specialsAdditions.length;i++) {
    this.chosenSpeciialAdditions.fill({addition:`${product.specialsAdditions[i].addition}`,quantity:"without",withOrExtra:{with:false,extra:false}},i,i+1)
   }
 }
    if (product.sizes.length) {
      this.price = product.sizes[0].price
      this.size = product.sizes[0].size
    } 
    else {
      this.price = product.price
      this.size=" "
    }
    this.amount = 1
    this.extraToppingPrice=0
    this.additionPrice=0
  }
  stpPropagation(e:any){e.stopPropagation()}
  addToCart(product: any, quantity: any, size: any,category:any,price:any) {
    let cartItem 
    if(price==undefined) {
       cartItem = {product,quantity,size,category,toppings:this.choosenToppings,toppingsPrice:0,specialAdditions:this.chosenSpeciialAdditions,additionPrice:0}
    } else {
      cartItem = {product,quantity,size,category,"toppings":this.choosenToppings,toppingsPrice:0,"specialAdditions":this.chosenSpeciialAdditions,additionPrice:0,price}
    }
    
    this.cartService.addToCart(cartItem)
    this.modalRef.hide()
    this.toastr.success('product added succesfuly', 'success', {
      timeOut: 2000,
    });

   this.router.navigate(['products/cart'])
 
 

  }
  addExtraToppingPrice(toppingPrice:any,toppingIndex:any) {
    this.extraToppingPrice += toppingPrice
    this.choosenToppings[toppingIndex].showToppingPrice=true
      this.toastr.success('topping added succesfuly', 'success', {
      timeOut: 2000,
    });
  }
  removeExtraToppingPrice(toppingPrice:any,toppingIndex:any,e:any) {
    
    if(this.choosenToppings[toppingIndex].showToppingPrice) {
      this.extraToppingPrice -= toppingPrice
      this.choosenToppings[toppingIndex].showToppingPrice=false
    }
   
    if(e.value=="with") {
      this.toastr.success('topping added succesfuly', 'success', {
        timeOut: 2000,
      })
    } else {
      this.toastr.success('topping removed succesfuly', 'success', {
        timeOut: 2000,
      })
    }
  }
  addAddtionPrice(additionSizes:any,additionIndex:any,e:any) {
let withOrExtraAddition=this.chosenSpeciialAdditions[additionIndex].withOrExtra
    if(e.value=="with") {
       if(!withOrExtraAddition.extra) {
         this.additionPrice+=additionSizes[0].price
       } else {
        this.additionPrice = (this.additionPrice + additionSizes[0].price) -  additionSizes[1].price
       }
       withOrExtraAddition.with=true
       withOrExtraAddition.extra=false
    } 
    else {
      if(!withOrExtraAddition.with) {
        this.additionPrice+=additionSizes[1].price
      } else {
       this.additionPrice = (this.additionPrice + additionSizes[1].price) -  additionSizes[0].price
      }
      withOrExtraAddition.extra=true
      withOrExtraAddition.with=false
    }
    this.toastr.success('topping added succesfuly', 'success', {
      timeOut: 2000,
    });
  }
  removeExtraAdditionPrice(additionSizes:any,additionIndex:any) {
      let withOrExtraAddition=this.chosenSpeciialAdditions[additionIndex].withOrExtra
    if(withOrExtraAddition.with) {
      this.additionPrice-=additionSizes[0].price
      withOrExtraAddition.with=false
    } else if (withOrExtraAddition.extra) {
      this.additionPrice-=additionSizes[1].price
      withOrExtraAddition.extra=false
    }
  
  
      this.toastr.success('topping removed succesfuly', 'success', {
        timeOut: 2000,
      })
    

  }

ngOnDestroy() {
  if(this.dataSub) this.dataSub.unsubscribe()
}

}
