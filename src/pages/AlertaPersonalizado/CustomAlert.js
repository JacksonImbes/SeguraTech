import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

export default function CustomAlert({ visible, message, onClose }) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Alerta</Text>
          <Text>{message}</Text>
          <TouchableOpacity onPress={() => onClose()}>
            <Text style={{ color: 'blue', marginTop: 10 }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
