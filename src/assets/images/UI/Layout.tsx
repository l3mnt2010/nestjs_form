import React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {useDeviceContext} from 'twrnc';
import {tabBarHeight} from '../../navigation/TabsNavigation/CustomTabBar';
import tw from '../../utils/tailwind';

interface IProps extends ScrollViewProps {
  /**
   * If true, the layout will be wrapped in a ScrollView, default is false
   */
  scroll?: boolean;
  /**
   * If true, the layout will add a bottom padding to avoid the tab bar, default is false
   */
  isRoot?: boolean;
  /**
   * Use SafeAreaView edges, default is ['bottom'], if screen not have header use ['top', 'bottom']
   */
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}

const defaultStyle = tw`flex-col flex-1 w-full px-4`;
const Layout = (props: IProps) => {
  const {
    scroll = false,
    isRoot = false,
    children,
    style,
    edges = ['bottom'],
  } = props;
  const LayoutView = scroll ? ScrollView : View;
  useDeviceContext(tw);

  return (
    <SafeAreaView edges={edges} style={tw`flex-1`}>
      <LayoutView {...props} style={[defaultStyle, style]}>
        {children}
        {isRoot && <View style={{height: tabBarHeight}} />}
      </LayoutView>
    </SafeAreaView>
  );
};

export default Layout;
