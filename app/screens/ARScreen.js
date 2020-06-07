import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Button,
  Thumbnail,
  Left,
  Right,
  List,
  ListItem,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function ARScreen(props) {
  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>RecreArt</Title>
        </Body>
        <Right>
          <Icon name="md-brush" />
        </Right>
      </Header>
      <LinearGradient
        colors={["#6A9ECF", "#9FC0DF", "#c4ddf5"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "https://images.homedepot-static.com/productImages/948ecbdf-23bc-4359-a4bc-04f9307f9d08/svn/roof-zone-specialty-hand-tools-13871-64_1000.jpg",
                  }}
                />
              </Left>
              <Body>
                <Text>Pitch Fork</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://console.echoar.xyz/samples/webar-chrome/round-scene-4702_1591504929803/index_round-scene-4702_1591504929803.html"
                    )
                  }
                >
                  <Text>Use</Text>
                </Button>
              </Right>
            </ListItem>








            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "https://pics.knifecenter.com/fit-in/1500x1500/knifecenter/kbar/images/9406.jpg",
                  }}
                />
              </Left>
              <Body>
                <Text>Cane</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://console.echoar.xyz/samples/webar-chrome/odd-sunset-9621_1591515993946/index_odd-sunset-9621_1591515993946.html"
                    )
                  }
                >
                  <Text>Use</Text>
                </Button>
              </Right>
            </ListItem>





            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/13/a9/2f/13a92f4f1a3b60e16da555b33d65ecb1.jpg",
                  }}
                />
              </Left>
              <Body>
                <Text>Clam</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://console.echoar.xyz/samples/webar-chrome/empty-shadow-4270_1591516772030/index_empty-shadow-4270_1591516772030.html"
                    )
                  }
                >
                  <Text>Use</Text>
                </Button>
              </Right>
            </ListItem>





            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUTEhAQFhUVGBkVFxcVFxYVFRUVFxgXFxUSFhUaHyggGBonHRMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUvLS0rLSsrLy0tLS0tLSstLS0tLS0uLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABgQFBwMCAf/EAE8QAAEDAgAGCBIHBwQDAQAAAAEAAgMEEQUHEiExcQYzNWFyc7GzExYiMjRBUVN0gZGSobLBw9HSFFJUk6LT8CMlQlWDwuEVFySCQ7TxY//EABkBAAMBAQEAAAAAAAAAAAAAAAACBAMFAf/EAC8RAAIBAwIEBQQDAAMBAAAAAAABAgMEETEyEhRBUSEzcYHwE2GhsWLB0SJS4UL/2gAMAwEAAhEDEQA/ANxQAIA51E7I2l73Na1oJc5xAa0DSSTmAQC8RWfjAo72Y2eRv12tAadWW4E67WU0rqEXjU3VvJlxgfZDTVWaN9ngXLHDJfbugaHDfBK0p1oT0Yk6UoalqtTMEACAPL3hoJJAAFyTmAA0kntBAC3Ns3pAbMEsg+sxoyTqLiLjfAse6pZXdOP39CiNtN/Yn4J2R01S7Ia4tec4Y8ZLiBpydIdqBNlpTrwqeC1EnRnDxZbrYyBAAgD4SgBbqNm1I12Szokts2VGAWX3nOIyhvtuFNO6px+/obxt5v7EvBeyemqHBgc5jzobIA0u3mkEgnevfeTU7iE/Bank6E4LL0LpbmIIAEACAF2t2Z0kbixpfKQbExgFoPcyiQD4rqedzCHhr6G0becvHQ7YO2V0szgy7o3ONmiQAZR7gcCRfuAm5RTuac3jR/cJ0JxWS8VBiCABAAgCgwjsvpIXmMF0j2mzhGAQ09wuJDb90AkjuLCpcQh4fo2hQnLxCh2X0sjg1xfGSbDogAaSdAygSB47XXkLqnJ409T2VvOKzqX6oMAQAIAEAUeFtlVLTOLC5z3jSyMBxbvOJIaDvXusalxCHg9TWFGUvEg0uz6ic4Nk6JDc2DpQAy++9pIbrdYLyFzCX29T2VCSGoFbmIIAEACABAGT408MOmqm0TT+yia2SUD+OQ52NcO40ZLrd128FHc1HtRVQh4cRUwCw8V1Ayk91DnRkSRuLXsOU1w0gj9aO2iLaeUNjKwzW8AYSFVTxTgAZbbkDQHDqXtGpwI8S7FOXFFM5k48MmiwTiggDOsZuF3OljomkhpaJZbfxAkiNh3uocSOCo7ubS4UV20P/plDTi1t9c5lR6q2HJu0kOHVNcMxa4Z2uB7RXieHlDrsaTsSwuayljldbLztfb67CWuNu0Da+ohdqlPjgmcurDgm0XC0MwQAg40MMOHQqNht0UF8ttPQwbBmpxvfeZbQSpLqbUeFdSq2hl8T6CzStAH60LmsrOlVFlN3+0RmIIzgg9ogpR4mg7CMMuq6UOebyRuMUh7rm2IdrLXNPjXZoT44Js5teHBPCL9bGIIASsZ2GnwxR08bi19QXAkaREy2WAe0SXtGouU9zNxjhdSi3hxSy+gmUrA0NAGbQNVj8Fyi0kzxBzSCEo0WPGwDDD6mnc2QkyQO6G4nS5tgWPO/Y2v2y0lde2qOcPE59xBRn4dRnVBgCAFPGPht9LTBkRIknd0MOGYtbYl7xv2Fge0XA9pYXE+GHgbUIcUvEQqGEMAAGjMFyWXslStDhkkXuD5MwI9KVjRHDF1hd0sckEji59OQATpMTr5Fz2yMlw1ALq2lRyhh9CG6goyyuo3qomBAC/s4wy6kpS5htJIREw9xzgSXaw1riN8BY158EMrU1ow4pYZmtNHZvdPbPbJ7ZJXJOgyPXRhzTcf/ABMhRuxR4ae5stHI4noFnRE5z0J1xkamkC284DtLpW88xwR144eTRFQYAgAQAIAwvZduvW64uYhUFzuL6WxfOrOrT1J8Y9ijNFqe609T4j+vSvBkaHiy3Oi4U3PSLq2/lr3/AGQXHmP50GlbmIIAx/Z2f3q/iouRy513uL7bYc2nrdf9rlGbI7VRswnePIUoyGzFV2G/j5ORq69r5aILrzByVBOCAMkxkn96s8Fj52oUN50LrbZ7/wCEWmOfxN9qgZuSX9alGQxYptpqfCDzUa6tpsIrvevQelUSggDL8a3ZdJxcnrxqK76Flroyoj/h1/Fc8pJLj6QfQW/FKMi8xV7ZW8KL3q6VltZJd6o0JWkYIAzXG/tlFrm9ypLvaiq11ZRQnRr9hXNKyQ7rhwXcrEoyLfFl2XV8XH6z10LLqS3eiNIV5ECAEPG4f2FPx3u3qW72r1/plNrufoKkXWrmlbIk56jyJjzqWGKrdSXwZ/Owq211J6+02JWkgIAEACAMK2Xbr1uuLmIVBc7i+lsXzqzrHo8Y5QVGanut0f8AV3sXh6jRMWW50XCm56RdW38te/7ILjzH86DStzEEAY9s83VfxcX9y513uL7bYcxpZr/tcozZHWY3yhvD05SUdDbip7Dfx8nI1de18tHPufMHNUE4IAyPGZuo3wWPnahQ3eqL7XZ7/wCEenGfxD2qBmx1YepPCd6xSsZDJil2mp8IPNRrq2mwiu969B7VRKCAMvxrdl0nFyevGorvoWWujKiPQ3X7CueUkiTSNRHIfYlGRe4q9sreFF71dKy2sku9UaErSMEAZrjf22h1z+5Ul3oiu11Yv0+hms+q5c4rJ1u3vEeW3wSHqLPFgf8Al1fAj9eRdCy6+xLd6I0lXkQIAQ8bu0U/He7epbvavX+mU2u5+gowHN4geX4LmljI9SLNt+tKYUsMVO6kvgz+dhVtrqYXG02JWkYIAEACAMK2Xbr1uuLmIVBc7i+jsXzqzvANOv2BRs0Ptbo8TuQLwZGiYstzouFNz0i6tv5a9/2QXHmP50GlbmIIAyDZ0P3q/iouRy513uL7bYcmDrdf9pUbNj2/+LWB+G/tSsdDdip7Dfx8nI1de18tHPufMHNUE4IAyLGZuo3wSPnahQ3eqL7bZ7/4cYTmHiUDNjrKLMPjPKUoyGPFJtNTx/uol1bTZ7kV3vXoPaqJQQBl+Nbsyk4uT141Fd9Cy10ZUUou1v67vxXPZSSJv4df9rkoyL3FXtlbwoverpWW1kl3qjQlaRggDNcb+20Ouf3Kku9EV2urKCAdbrPIVziondopBkWOK/sur4DPXkXQsuvsS3eiNKV5ECAEPG3tNPx/u3qS72r1/plNrufoKMPb1DlcucWM41ej9dwpkKTsVO6kvgz+dhVtrqYXG02JWkYIAEACAMK2Xbr1uuLmIVBc7i+lsXzqztSuuFGzQ9Vhu07wP69C8GRomLLc6LhTc9Iurb+Wvf8AZBceY/nQaVuYggDINnO6r+Kj5HLnXe4vt9hzpze28o2bHuXQfL6APYlHQ24qew38fJyNXXtfLRz7nzBzVBOCAMjxlD96M8Fj52oUN5qi622e/wDhEjN7DfHoz+xQG53qDdpHdzeXMlGQzYptpqfCDzUa6tpsIrvevQelUSggDL8a3ZdJxcnrxqK76FlroyppDYWXPZSSJO1rv6CPalGReYqtsrdcXvV0rLayS71RoStIwQBmuN/baL+v7lSXe1FdrqyigOdc0qJbnZkrGRZYr+y6vgM9eRdCy6+xLd6I0pXkQIAQ8be00/He7epbvavX+mU2u5+goxHTqHov8VzSxnCsdmsmQpPxVbqS+DP52FW2upPX2mxK0kBAGd/7jTfZI/vD8q5/Ov8A6/n/AMLuTXf8HaHZ7O4X+ix/eH5Uc8/+v5/8POUXf8CVhqifU1U1TcMMpackG+TkMbHmdmv1l/GsKlfjecG8aXCksnBuDpReznHJGU638Lc+c5946O4iEJVE3FaHkpRg0mySMFSuHXtsd8rHjRoNWxzDM9FTtgEUTw0vOUXuaTlvc/Rkn61vEqad5wR4cE9Sgpyzks+nCo+zQ/eO+RPz/wDH8icqu/4DpwqPs0P3jvkRz/8AH8hyq7/gUcP001XUuqCGMLmtbkgk2yb572HdWFW4+o84N6cFBYK/6DMHZIJcbF1mk5gLXOc74XlODqbUNKpGHiztFSSvbcOaQd8rJ4TNOIYdjGE56GIxCKJ93ukuXlvXWzWyT3FTTu+CPDgmqUVOWclv04VH2aH7x3yLTn/4/kz5Vd/wHThUfZofvHfIjn/4/kOVXf8AAp7JYZq2pFQQxhETYskOLh1L3vyr2HfPQsKtz9Tob04KCwVzqCYODQcpx0AE9wk6bdoFLTi6jxEaU4xWWdYaWV4zOHcIJN76CCPKkkuF4Y6msZRe7Fa+egZIxscT+iSdEuXltupa23Wm/W+lb0rr6axgwq0lUecl304VH2aH7x3yLXn/AOP5MuVXf8B04VH2aH7x3yI5/wDj+Q5Vd/wLOyozV8kcjmxx9Da5tg4uvlEG97C3WrGrc/U6GtKmoZ8SofQTNIGVcuNgATcnx6j5EkF9R4iaSkorLOsFLM64vYg2IJNwRmI9CSceF4Y0ZprKLjYtUzUBlLWRv6LkaXFuTkZW8b3yvQtqNz9NYwY1aaqY8Rg6cKj7ND9475Ftz/8AH8mXKrv+A6cKj7ND9475Ec//AB/Icqu/4FzZbLNhB0JcyOPoOXazi7Ky8jeFrZHpWVW6+osYNaVJQ6lI7B8wcGg5TjoDSe1nOmwGhZ04uo8RNJTjFZZ2p6WZwuHDuZyQQRpCzkuF4Y6ksZRa7GZZqGSSQMjf0RrW2Li22SXG97G/XLajcfSz4ZMasFUwMfThUfZofvHfIt+f/j+THlV3/AdOFR9mh+8d8iOf/j+Q5Vd/wUeyuunwgyNjo448h+XcPLr9SW260fWWVW6+osYNKVJQeci5Pg6Vjbl4tvE8ixi8vCNm1jJxkwXNctc4tcNIOnPoOYrSadN4khYOM1lFhsUEmD6h1QA2QujMWSSWjO5jsq9j9T0pqdxwPODydHjWMjM/GHMDb6JHm/8A1Pyrbnn/ANfz/wCGXJrv+D4MYs32SP7w/KjnX/1/P/gcmu5V/wC3eEu+Ufny/lo5N9z3m49jrHsCwm0WElF58v5aOSfcObj2YpYWqammqJad4iL4i0OLS7JOWxrxYkA6HjtLGdDgeGaxqKSyRxXzu7TBcWNnPFx3HADONa8i3FNJg1GWqJAwlVAZuhec74JOGI4x4CwDhKshbPHJShri4APfIHdQ4sN7MI0tK3ha8ceJMwnXjB4aJ/SXhbvtF58v5abkn3F5qHYOkvC3faLz5fy0ck+4c1DsLOGnVtJO6CR0Jc1rXEtc8ts69tLQb5u4salFQeGbQmprKRBNXUuN7xg2IuHvBsdIuBozBeRlwbWNKClqjsypqgLDoIHcDnfBZ/8AEfhLvY/gbCVbGZY5KYNDyyz3yA3ba5zMObOqKdrxxymT1K0YPDRZ9JeFu+0Xny/lp+SfcTmodg6S8Ld9ovPl/LRyT7hzUOwt4fFdRTiCR0BcY2y3Y55bkuc9oGdoN7xntdxZVKCp6m1OamspEA1lS4g3juNBDngjUQN8pIvgeYsZxUlho6RVFU0dT0EDhP8Aglbi3ljKJc7HcF4RrmvfE+maI39DOW6QEnJa64sw5rOC3p231FlGNSrGm8NFt0l4W77RefL+Wn5J9zPmodg6S8Ld9ovPl/LRyT7hzUOxQbI4K+hkjjldA4yNc4ZDnkANIBvdo+sFnUt/p6mtOqp6Iq3VtS61+h3GcEOeCD3QQMyzjiLyh3FNYaOkVRVDQYu6eqfcnTcm2c50smm8sZRwsIttjtBhCuMgifTt6Fk5WW6QXy8q1rNP1StqVv8AUWUZVKip6ouekvC3faLz5fy1pyT7mXNQ7B0l4W77RefL+Wjkn3Dmodij2S0lfQGISvp3dFy8nIdIbZGTe92j64WdS24NTSnVjPRFO6tqXEG8dxoIc8EaiBvpIvgeYs0cVJYaOsNRVAWb0EDhP+CRuLeWMolnsfpK+tfJHG+nBja1xy3SAEOJAtZp+qVrSoKpoZVaip6ovOkvC3faLz5fy1ryT7mXNQ7B0l4W77RefL+Wjkn3Dmodip2R4MwjQMY+V9M4PdkDIdITfJLrm7Bm6lZ1Lb6ayzSnWjN4SKGWvqXCzuhEcJ3wWSSXijU4uwlOM5yCTpJc9xNswzkJ5f8AN5bFjiKwkWGxttXXzmCLoDXNjMt3ueG5Ic1tszSb3eO0mhQ43hCzrKKyxhdi9wmTcyUfny/lrXk33M+bj2AYvMJd8o/Pl/LRyb7hzcexq66BACAMK2Xj971uuL/14lBc7i+lsXzqz02EZN95SM1TOtXEA06ilPUaLiy3Oi4U3PSLq2/lr3/ZBceY/nQaVuYggDH9nY/er+Ki5HrnXe4vt9hxiiFrqNm+TpOwAW7t0oyY34qew38fJyNXXtfLRz7nzBzVBOCAMkxlD96s8Fj52oUN50LrbZ7/AOESGIFQM3yd3RABKOmMmKXaanwg81GurabCG73r0HtVEoIAy7GwP+XScXJ68aiu+hZa6MqYYgVz2U5O2QM47gB8t/glY6Zf4qR+0rdcXJIulZbWR3eqNCVpGCAM0xwbZRf1/cqS70RXa6sooIgVzWVZJPQgAlGTLfFiLVdVwI/WkXQsupNeaI0hXkIIAQ8bm00/He7epbvavX+mU2u5+goMiBC5pYyNUQgApkLkscVAthSXwZ/Owq221J6+02NWkgIAEACAMK2X7r1uuLmIlBdbi+jsXzqzs0dT4lGaLU6VvWnUeReDI0LFludFwpuekXVt/LXv+yC48x/Og0rcxBAGQbOt1X8VHyPXOu9xfb7DkD1J1exRmx0qxmbrPquSjobcVPYb+Pk5Grr2vlo59z5g5qgnBAGSYyd1WeCx87UKG86F1ts9/wDCPT6AoGbneTQlYyGHFLtNT4QeajXVs9hFd716D2qiUEAZfjX7LpOA/wBeNRXfQstdGVVMf15Vz2UnYjOTvN9Bd8UrGRe4qtsrdcXvV0rLayS71RoStIwQBmuN/bKL+v7lSXe1FdrqyjgNguaVEqQ2aUoyLTFl2XV8CP1nroWXUmu9EaQryEEAIeNvaafjvdvUt3tXr/TKbXc/QU4jmXNLGcKrQUyEJ2KofvSXwV/Owq213fPsY3G359zYVaRggAQAIAwrZfuvW64uYiUF1uL6OxfOrJEOgKNjnysOZ3B+K8HRouLLc6LhTc9Iurb+Wvf9kFx5j+dBpW5iCAMg2dbqv4qPkeudd7i+32HC/UeJRm3Uk1HWpRkNWKnsN/HycjV17Xy0QXPmDmqCcEAZJjJ3VZ4LHztQobzoXW2z3/wj05zKBm50nPWjXyf5SjIZMUu01PhB5qNdWz2EV3vXoPaqJQQBl+Nfsuk4D/XjUV30LLXRlRS6T4vaueyklv0JWMi6xVbZW64verpWW1kl3qjQlaRggDNcb+20X9f3Kku9qK7XVlC09SVzirqSqjrHakgyLbFn2XV8CP1nroWXUmu9EaQryEEAIeNvaafjvdvUt3tXr/TKbXc/QUYTp1D2rmljONVoKZCFhis3Uk8Ffz0Sstd3z7GNxtXzubAriMEACABAGFbLt163XFzEKgudxfS2L51ZJg7SjY54q9DtXsXg6NGxZbnRcKbnpF1bfy17/sguPMfzoNK3MQQBj+zs/vWTio+R6513uL7bYcWDqBqHsUZt1JFR1qUZDXip7Dfx8nI1de18tEFz5g5qgnBAGSYyd1WeCx87UKG86F1ts9/8ItJo8Z5SoGbs7St0HuA+m3+UoyGTFLtNT4QeajXVs9hFd716D2qiUEAZfjX7LpOA/wBeNRXfQstdGVVKFz2UnYu6gHu5PpslYyL3FVtlbri96ulZbWSXeqNCVpGCAM1xvbbRf1/cqS72ortdWUDet8YHpC5xV1JVTtbtRSjIt8WfZdXwI/Wer7LqTXmiNIV5CCAEPG3tNPx3u3qW72r1/plNrufoKEOk6hyuXNLGcant6hypkKWGKzdSTwV3Owqy11MLjabCriMEACABAGFbLt163XFzEKgudxfS2L51Z3g9g9qjZoFWOpdqPIvBkaLiy3Oi4U3PSLq2/lr3/ZBceY/nQaVuYggDHtn26knEx+q9c673F9tsPMQzDxKM2PdWepGv/PsSjIbcVPYb+Pk5Grr2vlogufMHNUE4IAyTGTuqzwWPnahQ3nQuttnv/hFo9HjPrFQM3ZIcbt8aVjIYsUu01PhB5qNdWz2EV3vXoPaqJQQBl+Nfsuk4D/XjUV30LLXRlXT6Fz2Un07U3/pytXj1HWow4qtsrdcXvV0bLayO71RoStIwQBmuN/bKL+vyQqS70RXa6soIdH/Yes1c4qJc/WEeLypBkW2LPsur4EfrPXQsupNd6I0hXkIIAQ8be00/He7epbvavX+mU2u5+gpRDT4vb8VzSxkeq7er2pkL0J+KrdSXwZ/Owq221J7jabErSQEACABAGFbLt163XFzEKgudxfS2L51Z2h0jV8Pio2aLQ91vWnUeReDI0PFludFwpuekXVt/LXv+yC48x/Og0rcxBAGPbPN1JOKi5HLnXe4vttgQaAo2bBVnM3WfVcUo6G7FT2G/j5ORq69r5aOfc+YOaoJwQBkmMndVngsfO1ChvOhdbbPf/CPSjN5eUqBm50aeo8Z5SlYyGTFLtNT4QeajXVs9hFd716D2qiUEAZfjX7LpOA/141Fd9Cy10ZVQ9b5Vzyk6Sj9mNbOUJRkX+KrbK3XF71dKy2sku9UaErSMEAZrjg2yi/r+5Ul3oiu11ZQ0ozHhfBc0qJOkO1jkaUrGRb4suy6vgR+s9dCy6k15ojSFeQggBDxt7TT8d7t6lu9q9f6ZTa7n6CpFoXNLGRart6vamQpPxU7qS+DP52FW22pPX2mxK0kBAAgAQBhWy7det1xcxCoLncX0ti+dWd4dI1H+1Rs0R6rD1J1HkXgyNDxZbnRcKbnpF1bfy17/ALILjzH86DStzEEAZBs63VfxUXI9c673F9vsOdOf14go2bHybP4nH1P8rwdDjip7Dfx8nI1da18tHPufMHNUE4IAyTGTuqzwWPnahQ3nQuttnv8A4cKfQFAzc9R9YNZ5SlY6GXFLtNT4QeajXVs9hDd716D2qiUEAZfjX7LpOA/141Fd9Cy10ZVwaFz2UnaUdSBvj0Z/YlGReYqtsrdcXvV0rLayS71RoStIwQBmuODbKL+v7lSXeiK7XVlHSjN41zWVHdn8fCHqtSsZFviy7Lq+BH6z10LLqTXmiNIV5CCAEPG3tNPx3u3qW72r1/plNrufoKcXWrmljOFVoKZCE3FTupL4M/nYVbbamFfabErSQEACABAGFbLt163XFzEKgudxfS2L51JEI0avgo2aHyp613j9ULwZGi4stzouFNz0i6tv5a9/2QXHmP50GlbmIIAyDZ1uq/io+R6513uL7fYcaPR4zykexRs2Pbxmdwj6oSjob8VPYb+Pk5Grr2vlo59z5g5qgnBAGSYyd1WeCx87UKG86F1ts9/8OFPoCgZufXm0Z3r+1L1GQz4ptpqfCDzUa6tnsIrvevQelUSggDL8a/ZdJwH+vGorvoWWujKqlPoPsB9q57KSS/QlYyLrFVtlbri96ulZbWSXeqNCVpGCAM1xwbZRf1/cqS70RXa6spKfQuayo6g2a475Pk/+JWMi4xZdl1fAj9Z66Fl1JrzRGkK8hBACHjb2mn4/3b1Ld7V6/wBMptdz9BSp+tH67QXNLGRp3dRfugJkK9SyxVt/ech7tM/noVZa7jC42/PubAriMEACABAGFbLt163XFzEKgutxfR2L51JMGgKNjnmfrT/25bLw0RouLLc6LhTc9Iurb+Wvf9nPuPMft+hpW5iCAMg2c7qv4qPkeudd7i+32HKkHUj9dtRs2OswzHf+FvYlHQ2Yqew38fJyNXXtfLRz7nzBzVBOCAMkxk7qs8Fj52oUN50LrbZ7/wCEalNx5fQSoGbnWob1BGv2pRkMuKbaanwg81GurZ7CK73r0HpVEoIAy/Gv2XScB/rxqK76Flroyoo+3r9gXPZSd5j1vj5EoyL7FVtlbri96ulZbWSXeqNCVpGCAM1xwbZRf1/cqS70RXa6so6Q5vGeVc1lTO0rf2bhr9N14Mi4xYn/AJdVxcfrPV9l1JrvRGkK8hBACHjd2in473b1Ld7V6/0ym13P0FOn61c0sZEqBZoGrkTI8LPFYf3nJvUr+eiVlru+fYnuNq+dzYFcRggAQAIAwrZduvW64uYiUFzuL6WxfOp1glGbSpGaJH2d3UH/ALHy3KUdGjYstzouFNz0i6tv5a9/2c+48x+36GlbmIIAyDZzuq/io+R6513uL7fYcYJAAAo2b4O0r7hKMkNmKnsN/HycjV17Xy0c+58wc1QTggDJMZO6rPBY+dqFDedC622e/wDhDpXgC2+eUqBlGCS54ISjJDHil2mp8IPNRrq2mwhu969B7VRKCAMvxr9l0nAf68aiu+hZa6Mp6d4F9fsC57KiQ5wNt5KMkX2KrbK3XF71dKy2sju9UaErSMEAZrjg2yi/r+5Ul3oiu11ZQUrwB4zylc1lZLLwRZKepFpiu7KquLi9Z66Fl1JrvRGlK8hBACFjd2in473b1Ld7V6/0ym13P0FJjwAuaWMi1UgITIUssVO6kvgz+dhVttqT19psStJAQApf7hUf1ajzB8ym5umU8rM9s2eUjs4jqPMb8y85umecrMzLZHHJPX1FTE05EpYW5Vg7qYmMNxfutKmrVoTeUVQptRSZHAmbpA/CsddB8Y1JLoahwtkOsdSTKGwO2w3D8dJSRwyxT5bTITktaR1Uj3Cxyu44K6jc04wSZJVoylNtF306U/eqnzG/MtOcpGfLT+wdOlP3qp8xvzI5ykHLT+xn2ypz6mtdURRyBpYxoygA67b3zX0Z1JXqxnLKKqMHGOGV7pJWdcLeb8VilxaGuUtSQDMRmY7xZPxSeA2UNGwfDTKKndHLFNlGV7+pa0izsm2fKGfMr6FzCEMMjrUZTllDD06U/eqnzG/MtecpGXLT+wdOlP3qp8xvzI5ykHLT+whbNJX1da2oijkDBCyPqgA7KbJK45rnNaRvpU1etCb8CmjBwjhlW50zOuaR5qnS4vBG3gvFneN8zhma474yfikaGyhk2CYWbRRzNlimu+XLGSGnqchjc+cZ7tKtt7iEI4ZJXpOcsoZunSn71U+Y35lvzlIx5af2Dp0p+9VPmN+ZHOUg5af2ErZ3VGtnhkhjlAjY9pygAbuc0i2c/VKnr14TxgooU3DOSjcZmdc0jXkqVLPgjfwXid4pJXDM1x1ZPxStYfiMmi+2C4SFE6oM0Up6L0PJyQD1ofe+cfWCst68KaaZNcU3NrA2dOlP3qp8xvzKjnKRPy0/sHTpT96qfMb8yOcpBy0/sJ2MCt+nOpzDFKOhdFyssBvX9DybWJv1hWFe4hNLBvQpOGci84zM65pGvJUqXF4I38F4skRPmIuGOI3sn4pGh8oudhNd9DmmkmjlIkYxoyQCbtLib5x9YKq2rQp5yT3EHPGBx6dKfvVT5jfmVXOUiblp/YOnSn71U+Y35kc5SDlp/YWNnuFRXRxNhimuyTLOUGgWyHNzZznu4LCvcQnFJG1ClKDbYqPZOBnaQO6clSZRTgjFk7tA5E7/AOPgxcZ0LbYHMaKsfPMx5a6F0fU2LsovjdouM1mFb0a8IPLMqtKUlhD87GBRjMWVHmD5lTzdMw5WZ8/3Bo/q1HmD5kc3TDlZmf8A+g4S+wz/AIPmUXLVOxXzFPud4cFYSaLfQJ/wfMjlanYPr0+5U1uGnQSOilikZIy2U02u3KaHC9j3HA+NI6ElqMqkX4pnEbIuuyQ8B7ch3Ug3bn0dw5ytKcpU00uok4Rm02SGbJi0WEbrDe/ysPpGngW2D5q6ojEsNHK9jrgOGTY5JLXaXdogjxLRW02spGbqQi8Nkj6PhP8Al834PnXvKVOx59Wn3D6PhP8Al834PnRylTsH1afcqsIYcmp5DFNA9kgAcWkC9joOY7xSSoOOo8ZRl4pkPpjdlZbWuBILT1IIsbX0nTmC0pSlSzjAtSnGaSZ7g2QOY0NET7Duj/KxcMvU1wWmDaqsqWZcFJLI0EtuMm2UNIzu3wtI205LKRnKcIvDZK+j4T/l834PnXvKVOwv1afcPo+E/wCXzfg+dHKVOwfVp9yrwlhqemk6FPA+N5aHhpAvkkuAdmcc12uHiSyt5R1HjKMvFMhnZI7Ka9rHBzdHU3GcEG4vvpqWabyjycFNYZ9gw+5gzRvNySSQNJNzoO+s5rik22Oo4SRZ4Lrauqa50FJJIGuyXFuTmdYHJzuHacD400baUllISU4ReGyZ9Hwn/L5vwfOm5Sp2F+rT7h9Hwn/L5vwfOjlKnYPq0+5XYUwtUUrmtnp5I3PBLQ4DOBYEizj3R5UsreUdRozhLRle/ZG4lrgxwc03BtcXzjOL75XtPNOXEj2UVKPCeodkDm3PQ3kuJJNhpJJNgDm0pan/ADlxM9jBJJIscF4RqqrK6BSySZFsrJA6nKvk3u4abHyL2NvKW0WUoR3MnfR8J/y+b8HzpuUqdhfq0+4fR8J/y+b8Hzo5Sp2D6tPuV+FcJ1NJkCoppI8u+RlAdVk2yrWcdGUPKllbyjqNGcJaMrjskdlNe1jg5ujqbjOCDcX301LNN5QThGawz1T4fc0WEbz2ySBpOc9vfWc1xNtsdRwkkT8GYTqalzmwU0kjmAFwAGYG4BN3DuHyL2NCUtospRjuZYfR8J/y+b8Hzp+UqdhPq0+4fR8J/wAvm/B86OUqdg+rT7kLCldV0rWunpZI2uOS0utndYm2Zx7QPkSytpR1Q0ZwloyrqNkeW2xY/wAQ+JXkYOLTQzSaweJNkpc4ue1xcbXs0AWGjNdaVeKo8sWnGNNYRJwXhKSqkMcEEkjw0vLW2uGggF2cjtuA8aSNCUtBnUitWTJMCYSJJ+gz/g+ZPytTsLzFPueRgLCX2Gf8HzI5ap2DmKfc21dY5YIAwbZzROdhWsdkPsTHYgGx/wCPGMxt3VFcZ4vAtpY4V87lXDg131JPIfgpnnsbJokf6e6x6iTyH4JcPsPlGuYsYizB0TSCOqm05jnmkK6VDP01k59fzH86DStjEEAY1jFo3PwnI7JeR0KMXAJGh29vqC6zxF1vjgKGPBp+pJ5D8FK1LsUpok/6cbdbJ5D8EmJdh8o0fFTCWUbwQ4ft5NIsdDV1bby0c253jmtycEAZBjSpHPwk05LyPosYuASL9Fn7dtOdRXWcrBbbY4Pn2FtmDT9WTyH4KNp9ilNEkYONutk8h+CTEuxplD/ijgLIKkEOF6i+cW/8UY9i6drng8Tn3W9eg9qklBAGW43KYvqqUhrjaOTQCR1zNObeUl1nCwV2uPETWYNP1JPIfgonxditNEpuDjbrZPIfgs8S7DpodcUlMWOq7hwuYdIt2pNC6NpnheSG7xlGiqskBAGZ446YyPo7NcbdH60Xtmi0qW6zhYKrbGWI4wa76knkPwUOJdizKJMeDTbrZPJ/hZtS7Dpob8VNMWVNSS1wvHHpFh1z9HlV9nnxyR3ePA0xWkQIAQsb1OZIKcAONpr9SL/+N/xU11nhWO5TbbmZscGut1knkPwUGH2LMojzYOd9STzT8E6T7Ctoa8UlM5mEXkseB9FeLkEC/RojptpVNsnxMnrtcK+dzY1YSAgD/9k=",
                  }}
                />
              </Left>
              <Body>
                <Text>Fence</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://console.echoar.xyz/samples/webar-chrome/young-king-5968_1591516976706/index_young-king-5968_1591516976706.html"
                    )
                  }
                >
                  <Text>Use</Text>
                </Button>
              </Right>
            </ListItem>




            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                    "data:image/jpeg;base64,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"
                  }}
                />
              </Left>
              <Body>
                <Text>Dress</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://console.echoar.xyz/samples/webar-chrome/lucky-unit-0600_1591517044851/index_lucky-unit-0600_1591517044851.html"
                    )
                  }
                >
                  <Text>Use</Text>
                </Button>
              </Right>
            </ListItem>





          </List>
        </Content>
      </LinearGradient>
    </Container>
  );
}
