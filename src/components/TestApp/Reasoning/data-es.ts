const names = [
  "Sofía",
  "Valentina",
  "Isabella",
  "Camila",
  "Lucía",
  "Mariana",
  "Ximena",
  "Valeria",
  "Emma",
  "Adriana",
  "Daniela",
  "Gabriela",
  "Victoria",
  "Martina",
  "Natalia",
  "Paula",
  "Sara",
  "Julia",
  "Andrea",
  "Claudia",
  "Ana",
  "Laura",
  "Luisa",
  "Elena",
  "Diana",
  "Patricia",
  "Rosa",
  "Teresa",
  "Silvia",
  "Beatriz",
  "Verónica",
  "Eva",
  "Alicia",
  "Carolina",
  "Irene",
  "Raquel",
  "Marina",
  "Olga",
  "Pilar",
  "Lorena",
  "Monica",
  "Aurora",
  "Inés",
  "Concepción",
  "Rocío",
  "Carmen",
  "Consuelo",
  "Mercedes",
  "Ángela",
  "Esther",
  "Leticia",
  "Miriam",
  "Alejandro",
  "Diego",
  "Carlos",
  "Javier",
  "Miguel",
  "Daniel",
  "Juan",
  "José",
  "David",
  "Andrés",
  "Fernando",
  "Luis",
  "Pablo",
  "Ricardo",
  "Jorge",
  "Manuel",
  "Santiago",
  "Hugo",
  "Eduardo",
  "Raúl",
  "Alberto",
  "Francisco",
  "Antonio",
  "Roberto",
  "Arturo",
  "Guillermo",
  "Rodrigo",
  "Felipe",
  "Enrique",
  "Óscar",
  "Rubén",
  "Mario",
  "Alfonso",
  "Jaime",
  "Ignacio",
  "Héctor",
  "Gustavo",
  "Emilio",
  "Rafael",
  "Víctor",
  "Gerardo",
  "Esteban",
  "Alfredo",
  "Agustín",
  "César",
  "Julio",
  "Salvador",
  "Marcos",
  "Simón",
  "Tomás",
  "Leonardo",
  "Federico",
];

