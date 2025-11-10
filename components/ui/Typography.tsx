// components/AppText.tsx
import { Text, TextProps } from 'react-native';

// components/Typography.tsx
export function Title(props: TextProps) {
  return (
          <Text 
            style={{ fontFamily: 'Sans-serif', fontSize: 20 }}
            className={props.className}
            >{props.children}
          </Text>
        );
}

export function Body(props: TextProps) {
  return  (
          <Text 
            style={{ fontFamily: 'Sans-serif', fontSize: 16 }}
            className={props.className}
            >{props.children}
          </Text>
        );
}

