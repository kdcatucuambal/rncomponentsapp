import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, Button} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const ModalScreen = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modals" />
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{backgroundColor: 'green', padding: 10, borderRadius: 20}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Show modal
        </Text>
      </TouchableOpacity>

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.25, //this is to only ios
              elevation: 19,
            }}>
            <HeaderTitle title="Modal" />
            <Text>Body modal</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
