import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import HeaderTwo from '../header/HeaderTwo';
import { reviewStyles as styles } from '../../styles/reviewstyles';
import { useDispatch } from 'react-redux';
import { fetchMyReview } from '../../actions/actions';
export default function Reviews({ route, navigation }) {
  const { restaurant_id } = route.params
  const dispatch=useDispatch()
  useEffect(() => {
    let componentMount = true
    console.log('====================================');
    console.log(restaurant_id);
    console.log('====================================');
    componentMount && dispatch(fetchMyReview(restaurant_id))
  
    return () => {
      
    }
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTwo title="User Feedback" navigation={navigation} />
    </SafeAreaView>
  )
}