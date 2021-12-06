import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component"
import { IniciaPerguntaComponent } from "./inicia-pergunta/inicia-pergunta.component";
import { QuestionarioComponent } from "./questionario/questionario.component";
import { ResultadoComponent } from "./resultado/resultado.component";



const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "iniciapergunta", component: IniciaPerguntaComponent },
    { path: "resultado", component: ResultadoComponent },
    { path: "questionario", component: QuestionarioComponent }
]


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)