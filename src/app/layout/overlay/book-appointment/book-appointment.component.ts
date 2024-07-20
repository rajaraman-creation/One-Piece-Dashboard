import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './book-appointment.component.html',
  // styleUrl: './book-appointment.component.scss'
  styles: [
    `
      :host ::ng-deep {
        .drop-column {
          border: 1px solid grey;
          transition: border-color 0.2s;

          &.p-draggable-enter {
            border: 1px dotted;
            border-color: var(--primary-color);
          }
        }

        [pDraggable] {
          cursor: move;
        }
      }
    `,
  ],
})
export class BookAppointmentComponent {
  availableProducts: Product[] | undefined;

  selectedProducts: Product[] | undefined;

  draggedProduct: Product | undefined | null;

  // constructor(private productService: ProductService) {}

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = [
      { id: '1', name: 'Black Watch' },
      { id: '2', name: 'Bamboo Watch' },
    ];
  }

  drop() {
    if (this.draggedProduct && !this.checkItExist(this.draggedProduct,this.selectedProducts)) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [
        ...(this.selectedProducts as Product[]),
        this.draggedProduct,
      ];
      this.availableProducts = this.availableProducts?.filter(
        (val, i) => i != draggedProductIndex
      );
      this.draggedProduct = null;
    }
  }

  rdrop() {
    if (this.draggedProduct)
      console.log(this.checkItExist(this.draggedProduct,this.availableProducts));

    if (this.draggedProduct && !this.checkItExist(this.draggedProduct,this.availableProducts)) {
      let draggedProductIndex = this.rfindIndex(this.draggedProduct);
      this.availableProducts = [
        ...(this.availableProducts as Product[]),
        this.draggedProduct,
      ];
      this.selectedProducts = this.selectedProducts?.filter(
        (val, i) => i != draggedProductIndex
      );
      this.draggedProduct = null;
    }
  }

  checkItExist(draggedProduct: Product,availableProducts: Product[] | undefined ) {
    return availableProducts?.some((prod) => draggedProduct.id == prod.id);
  }

  dragStart(product: Product) {
    this.draggedProduct = product;
  }
  dragEnd() {
    this.draggedProduct = null;
  }

  rdragStart(product: Product) {
    this.draggedProduct = product;
  }
  rdragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
      if (product.id === (this.availableProducts as Product[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
  rfindIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < (this.selectedProducts as Product[]).length; i++) {
      if (product.id === (this.selectedProducts as Product[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
