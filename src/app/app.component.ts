import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private products: Product[] = [];
  private families: Family[] = [];
  private locations: Location[] = [];
  private transactions: Transaction[] = [];
  productsObservable: Observable<any>;

  constructor(private dataService: DataService) {}

get_products() {
  this.productsObservable = this.dataService.get_products();
}
get_families() {
  this.dataService.get_families().subscribe((res: Family[]) => {
    this.families = res;
  });
}

get_locations() {
  this.dataService.get_locations().subscribe((res: Location[]) => {
    this.locations = res;
  });
}

get_transactions() {
  this.dataService.get_transactions().subscribe((res: Transaction[]) => {
    this.transactions = res;
  });
}

}
