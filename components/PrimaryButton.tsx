// /* Type=Button, Type 2=Primary, Type 3=Rounded, Style=Default, State=Active, Theme=Default, Component=Button */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 18px 16px;
// gap: 10px;

// position: absolute;
// width: 343px;
// height: 56px;
// left: calc(50% - 343px/2);
// bottom: 68px;

// /* Blue/A */
// background: #0286FF;
// box-shadow: 4px 5px 24px rgba(16, 16, 16, 0.1);
// border-radius: 100px;

// create a react native component

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import { fonts } from '@/constants/font'

type PrimaryButtonProps = {
    onPress: () => void
    title: string
    }

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(18),
        width: moderateScale(343),
        height: moderateScale(56),
        backgroundColor: '#0286FF',
        borderRadius: moderateScale(100),
        shadowColor: '#101010',
        shadowOffset: { width: moderateScale(4), height: moderateScale(5) },
        shadowOpacity: 0.1,
        shadowRadius: moderateScale(24)
    },
    buttonText: {
        color: '#fff',
        fontSize: moderateScale(16),
        fontFamily: fonts['PlusJakartaSans-Bold']
    }
})