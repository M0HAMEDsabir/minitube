import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  imgurl='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fop-art-seamless-geometric-background-modern-abstract-generative-aixa_174954-1412.jpg&tbnid=U8fwS7TtGS4PTM&vet=12ahUKEwjMl8yqsfuEAxUW57sIHaW1DfgQMygCegQIARA2..i&imgrefurl=https%3A%2F%2Fit.freepik.com%2Ffoto-premium%2Fop-art-sfondo-geometrico-senza-soluzione-di-continuita-astratto-moderno-aixa-generativo_38642653.htm&docid=aehncdUIi9FRQM&w=626&h=417&q=op&client=opera-gx&ved=2ahUKEwjMl8yqsfuEAxUW57sIHaW1DfgQMygCegQIARA2'
  display= true;

}
