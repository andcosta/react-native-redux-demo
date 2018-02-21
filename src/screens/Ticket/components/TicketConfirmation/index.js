import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Animation from 'lottie-react-native';
import GlobalStyle from '../../../../global/Styles';
import Button from '../../../../components/Button';
import Styles from './index.styles';
import anim from './assets/check_success.json';

export default class TouchId extends Component {
  constructor() {
    super();
    this.button = '';
  }

  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.backgroundView}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View>
              <Animation
                ref={animation => {
                  this.animation = animation;
                }}
                style={{
                  width: 100,
                  height: 100
                }}
                loop={false}
                source={anim}
              />
            </View>
            <Text style={Styles.textConfirm}>PAGAMENTO REALIZADO COM SUCESSO : )</Text>
          </View>

          <View style={{ paddingBottom: 25, paddingLeft: 25, paddingRight: 25 }}>
            <Button
              title="Voltar"
              fontTitle={{ fontFamily: 'Geomanist-Medium', fontSize: 15 }}
              titleColor={GlobalStyle.navigationBackgroundColor}
              backgroundColor={'transparent'}
              borderColor={GlobalStyle.navigationBackgroundColor}
              borderWidth={1}
              onPress={this.props.onBack}
            />
          </View>
        </View>
      </View>
    );
  }
}

// export default (TicketConfirmation = props => {
//   return (
//     <View style={Styles.container}>
//       <View style={Styles.backgroundView}>
//         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//           <View>
//             <Animation
//               ref={animation => {
//                 this.animation = animation;
//                 this.animation.play();
//               }}
//               style={{
//                 width: 100,
//                 height: 100
//               }}
//               loop={false}
//               source={anim}
//             />
//           </View>
//           <Text style={Styles.textConfirm}>PAGAMENTO REALIZADO COM SUCESSO : )</Text>
//         </View>

//         <View style={{ paddingBottom: 25, paddingLeft: 25, paddingRight: 25 }}>
//           <Button
//             title="Voltar"
//             fontTitle={{ fontFamily: 'Geomanist-Medium', fontSize: 15 }}
//             titleColor={GlobalStyle.navigationBackgroundColor}
//             backgroundColor={'transparent'}
//             borderColor={GlobalStyle.navigationBackgroundColor}
//             borderWidth={1}
//             onPress={props.onBack}
//           />
//         </View>
//       </View>
//     </View>
//   );
// });
