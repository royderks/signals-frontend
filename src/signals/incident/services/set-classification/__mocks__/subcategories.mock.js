const subcategories =
  [
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/asbest-accu',
      value: 'Asbest / accu',
      slug: 'asbest-accu',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/container-is-kapot',
      value: 'Container is kapot',
      slug: 'container-is-kapot',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/container-is-vol',
      value: 'Container is vol',
      slug: 'container-is-vol',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/container-voor-papier-is-stuk',
      value: 'Container papier kapot',
      slug: 'container-voor-papier-is-stuk',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/container-voor-papier-is-vol',
      value: 'Container papier vol',
      slug: 'container-voor-papier-is-vol',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/container-voor-plastic-afval-is-vol',
      value: 'Container plastic afval vol',
      slug: 'container-voor-plastic-afval-is-vol',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/container-voor-plastic-afval-is-kapot',
      value: 'Container plastic kapot',
      slug: 'container-voor-plastic-afval-is-kapot',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/grofvuil',
      value: 'Grofvuil',
      slug: 'grofvuil',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.  In Nieuw-West komen we de volgende ophaaldag.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/handhaving-op-afval',
      value: 'Handhaving op afval',
      slug: 'handhaving-op-afval',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/huisafval',
      value: 'Huisafval',
      slug: 'huisafval',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/overig-afval',
      value: 'Overig afval',
      slug: 'overig-afval',
      category_slug: 'afval',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/prullenbak-is-kapot',
      value: 'Prullenbak is kapot',
      slug: 'prullenbak-is-kapot',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/prullenbak-is-vol',
      value: 'Prullenbak is vol',
      slug: 'prullenbak-is-vol',
      category_slug: 'afval',
      handling_message: '\nWij handelen uw melding binnen drie werkdagen af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/puin-sloopafval',
      value: 'Puin- / sloopafval',
      slug: 'puin-sloopafval',
      category_slug: 'afval',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/afval/sub_categories/veeg-zwerfvuil',
      value: 'Veeg- / zwerfvuil',
      slug: 'veeg-zwerfvuil',
      category_slug: 'afval',
      handling_message: '\nWij handelen uw melding binnen drie werkdagen af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/ondermijning/sub_categories/vermoeden',
      value: 'Vermoeden',
      slug: 'vermoeden',
      category_slug: 'ondermijning',
      handling_message: 'Bedankt voor uw melding. Wij nemen deze mee in ons onderzoek.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/openbaar-groen-en-water/sub_categories/boom',
      value: 'Boom',
      slug: 'boom',
      category_slug: 'openbaar-groen-en-water',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/openbaar-groen-en-water/sub_categories/drijfvuil',
      value: 'Drijfvuil',
      slug: 'drijfvuil',
      category_slug: 'openbaar-groen-en-water',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/openbaar-groen-en-water/sub_categories/maaien-snoeien',
      value: 'Maaien / snoeien',
      slug: 'maaien-snoeien',
      category_slug: 'openbaar-groen-en-water',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/openbaar-groen-en-water/sub_categories/oever-kade-steiger',
      value: 'Oever / kade / steiger',
      slug: 'oever-kade-steiger',
      category_slug: 'openbaar-groen-en-water',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/openbaar-groen-en-water/sub_categories/onkruid',
      value: 'Onkruid',
      slug: 'onkruid',
      category_slug: 'openbaar-groen-en-water',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/openbaar-groen-en-water/sub_categories/overig-groen-en-water',
      value: 'Overig groen en water',
      slug: 'overig-groen-en-water',
      category_slug: 'openbaar-groen-en-water',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overig/sub_categories/overig',
      value: 'Overig',
      slug: 'overig',
      category_slug: 'overig',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overig/sub_categories/overige-dienstverlening',
      value: 'Overige dienstverlening',
      slug: 'overige-dienstverlening',
      category_slug: 'overig',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-bedrijven-en-horeca/sub_categories/geluidsoverlast-installaties',
      value: 'Geluidsoverlast installaties',
      slug: 'geluidsoverlast-installaties',
      category_slug: 'overlast-bedrijven-en-horeca',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-bedrijven-en-horeca/sub_categories/geluidsoverlast-muziek',
      value: 'Geluidsoverlast muziek',
      slug: 'geluidsoverlast-muziek',
      category_slug: 'overlast-bedrijven-en-horeca',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-bedrijven-en-horeca/sub_categories/overig-horecabedrijven',
      value: 'Overig bedrijven / horeca',
      slug: 'overig-horecabedrijven',
      category_slug: 'overlast-bedrijven-en-horeca',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-bedrijven-en-horeca/sub_categories/overlast-door-bezoekers-niet-op-terras',
      value: 'Overlast door bezoekers (niet op terras)',
      slug: 'overlast-door-bezoekers-niet-op-terras',
      category_slug: 'overlast-bedrijven-en-horeca',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-bedrijven-en-horeca/sub_categories/overlast-terrassen',
      value: 'Overlast terrassen',
      slug: 'overlast-terrassen',
      category_slug: 'overlast-bedrijven-en-horeca',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-bedrijven-en-horeca/sub_categories/stankoverlast',
      value: 'Stankoverlast',
      slug: 'stankoverlast',
      category_slug: 'overlast-bedrijven-en-horeca',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/auto-scooter-bromfietswrak',
      value: 'Auto- / scooter- / bromfiets(wrak)',
      slug: 'auto-scooter-bromfietswrak',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 weken weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/bouw-sloopoverlast',
      value: 'Bouw- / sloopoverlast',
      slug: 'bouw-sloopoverlast',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 weken weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/fietswrak',
      value: 'Fietswrak',
      slug: 'fietswrak',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 weken weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/graffiti-wildplak',
      value: 'Graffiti / wildplak',
      slug: 'graffiti-wildplak',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/hinderlijk-geplaatst-object',
      value: 'Hinderlijk geplaatst object',
      slug: 'hinderlijk-geplaatst-object',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/lozing-dumping-bodemverontreiniging',
      value: 'Lozing / dumping / bodemverontreiniging',
      slug: 'lozing-dumping-bodemverontreiniging',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/overig-openbare-ruimte',
      value: 'Overig openbare ruimte',
      slug: 'overig-openbare-ruimte',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: 'zou niet leeg moeten zijn'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/parkeeroverlast',
      value: 'Parkeeroverlast',
      slug: 'parkeeroverlast',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/stank-geluidsoverlast',
      value: 'Stank- / geluidsoverlast',
      slug: 'stank-geluidsoverlast',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 weken weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/hondenpoep',
      value: 'Uitwerpselen',
      slug: 'hondenpoep',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: '\nWe laten u binnen 3 weken weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-in-de-openbare-ruimte/sub_categories/wegsleep',
      value: 'Wegsleep',
      slug: 'wegsleep',
      category_slug: 'overlast-in-de-openbare-ruimte',
      handling_message: 'zou niet leeg moeten zijn'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-op-het-water/sub_categories/overlast-op-het-water-geluid',
      value: 'Geluid op het water',
      slug: 'overlast-op-het-water-geluid',
      category_slug: 'overlast-op-het-water',
      handling_message: '\nWe geven uw melding door aan de handhavers. Als dat mogelijk is ondernemen zij direct actie, maar zij kunnen niet altijd snel genoeg aanwezig zijn.\n\nBlijf overlast aan ons melden. Ook als we niet altijd direct iets voor u kunnen doen. We gebruiken alle meldingen om overlast in de toekomst te kunnen beperken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-op-het-water/sub_categories/scheepvaart-nautisch-toezicht',
      value: 'Nautisch toezicht / Vaargedrag',
      slug: 'scheepvaart-nautisch-toezicht',
      category_slug: 'overlast-op-het-water',
      handling_message: '\nWe geven uw melding door aan onze handhavers. Zij beoordelen of het nodig is direct actie te ondernemen. Bijvoorbeeld omdat er olie lekt of omdat de situatie gevaar oplevert voor andere boten.\n\nAls er geen directe actie nodig is, dan pakken we uw melding op buiten het vaarseizoen (september - maart).\n'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-op-het-water/sub_categories/overig-boten',
      value: 'Overige boten',
      slug: 'overig-boten',
      category_slug: 'overlast-op-het-water',
      handling_message: '\nWe geven uw melding door aan onze handhavers. Zij beoordelen of het nodig is direct actie te ondernemen. Bijvoorbeeld omdat er olie lekt of omdat de situatie gevaar oplevert voor andere boten.\n\nAls er geen directe actie nodig is, dan pakken we uw melding op buiten het vaarseizoen (september - maart).\n'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-op-het-water/sub_categories/overlast-vanaf-het-water',
      value: 'Overlast vanaf het water',
      slug: 'overlast-vanaf-het-water',
      category_slug: 'overlast-op-het-water',
      handling_message: '\nWe geven uw melding door aan de handhavers. Als dat mogelijk is ondernemen zij direct actie, maar zij kunnen niet altijd snel genoeg aanwezig zijn.\n\nBlijf overlast aan ons melden. Ook als we niet altijd direct iets voor u kunnen doen. We gebruiken alle meldingen om overlast in de toekomst te kunnen beperken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-op-het-water/sub_categories/overlast-op-het-water-snel-varen',
      value: 'Snel varen',
      slug: 'overlast-op-het-water-snel-varen',
      category_slug: 'overlast-op-het-water',
      handling_message: '\nWe geven uw melding door aan de handhavers. Als dat mogelijk is ondernemen zij direct actie, maar zij kunnen niet altijd snel genoeg aanwezig zijn.\n\nBlijf overlast aan ons melden. Ook als we niet altijd direct iets voor u kunnen doen. We gebruiken alle meldingen om overlast in de toekomst te kunnen beperken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-op-het-water/sub_categories/overlast-op-het-water-gezonken-boot',
      value: 'Wrak in het water',
      slug: 'overlast-op-het-water-gezonken-boot',
      category_slug: 'overlast-op-het-water',
      handling_message: '\nWe geven uw melding door aan onze handhavers. Zij beoordelen of het nodig is direct actie te ondernemen. Bijvoorbeeld omdat er olie lekt of omdat de situatie gevaar oplevert voor andere boten.\n\nAls er geen directe actie nodig is, dan pakken we uw melding op buiten het vaarseizoen (september - maart).\n\nBekijk in welke situaties we een wrak weghalen. Boten die vol met water staan, maar nog wél drijven, mogen we bijvoorbeeld niet weghalen.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/dode-dieren',
      value: 'Dode dieren',
      slug: 'dode-dieren',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/duiven',
      value: 'Duiven',
      slug: 'duiven',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/ganzen',
      value: 'Ganzen',
      slug: 'ganzen',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/meeuwen',
      value: 'Meeuwen',
      slug: 'meeuwen',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/overig-dieren',
      value: 'Overig dieren',
      slug: 'overig-dieren',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/ratten',
      value: 'Ratten',
      slug: 'ratten',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-dieren/sub_categories/wespen',
      value: 'Wespen',
      slug: 'wespen',
      category_slug: 'overlast-van-dieren',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/daklozen-bedelen',
      value: 'Daklozen / bedelen',
      slug: 'daklozen-bedelen',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/drank-en-drugsoverlast',
      value: 'Drank- / drugsoverlast',
      slug: 'drank-en-drugsoverlast',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/jongerenoverlast',
      value: 'Jongerenoverlast',
      slug: 'jongerenoverlast',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/overige-overlast-door-personen',
      value: 'Overige overlast door personen',
      slug: 'overige-overlast-door-personen',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/overlast-door-afsteken-vuurwerk',
      value: 'Overlast door afsteken vuurwerk',
      slug: 'overlast-door-afsteken-vuurwerk',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/overlast-van-taxis-bussen-en-fietstaxis',
      value: 'Overlast van taxi\'s, bussen en fietstaxi\'s',
      slug: 'overlast-van-taxis-bussen-en-fietstaxis',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/overlast-van-en-door-personen-of-groepen/sub_categories/wildplassen-poepen-overgeven',
      value: 'Wildplassen / poepen / overgeven',
      slug: 'wildplassen-poepen-overgeven',
      category_slug: 'overlast-van-en-door-personen-of-groepen',
      handling_message: '\nWe laten u binnen 3 werkdagen weten wat we hebben gedaan. En anders hoort u wanneer wij uw melding kunnen oppakken.\nWe houden u op de hoogte via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/autom-verzinkbare-palen',
      value: 'Autom. Verzinkbare palen',
      slug: 'autom-verzinkbare-palen',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/bewegwijzering',
      value: 'Bewegwijzering',
      slug: 'bewegwijzering',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/brug',
      value: 'Brug',
      slug: 'brug',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/camerasystemen',
      value: 'Camerasystemen',
      slug: 'camerasystemen',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/fietsrek-nietje',
      value: 'Fietsrek / nietje',
      slug: 'fietsrek-nietje',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/gladheid',
      value: 'Gladheid',
      slug: 'gladheid',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nGaat het om gladheid door een ongeluk (olie of frituurvet op de weg)? Dan pakken we uw melding zo snel mogelijk op. In ieder geval binnen 3 werkdagen.\n\nBij gladheid door sneeuw of bladeren pakken we hoofdwegen en fietsroutes als eerste aan. Andere meldingen behandelen we als de belangrijkste routes zijn gedaan.\n\nU ontvangt geen apart bericht meer over de afhandeling van uw melding.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/klok',
      value: 'Klok',
      slug: 'klok',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nGevaarlijke situaties zullen wij zo snel mogelijk verhelpen, andere situaties kunnen wat langer duren. Wij kunnen u hier helaas niet altijd van op de hoogte houden.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/lantaarnpaal-straatverlichting',
      value: 'Lantaarnpaal / Straatverlichting',
      slug: 'lantaarnpaal-straatverlichting',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nGevaarlijke situaties zullen wij zo snel mogelijk verhelpen, andere situaties kunnen wat langer duren. Wij kunnen u hier helaas niet altijd van op de hoogte houden.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/lichthinder',
      value: 'Lichthinder',
      slug: 'lichthinder',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nGevaarlijke situaties zullen wij zo snel mogelijk verhelpen, andere situaties handelen wij meestal binnen 5 werkdagen af. U ontvangt dan geen apart bericht meer.\nAls we uw melding niet binnen 5 werkdagen kunnen afhandelen, hoort u - via e-mail – hoe wij uw melding oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/omleiding-belijning-verkeer',
      value: 'Omleiding / belijning verkeer',
      slug: 'omleiding-belijning-verkeer',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/onderhoud-stoep-straat-en-fietspad',
      value: 'Onderhoud stoep, straat en fietspad',
      slug: 'onderhoud-stoep-straat-en-fietspad',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie werkdagen af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/overig-wegen-verkeer-straatmeubilair',
      value: 'Overig Wegen, verkeer, straatmeubilair',
      slug: 'overig-wegen-verkeer-straatmeubilair',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij bekijken uw melding en zorgen dat het juiste onderdeel van de gemeente deze gaat behandelen. Heeft u contactgegevens achtergelaten? Dan nemen wij bij onduidelijkheid contact met u op.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/parkeer-verwijssysteem',
      value: 'Parkeer verwijssysteem',
      slug: 'parkeer-verwijssysteem',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/put-riolering-verstopt',
      value: 'Put / riolering verstopt',
      slug: 'put-riolering-verstopt',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/speelplaats',
      value: 'Speelplaats',
      slug: 'speelplaats',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/sportvoorziening',
      value: 'Sportvoorziening',
      slug: 'sportvoorziening',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/stadsplattegronden',
      value: 'Stadsplattegronden',
      slug: 'stadsplattegronden',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/straatmeubilair',
      value: 'Straatmeubilair',
      slug: 'straatmeubilair',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/verdeelkasten-bekabeling',
      value: 'Verdeelkasten / bekabeling',
      slug: 'verdeelkasten-bekabeling',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie weken af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/verkeersbord-verkeersafzetting',
      value: 'Verkeersbord, verkeersafzetting',
      slug: 'verkeersbord-verkeersafzetting',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nWij handelen uw melding binnen drie werkdagen af. U ontvangt dan geen apart bericht meer.\nEn anders hoort u - via e-mail - wanneer wij uw melding kunnen oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/verkeerslicht',
      value: 'Verkeerslicht',
      slug: 'verkeerslicht',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nGevaarlijke situaties zullen wij zo snel mogelijk verhelpen, andere situaties handelen wij meestal binnen 5 werkdagen af. U ontvangt dan geen apart bericht meer.\nAls we uw melding niet binnen 5 werkdagen kunnen afhandelen, hoort u - via e-mail – hoe wij uw melding oppakken.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/verkeersoverlast',
      value: 'Verkeersoverlast',
      slug: 'verkeersoverlast',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/verkeerssituaties',
      value: 'Verkeerssituaties',
      slug: 'verkeerssituaties',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nUw melding wordt ingepland: wij laten u binnen 5 werkdagen weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we via e-mail.'
    },
    {
      key: 'https://acc.api.data.amsterdam.nl/signals/v1/public/terms/categories/wegen-verkeer-straatmeubilair/sub_categories/verlichting-netstoring',
      value: 'Verlichting netstoring',
      slug: 'verlichting-netstoring',
      category_slug: 'wegen-verkeer-straatmeubilair',
      handling_message: '\nGevaarlijke situaties zullen wij zo snel mogelijk verhelpen, andere situaties handelen wij meestal binnen 5 werkdagen af. U ontvangt dan geen apart bericht meer.\nAls we uw melding niet binnen 5 werkdagen kunnen afhandelen, hoort u - via e-mail – hoe wij uw melding oppakken.'
    }
  ];

export default subcategories;

