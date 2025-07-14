 🍕 Fast React Pizza Co

Fast React Pizza Co is een moderne pizza webapplicatie gebouwd met **React**, **Redux Toolkit**, **React Router** en **Tailwind CSS**. Klanten kunnen pizza’s bekijken, toevoegen aan hun winkelmandje, hun bestelling beheren, hun locatie ophalen via geolocatie, en uiteindelijk hun pizza bestellen – allemaal met een gebruiksvriendelijke en interactieve interface.

## https://fast-reactpizzaapp.netlify.app/

## 🚀 Features

### 🔹 Homepage
- Typ je naam in een invoerveld
- Bij het klikken op "Enter" ga je naar de menupagina
- Je naam wordt getoond in de header

### 🔹 Menu pagina (`/menu`)
- Menu wordt gefetcht van een externe API via `fetch()`
- Elke pizza toont:
  - 📸 Foto
  - 🍕 Naam
  - ✏️ Korte beschrijving
  - 💰 Prijs
  - 🛒 `Add to cart` knop  
- Na toevoegen zie je:
  - ➖ `-` knop om hoeveelheid te verlagen
  - ➕ `+` knop om hoeveelheid te verhogen
  - ❌ `Delete` knop om te verwijderen

### 🔹 Winkelmandje (footer)
- Linkerkant: totaalprijs van de bestelling
- Rechterkant: `Open cart` link om naar het winkelmandje te gaan

### 🔹 Cart pagina (`/cart`)
- Bekijk een overzicht van je bestelling
- Voeg pizza’s toe of verwijder ze
- Knoppen:
  - ✅ `Order pizzas`
  - 🧹 `Clear cart`

### 🔹 Nieuwe bestelling (`/order/new`)
- Formulier om klantgegevens in te vullen
- `Get Position` knop om automatisch je adres op te halen via **Geolocation API**
- Vinkje om je bestelling **priority** te maken (+20% extra kosten)
- `Order now` knop verzendt je bestelling

### 🔹 Order details pagina (`/order/:orderId`)
- Bestellingsgegevens:
  - Gegevens van de klant
  - Bestelde pizza’s
  - Totaalprijs
  - Estimated delivery time
- Klant betaalt bij ontvangst van de pizza

## 🎨 Styling & Responsiveness

- De hele app is gestyled met **Tailwind CSS**
- Volledig **responsive**: werkt op mobiel, tablet en desktop
- Strakke en gebruiksvriendelijke UI


## 🧑‍💻 Gebruikte tools

- React
- React Router
- Redux Toolkit
- fetch() + API integratie
- Geolocation API
- Dynamische UI-interacties (voor cart, buttons, order status)
- Tailwind CSS


## 📸 Screenshots

![Screenshot van de FAST REACT PIZZA CO. App](https://github.com/AlinaAMG/React-practicing/blob/FastReactPizza/public/img/fastpizza-homepage.jpg)

![Screenshot van de FAST REACT PIZZA CO. App](https://github.com/AlinaAMG/React-practicing/blob/FastReactPizza/public/img/menupage.jpg)

![Screenshot van de FAST REACT PIZZA CO. App](https://github.com/AlinaAMG/React-practicing/blob/FastReactPizza/public/img/neworder.jpg)

![Screenshot van de FAST REACT PIZZA CO. App](https://github.com/AlinaAMG/React-practicing/blob/FastReactPizza/public/img/cartpage.jpg)

![Screenshot van de FAST REACT PIZZA CO. App](https://github.com/AlinaAMG/React-practicing/blob/FastReactPizza/public/img/detailsorder.jpg)


