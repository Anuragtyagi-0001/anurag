import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Fetch Countries & Flags
export const fetchAllCountries = createAsyncThunk('currency/fetchAllCountries', async () => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=currencies,flags,name,cca2');
  const data = await response.json();
  
  const formattedData = data
    .filter(country => country.currencies)
    .map(country => {
      const currencyCode = Object.keys(country.currencies)[0];
      return {
        code: currencyCode,
        name: country.name.common,
        flag: country.cca2.toLowerCase(),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return formattedData.filter((v, i, a) => a.findIndex(t => t.code === v.code) === i);
});

// 2. Fetch Exchange Rates
export const fetchRates = createAsyncThunk('currency/fetchRates', async (base) => {
  const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${base}`);
  const data = await response.json();
  return data.rates;
});

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    amount: 1,
    fromCurrency: 'USD',
    toCurrency: 'INR',
    countries: [],
    rates: {}, // MUST BE AN OBJECT {}
    status: 'idle', 
    taxRate: 0.02, 
  },
  reducers: {
    setAmount: (state, action) => { state.amount = action.payload; },
    setFromCurrency: (state, action) => { state.fromCurrency = action.payload; },
    setToCurrency: (state, action) => { state.toCurrency = action.payload; },
    swapCurrencies: (state) => {
      const temp = state.fromCurrency;
      state.fromCurrency = state.toCurrency;
      state.toCurrency = temp;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(fetchRates.pending, (state) => {
        state.status = 'loading'; // Set loading while fetching
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rates = action.payload;
      })
      .addCase(fetchRates.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setAmount, setFromCurrency, setToCurrency, swapCurrencies } = currencySlice.actions;
export default currencySlice.reducer;