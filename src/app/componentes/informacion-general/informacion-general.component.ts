import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent implements OnInit {

  @Input() editar = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCountryChange(event: any) {
    alert(event.value);
  }

  telInputObject(obj: any) {
    console.log(obj);
    obj.setCountry('in');
  }


}
