import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  getProductsData() {
    return [
      {
        id: '1025',
        name: 'Esmeralda',
        descricao: ` A minha história é parecida com a da gatinha Mariane, fui abandonada com meus 5 filhotes recém nascidos. 
        Assim que cheguei no hospital do ILM fiquei mais tranquila em saber que minhas crianças estariam seguras,
         eu também recebi todos os cuidados que precisava, fui castrada, vermifugada, vacinada e hoje estou por aqui aguardando pelo meu final feliz. 
        Sei que o abrigo é apenas um local de passagem e que o meu lugar mesmo é dentro do abraço quentinho dos meus futuros adotantes!`,
        porte: 'Pequeno',
        idade: '1 ano',
        image: 'Esmeralda.jpg',
        sexo: 'Femea',
      },
      {
        id: '1026',
        name: 'Juma',
        descricao: `Eu fui resgatada com meus irmãos e minha mãezinha numa fábrica. Estávamos muito assustados! Por aqui fomos apelidados de família Pantanal, por conta da novela.
         Todos meus irmãos foram adotados e eu sou a única que sigo aguardando por um lar.
         Sou um pouquinho assustada, mas muito esperançosa e sonhadora. Deixa eu te apresentar todo o amor que tenho pra oferecer? `,
        porte: 'Pequeno',
        idade: '2 anos',
        image: 'Juma.jpg',
        sexo: 'Femea',
      },
      {
        id: '1027',
        name: 'Sara',
        descricao: `Eu fui resgatada com suspeita de esporotricose, assim que cheguei no hospital fiz uma bateria de exames e as veterinárias diagnosticaram que eu tenho rinite crônica, além disso, já tive rinotraqueíte.
         Fiquei muitos dias internada recebendo tratamento até receber alta e ir viver no gatil junto com outros gatinhos.
         Eu tenho uma carinha um pouco emburrada mas sou muito amorosa, só quero ter a oportunidade de confiar numa família que irá respeitar os meus limites e me oferecer carinho e proteção.`,
        porte: 'Pequeno',
        idade: '5 anos',
        image: 'Sara.jpg',
        sexo: 'Femea',
      },
      {
        id: '1028',
        name: 'Klebinho',
        descricao: `Eu estava vivendo no porão da casa de uma família, miava por dias de medo, fome e  sede. Assim que cheguei no abrigo do ILM senti um alívio no meu coração,
         sabia que podia confiar nas veterinárias que estavam cuidando de mim, e assim demos início nessa longa jornada. Eu fiz uma bateria de exames, constou que sou FELV positivo, mas de resto minha saúde é perfeita.
         Sou um gatinho rajado, lindo, amoroso, manhoso e muito brincalhão!`,
        porte: 'Pequeno',
        idade: '5 anos',
        image: 'Klebinho.jpg',
        sexo: 'Macho',
      },
      {
        id: '1029',
        name: 'Barth',
        descricao: `Sofri muito durante toda a minha vida, nunca tive acesso à higiene e cuidados básicos, vivia comendo comida estragada. Por isso, tive que aprender a me virar sozinho e a não confiar no humano para não ser traído.
         Agora que estou saudável e vivendo num ambiente digno, tudo o que mais preciso é de um lar que me acolha com amor e paciência para eu conseguir confiar e mostrar que sou muito carinhoso e que amo receber carinho na barriga.`,
        porte: 'Pequeno',
        idade: '5 anos',
        image: 'Barth.jpg',
        sexo: 'Macho',
      }];
  }
}
