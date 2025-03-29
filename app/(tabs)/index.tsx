import { StyleSheet, Text } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import { Button, ButtonText } from '@/components/ui/button';
import '../../global.css'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text className='text-red-700 ' >Tab One</Text>
      <Button>
        <ButtonText>Button</ButtonText>
      </Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
