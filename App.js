import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert , Image, TouchableHighlight} from 'react-native';
import { Constants } from 'expo';


export default class App extends Component {
  handleImagePress = () => {
    Alert.alert(
      'Button pressed!',
      'ayylmao',
      );
  };

  render() {
    return (
      <View style={styles.container}>

      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://2.bp.blogspot.com/-2SNriqmxd9E/VlW1VCq_h2I/AAAAAAAAAlo/SAGQp9_J-Dw/s1600/1.png'}}
      alt='1'
      />
      </TouchableHighlight>

      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://www.emblibrary.com/EL/product_images/w3960.jpg'}}
      alt='2'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/d5/52/69/d55269cf0fc7eaf68d26114af586a244--math-numbers--three.jpg'}}
      alt='3'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://previews.123rf.com/images/koya79/koya791503/koya79150300177/37170755-christmas-candy-cane-3d-font-number-4-Stock-Photo.jpg'}}
      alt='4'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://www.emblibrary.com/EL/product_images/w4178.jpg'}}
      alt='5'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://www.emblibrary.com/EL/product_images/w3964.jpg'}}
      alt='6'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyd24L1g4kZkeScIOihcQMDMivHUUYamM9aQAk7VLGZbZr_IX'}}
      alt='7'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/4c/15/81/4c15818037119c1e50b994a227751323.png'}}
      alt='8'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://previews.123rf.com/images/nytumbleweeds/nytumbleweeds0808/nytumbleweeds080800050/3425072-White-snowflakes-on-red-with-gold-number-9-isolated-on-white-Stock-Photo.jpg'}}
      alt='9'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://rlv.zcache.com/red_sports_jerzee_number_10_metal_ornament-r8f90a1acfa094e318f820158e35c5249_x7s2s_8byvr_324.jpg'}}
      alt='10'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://4.bp.blogspot.com/-fisGhO-ycOs/WEsyXkBPr7I/AAAAAAAAD5A/0TeTWX1LiVM-NSCexNE6qnyxqg-nKW5fACLcB/s320/volleyball_player_number_11_snowflake_snowflake_pewter_christmas_ornament-r0d32e89adfa641da815b5a6eecac4547_idxcc_8byvr_324.jpg'}}
      alt='11'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://www.knoxre.com/uploads/agent-1/blog%20xmas%20number%2012.jpg'}}
      alt='12'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://rlv.zcache.com/orange_sports_jerzee_number_13_png_ceramic_ornament-r5f265e9f476f450ca204700dcd1b0c4f_x7s2y_8byvr_324.jpg'}}
      alt='13'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://mnbernardbooks.files.wordpress.com/2015/11/advent14.png?w=240'}}
      alt='14'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://www.littlestuff.co.uk/blog/wp-content/uploads/2013/11/15.jpg'}}
      alt='15'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://rlv.zcache.com/baseball_player_number_16_ornament-reb1bd80d12564a41ae23b5901ad3f5d5_x7s2y_8byvr_324.jpg'}}
      alt='16'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://jsoliman.files.wordpress.com/2014/12/number-17-best-christmas-movies.png'}}
      alt='17'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://rlv.zcache.co.uk/number_18_billiards_ball_round_ceramic_decoration-r6aa94e9739c940a3988a0731c42dc7d8_x7s2y_8byvr_324.jpg'}}
      alt='18'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://media.gettyimages.com/vectors/number-nineteen-vector-id510862912?s=170667a&w=1007'}}
      alt='19'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://www.spreadshirt.co.uk/image-server/v1/designs/15830201,width=178,height=178/number-20-comic-design.png'}}
      alt='20'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://ursuletinazdravani.files.wordpress.com/2016/12/6a00e553c619b08833012876107c9f970c-320wi.jpg'}}
      alt='21'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://www.littlestuff.co.uk/blog/wp-content/uploads/2013/11/22.jpg'}}
      alt='22'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/62/08/37/62083762e3d5ceb1fe4800c8110d3702---followers-lucky-number.jpg'}}
      alt='23'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://ris.fashion.telegraph.co.uk/RichImageService.svc/imagecontent/1/TMG9761528/m/slide_24_2092059a.jpg'}}
      alt='24'
      />
      </TouchableHighlight>


      <TouchableHighlight onPress={this.handleImagePress} style={styles.numbers}> 
      <Image style={styles.images}
      source={{uri: 'http://berwickbootcamps.com.au/wp-content/uploads/2013/11/Christmas-card-3.jpg'}}
      alt='25'
      />
      </TouchableHighlight>


      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'lightgreen',
    borderWidth: 3,
    borderColor: 'darkred',
    margin: 'auto' 
  },
  numbers: {
    alignItems: 'center',
    height: '20%',
    width: '20%',
    borderWidth: 2,
    borderColor: 'darkred'
  },
  images: {
    height: '100%' ,
    width: '100%',
    resizeMode: "contain"
  }

});
