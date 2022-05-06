import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeatureFlagState {
  isAboutPageActive: boolean;
  isResumePageActive: boolean;
  isPostPageActive: boolean;
  isLoading: boolean;
}

const initialState: FeatureFlagState = {
  isAboutPageActive: false,
  isResumePageActive: false,
  isPostPageActive: false,
  isLoading: true,
};

export const featureFlagSlice = createSlice({
  name: 'featureFlag',
  initialState,
  reducers: {
    setAboutPageActive: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isAboutPageActive: action.payload,
    }),
    setResumePageActive: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isResumePageActive: action.payload,
    }),
    setPostPageActive: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isPostPageActive: action.payload,
    }),
    setIsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
});

export const { setAboutPageActive, setResumePageActive, setPostPageActive, setIsLoading } = featureFlagSlice.actions;

export default featureFlagSlice.reducer;
