
Accordion Mini Project

Een klein oefenproject waarin ik een herbruikbare **Accordion**-component heb gebouwd met React, `useState`, `children` en props. De component laat maar één paneel tegelijk open en schakelt aan- en uit bij herhaalde klikken.


  Wat ik heb geleerd

- Hoe je met `useState` de open/dichte status van een paneel bijhoudt.  
- Hoe je met **props** en **children** een flexibele, herbruikbare component maakt.  
- Hoe je een “one-at-a-time” open-logica implementeert: als je een ander paneel opent, sluit het eerder geopende paneel automatisch.  
- Het verschil tussen het declaratief renderen van componentstaten in React versus handmatige DOM-manipulatie in vanilla JS.


 Functionaliteiten

1. Toggle per paneel 
   - Klik op een paneelkop om dat paneel te openen of te sluiten.

2. Exclusief openen
   - Open je een nieuw paneel, dan sluit het eerder geopende paneel automatisch.

3. Herbruikbaarheid  
   - De component accepteert een lijst van items via props en rendert voor elk item een paneel met een titel en inhoud (children).



### 📸 Screenshot

![Accordion Screenshot](https://github.com/AlinaAMG/React-practicing/blob/accordion/img/accordion.jpg))

