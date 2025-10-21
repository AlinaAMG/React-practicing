

# 🏋️ Workout Timer App

![Screenshot van de Workout Timer App](https://github.com/AlinaAMG/React-practicing/blob/Workout-Timer/public/workoutTimer.jpg)

Een dynamische React-app waarmee je jouw workout-routine kunt samenstellen op basis van het tijdstip van de dag en jouw voorkeuren. Je kunt het aantal sets, snelheid, rusttijd en geluidseffecten aanpassen voor een gepersonaliseerde ervaring.

## 🚀 Functionaliteiten

- ⏰ Live klok met actuele tijd
- 🧠 Dynamisch gegenereerde workout-opties (verschillend voor AM/PM)
- 🔊 Aan/uitzetten van geluidseffecten
- 🔢 Calculator om de totale duur van je workout te berekenen
- ⏲️ Handmatige tijdsaanpassing via “+” en “–” knoppen
- 📱 Responsieve en herbruikbare componenten

## 🔁 Gebruikte React Hooks

In dit project heb je de volgende hooks gebruikt:

| Hook            | Beschrijving |

| `useState`      | Voor het beheren van componentstatus zoals `sets`, `speed`, `allowSound`, `duration`, enz. |
| `useEffect`     | Voor het uitvoeren van side effects zoals het bijwerken van de tijd, aanpassen van de titel en afspelen van geluid |
| `useMemo`       | Voor het optimaliseren van het opnieuw genereren van workout-opties op basis van `AM/PM` |
| `memo`          | Voor het optimaliseren van her-rendering van de `Calculator` component |


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

