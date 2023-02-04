import { Component, Input } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-download-image',
  templateUrl: './download-image.component.html',
  styleUrls: ['./download-image.component.css']
})
export class DownloadImageComponent {
  @Input() imageUrl: string;
  @Input() userEmail: string;

  // constructor(private firestore: AngularFirestore) {}
  constructor() {}


  downloadImage() {
    // Track the usage data in Firebase
    // this.firestore.collection('usage').add({
    //   email: this.userEmail,
    //   imageUrl: this.imageUrl,
    //   timestamp: new Date()
    // });

    // Download the full resolution version of the image
    const a = document.createElement('a');
    a.href = this.imageUrl;
    a.download = this.imageUrl.substring(this.imageUrl.lastIndexOf('/') + 1);
    a.click();
  }
}
