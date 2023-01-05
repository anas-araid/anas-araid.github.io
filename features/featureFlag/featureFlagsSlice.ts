import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeatureFlagState {
  isAboutPageActive: boolean;
  isResumePageActive: boolean;
  isPostPageActive: boolean;
  isLinkPageActive: boolean;
  isLoading: boolean;
}

const initialState: FeatureFlagState = {
  isAboutPageActive: false,
  isResumePageActive: false,
  isPostPageActive: false,
  isLinkPageActive: false,
  isLoading: true,
};

export const featureFlagSlice = createSlice({
  name: 'featureFlag',
  initialState,
  reducers: {
    setActivePages: (state, action: PayloadAction<FeatureFlagState>) => ({
      ...state,
      ...action.payload,
    }),
    setIsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
});

export const { setIsLoading, setActivePages } = featureFlagSlice.actions;

export default featureFlagSlice.reducer;
