import React from 'react'
import { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import style from './style'
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
        const { about: { version, author = {} } } = this.props
        return (
            <View style={style.container}>
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
        )
    }
}
