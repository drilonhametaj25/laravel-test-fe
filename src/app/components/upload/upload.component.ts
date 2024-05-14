import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { config } from '@app/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Input() model: any;
  @Input() multiple: boolean = false;
  @Input() pHolder: string = 'Upload file';
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  
  files: any
  previewUrl: string;
  path: string = config?.api?.fullPath + '/backend/upload';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.model) {
      this.files = this.model
      this.previewUrl = `${config?.resources?.basePath}/${this.model.path}`
    }
  }

  onFileChanged(event: any) {
    if (!this.multiple) {
      this.upload(event)
    }
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    event.preventDefault();
    this.upload(event)
  }

  onDelete() {
    this.files = null
    this.model = null
    this.modelChange.emit(this.files)
  }

  onPreviewFile(file: any) {
    window.open(this.previewUrl, '_blank')
  }

  upload(event: any) {
    console.log(event)
    if (!this.multiple) {
      const file = event?.dataTransfer?.files[0] || event?.target?.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      }
      const fd = new FormData()
      fd.append('files[]', file)

      this.http.post(this.path, fd).subscribe((res: any) => {
        this.files = res[0]
        this.model = this.files
        this.modelChange.emit(this.files)
      })
    }
  }
}
