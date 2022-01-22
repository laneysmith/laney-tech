import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    secondaryTextColor: string;
    linkColor: string;
    gridBackgroundColor: string;
    cellColor: string;
    borderColor: string;
    accentColor1: string;
    accentColor2: string;
    accentColor3: string;
    accentColor4: string;
    accentColor5: string;
  }
}