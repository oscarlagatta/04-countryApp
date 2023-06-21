import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {Country} from "../../interfaces/countries";
import {CountriesService} from "../../services/contries.service";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent implements OnInit {

  public country?: Country | null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly countriesService: CountriesService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        tap(console.log),
        switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) this.router.navigateByUrl('');

        return this.country = country;
      });
  }

  searchCountry(code: string) {
    this.countriesService.searchCountryByAlphaCode(code)
      .subscribe(country =>
        console.log(`Country ${country}`)
      );
  }

}
