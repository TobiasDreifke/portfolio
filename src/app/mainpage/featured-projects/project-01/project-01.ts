import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../../interfaces/projects.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { ModalService } from '../../../services/modal-service';
import { timeout } from 'rxjs';
import { IconComponent } from '../../../shared/icon/icon';


@Component({
  selector: 'app-project-01',
  imports: [CommonModule, TranslatePipe,IconComponent],
  templateUrl: './project-01.html',
  styleUrls: ['./project-01.scss'],
})
export class Project01 implements OnDestroy {

  @Input() project!: Projects;
  @Input() index!: number;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  private modalService = inject(ModalService);


  @ViewChild('wrapper') wrapper!: ElementRef<HTMLDivElement>;

  ngOnDestroy() {
    // this.modalService.closeModal();
  }

  onClose() {
    this.close.emit();
    // this.modalService.closeModal();
  }

  onNext() {
    this.next.emit();
    if (this.wrapper?.nativeElement) {
      this.wrapper.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}

