import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-contracts',
  templateUrl: './top-contracts.component.html',
  styleUrls: ['./top-contracts.component.scss'],
})
export class TopContractsComponent implements OnInit {
  contracts!: any[];
  ngOnInit(): void {
    this.contracts = [
      {
        title: 'Dropbox',
        subTitle: 'SF, NY',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        price: '349222',
      },
      {
        title: 'Amazon',
        subTitle: 'US, IT',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        price: '23444',
      },
      {
        title: 'Elefant',
        subTitle: 'California',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        price: '222233',
      },
      {
        title: 'Nerflix',
        subTitle: 'Zurigo',
        img: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
        price: '999',
      },
    ];
  }
}
