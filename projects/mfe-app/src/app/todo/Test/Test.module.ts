import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './Test.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([{ path: '', component: TestComponent }]),
  ],
  declarations: [TestComponent],
})
export class TestModule {}
