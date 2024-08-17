import {  Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts } from '@/constants/font'
import { onboarding } from '@/constants'
import { GlobalStyles } from '@/constants/style'
import Swiper from 'react-native-swiper'
import { moderateScale } from 'react-native-size-matters'
import PrimaryButton from '@/components/PrimaryButton'
import { router } from 'expo-router'

const Welcome = () => {

  const [index, setIndex] = useState<number>(0)
  const swipeRef = useRef<Swiper>(null)

  const imageStyleToUse = (item: { id: number }) => {
     
    switch (item.id) {
      case 1:
        return styles.image1
      case 2:
        return styles.image2
      case 3:
        return styles.image3
    }
  }

  const titleStyleToUse = (item: { id: number }) => {

    switch (item.id) {
      case 1:
        return styles.title1
      case 2:
        return styles.title2
      case 3:
        return styles.title3
    }
  }

  const buttonTitleToUse = (index: number) => {
    if (index === 2) {
      return 'Get Started'
    }
    return 'Next'
  }

  const onButtonPress = (index: number) => {
    if (index === 2) {
      console.log('Get Started')
      goToLogin()
    }
    else {
      swipeRef.current?.scrollBy(1)
    }

  }

  const goToLogin = () => {
    router.replace('/(auth)/login')
  }


  

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}>
      <Text onPress={goToLogin} style={styles.skip}>Skip</Text>
  
      <Swiper
      onIndexChanged={(index) => setIndex(index)}
      ref={swipeRef}
      activeDotColor={'#2F74FA'} dotColor='#E2E8F0' loop={false} dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle}>
        {onboarding.map((item, index) => (
          <View key={item.id}>
            <Image
            style={imageStyleToUse(item)}
            source={item.image} />
            <Text style={[GlobalStyles.jakartaBold28
            , titleStyleToUse(item), {textAlign: 'center'}]
            }>{item.title}{item.id === 1 && <Text style={styles.specialWord}>{'Glide'}</Text>}
            </Text>
            <Text style={[GlobalStyles.jakartaRegular17, styles.description, {textAlign: 'center',color:'#858585'}]}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
        <View style={styles.buttonContainer}>
        <PrimaryButton title={buttonTitleToUse(index)} onPress={()=>onButtonPress(index)} />
        </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  skip: {
    fontFamily: fonts['PlusJakartaSans-Bold'],
    color: 'black',
    fontSize: moderateScale(14),
    margin: moderateScale(24),
    textAlign: 'right',
  },
  image1: {
    width: moderateScale(319),
    height: moderateScale(301),
    marginLeft: moderateScale(30),
    marginRight: moderateScale(26),
    marginTop: moderateScale(33),
  },
  image2: {
    width: moderateScale(267),
    height: moderateScale(259),
    marginHorizontal: moderateScale(54),
    marginTop: moderateScale(91),
  },
  image3: {
    width: moderateScale(345),
    height: moderateScale(345),
    marginTop: moderateScale(19),
    marginHorizontal: moderateScale(15),
  },
  title1: {
    marginHorizontal: moderateScale(32),
    marginTop: moderateScale(50),
  },
  title2: {
    marginHorizontal: moderateScale(32),
    marginTop: moderateScale(34),
    paddingHorizontal: moderateScale(23),
  },
  title3: {
    marginHorizontal: moderateScale(32),
    marginTop: moderateScale(20),
  },
  description: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(37),
  },
  specialWord: {
    color: '#0286FF',
  },
  dotStyle: {
    width: moderateScale(32),
    height: moderateScale(4),
    borderRadius: moderateScale(2),
    gap: moderateScale(4),
  },
  activeDotStyle: {
    width: moderateScale(32),
    height: moderateScale(4),
    borderRadius: moderateScale(2),

  },
  buttonContainer: {
    alignItems: 'center',
  },
})