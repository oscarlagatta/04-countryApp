import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/countries";

@Component({
  selector: 'countries-table',

  template: `
    <div *ngIf="countries.length === 0; else table" class="alert alert-warning text-center">
      Not Found
    </div>
    <ng-template #table>
      <table class="table table-hover">
        <thead>
        <th>#</th>
        <th>Icon</th>
        <th>Flag</th>
        <th>Name</th>
        <th>Capital</th>
        <th>Population</th>
        </thead>
        <tbody>
        <tr *ngFor="let country of countries; let i = index">
          <td>{{i + 1}}</td>
          <td>{{country.flag}}</td>
          <td>
            <img [src]="country.flags.svg" [alt]="country.name.common">
          </td>
          <td>
            {{country.name.common}}
          </td>
          <td>
            {{country.capital}}
          </td>
          <td>
            {{country.population | number}}
          </td>
          <td>
            <a [routerLink]="['/countries/by', country.cca3]">See more info</a>
          </td>

        </tr>
        </tbody>
      </table>
    </ng-template>

  `,
  styles: [`
    img {
      width: 25px;
    }
  `],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];

}
