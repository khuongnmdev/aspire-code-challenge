import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

const THEME_MODULES = [
  AccordionModule,
  CardModule,
  CarouselModule,
  ButtonModule,
  TabViewModule,
  InputTextModule
]

@NgModule({
  imports: [
    CommonModule,
    ...THEME_MODULES,
  ],
  exports: [...THEME_MODULES]
})
export class ThemeModule { }
