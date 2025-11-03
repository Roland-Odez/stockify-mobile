import React, { createContext, useContext } from 'react';
import { SharedValue, useSharedValue } from 'react-native-reanimated';

interface MenuAnimationContextType {
  menuOpen: SharedValue<number>;
}

const MenuAnimationContext = createContext<MenuAnimationContextType | null>(null);

export const MenuAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  // Shared value (0 = closed, 1 = open)
  const menuOpen = useSharedValue(0);

  return (
    <MenuAnimationContext.Provider value={{ menuOpen }}>
      {children}
    </MenuAnimationContext.Provider>
  );
};

export const useMenuAnimation = () => {
  const context = useContext(MenuAnimationContext);
  if (!context) throw new Error('useAnimation must be used within an MenuAnimationProvider');
  return context;
};
