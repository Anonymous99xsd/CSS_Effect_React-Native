import React from 'react';
import {View, Button} from 'react-native';

export default function EffectContainer({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Button
        title="卡片展开效果"
        onPress={() =>
          navigation.navigate('CardExpansion', {title: 'Card Expansion'})
        }></Button>
    </View>
  );
}
