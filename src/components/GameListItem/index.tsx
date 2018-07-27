
import React from 'react'
import { TouchableHighlight, View, Text, Image } from 'react-native'
import { Colors } from '../../config/Constants'
import { gameImage, hp } from '../../config/Utils'
import style from './style'
import { GAME_PLACEHOLDER } from '../../config/Constants'
import StarRating from 'react-native-star-rating'
export default ({game, onPress}: GameListItemProps) => {
    return (<TouchableHighlight style={style.item} underlayColor={Colors.black_20} onPress={onPress}>
        <View style={style.container}>
            <Image
            source={{uri: game.cover ? gameImage(game.cover.cloudinary_id, 'screenshot_med') : GAME_PLACEHOLDER }}
            style={style.image}/>
            <View style={style.titleContainer}>
                <Text style={style.title}>{game.name}</Text>
                {game.total_rating ?
                <View style={style.rating}>
                    <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={(game.total_rating / 20)}
                    selectedStar={() => {}}
                    starSize={hp('3%')}
                    reversed={true}
                    fullStarColor={Colors.white_90}
                    emptyStarColor={Colors.grey_50}
                    />
                  </View> : undefined}
            </View>
        </View>
    </TouchableHighlight>)
}
