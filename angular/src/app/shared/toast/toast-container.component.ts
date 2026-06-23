import { Component, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  standalone: true,
	selector: 'shpp-toasts',
	template: `
		@for (toast of toastService.toasts; track toast) {
		  <ngb-toast
		    [class]="toast.className"
		    [autohide]="true"
		    [delay]="toast.delay || 5000"
		    (hidden)="toastService.remove(toast)"
		    >
		    {{ toast.text }}
		  </ngb-toast>
		}
		`,
  imports: [CommonModule, NgbToastModule]
})
export class ToastsContainerComponent {
  toastService = inject(ToastService);

  @HostBinding('class') classAttr = 'toast-container position-fixed top-0 end-0 p-3';
  @HostBinding('style') styleAttr = 'z-index: 1200';
}
