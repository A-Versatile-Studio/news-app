// import { Text, View, BackHandler, Image } from "react-native";
// import WebView from "react-native-webview";
// import * as Network from "expo-network";
// import { useEffect, useRef, useState } from "react";
// import Fontisto from "@expo/vector-icons/Fontisto";

// export default function Index() {
//   const [isConnected, setIsConnected]: any = useState(null);
//   const [splash, setSplash] = useState<boolean>(true);
//   useEffect(() => {
//     const checkNetwork = async function () {
//       const networkstatus = await Network.getNetworkStateAsync();
//       setIsConnected(networkstatus.isConnected);
//       // console.log(networkstatus.isConnected);
//     };

//     checkNetwork();
//   }, []);
//   const webViewRef:any = useRef(null);
//   const [canGoBack, setCanGoBack] = useState(false);

//   useEffect(() => {
//     const backAction = () => {
//       if (canGoBack && webViewRef.current) {
//         // window.
//         webViewRef.current.reload();
//         webViewRef.current.goBack();
//         return true;
//       }
//       return false;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction
//     );

//     return () => backHandler.remove(); // Cleanup on component unmount
//   }, [canGoBack]);

//   useEffect(() => {
//     setTimeout(() => {
//       setSplash(false);
//     }, 2000);
//   }, [])
//   return (
//     <View style={{ flex: 2, paddingTop: "10%", backgroundColor: "white" }}>
//       {
//       splash ? <View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: "black", flexDirection: 'column'}}>
//         <Image source={require('@/assets/images/splashscreen.png')} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
//       </View> :
//       isConnected ? (
//         <WebView 
//         ref={webViewRef}
//         source={{ uri: "https://rtpldigital.com/products" }}
//         onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
//         />
//       ) : (
//         <View
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100%",
//             flexDirection: "column",
//           }}
//         >
//           <Fontisto name="broken-link" size={45} color="black" />
//           <Text style={{ marginTop: "5%", fontSize: 23 }}>
//             You're <Text style={{ color: "red" }}>not</Text> connected to the
//             internet.
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

import { Text, View, BackHandler, Image } from "react-native";
import WebView from "react-native-webview";
import * as Network from "expo-network";
import { useEffect, useRef, useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";

export default function Index() {
  const [isConnected, setIsConnected]: any = useState(null);
  const [splash, setSplash] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkNetwork = async () => {
      const networkstatus = await Network.getNetworkStateAsync();
      setIsConnected(networkstatus.isConnected);
    };
    checkNetwork();
  }, []);

  const webViewRef: any = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  const baseDomain = "rd-infosphere.netlify.app";

  return (
    <View style={{ flex: 2, paddingTop: "10%", backgroundColor: "white" }}>
      {splash ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image source={require('@/assets/images/splashscreen.png')} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
        </View>
      ) : isConnected ? (
        <WebView
          ref={webViewRef}
          source={{ uri: "https://rd-infosphere.netlify.app/" }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
          onShouldStartLoadWithRequest={(request) => {
            const url = request.url;
            if (!url.includes(baseDomain)) {
              router.push({
                pathname: "/custom-webview",
                params: { url },
              });
              return false;
            }
            return true;
          }}
        />
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Fontisto name="broken-link" size={45} color="black" />
          <Text style={{ marginTop: "5%", fontSize: 23 }}>
            You're <Text style={{ color: "red" }}>not</Text> connected to the internet.
          </Text>
        </View>
      )}
    </View>
  );
}
