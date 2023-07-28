import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})

export class CaesService {

  getProductsData() {
    return [
      {
        id: '1000',
        name: 'Tibirinho',
        descricao: `Eu estava me debatendo no acostamento de uma rodovia que dá acesso ao abrigo.
         Por muita sorte, o meu destino foi cruzado com o de 2 funcionários do ILM e eles me salvaram! Assim que cheguei no hospital as veterinárias avaliaram que eu estava sem sensibilidade nos membros,
         fiz diversos exames e consultas que constaram que eu sou um cãozinho paraplégico, foram longos dias internado recebendo medicações e tratando a cistite que eu tinha. 
         Hoje estou liberado para a adoção, sou um cãozinho super carinhoso e de bem com a vida só desejo ter a oportunidade de apresentar todo o meu amor e gratidão.`,
        porte: 'Medio',
        idade: '5 anos',
        image: 'Tibirinho.jpg',
        sexo: 'Macho',
      },
      {
        id: '1001',
        name: 'Pole',
        descricao: `A minha história é bem parecida com a do meu irmão, o Tim. Nasci nas ruas e logo fui resgatado pelos tios do ILM. Sempre fui um filhote saudável e dengoso, por isso, fui adotado junto com ele.
         Só que um ano depois, minha família me devolveu para o abrigo, e eu fiquei sem entender nada. Mais de um ano se passou e eu continuo aqui no abrigo,
        porque apesar de ser um dos cães mais amorosos eu ainda não sei dizer se quando um humano se aproxima, ele vai me machucar ou me dar carinho. 
        Agora eu faço parte do programa #abrigoeducativo e estou tendo aulas para ajudar na minha autoconfiança, e eu confesso que estou amando, porque metade da aula é carinho e a outra metade é petisco.`,
        porte: 'Medio',
        idade: '5 anos',
        image: 'Pole.jpg',
        sexo: 'Macho',
      },
      {
        id: '1002',
        name: 'Belga',
        descricao: `Eu fui resgatado com outras dezenas de cães de um canil clandestino de raças, cheguei no abrigo com com muitos carrapatos, problemas articulares e de coluna, 
        além disso, eu tenho um desvio angular muito sério nas minhas duas patas dianteiras. Apesar dos estigmas que tem por trás da minha raça eu sou um doguinho muito amoroso com um olhar doce e afetuoso.
         Eu só quero ter a oportunidade de ser amado e me sentir protegido por uma família que nunca irá me explorar.`,
        porte: 'Grande',
        idade: '5 anos',
        image: 'Belga.jpg',
        sexo: 'Macho',
      },
      {
        id: '1003',
        name: 'Doby',
        descricao: `Eu vivia acorrentado num lugar super pequeno, além disso tive uma lesão na orelha direita que não teve cuidados e infelizmente pegou bicheira,
         foi tão grave que destruiu o meu conduto auditivo e abriu um buraco enorme na minha cabeça. Eu já não tinha forças para me levantar e nem esperanças de um dia me sentir bem novamente,
        até que o ILM surgiu na minha vida e me resgatou! Assim que dei entrada no hospital veterinário, com todo amor do mundo as veterinárias limparam meus ferimentos, realizaram curativos,
        me medicaram e deram inicio num longo tratamento. Hoje sou um cãozinho sem uma orelha que não atrapalha em nada minha qualidade de vida! Tive a oportunidade de renascer, e agora estou prontinho para ser adotado,
        sou super amoroso, com um olhar doce e encantador que só deseja ser amado por uma pessoa especial, me dá uma chance? `,
        porte: 'Medio',
        idade: '8 anos',
        image: 'Doby.jpg',
        sexo: 'Macho',
      },
      {
        id: '1004',
        name: 'Doya',
        descricao: `Eu cheguei com uma grande feriada no meu braço e microftalmia no olho esquerdo.
         Acabei passando por cirurgia e tirando esse olhinho, apesar disso, eu enxergo bem com o meu olho direito. 
         Sentia fortes dores no meu corpo, não entendia o que havia acontecido comigo pois era apenas uma filhotinha.
          Entrei em tratamento intensivo, fui liberada, adotada mas tempos depois devolvida. 
          Não quero passar por isso novamente... você promete cuidar de mim e não repetir essa história?`,
        porte: 'Medio',
        idade: '3 anos',
        image: 'Doya.jpg',
        sexo: 'Femea',
      },
      {
        id: '1005',
        name: 'Lucas',
        descricao: `Eu fui resgatado com uma turminha que estava vagando por uma rodovia.
         Tivemos a grande chance de sermos salvos por um funcionário do ILM que já estava à caminho do abrigo! Assim que cheguei fui examinado e passei por um protocolo de cuidados iniciais,
        por sorte não tinha nenhuma alteração de saúde, então logo já estava liberado para a adoção. As tias já me avisaram que infelizmente cães com pelo preto tem menos chance de serem adotados,
        mas a verdade é que isso não afeta em nada o meu interior, meu coração é puro, meu sorriso é cativante e meus olhinhos brilham ao receber carinho!
        Eu só queria a oportunidade de amar e ser amado.`,
        porte: 'Medio',
        idade: '5 anos',
        image: 'Lucas.jpg',
        sexo: 'Macho',
      },
      {
        id: '1006',
        name: 'Cheroso',
        descricao: `Quando fui resgatado, meu corpinho estava todo coberto por feridas dolorosas, que me tiravam o sono de tanto que coçavam. 
        As pessoas me olhavam com desprezo, tinham nojo de mim, mas a culpa não era minha, eu só queria ajuda. 
        Uma pessoa ouviu esse meu pedido e me levou para o abrigo, onde eu cheguei muito assustado e receoso com humanos, afinal, só recebi coisas ruins deles enquanto estava na rua. 
        Com muita paciência e respeito, os tios do ILM foram cuidando de mim, me mostrando que tem gente amiga e que quer o meu bem.`,
        porte: 'Medio',
        idade: '6 anos',
        image: 'Cheroso.jpg',
        sexo: 'Macho'
      },
      {
        id: '1007',
        name: 'Nelsinho',
        descricao: `Eu apareci num shopping procurando abrigo, o pessoal pediu ajuda para o ILM e assim eu foi resgatado. Por aqui eu fui vacinado, vermifugado e recebi um microchip de identificação! 
        Sou super carentão, amo um afeto humano e estou prontinho para ser adotado por uma família especial!`,
        porte: 'Medio',
        idade: '5 anos',
        image: 'Nelsinho.jpg',
        sexo: 'Macho'
      },
      {
        id: '1008',
        name: 'JoseMica',
        descricao: `Os tios não sabem explicar direito o que aconteceu na minha cabeça, mas quando me acharam eu estava com uma ferida muito grande e cheia de larvas, caído em um córrego no interior de São Paulo. 
        Quando eu finalmente tive forças para levantar, as tias perceberam que eu tinha um discreto tremor nos lábios e que provavelmente era sequela da cinomose que contraí quando mais jovem.
        Eu melhorei bastante com a fisioterapia, mas quando fico mais animado, o meu 'tique' aumenta. Isso não me impede de levar uma vida como qualquer outro cãozinho, e há quem diga que na verdade esse é o meu charme.
        Eu fiz aulas de adestramento e já aprendi a sentar e deitar. Queria ter uma família pra poder brincar todos os dias, e quem sabe aprender mais um monte de coisas legais pra enriquecer meu dia-a-dia!`,
        porte: 'Medio',
        idade: '6 anos',
        image: 'JoseMica.jpg',
        sexo: 'Macho',
      },
      {
        id: '1009',
        name: 'Parceiro',
        descricao: `Eu morava nas ruas, fui até a porta do abrigo com bicheira no rabo. As veterinárias não pensaram duas vezes e me colocaram pra dentro! Fiquei internado, recebi todo o tratamento que precisava, 
        fui vermifugado, vacinado e até recebi um microchip de identificação. O meu name já diz tudo, né? Eu sou um verdadeiro parceiro, mas a verdade é que eu nunca tive a oportunidade de ter uma família pra mim. 
        São mais de 5 anos vivendo dentro e um canil, dividindo a atenção dos tratadores com outras centenas de animais, se você tiver um espacinho no seu coração, deixa eu ocupar e preencher com todo o meu amor?`,
        porte: 'Medio',
        idade: '9 anos',
        image: 'Parceiro.jpg',
        sexo: 'Macho',
      },
      {
        id: '1010',
        name: 'Natalinha',
        descricao: `Uma família me abrigou depois de me encontrar na rua com o corpo cheio de falhas de pelo e coceira intensa, eles pediram ajuda para o ILM e assim eu fui resgatada.
         Eu cheguei no hospital muito assustada e dei trabalho para as veterinárias conseguirem me examinar, elas diagnosticaram que a minha pele é bem sensível e provavelmente meus pelos não irão crescer, além disso, 
         quando eu fico no sol minha pele fica mais avermelhada e por isso preciso de protetor solar. Hoje estou liberada para a adoção, 
         sou muito doce e carente e sonho em ser adotada por uma família livre de preconceitos e que tenha muito amor para oferecer.`,
        porte: 'Medio',
        idade: '7 anos',
        image: 'Natalinha.jpg',
        sexo: 'Femea'
      },
      {
        id: '1024',
        name: 'Nona',
        descricao: `Quem pediu ajuda para me resgatar foi a tia Rita Lee. Eu cheguei no abrigo mancando mas logo em seguida eu parei de andar e fiquei tetraplégica, tive doença do carrapato e um nódulo no baço.
         Eu faço uso de medicação para dor e infelizmente não de adaptei a cadeirinha de rodas. A parte que eu mais gosto da minha rotina são as sessões de fisioterapia toda segunda-feira, a tia Amanda me incentiva com muito carinho e petiscos. 
        Sei que a maioria das pessoas preferem adotar cães novos e saudáveis, mas eu não posso perder as esperanças. Vivo dentro do hospital, por aqui compartilho a atenção das veterinárias com outras dezenas de animais.
        Eu só queria passar o restante da minha vida no conforto de um lar, me dá essa chance?`,
        porte: 'Medio',
        idade: '11 anos',
        image: 'Nona.jpg',
        sexo: 'Femea'
      }];
  }
}
