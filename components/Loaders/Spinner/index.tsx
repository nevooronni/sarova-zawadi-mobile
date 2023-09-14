
// import Lottie from 'lottie-react-native'
import Spinner from 'react-native-loading-spinner-overlay';

export default function SpinnerLoader({ isLoading, color }: { isLoading: boolean, color: string; }) {
  if(!isLoading) return null;
  return (
    // <Lottie 
    //   source={require('../../../animations/animation_spinner_one.json')}
    //   loop
    //   autoPlay={isLoading}
    //   style={{ 
    //     width: 60, 
    //     height: 60,
    //     alignSelf: 'center', 
    //     zIndex: 1,
    //     position: 'absolute', 
    //     top: 155, 
    //     left: 80,
    //   }}
    //   // onAnimationFinish={() => {
    //   //   setShowAnimation(false)
    //   // }}
    // /> 
    <Spinner
      visible={true}
      color={color}
    />
  )
}