const comparisons = [
  {
    s: [
      ["es más fuerte que", "no es tan débil(-e) como"],
      ["es más débil(-e) que", "no es tan fuerte como"],
    ],
    q: [
      ["más fuerte", "menos débil(-e)"],
      ["más débil(-e)", "menos fuerte"],
    ],
  },
  {
    s: [
      ["es más inteligente que", "no es tan tonto(-a) como"],
      ["es más tonto(-a) que", "no es tan inteligente como"],
    ],
    q: [
      ["más inteligente", "menos tonto(-a)"],
      ["más tonto(-a)", "menos inteligente"],
    ],
  },
  {
    s: [
      ["es más alto(-a) que", "no es tan bajo(-a) como"],
      ["es más bajo(-a) que", "no es tan alto(-a) como"],
    ],
    q: [
      ["más alto(-a)", "menos bajo(-a)"],
      ["más bajo(-a)", "menos alto(-a)"],
    ],
  },
  {
    s: [
      ["es más valiente que", "no es tan cobarde como"],
      ["es más cobarde que", "no es tan valiente como"],
    ],
    q: [
      ["más valiente", "menos cobarde"],
      ["más cobarde", "menos valiente"],
    ],
  },
  {
    s: [
      ["es más amable que", "no es tan cruel como"],
      ["es más cruel que", "no es tan amable como"],
    ],
    q: [
      ["más amable", "menos cruel"],
      ["más cruel", "menos amable"],
    ],
  },
  {
    s: [
      ["es más divertido(-a) que", "no es tan serio(-a) como"],
      ["es más serio(-a) que", "no es tan divertido(-a) como"],
    ],
    q: [
      ["más divertido(-a)", "menos serio(-a)"],
      ["más serio(-a)", "menos divertido(-a)"],
    ],
  },
  {
    s: [
      ["es más amigable que", "no es tan hostil como"],
      ["es más hostil que", "no es tan amigable como"],
    ],
    q: [
      ["más amigable", "menos hostil"],
      ["más hostil", "menos amigable"],
    ],
  },
  {
    s: [
      ["es más generoso(-a) que", "no es tan egoísta como"],
      ["es más egoísta que", "no es tan generoso(-a) como"],
    ],
    q: [
      ["más generoso(-a)", "menos egoísta"],
      ["más egoísta", "menos generoso(-a)"],
    ],
  },
  {
    s: [
      ["es más seguro(-a) que", "no es tan inseguro(-a) como"],
      ["es más inseguro(-a) que", "no es tan seguro(-a) como"],
    ],
    q: [
      ["más seguro(-a)", "menos inseguro(-a)"],
      ["más inseguro(-a)", "menos seguro(-a)"],
    ],
  },
  {
    s: [
      ["es más tranquilo(-a) que", "no es tan ansioso(-a) como"],
      ["es más ansioso(-a) que", "no es tan tranquilo(-a) como"],
    ],
    q: [
      ["más tranquilo(-a)", "menos ansioso(-a)"],
      ["más ansioso(-a)", "menos tranquilo(-a)"],
    ],
  },
  {
    s: [
      ["es más optimista que", "no es tan pesimista como"],
      ["es más pesimista que", "no es tan optimista como"],
    ],
    q: [
      ["más optimista", "menos pesimista"],
      ["más pesimista", "menos optimista"],
    ],
  },
  {
    s: [
      ["es más ambicioso(-a) que", "no es tan perezoso(-a) como"],
      ["es más perezoso(-a) que", "no es tan ambicioso(-a) como"],
    ],
    q: [
      ["más ambicioso(-a)", "menos perezoso(-a)"],
      ["más perezoso(-a)", "menos ambicioso(-a)"],
    ],
  },
  {
    s: [
      ["es más responsable que", "no es tan descuidado(-a) como"],
      ["es más descuidado(-a) que", "no es tan responsable como"],
    ],
    q: [
      ["más responsable", "menos descuidado(-a)"],
      ["más descuidado(-a)", "menos responsable"],
    ],
  },
  {
    s: [
      ["es más empático(-a) que", "no es tan insensible como"],
      ["es más insensible que", "no es tan empático(-a) como"],
    ],
    q: [
      ["más empático(-a)", "menos insensible"],
      ["más insensible", "menos empático(-a)"],
    ],
  },
  {
    s: [
      ["es más creativo(-a) que", "no es tan poco imaginativo(-a) como"],
      ["es más poco imaginativo(-a) que", "no es tan creativo(-a) como"],
    ],
    q: [
      ["más creativo(-a)", "menos poco imaginativo(-a)"],
      ["más poco imaginativo(-a)", "menos creativo(-a)"],
    ],
  },
  {
    s: [
      ["es más disciplinado(-a) que", "no es tan imprudente como"],
      ["es más imprudente que", "no es tan disciplinado(-a) como"],
    ],
    q: [
      ["más disciplinado(-a)", "menos imprudente"],
      ["más imprudente", "menos disciplinado(-a)"],
    ],
  },
  {
    s: [
      ["es más atractivo(-a) que", "no es tan poco atractivo(-a) como"],
      ["es más poco atractivo(-a) que", "no es tan atractivo(-a) como"],
    ],
    q: [
      ["más atractivo(-a)", "menos poco atractivo(-a)"],
      ["más poco atractivo(-a)", "menos atractivo(-a)"],
    ],
  },
  {
    s: [
      ["es más honesto(-a) que", "no es tan engañoso(-a) como"],
      ["es más engañoso(-a) que", "no es tan honesto(-a) como"],
    ],
    q: [
      ["más honesto(-a)", "menos engañoso(-a)"],
      ["más engañoso(-a)", "menos honesto(-a)"],
    ],
  },
  {
    s: [
      ["es más paciente que", "no es tan impaciente como"],
      ["es más impaciente que", "no es tan paciente como"],
    ],
    q: [
      ["más paciente", "menos impaciente"],
      ["más impaciente", "menos paciente"],
    ],
  },
  {
    s: [
      ["es más de mente abierta que", "no es tan cerrado(-a) de mente como"],
      [
        "es más cerrado(-a) de mente que",
        "no es tan abierto(-a) de mente como",
      ],
    ],
    q: [
      ["más de mente abierta", "menos cerrado(-a) de mente"],
      ["más cerrado(-a) de mente", "menos abierto(-a) de mente"],
    ],
  },
  {
    s: [
      ["es más educado(-a) que", "no es tan grosero(-a) como"],
      ["es más grosero(-a) que", "no es tan educado(-a) como"],
    ],
    q: [
      ["más educado(-a)", "menos grosero(-a)"],
      ["más grosero(-a)", "menos educado(-a)"],
    ],
  },
  {
    s: [
      ["es más organizado(-a) que", "no es tan caótico(-a) como"],
      ["es más caótico(-a) que", "no es tan organizado(-a) como"],
    ],
    q: [
      ["más organizado(-a)", "menos caótico(-a)"],
      ["más caótico(-a)", "menos organizado(-a)"],
    ],
  },
  {
    s: [
      ["es más maduro(-a) que", "no es tan inmaduro(-a) como"],
      ["es más inmaduro(-a) que", "no es tan maduro(-a) como"],
    ],
    q: [
      ["más maduro(-a)", "menos inmaduro(-a)"],
      ["más inmaduro(-a)", "menos maduro(-a)"],
    ],
  },
  {
    s: [
      ["es más flexible que", "no es tan rígido(-a) como"],
      ["es más rígido(-a) que", "no es tan flexible como"],
    ],
    q: [
      ["más flexible", "menos rígido(-a)"],
      ["más rígido(-a)", "menos flexible"],
    ],
  },
  {
    s: [
      ["es más valiente que", "no es tan temeroso(-a) como"],
      ["es más temeroso(-a) que", "no es tan valiente como"],
    ],
    q: [
      ["más valiente", "menos temeroso(-a)"],
      ["más temeroso(-a)", "menos valiente"],
    ],
  },
  {
    s: [
      ["es más humilde que", "no es tan arrogante como"],
      ["es más arrogante que", "no es tan humilde como"],
    ],
    q: [
      ["más humilde", "menos arrogante"],
      ["más arrogante", "menos humilde"],
    ],
  },
  {
    s: [
      ["es más carismático(-a) que", "no es tan aburrido(-a) como"],
      ["es más aburrido(-a) que", "no es tan carismático(-a) como"],
    ],
    q: [
      ["más carismático(-a)", "menos aburrido(-a)"],
      ["más aburrido(-a)", "menos carismático(-a)"],
    ],
  },
  {
    s: [
      ["es más confiable que", "no es tan poco fiable como"],
      ["es más poco fiable que", "no es tan confiable como"],
    ],
    q: [
      ["más confiable", "menos poco fiable"],
      ["más poco fiable", "menos confiable"],
    ],
  },
  {
    s: [
      ["es más apasionado(-a) que", "no es tan indiferente como"],
      ["es más indiferente que", "no es tan apasionado(-a) como"],
    ],
    q: [
      ["más apasionado(-a)", "menos indiferente"],
      ["más indiferente", "menos apasionado(-a)"],
    ],
  },
  {
    s: [
      ["es más comprensivo(-a) que", "no es tan crítico(-a) como"],
      ["es más crítico(-a) que", "no es tan comprensivo(-a) como"],
    ],
    q: [
      ["más comprensivo(-a)", "menos crítico(-a)"],
      ["más crítico(-a)", "menos comprensivo(-a)"],
    ],
  },
  {
    s: [
      ["es más tolerante que", "no es tan intolerante como"],
      ["es más intolerante que", "no es tan tolerante como"],
    ],
    q: [
      ["más tolerante", "menos intolerante"],
      ["más intolerante", "menos tolerante"],
    ],
  },
  {
    s: [
      ["es más perdonador(-a) que", "no es tan resentido(-a) como"],
      ["es más resentido(-a) que", "no es tan perdonador(-a) como"],
    ],
    q: [
      ["más perdonador(-a)", "menos resentido(-a)"],
      ["más resentido(-a)", "menos perdonador(-a)"],
    ],
  },
  {
    s: [
      ["es más enérgico(-a) que", "no es tan letárgico(-a) como"],
      ["es más letárgico(-a) que", "no es tan enérgico(-a) como"],
    ],
    q: [
      ["más enérgico(-a)", "menos letárgico(-a)"],
      ["más letárgico(-a)", "menos enérgico(-a)"],
    ],
  },
  {
    s: [
      ["es más modesto(-a) que", "no es tan presumido(-a) como"],
      ["es más presumido(-a) que", "no es tan modesto(-a) como"],
    ],
    q: [
      ["más modesto(-a)", "menos presumido(-a)"],
      ["más presumido(-a)", "menos modesto(-a)"],
    ],
  },
  {
    s: [
      ["es más confiable que", "no es tan inconsistente como"],
      ["es más inconsistente que", "no es tan confiable como"],
    ],
    q: [
      ["más confiable", "menos inconsistente"],
      ["más inconsistente", "menos confiable"],
    ],
  },
  {
    s: [
      ["es más considerado(-a) que", "no es tan desconsiderado(-a) como"],
      ["es más desconsiderado(-a) que", "no es tan considerado(-a) como"],
    ],
    q: [
      ["más considerado(-a)", "menos desconsiderado(-a)"],
      ["más desconsiderado(-a)", "menos considerado(-a)"],
    ],
  },
  {
    s: [
      ["es más sincero(-a) que", "no es tan insincero(-a) como"],
      ["es más insincero(-a) que", "no es tan sincero(-a) como"],
    ],
    q: [
      ["más sincero(-a)", "menos insincero(-a)"],
      ["más insincero(-a)", "menos sincero(-a)"],
    ],
  },
  {
    s: [
      ["es más proactivo(-a) que", "no es tan reactivo(-a) como"],
      ["es más reactivo(-a) que", "no es tan proactivo(-a) como"],
    ],
    q: [
      ["más proactivo(-a)", "menos reactivo(-a)"],
      ["más reactivo(-a)", "menos proactivo(-a)"],
    ],
  },
  {
    s: [
      ["es más determinado(-a) que", "no es tan vacilante como"],
      ["es más vacilante que", "no es tan determinado(-a) como"],
    ],
    q: [
      ["más determinado(-a)", "menos vacilante"],
      ["más vacilante", "menos determinado(-a)"],
    ],
  },
  {
    s: [
      ["es más genuino(-a) que", "no es tan falso(-a) como"],
      ["es más falso(-a) que", "no es tan genuino(-a) como"],
    ],
    q: [
      ["más genuino(-a)", "menos falso(-a)"],
      ["más falso(-a)", "menos genuino(-a)"],
    ],
  },
  {
    s: [
      ["es más entusiasta que", "no es tan apático(-a) como"],
      ["es más apático(-a) que", "no es tan entusiasta como"],
    ],
    q: [
      ["más entusiasta", "menos apático(-a)"],
      ["más apático(-a)", "menos entusiasta"],
    ],
  },
  {
    s: [
      ["es más atento(-a) que", "no es tan distraído(-a) como"],
      ["es más distraído(-a) que", "no es tan atento(-a) como"],
    ],
    q: [
      ["más atento(-a)", "menos distraído(-a)"],
      ["más distraído(-a)", "menos atento(-a)"],
    ],
  },
  {
    s: [
      ["es más respetuoso(-a) que", "no es tan irrespetuoso(-a) como"],
      ["es más irrespetuoso(-a) que", "no es tan respetuoso(-a) como"],
    ],
    q: [
      ["más respetuoso(-a)", "menos irrespetuoso(-a)"],
      ["más irrespetuoso(-a)", "menos respetuoso(-a)"],
    ],
  },
  {
    s: [
      ["es más accesible que", "no es tan intimidante como"],
      ["es más intimidante que", "no es tan accesible como"],
    ],
    q: [
      ["más accesible", "menos intimidante"],
      ["más intimidante", "menos accesible"],
    ],
  },
  {
    s: [
      ["es más ingenioso(-a) que", "no es tan derrochador(-a) como"],
      ["es más derrochador(-a) que", "no es tan ingenioso(-a) como"],
    ],
    q: [
      ["más ingenioso(-a)", "menos derrochador(-a)"],
      ["más derrochador(-a)", "menos ingenioso(-a)"],
    ],
  },
  {
    s: [
      ["es más persuasivo(-a) que", "no es tan poco convincente como"],
      ["es más poco convincente que", "no es tan persuasivo(-a) como"],
    ],
    q: [
      ["más persuasivo(-a)", "menos poco convincente"],
      ["más poco convincente", "menos persuasivo(-a)"],
    ],
  },
  {
    s: [
      ["es más espontáneo(-a) que", "no es tan predecible como"],
      ["es más predecible que", "no es tan espontáneo(-a) como"],
    ],
    q: [
      ["más espontáneo(-a)", "menos predecible"],
      ["más predecible", "menos espontáneo(-a)"],
    ],
  },
  {
    s: [
      ["es más ambicioso(-a) que", "no es tan complaciente como"],
      ["es más complaciente que", "no es tan ambicioso(-a) como"],
    ],
    q: [
      ["más ambicioso(-a)", "menos complaciente"],
      ["más complaciente", "menos ambicioso(-a)"],
    ],
  },
  {
    s: [
      ["es más diplomático(-a) que", "no es tan directo(-a) como"],
      ["es más directo(-a) que", "no es tan diplomático(-a) como"],
    ],
    q: [
      ["más diplomático(-a)", "menos directo(-a)"],
      ["más directo(-a)", "menos diplomático(-a)"],
    ],
  },
  {
    s: [
      ["es más leal que", "no es tan desleal como"],
      ["es más desleal que", "no es tan leal como"],
    ],
    q: [
      ["más leal", "menos desleal"],
      ["más desleal", "menos leal"],
    ],
  },
  {
    s: [
      ["es más articulado(-a) que", "no es tan inarticulado(-a) como"],
      ["es más inarticulado(-a) que", "no es tan articulado(-a) como"],
    ],
    q: [
      ["más articulado(-a)", "menos inarticulado(-a)"],
      ["más inarticulado(-a)", "menos articulado(-a)"],
    ],
  },
  {
    s: [
      ["es más vigilante que", "no es tan despistado(-a) como"],
      ["es más despistado(-a) que", "no es tan vigilante como"],
    ],
    q: [
      ["más vigilante", "menos despistado(-a)"],
      ["más despistado(-a)", "menos vigilante"],
    ],
  },
  {
    s: [
      ["es más prudente que", "no es tan imprudente como"],
      ["es más imprudente que", "no es tan prudente como"],
    ],
    q: [
      ["más prudente", "menos imprudente"],
      ["más imprudente", "menos prudente"],
    ],
  },
  {
    s: [
      ["es más cooperativo(-a) que", "no es tan poco cooperativo(-a) como"],
      ["es más poco cooperativo(-a) que", "no es tan cooperativo(-a) como"],
    ],
    q: [
      ["más cooperativo(-a)", "menos poco cooperativo(-a)"],
      ["más poco cooperativo(-a)", "menos cooperativo(-a)"],
    ],
  },
  {
    s: [
      ["es más diligente que", "no es tan negligente como"],
      ["es más negligente que", "no es tan diligente como"],
    ],
    q: [
      ["más diligente", "menos negligente"],
      ["más negligente", "menos diligente"],
    ],
  },
  {
    s: [
      ["es más cariñoso(-a) que", "no es tan frío(-a) como"],
      ["es más frío(-a) que", "no es tan cariñoso(-a) como"],
    ],
    q: [
      ["más cariñoso(-a)", "menos frío(-a)"],
      ["más frío(-a)", "menos cariñoso(-a)"],
    ],
  },
  {
    s: [
      ["es más confiable que", "no es tan poco confiable como"],
      ["es más poco confiable que", "no es tan confiable como"],
    ],
    q: [
      ["más confiable", "menos poco confiable"],
      ["más poco confiable", "menos confiable"],
    ],
  },
  {
    s: [
      ["es más sensato(-a) que", "no es tan irracional como"],
      ["es más irracional que", "no es tan sensato(-a) como"],
    ],
    q: [
      ["más sensato(-a)", "menos irracional"],
      ["más irracional", "menos sensato(-a)"],
    ],
  },
];

export default {
  names,
  comparisons,
  question: "Quién es",
};
