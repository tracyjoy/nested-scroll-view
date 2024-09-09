import { GridView, Image, NestedScrollBody, NestedScrollHeader, ScrollView, Swiper, SwiperItem, View } from "@tarojs/components"

import "./demo.scss"

const tabList: any = [{
    id: 'question',
    name: '问题',
  }, {
    id: 'blog',
    name: '文章',
  }, {
    id: 'others',
    name: '其他',
  }]
const colors = ['#dff0d8', '#f5f5f5', '#d9edf7', '#fcf8e3', '#f2dede']
for (let i = 0; i < 3; i++) {
    let list: any = []
    for (let j = 0; j < 30; j++) {
        list.push({
        id: `id-${i}-${j}`,
        name: `item-${j}`,
        height: (Math.floor(Math.random() * 4) + 1) * 100,
        color: colors[j % 5],
        })
    }
    (tabList[i] as any).list = list
}

export default () => {


    const scrollHandle = (e: any) =>{
        console.log(e.detail.scrollTop)
    }


    return (
        <ScrollView
            className="scroll-area"
            type="nested"
            scroll-y
            scroll-with-animation
            scroll-top={0}
            onScroll={scrollHandle}
        >
            <NestedScrollHeader>
                <View className="header">
                    <View className="profile">
                        <Image className="head-img" src={""}></Image>
                        <View className="profile-info">
                            <View className="name">微信用户</View>
                            <View className="number">tel：1234567890</View>
                            <View className="ip">IP属地：广东</View>
                        </View>
                    </View>
                </View>
                <View className="desc">
                    <View>无情搬砖工</View>
                    <View>野生画手/程序猿</View>
                    <View>徒步/足球/篮球/乒乓球/羽毛球/游戏</View>
                </View>
                <View className="tag-list">
                    <View className="tag">武装直升机</View>
                    <View className="tag">琶洲</View>
                </View>
            </NestedScrollHeader>
            <NestedScrollBody>
            <View className="swiper-cnt">
            <ScrollView 
                className="swiper-list" 
                type="custom" 
                scroll-y 
                associative-container="nested-scroll-view" 
                scroll-with-animation>
                <GridView type="masonry" cross-axis-count="4" cross-axis-gap="8" main-axis-gap="4">
                {
                    tabList[0].list.map(item => {
                        return (
                            <View id={item.id} key={item.id} className="item" style={{height: item.height, backgroundColor: item.color}}>
                                <View className="inner">{item.name}</View>
                            </View>
                        )
                    })
                }
                
                </GridView>
            </ScrollView>
            </View>
            </NestedScrollBody>

        </ScrollView>
    )
}