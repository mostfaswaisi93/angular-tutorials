import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'app-modify-products',
  templateUrl: './modify-products.component.html',
  styleUrls: ['./modify-products.component.scss']
})
export class ModifyProductsComponent implements OnInit,OnDestroy {

  categories:any[]
  seeMoreIndex: number = -1
  modalRef: BsModalRef|any;
  selected:string
  selectedCategory:any
  searchValue:string=""
  deleteProductSub:Subscription
  deletCatSub:Subscription
  getNamesP:Subscription
  getNameC:Subscription
  loading=false
    constructor(private dashboard:DashboardService,
      private toastr: ToastrService,
      private router:Router,
      private modalService: BsModalService,
      private activatedroute:ActivatedRoute) {
      if(this.activatedroute.snapshot.data.categories.hasOwnProperty("categories")) {
        this.categories=this.activatedroute.snapshot.data.categories.categories
        if(this.categories.length) {
          this.selected=this.categories[0].name
          this.selectedCategory=this.categories[0]
        }
      } else {
        this.categories=[]
      }
    
     }
     selectCategory(e:any) {
      if(this.categories.length) {
          for (let i = 0 ; i<this.categories.length;i++) {
             if(this.categories[i].name == e) {
               this.selectedCategory = this.categories[i]
             }
          }
      }
    }
     openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    ngOnInit(): void {
    }
  deleteProduct(productId:any,length:any,categoryId:any,categoryName:any) {
    this.loading=true
   this.deleteProductSub = this.dashboard.deleteProduct(productId).subscribe((res:any) => {
      this.loading=false
   this.getNamesP =  this.dashboard.getCategories().subscribe((res:any) => {
          this.categories=res.categories
          this.selectCategory(categoryName)
          if(length==1) { 
              this.deleteCategory(categoryId)
          }
      
        this.toastr.success( 'product deleted succesfuly', '', {
          timeOut: 3000,
        });
      }, (err:any) => alert(err.error.message) )
    }, (err:any) => {
      this.loading=false
      alert(err.error.message)
    })
  }
  updateProduct(id:any,name:any) {
    this.router.navigate(["../dashboard/add"],{queryParams : {id,name} })
  }
  deleteCategory(id:any) {
    this.loading=true
 this.deletCatSub = this.dashboard.deleteCategory(id).subscribe((res:any) => {
   this.loading=false
     this.getNameC = this.dashboard.getCategories().subscribe((res:any) => {
      
  
      if(res.hasOwnProperty("categories")) {
        this.categories=res.categories
        this.selectedCategory=this.categories[0]
        this.selected=this.categories[0].name
      } else {
        this.categories=[]
        this.dashboard.categoriesNames=[]
      }
     
      this.toastr.success( 'category deleted succesfuly', '', {
        timeOut: 3000,
      });
    }, (err:any) => alert(err.error.message) )
   }, (err:any) => {
     this.loading=false
    alert(err.error.message)
   })
  }
  
ngOnDestroy() {
  if(this.deleteProductSub) this.deleteProductSub.unsubscribe()
  if(this.getNamesP) this.getNamesP.unsubscribe()
  if(this.deletCatSub) this.deletCatSub.unsubscribe()
  if(this.getNameC) this.getNameC.unsubscribe()
}
}
