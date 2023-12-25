import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {



  brandData = [
    { name: 'Jogger',country: 'India', image: 'assets/images/clients/logoW.png' },
    { name: 'Ajwa Group', country: 'Malayasia', image: 'assets/images/clients/ajwa.jpg' },
    { name: 'Aquastrong', country: 'Oman', image: 'assets/images/clients/aqua.png' },
    { name: 'Wide', country: 'Oman', image: 'assets/images/clients/wide.png' },
    { name: 'Dental Track', country: 'UK', image: 'assets/images/clients/dental-track-2.png' },
    { name: 'Farstay', country: 'India', image: 'assets/images/clients/farstay.png' },
    { name: 'IP Rulers', country: 'UAE', image: 'assets/images/clients/ip-rulers.png' },
    // Add more brands
];



}
