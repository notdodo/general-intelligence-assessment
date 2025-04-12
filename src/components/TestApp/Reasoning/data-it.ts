const names = [
  "James",
  "Mary",
  "Michael",
  "Patricia",
  "Robert",
  "Jennifer",
  "John",
  "Linda",
  "David",
  "Elizabeth",
  "William",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Karen",
  "Christopher",
  "Sarah",
  "Charles",
  "Lisa",
  "Daniel",
  "Nancy",
  "Matthew",
  "Sandra",
  "Anthony",
  "Betty",
  "Mark",
  "Ashley",
  "Donald",
  "Emily",
  "Steven",
  "Kimberly",
  "Andrew",
  "Margaret",
  "Paul",
  "Donna",
  "Joshua",
  "Michelle",
  "Kenneth",
  "Carol",
  "Kevin",
  "Amanda",
  "Brian",
  "Melissa",
  "Timothy",
  "Deborah",
  "Ronald",
  "Stephanie",
  "George",
  "Rebecca",
  "Jason",
  "Sharon",
  "Edward",
  "Laura",
  "Jeffrey",
  "Cynthia",
  "Ryan",
  "Dorothy",
  "Jacob",
  "Amy",
  "Nicholas",
  "Kathleen",
  "Gary",
  "Angela",
  "Eric",
  "Shirley",
  "Jonathan",
  "Emma",
  "Stephen",
  "Brenda",
  "Larry",
  "Pamela",
  "Justin",
  "Nicole",
  "Scott",
  "Anna",
  "Brandon",
  "Samantha",
  "Benjamin",
  "Katherine",
  "Samuel",
  "Christine",
  "Gregory",
  "Debra",
  "Alexander",
  "Rachel",
  "Patrick",
  "Carolyn",
  "Frank",
  "Janet",
  "Raymond",
  "Maria",
  "Jack",
  "Olivia",
  "Dennis",
  "Heather",
  "Jerry",
  "Helen",
];

