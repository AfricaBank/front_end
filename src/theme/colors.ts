// theme/colors.ts
import { theme, ChakraTheme } from '@chakra-ui/react';

interface ColorShades {
  [opacity: number]: string;
}

interface ExtendedChakraTheme extends ChakraTheme {
  colors: {
    primary: {
      doggerBlue: ColorShades;
      darkGrey: ColorShades;
    };
    secondary: {
      royalBlue: ColorShades;
      green: ColorShades;
      lightGreen: ColorShades;
      lightGrey: ColorShades;
    };
    state: {
      red: ColorShades;
      orange: ColorShades;
      green: ColorShades;
    };
  };
}

const colors: ExtendedChakraTheme['colors'] = {
  ...theme.colors,
  primary: {
    doggerBlue: {
        0: '#2563EB',
      50: '#2563EB10',
      100: '#2563EB20',
      200: '#2563EB30',
      300: '#2563EB40',
      400: '#2563EB50',
      500: '#2563EB60',
      600: '#2563EB70',
      700: '#2563EB80',
      800: '#2563EB90',
      900: '#2563EB',
    },
    darkGrey: {
        0: '#6E7C7C',
      50: '#6E7C7C10',
      100: '#6E7C7C20',
      200: '#6E7C7C30',
      300: '#6E7C7C40',
      400: '#6E7C7C50',
      500: '#6E7C7C60',
      600: '#6E7C7C70',
      700: '#6E7C7C80',
      800: '#6E7C7C90',
      900: '#6E7C7C',
    },
  },
  secondary: {
    royalBlue: {
        0: '#00008B',
      50: '#00008B10',
      100: '#00008B20',
      200: '#00008B30',
      300: '#00008B40',
      400: '#00008B50',
      500: '#00008B60',
      600: '#00008B70',
      700: '#00008B80',
      800: '#00008B90',
      900: '#00008B',
    },
    green: {
        0: '#00A887',
      50: '#00A88710',
      100: '#00A88720',
      200: '#00A88730',
      300: '#00A88740',
      400: '#00A88750',
      500: '#00A88760',
      600: '#00A88770',
      700: '#00A88780',
      800: '#00A88790',
      900: '#00A887',
    },
    lightGreen: {
        0: '#81C7BC',
      50: '#81C7BC10',
      100: '#81C7BC20',
      200: '#81C7BC30',
      300: '#81C7BC40',
      400: '#81C7BC50',
      500: '#81C7BC60',
      600: '#81C7BC70',
      700: '#81C7BC80',
      800: '#81C7BC90',
      900: '#81C7BC',
    },
    lightGrey: {
        0: '#C2C7CA',
      50: '#C2C7CA10',
      100: '#C2C7CA20',
      200: '#C2C7CA30',
      300: '#C2C7CA40',
      400: '#C2C7CA50',
      500: '#C2C7CA60',
      600: '#C2C7CA70',
      700: '#C2C7CA80',
      800: '#C2C7CA90',
      900: '#C2C7CA',
    },
  },
  state: {
    red: {
        0: '#EE312E',
      50: '#EE312E10',
      100: '#EE312E20',
      200: '#EE312E30',
      300: '#EE312E40',
      400: '#EE312E50',
      500: '#EE312E60',
      600: '#EE312E70',
      700: '#EE312E80',
      800: '#EE312E90',
      900: '#EE312E',
    },
    orange: {
        0: '#F4772C',
      50: '#F4772C10',
      100: '#F4772C20',
      200: '#F4772C30',
      300: '#F4772C40',
      400: '#F4772C50',
      500: '#F4772C60',
      600: '#F4772C70',
      700: '#F4772C80',
      800: '#F4772C90',
      900: '#F4772C',
    },
    green: {
        0: '#62BB46',
      50: '#62BB4610',
      100: '#62BB4620',
      200: '#62BB4630',
      300: '#62BB4640',
      400: '#62BB4650',
      500: '#62BB4660',
      600: '#62BB4670',
      700: '#62BB4680',
      800: '#62BB4690',
      900: '#62BB46',
    },
  },
};

export default colors;
