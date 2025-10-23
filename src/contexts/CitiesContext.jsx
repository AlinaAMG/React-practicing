import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from 'react';

const BASE_URL = import.meta.env.PROD
  ? 'https://worldwiseproject-uixg.onrender.com'
  : 'http://localhost:5000';

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true, error: '' };

    case 'cities/loaded':
      return { ...state, isLoading: false, cities: action.payload, error: '' };

    case 'city/loaded':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
        error: '',
      };

    case 'city/created':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        error: '',
      };

    case 'city/deleted':
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== +action.payload),
        currentCity: {},
        error: '',
      };

    case 'rejected':
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error('Unknown action type');
  }
}

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, currentCity, isLoading, error } = state;

  // Fetch all cities on mount
  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: 'loading' });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch (err) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading cities...',
        });
      }
    }
    fetchCities();
  }, []);

  // Get a single city by id
  const getCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;
      dispatch({ type: 'loading' });

      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: 'city/loaded', payload: data });
      } catch (err) {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading the city...',
        });
      }
    },
    [currentCity.id]
  );

  // Create a new city
  const createCity = useCallback(async (newCity) => {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCity),
      });
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: 'city/created', payload: data });
      } else {
        dispatch({
          type: 'rejected',
          payload: data.error || 'Error creating city',
        });
      }
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating the city...',
      });
    }
  }, []);

  // Delete a city
  const deleteCity = useCallback(async (id) => {
    dispatch({ type: 'loading' });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`, { method: 'DELETE' });
      if (res.ok) {
        dispatch({ type: 'city/deleted', payload: id });
      } else {
        const data = await res.json();
        dispatch({
          type: 'rejected',
          payload: data.error || 'Error deleting city',
        });
      }
    } catch (err) {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting the city...',
      });
    }
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        currentCity,
        isLoading,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error('useCities must be used within a CitiesProvider');
  return context;
}

export { CitiesProvider, useCities };
