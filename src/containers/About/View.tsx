import React from 'react'
import { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { MessageView } from '../../components'
import style from './style'
import { PacmanIndicator } from 'react-native-indicators'
import { Colors } from '../../config/Constants'
import { Global } from '../../config/Icons'
import { hp } from '../../config/Utils'
export default class About extends Component <AboutProps> {

    constructor(props: AboutProps) {
        super(props)
    }

    componentDidMount() {
        this.props.getAppInfo()
    }

    handleURL = (url: string) => {
        Linking.canOpenURL(url).then((supported: boolean) => {
          if (supported) {
            Linking.openURL(url)
          } else {
            alert(`Problem opening link: ${url}`)
          }
        })
    }
    render() {
        const { about: { version, author = {} }, loading, error, getAppInfo} = this.props
        return (
            <View style={style.container}>
                {loading ?
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={loading} size={hp('10%')}/>
                    </View> :
                    error ?
                    <MessageView icon={Global.error} text={'Something went wrong'}
                        title={'Oops!'} action={getAppInfo} buttonText={'Try Again'}/> :
                    <View>
                        <View style={style.header}>
                            <Image source={require('../../assets/about-icon.png')} style={style.logo}/>
                            <Text style={style.headerTitle}>Tomahawk</Text>
                            <Text style={style.headerSubtitle}>Version {version}</Text>
                        </View>
                        <View style={style.authorPanel}>
                            <Text style={style.headerAuthor}>Author:</Text>
                            <Text style={style.lineInfo}>{author.name} (@{author.login})</Text>
                            <Text style={style.lineBio}>{author.bio}</Text>
                            {
                                author.blog ?
                                <TouchableOpacity onPress={() => {this.handleURL(author.blog)}}>
                                    <Text style={style.lineLink}>{author.blog}</Text>
                                </TouchableOpacity> : undefined
                            }
                        </View>
                    </View>
                }
            </View>
        )
    }
}
