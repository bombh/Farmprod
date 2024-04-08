import { View, Text } from "react-native"
import React from "react"
import { Image } from "expo-image"

const placeholder = require("@/src/assets/images/placeholder.png")

// Delete HTML tags
const deleteHtmlTag = (html, tag) => {
   return html
      .replace(new RegExp(`<${tag}.+?>`, "gmi"), "")
      .replace(new RegExp(`</${tag}>`, "gmi"), "")
}

// Delete HTML attributes
const deleteHtmlAttribute = (html, attr) => {
   return html.replace(new RegExp(` ${attr}=".+?"`, "gmi"), "")
}

// Clean HTML
const cleanHtml = (html) => {
   //html = html.replace(/<figure.+?>/gim, "").replace(/<\/figure>/gim, "")
   html = deleteHtmlTag(html, "figure")
   html = deleteHtmlTag(html, "figcaption")
   html = deleteHtmlTag(html, "div")
   html = deleteHtmlTag(html, "iframe")

   html = html.replace(/ alt/gim, "")

   html = deleteHtmlAttribute(html, "class")
   html = deleteHtmlAttribute(html, "srcset")
   html = deleteHtmlAttribute(html, "loading")
   html = deleteHtmlAttribute(html, "width")
   html = deleteHtmlAttribute(html, "height")
   html = deleteHtmlAttribute(html, "sizes")

   // Replace image size
   html = html.replace(/images\//gim, "images/size/w600/")

   // delete any empty tags
   html = html.replace(/<(\w+)>\s*<\/\1>/gim, "")

   // Transfer string to array
   html = html.replace(/></gim, ">,<")
   html = html.split(",")

   return html
}

export default function RenderHtml({ html }) {
   const htmlArray = cleanHtml(html)
   console.log("RenderHtml", htmlArray[0])
   let content = ""

   // htmlArray.map((item) => {
   //    console.log("RenderHtml", item)
   // }

   return (
      <View className="px-5">
         {htmlArray.map((item, index) => {
            switch (item.substring(0, 3)) {
               case "<p>":
                  content = item.replace(/<p>/, "").replace(/<\/p>/, "")
                  return (
                     <Text className="text-base px-5 py-2 mb-5" key={index}>
                        {content}
                     </Text>
                  )
                  break
               case "<h2":
                  content = item.replace(/<h2.+?>/, "").replace(/<\/h2>/, "")
                  return (
                     <View className="bg-black px-5 py-3" key={index}>
                        <Text className="text-lg text-white text-center">
                           {content}
                        </Text>
                     </View>
                  )
                  break
               case "<im":
                  return (
                     <View className="w-full">
                        <Image
                           className="w-full aspect-square mb-3"
                           source={{ uri: item.substring(10, item.length - 2) }}
                           placeholder={placeholder}
                           placeholderContentFit="cover"
                           transition={500}
                        />
                     </View>
                  )
                  break
               default:
                  return null
            }
         })}
      </View>
   )
}
