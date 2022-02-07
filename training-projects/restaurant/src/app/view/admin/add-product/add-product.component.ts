import { Component, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit,OnDestroy {

  addProductForm: FormGroup
  imagefile: File = null
  index: number = -1
  toppingIndex: number = -1
  inputFilePlaceholder: string = "choose product image"
  selected: string
  categoriesNames: any
  updateData: any
  updatedimage: any = null
  fileName: any = ""
  isUpdate: boolean = false
  updateImageLoading=false
  productId: any
  modalRef: BsModalRef;
  addOrUpdateProductError:string=""
  updateImageError:string=""
  dataLoading=true
  addOrUpdateLoading=false
  paramSub:Subscription
  productByIdSub:Subscription
  addProductSub:Subscription
  getCatSub:Subscription
  updateProductSub:Subscription
  updateImageSub:Subscription
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    public dashboard: DashboardService,
    private renderer: Renderer2,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService) {
    // create the form
    this.addProductForm = this.createAddProductForm("init")
    let imageControl = this.addProductForm.controls.image
    // update product
  this.paramSub = this.activatedRoute.queryParamMap.subscribe((id: any) => {
      if (id.params.id) {
        this.selected = id.params.name
        this.productId = id.params.id
        this.isUpdate = true
     this.productByIdSub =  this.dashboard.getProductById(id.params.id).subscribe(
          (res: any) => {
            this.dataLoading=false
            this.updateData = {
              name: res.name,
              descripition: res.descripition,
              sizes: res.sizes,
              specialsAdditions: res.specialsAdditions,
              toppings: res.toppings,
              price: res.price
            }
            this.fileName = res.image
            imageControl.clearValidators()
            imageControl.updateValueAndValidity()
            if (this.selected == "pasta" || this.selected == "desert" || this.selected == "salads") {
              this.addProductForm.controls.price.setValidators(Validators.required)
              this.addProductForm.controls.price.setValidators(this.priceValidation)
              this.addProductForm.controls.price.updateValueAndValidity()
            }
            for (let i = 0; i < res.sizes.length; i++) this.addSizes()
            for (let i = 0; i < res.specialsAdditions.length; i++) this.addSpecialAdditions()
            for (let i = 0; i < res.toppings.length; i++) this.addToppings()
            this.addProductForm.patchValue(this.updateData)
          }
          , err => {
            this.dataLoading=false
            this.router.navigate(["notFound"])
          })
      } else {
        this.dataLoading=false
        this.isUpdate = false
        this.addProductForm.reset()
        this.selected = "pizza"
        this.buildFormBasedOnSelectedCategory()
      }
    })
  }
  onfocus(fileParent:any){this.renderer.setStyle(fileParent, "border", "1px solid #17a2b8")}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSelectedChange(e:any, fileParent:any) {
    this.isUpdate = false
    this.addProductForm.reset()
    this.inputFilePlaceholder = "choose product image"
    this.renderer.setStyle(fileParent, "border", "1px solid #ced4da")
    this.selected = e
    this.buildFormBasedOnSelectedCategory()
  }
  buildFormBasedOnSelectedCategory() {
    let priceControl = this.addProductForm.controls.price
    this.addProductForm.controls.image.setValidators(Validators.required)
    this.addProductForm.controls.image.updateValueAndValidity()
    if (this.selected == 'pizza') {
      priceControl.clearValidators()
      priceControl.updateValueAndValidity()
      this.addToppings()
      this.addSpecialAdditions()
      this.getSizes().clear()
      this.addSizes()
    }
    else if (this.selected == 'starters' || this.selected == 'drinks') {
      priceControl.clearValidators()
      priceControl.updateValueAndValidity()
      this.getSizes().clear()
      this.addSizes()
      this.getToppings().clear()
      this.getSpecialAdditions().clear()
      this.index = -1
      this.toppingIndex = -1
    } else if (this.selected == 'pasta' || this.selected == 'desert' || this.selected == 'salads') {
      priceControl.setValidators(Validators.required)
      priceControl.setValidators(this.priceValidation)
      priceControl.updateValueAndValidity()
      this.getSizes().clear()
      this.getToppings().clear()
      this.getSpecialAdditions().clear()
      this.index = -1
      this.toppingIndex = -1
    }
  }
  ngOnInit(): void { }

  //// start makeing and delete inputs for size of starters desert and drinks and pizza
  getSizes(): FormArray {
    return this.addProductForm.get("sizes") as FormArray
  }
  addSizes() {
    this.getSizes().push(this.createAddProductForm("sizes"))
  }
  deleteSizes(index:any) {
    if (this.getSizes().length > 1) this.getSizes().removeAt(index)
    else this.toastr.warning('atleast one size', '', {
      timeOut: 2000,
    });
  }
  //// end makeing and delete inputs for size of starters desert and drinks and pizza

  //// start makeing and delete inputs for toppings of pizza
  getToppings(): FormArray {
    return this.addProductForm.get("toppings") as FormArray
  }
  addToppings() {
    this.toppingIndex++
    this.getToppings().push(this.createAddProductForm("toppings"))
    this.addToppingsSizes(this.toppingIndex)

  }
  deleteToppings(index:any) {

    if (this.getToppings().length > 1) {
      this.getToppings().removeAt(index)
      this.toppingIndex--
    }
    else this.toastr.warning('atleast one topping', '', {
      timeOut: 2000,
    });

  }
  getToppingsSizes(i:any): FormArray {
    return this.getToppings().at(i).get('sizes') as FormArray
  }
  addToppingsSizes(i:any) {
    this.getToppingsSizes(i).push(this.createAddProductForm("toppingsSizes"))
  }
  //// end makeing and delete inputs for toppings of pizza
  //// start makeing and delete inputs for specialِAddition of pizza
  getSpecialAdditions(): FormArray {

    return this.addProductForm.get("specialsAdditions") as FormArray

  }
  addSpecialAdditions() {
    this.index++
    this.getSpecialAdditions().push(this.createAddProductForm("specialsAdditions"))
    this.addSpecialAdditionsSizes(this.index)
    this.getSpecialAdditionsSizes(this.index).controls[0].get("size").setValue(" price:")
    this.addSpecialAdditionsSizes(this.index)
    this.getSpecialAdditionsSizes(this.index).controls[1].get("size").setValue("extra price:")
  }
  deleteSpecialAdditions(index:any) {
    this.index--
    this.getSpecialAdditions().removeAt(index)
  }
  getSpecialAdditionsSizes(i:any): FormArray {
    return this.getSpecialAdditions().at(i).get('sizes') as FormArray
  }
  addSpecialAdditionsSizes(i:any) {
    this.getSpecialAdditionsSizes(i).push(this.createAddProductForm("specialAdditionsSizes"))
  }

  //// end makeing and delete inputs for specialِAddition of pizza
  ///// start get inputs to add  valid or invalid clases
  getSpecialAdditionForVAlidation(i:any, controlName:any) {
    return this.getSpecialAdditions().controls[i].get(controlName)
  }
  getToppingsForVAlidation(i:any, controlName:any) {
    return this.getToppings().controls[i].get(controlName)
  }
  getToppingSizesForValidation(i:any) {
    return (this.getToppings().controls[i].get('sizes') as FormArray).controls[0].get('price')
  }
  getSizesForValidation(i:any, controlName:any) {
    return this.getSizes().controls[i].get(controlName)
  }
  validationForSpecialAdditionPrice(e:any) {
    if (e.target.value.length == 0 || e.target.value<=0) {
      this.renderer.addClass(e.target, "is-invalid")
    } else {
      this.renderer.removeClass(e.target, "is-invalid")
    }

  }
  validationForSpecialAdditionPriceKeyup(e:any) {
    
    if (e.target.value.length > 0 && e.target.value>0) {
      this.renderer.removeClass(e.target, "is-invalid")
      this.renderer.addClass(e.target, "is-valid")
    } else {
      this.renderer.removeClass(e.target, "is-valid")
    }

  }
  get getName() {
    return this.addProductForm.get("name")
  }
  get getImage() {
    return this.addProductForm.get("image")
  }
  get getPrice() {
    return this.addProductForm.get("price")
  }
  ///// end get inputs to add  valid or invalid clases

  //////////// start build dynamic form for add product   ////////////

  createAddProductForm(itemType: string): FormGroup {
    let formItem = this.fb.group({})
    switch (itemType) {
      case "init":
        formItem = this.fb.group({
          image: "",
          name: ['', Validators.required],
          descripition: ['', Validators.required],
          sizes: this.fb.array([]),
          toppings: this.fb.array([]),
          specialsAdditions: this.fb.array([]),
          price: ""
        });
        break;
      case 'sizes':
        formItem = this.fb.group({
          size: ['', Validators.required],
          price: ['', [Validators.required,this.priceValidation]]
        });
        break;
      case 'toppings':
        formItem = this.fb.group({
          topping: ["", Validators.required],
          sizes: this.fb.array([])
        })
        break;
      case 'specialsAdditions':
        formItem = this.fb.group({
          addition: ["", Validators.required],
          sizes: this.fb.array([])
        })
        break;
      case 'specialAdditionsSizes':
        formItem = this.fb.group({
          size: ["", Validators.required],
          price: ["", [Validators.required,this.priceValidation]],
        })
        break;
      case 'toppingsSizes':
        formItem = this.fb.group({
          price: ['', [Validators.required,this.priceValidation]],
          size: ['extra', [Validators.required]]
        })
    }
    return formItem
  }
  //////////// end build dynamic form for add product   ////////////
  onBlurInputFile(e:any, fileParent:any) {
    if (!e.target.files[0]) this.renderer.setStyle(fileParent, "border", "1px solid red")
  }
  imageFile(e:any, fileParent:any) {
    if (e.target.files[0]) {

      this.inputFilePlaceholder = e.target.files[0].name;
      this.renderer.setStyle(fileParent, "border", "1px solid green")
    }
    else {
      this.inputFilePlaceholder = "choose product image"
      this.renderer.setStyle(fileParent, "border", "1px solid red")

    }
    this.imagefile = <File>e.target.files[0]
  }
  // start add product function 
  submit() {
    this.addOrUpdateLoading=true
    let formValues = this.addProductForm.value
    let formData = new FormData()
    formData.append("image", this.imagefile)
    formData.append("category", this.selected)
    formData.append("name", formValues.name)
    formData.append("descripition", formValues.descripition)
    if (this.selected == 'starters' || this.selected == 'drinks' || this.selected == 'pizza') {
      formData.append("sizes", JSON.stringify(formValues.sizes))
    }
    else if (this.selected == 'pasta' || this.selected == 'desert' || this.selected == 'salads') {
      formData.append("price", `${formValues.price}`)
    }
    if (this.selected == 'pizza') {
      formData.append("toppings", JSON.stringify(formValues.toppings))
      formData.append("specialsAdditions", JSON.stringify(formValues.specialsAdditions))
    }
  this.addProductSub = this.dashboard.addProduct(formData).subscribe(res => {
      this.addOrUpdateLoading=false
      this.addOrUpdateProductError=""
  this.getCatSub =   this.dashboard.getCategoriesNames().subscribe((res: any) => {
        this.dashboard.categoriesNames = res.categoriesNames
      }, err => this.router.navigate(["notfound"]))

      this.toastr.success('product added succesfuly', '', {
        timeOut: 3000,
      });
      this.router.navigate(['dashboard/modify'])
    }, err => {
      this.addOrUpdateLoading=false
       this.addOrUpdateProductError=err.error.message || err.error.error
    })
  }
    // end add product function
  updatProduct() {
    this.addOrUpdateLoading=true
    let values = this.addProductForm.value
   this.updateProductSub = this.dashboard.updateProduct(this.productId, values.name, values.descripition, values.price, values.sizes, values.toppings, values.specialsAdditions).subscribe(res => {
      this.addOrUpdateLoading=false
     this.addOrUpdateProductError=""
      this.toastr.success('product updated succesfuly', '', {
        timeOut: 3000,
      });
      this.router.navigate(['dashboard/modify'])
    }, err => {
      this.addOrUpdateLoading=false
      this.addOrUpdateProductError=err.error.message
    })
  }

 
  updatedImageOnChange(e:any) {
    this.updatedimage = e.target.files[0]
  }
  updateImage(id:any) {
    this.updateImageLoading=true
    if (this.updatedimage) {
      let updatedImageForm = new FormData()
      updatedImageForm.append("image", this.updatedimage)
      updatedImageForm.append("id", id)
    this.updateImageSub = this.dashboard.updateImage(updatedImageForm).subscribe(res => {
        this.updateImageLoading=false
        this.updateImageError=""
        this.toastr.success('image updated succesfuly', '', {
          timeOut: 2000,
        });
        this.modalRef.hide()
        this.router.navigate(['dashboard/modify'])
      }, err => {
        this.updateImageLoading=false
        this.updateImageError=err.error.message
        this.modalRef.hide()
      })
    }
    else {
      this.updateImageLoading=false
      alert("no file chosen")
    }

  }
  priceValidation(control:AbstractControl) {
     if(control.value<=0) return {negativeValue:true}
     return null
  }
  ngOnDestroy() {
    if(this.paramSub) this.paramSub.unsubscribe()
    if(this.productByIdSub) this.productByIdSub.unsubscribe()
    if(this.addProductSub) this.addProductSub.unsubscribe()
    if(this.getCatSub) this.getCatSub.unsubscribe()
    if(this.updateProductSub) this.updateProductSub.unsubscribe()
    if(this.updateImageSub) this.updateImageSub.unsubscribe()
  }
}
