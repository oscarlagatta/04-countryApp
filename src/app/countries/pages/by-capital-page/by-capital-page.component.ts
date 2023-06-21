import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/countries";
import {CountriesService} from "../../services/contries.service";

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];

  public isLoading: boolean = false;

  public initialValue: string = '';
  constructor(private readonly countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }
  searchByCapital(term: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
