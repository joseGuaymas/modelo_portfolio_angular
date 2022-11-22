import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { BotonLogoComponent } from './header/logo/boton-logo/boton-logo.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { BotonComponent } from './header/navbar/boton/boton.component';
import { AboutComponent } from './about/about.component';
import { CardAboutComponent } from './about/cardAbout/card-about.component';
import { TextAboutComponent } from './about/text-about/text-about.component';
import { SobreMiComponent } from './about/text-about/sobre-mi/sobre-mi.component';
import { BotonCvComponent } from './about/text-about/boton-cv/boton-cv.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { LoginComponent } from './header/navbar/login/login.component';
import { ExperienciaItemComponent } from './experiencia/experiencia-item/experiencia-item.component';
import { ExperienciaTitleComponent } from './experiencia/experiencia-title/experiencia-title.component';
import { FormacionComponent } from './formacion/formacion.component';
import { FormacionTitleComponent } from './formacion/formacion-title/formacion-title.component';
import { FormacionItemComponent } from './formacion/formacion-item/formacion-item.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsTitleComponent } from './skills/skills-title/skills-title.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosTitleComponent } from './proyectos/proyectos-title/proyectos-title.component';
import { ProyectosItemComponent } from './proyectos/proyectos-item/proyectos-item.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTextoComponent } from './footer/footer-texto/footer-texto.component';
import { FooterLinksComponent } from './footer/footer-links/footer-links.component';
// import { ImagenAboutComponent } from './about/imagen-about/imagen-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BotonLogoComponent,
    NavbarComponent,
    BotonComponent,
    AboutComponent,
    CardAboutComponent,
    TextAboutComponent,
    SobreMiComponent,
    BotonCvComponent,
    ExperienciaComponent,
    LoginComponent,
    ExperienciaItemComponent,
    ExperienciaTitleComponent,
    FormacionComponent,
    FormacionTitleComponent,
    FormacionItemComponent,
    SkillsComponent,
    SkillsTitleComponent,
    SkillsItemComponent,
    ProyectosComponent,
    ProyectosTitleComponent,
    ProyectosItemComponent,
    FooterComponent,
    FooterTextoComponent,
    FooterLinksComponent
    // ImagenAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
