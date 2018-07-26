
import React from 'react'
import { TouchableHighlight, View, Text, Image } from 'react-native'
import { Colors } from '../../config/Constants'
import { gameImage, dateFormat } from '../../config/Utils'
import style from './style'
import { GAME_PLACEHOLDER } from '../../config/Constants'
export default ({game, onPress}: GameListItemProps) => {
    return (<TouchableHighlight style={style.item} underlayColor={Colors.black_20} onPress={onPress}>
        <View style={style.container}>
            <Image
            source={{uri: game.cover ? gameImage(game.cover.cloudinary_id, 'screenshot_med') : GAME_PLACEHOLDER }}
            style={style.image}/>
            <View style={style.dateContainer}>
                <Text style={style.date}>{dateFormat(game.first_release_date)}</Text>
               {
                   /* <Text style={style.author}>{game.total_rating}</Text>  */
               }
            </View>
            <View style={style.titleContainer}>
                <Text style={style.title}>{game.name}</Text>
            </View>
        </View>
    </TouchableHighlight>)
}
