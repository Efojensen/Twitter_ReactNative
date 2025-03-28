import { withLayoutContext } from "expo-router";
import { Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator)

export const unstable_settings = {
    initialRouteName: '(tabs)'
}

function CustomDrawerContent(props: any){
    return (
        <DrawerContentScrollView {...props}>
            <Text style = {{alignSelf: 'center', fontSize: 20 }}>Twitter</Text>
            <DrawerItemList{...props} />
        </DrawerContentScrollView>
    )
}
export default function DrawerLayout(){
    return(
        <Drawer drawerContent = {(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name = '(tabs)' options = {{headerShown: false, title: 'Home'}} />
            <Drawer.Screen name = 'bookmarks' options = {{title: 'Bookmarks'}} />
            <Drawer.Screen name = 'twitter-blue' options = {{title: 'Twitter Blue'}} />
        </Drawer>
    )
}