const comparisons = [
  {
    s: [
      ["è più forte di", "non è debole come"],
      ["è più debole di", "non è forte come"],
    ],
    q: [
      ["più forte", "meno debole"],
      ["più debole", "meno forte"],
    ],
  },
  {
    s: [
      ["è più intelligente di", "non è stupido come"],
      ["è più stupido di", "non è intelligente come"],
    ],
    q: [
      ["più intelligente", "meno stupido"],
      ["più stupido", "meno intelligente"],
    ],
  },
  {
    s: [
      ["è più alto di", "non è basso come"],
      ["è più basso di", "non è alto come"],
    ],
    q: [
      ["più alto", "meno basso"],
      ["più basso", "meno alto"],
    ],
  },
  {
    s: [
      ["è più coraggioso di", "non è codardo come"],
      ["è più codardo di", "non è coraggioso come"],
    ],
    q: [
      ["più coraggioso", "meno codardo"],
      ["più codardo", "meno coraggioso"],
    ],
  },
  {
    s: [
      ["è più gentile di", "non è crudele come"],
      ["è più crudele di", "non è gentile come"],
    ],
    q: [
      ["più gentile", "meno crudele"],
      ["più crudele", "meno gentile"],
    ],
  },
  {
    s: [
      ["è più divertente di", "non è serio come"],
      ["è più serio di", "non è divertente come"],
    ],
    q: [
      ["più divertente", "meno serio"],
      ["più serio", "meno divertente"],
    ],
  },
  {
    s: [
      ["è più amichevole di", "non è ostile come"],
      ["è più ostile di", "non è amichevole come"],
    ],
    q: [
      ["più amichevole", "meno ostile"],
      ["più ostile", "meno amichevole"],
    ],
  },
  {
    s: [
      ["è più generoso di", "non è egoista come"],
      ["è più egoista di", "non è generoso come"],
    ],
    q: [
      ["più generoso", "meno egoista"],
      ["più egoista", "meno generoso"],
    ],
  },
  {
    s: [
      ["è più sicuro di sé di", "non è insicuro come"],
      ["è più insicuro di", "non è sicuro di sé come"],
    ],
    q: [
      ["più sicuro di sé", "meno insicuro"],
      ["più insicuro", "meno sicuro di sé"],
    ],
  },
  {
    s: [
      ["è più calmo di", "non è ansioso come"],
      ["è più ansioso di", "non è calmo come"],
    ],
    q: [
      ["più calmo", "meno ansioso"],
      ["più ansioso", "meno calmo"],
    ],
  },
  {
    s: [
      ["è più ottimista di", "non è pessimista come"],
      ["è più pessimista di", "non è ottimista come"],
    ],
    q: [
      ["più ottimista", "meno pessimista"],
      ["più pessimista", "meno ottimista"],
    ],
  },
  {
    s: [
      ["è più ambizioso di", "non è pigro come"],
      ["è più pigro di", "non è ambizioso come"],
    ],
    q: [
      ["più ambizioso", "meno pigro"],
      ["più pigro", "meno ambizioso"],
    ],
  },
  {
    s: [
      ["è più responsabile di", "non è negligente come"],
      ["è più negligente di", "non è responsabile come"],
    ],
    q: [
      ["più responsabile", "meno negligente"],
      ["più negligente", "meno responsabile"],
    ],
  },
  {
    s: [
      ["è più empatico di", "non è insensibile come"],
      ["è più insensibile di", "non è empatico come"],
    ],
    q: [
      ["più empatico", "meno insensibile"],
      ["più insensibile", "meno empatico"],
    ],
  },
  {
    s: [
      ["è più creativo di", "non è privo di immaginazione come"],
      ["è meno fantasioso di", "non è creativo come"],
    ],
    q: [
      ["più creativo", "meno privo di immaginazione"],
      ["meno fantasioso", "meno creativo"],
    ],
  },
  {
    s: [
      ["è più disciplinato di", "non è sconsiderato come"],
      ["è più sconsiderato di", "non è disciplinato come"],
    ],
    q: [
      ["più disciplinato", "meno sconsiderato"],
      ["più sconsiderato", "meno disciplinato"],
    ],
  },
  {
    s: [
      ["è più attraente di", "non è brutto come"],
      ["è più brutto di", "non è attraente come"],
    ],
    q: [
      ["più attraente", "meno brutto"],
      ["più brutto", "meno attraente"],
    ],
  },
  {
    s: [
      ["è più onesto di", "non è disonesto come"],
      ["è più disonesto di", "non è onesto come"],
    ],
    q: [
      ["più onesto", "meno disonesto"],
      ["più disonesto", "meno onesto"],
    ],
  },
  {
    s: [
      ["è più paziente di", "non è impaziente come"],
      ["è più impaziente di", "non è paziente come"],
    ],
    q: [
      ["più paziente", "meno impaziente"],
      ["più impaziente", "meno paziente"],
    ],
  },
  {
    s: [
      ["è più aperto di mente di", "non è chiuso di mente come"],
      ["è più chiuso di mente di", "non è aperto di mente come"],
    ],
    q: [
      ["più aperto di mente", "meno chiuso di mente"],
      ["più chiuso di mente", "meno aperto di mente"],
    ],
  },
  {
    s: [
      ["è più educato di", "non è maleducato come"],
      ["è più maleducato di", "non è educato come"],
    ],
    q: [
      ["più educato", "meno maleducato"],
      ["più maleducato", "meno educato"],
    ],
  },
  {
    s: [
      ["è più organizzato di", "non è caotico come"],
      ["è più caotico di", "non è organizzato come"],
    ],
    q: [
      ["più organizzato", "meno caotico"],
      ["più caotico", "meno organizzato"],
    ],
  },
  {
    s: [
      ["è più maturo di", "non è immaturo come"],
      ["è più immaturo di", "non è maturo come"],
    ],
    q: [
      ["più maturo", "meno immaturo"],
      ["più immaturo", "meno maturo"],
    ],
  },
  {
    s: [
      ["è più flessibile di", "non è rigido come"],
      ["è più rigido di", "non è flessibile come"],
    ],
    q: [
      ["più flessibile", "meno rigido"],
      ["più rigido", "meno flessibile"],
    ],
  },
  {
    s: [
      ["è più umile di", "non è arrogante come"],
      ["è più arrogante di", "non è umile come"],
    ],
    q: [
      ["più umile", "meno arrogante"],
      ["più arrogante", "meno umile"],
    ],
  },
  {
    s: [
      ["è più carismatico di", "non è noioso come"],
      ["è più noioso di", "non è carismatico come"],
    ],
    q: [
      ["più carismatico", "meno noioso"],
      ["più noioso", "meno carismatico"],
    ],
  },
  {
    s: [
      ["è più affidabile di", "non è inaffidabile come"],
      ["è più inaffidabile di", "non è affidabile come"],
    ],
    q: [
      ["più affidabile", "meno inaffidabile"],
      ["più inaffidabile", "meno affidabile"],
    ],
  },
  {
    s: [
      ["è più passionale di", "non è indifferente come"],
      ["è più indifferente di", "non è passionale come"],
    ],
    q: [
      ["più passionale", "meno indifferente"],
      ["più indifferente", "meno passionale"],
    ],
  },
  {
    s: [
      ["è più comprensivo di", "non è giudicante come"],
      ["è più giudicante di", "non è comprensivo come"],
    ],
    q: [
      ["più comprensivo", "meno giudicante"],
      ["più giudicante", "meno comprensivo"],
    ],
  },
  {
    s: [
      ["è più tollerante di", "non è intollerante come"],
      ["è più intollerante di", "non è tollerante come"],
    ],
    q: [
      ["più tollerante", "meno intollerante"],
      ["più intollerante", "meno tollerante"],
    ],
  },
  {
    s: [
      ["è più indulgente di", "non è rancoroso come"],
      ["è più rancoroso di", "non è indulgente come"],
    ],
    q: [
      ["più indulgente", "meno rancoroso"],
      ["più rancoroso", "meno indulgente"],
    ],
  },
  {
    s: [
      ["è più energico di", "non è letargico come"],
      ["è più letargico di", "non è energico come"],
    ],
    q: [
      ["più energico", "meno letargico"],
      ["più letargico", "meno energico"],
    ],
  },
  {
    s: [
      ["è più modesto di", "non è vanaglorioso come"],
      ["è più vanaglorioso di", "non è modesto come"],
    ],
    q: [
      ["più modesto", "meno vanaglorioso"],
      ["più vanaglorioso", "meno modesto"],
    ],
  },
  {
    s: [
      ["è più coerente di", "non è incoerente come"],
      ["è più incoerente di", "non è coerente come"],
    ],
    q: [
      ["più coerente", "meno incoerente"],
      ["più incoerente", "meno coerente"],
    ],
  },
  {
    s: [
      ["è più premuroso di", "non è disattento come"],
      ["è più disattento di", "non è premuroso come"],
    ],
    q: [
      ["più premuroso", "meno disattento"],
      ["più disattento", "meno premuroso"],
    ],
  },
  {
    s: [
      ["è più sincero di", "non è falso come"],
      ["è più falso di", "non è sincero come"],
    ],
    q: [
      ["più sincero", "meno falso"],
      ["più falso", "meno sincero"],
    ],
  },
  {
    s: [
      ["è più proattivo di", "non è reattivo come"],
      ["è più reattivo di", "non è proattivo come"],
    ],
    q: [
      ["più proattivo", "meno reattivo"],
      ["più reattivo", "meno proattivo"],
    ],
  },
  {
    s: [
      ["è più determinato di", "non è esitante come"],
      ["è più esitante di", "non è determinato come"],
    ],
    q: [
      ["più determinato", "meno esitante"],
      ["più esitante", "meno determinato"],
    ],
  },
  {
    s: [
      ["è più genuino di", "non è finto come"],
      ["è più finto di", "non è genuino come"],
    ],
    q: [
      ["più genuino", "meno finto"],
      ["più finto", "meno genuino"],
    ],
  },
  {
    s: [
      ["è più entusiasta di", "non è apatico come"],
      ["è più apatico di", "non è entusiasta come"],
    ],
    q: [
      ["più entusiasta", "meno apatico"],
      ["più apatico", "meno entusiasta"],
    ],
  },
  {
    s: [
      ["è più attento di", "non è distratto come"],
      ["è più distratto di", "non è attento come"],
    ],
    q: [
      ["più attento", "meno distratto"],
      ["più distratto", "meno attento"],
    ],
  },
  {
    s: [
      ["è più rispettoso di", "non è irrispettoso come"],
      ["è più irrispettoso di", "non è rispettoso come"],
    ],
    q: [
      ["più rispettoso", "meno irrispettoso"],
      ["più irrispettoso", "meno rispettoso"],
    ],
  },
  {
    s: [
      ["è più socievole di", "non è intimidatorio come"],
      ["è più intimidatorio di", "non è socievole come"],
    ],
    q: [
      ["più socievole", "meno intimidatorio"],
      ["più intimidatorio", "meno socievole"],
    ],
  },
  {
    s: [
      ["è più ingegnoso di", "non è sprecone come"],
      ["è più sprecone di", "non è ingegnoso come"],
    ],
    q: [
      ["più ingegnoso", "meno sprecone"],
      ["più sprecone", "meno ingegnoso"],
    ],
  },
  {
    s: [
      ["è più persuasivo di", "non è poco convincente come"],
      ["è più poco convincente di", "non è persuasivo come"],
    ],
    q: [
      ["più persuasivo", "meno poco convincente"],
      ["più poco convincente", "meno persuasivo"],
    ],
  },
  {
    s: [
      ["è più spontaneo di", "non è prevedibile come"],
      ["è più prevedibile di", "non è spontaneo come"],
    ],
    q: [
      ["più spontaneo", "meno prevedibile"],
      ["più prevedibile", "meno spontaneo"],
    ],
  },
  {
    s: [
      ["è più diplomatico di", "non è brusco come"],
      ["è più brusco di", "non è diplomatico come"],
    ],
    q: [
      ["più diplomatico", "meno brusco"],
      ["più brusco", "meno diplomatico"],
    ],
  },
  {
    s: [
      ["è più leale di", "non è sleale come"],
      ["è più sleale di", "non è leale come"],
    ],
    q: [
      ["più leale", "meno sleale"],
      ["più sleale", "meno leale"],
    ],
  },
  {
    s: [
      ["è più articolato di", "non è confuso come"],
      ["è più confuso di", "non è articolato come"],
    ],
    q: [
      ["più articolato", "meno confuso"],
      ["più confuso", "meno articolato"],
    ],
  },
  {
    s: [
      ["è più vigile di", "non è distratto come"],
      ["è più distratto di", "non è vigile come"],
    ],
    q: [
      ["più vigile", "meno distratto"],
      ["più distratto", "meno vigile"],
    ],
  },
  {
    s: [
      ["è più prudente di", "non è sconsiderato come"],
      ["è più sconsiderato di", "non è prudente come"],
    ],
    q: [
      ["più prudente", "meno sconsiderato"],
      ["più sconsiderato", "meno prudente"],
    ],
  },
  {
    s: [
      ["è più collaborativo di", "non è ostile come"],
      ["è più ostile di", "non è collaborativo come"],
    ],
    q: [
      ["più collaborativo", "meno ostile"],
      ["più ostile", "meno collaborativo"],
    ],
  },
  {
    s: [
      ["è più diligente di", "non è negligente come"],
      ["è più negligente di", "non è diligente come"],
    ],
    q: [
      ["più diligente", "meno negligente"],
      ["più negligente", "meno diligente"],
    ],
  },
  {
    s: [
      ["è più affettuoso di", "non è freddo come"],
      ["è più freddo di", "non è affettuoso come"],
    ],
    q: [
      ["più affettuoso", "meno freddo"],
      ["più freddo", "meno affettuoso"],
    ],
  },
  {
    s: [
      ["è più degno di fiducia di", "non è inaffidabile come"],
      ["è più inaffidabile di", "non è degno di fiducia come"],
    ],
    q: [
      ["più degno di fiducia", "meno inaffidabile"],
      ["più inaffidabile", "meno degno di fiducia"],
    ],
  },
  {
    s: [
      ["è più sensato di", "non è irrazionale come"],
      ["è più irrazionale di", "non è sensato come"],
    ],
    q: [
      ["più sensato", "meno irrazionale"],
      ["più irrazionale", "meno sensato"],
    ],
  },
];

export default {
  names,
  comparisons,
  question: "Chi è",
};
