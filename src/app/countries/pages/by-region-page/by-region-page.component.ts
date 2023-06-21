import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/countries";
import {Region} from "../../interfaces/region.type";
import {CountriesService} from "../../services/contries.service";



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  constructor(private readonly countriesService: CountriesService) {
  }

  ngOnInit() {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {

    this.selectedRegion = region;
    this.countriesService.searchRegion(region)
      .subscribe(countries => this.countries = countries);
  }
}
