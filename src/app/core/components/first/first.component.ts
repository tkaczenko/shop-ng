import { Inject } from '@angular/core';
import { Component, OnInit, Optional } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ConfigModel } from '../../models/config.model';
import { ConfigOptionsService } from '../../services/config-options.service';
import { configToken, generatedString } from '../../services/constants.service';
import { GeneratorService } from '../../services/generator.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(
    @Optional() public cartService: CartService,
    @Optional() public configOptionsService: ConfigOptionsService,
    @Optional() public generatorService: GeneratorService,
    @Optional() public localStorageService: LocalStorageService,
    @Inject(configToken) public configValue: ConfigModel,
    @Inject(generatedString) public generatedValue: string, ) { }

  ngOnInit(): void {
    console.log('cartService - ');
    console.log(this.cartService);
    console.log('configOptionsService - ');
    console.log(this.configOptionsService);
    console.log('generatorService - ');
    console.log(this.generatorService);
    console.log('localStorageService - ');
    console.log(this.localStorageService);
    console.log('configToken - ');
    console.log(this.configValue);
    console.log('generatedString - ');
    console.log(this.generatedValue);
  }

}
